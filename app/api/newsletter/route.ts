import { NextResponse } from "next/server";
import { z } from "zod";

// NEWSLETTER SUBSCRIBER ZOD SCHEMA
const subscribeSchema = z.object({
	email: z.email("Ogiltig e-postadress."),
});

export async function POST(request: Request) {
	const API_KEY = process.env.MAILERLITE_API_KEY;
	const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

	if (!API_KEY || !GROUP_ID) {
		console.error("MailerLite env missing:", {
			apiKey: Boolean(API_KEY),
			groupId: Boolean(GROUP_ID),
		});
		return NextResponse.json(
			{ error: "Server configuration error" },
			{ status: 500 }
		);
	}

	try {
		const { email } = subscribeSchema.parse(await request.json());

		const response = await fetch(
			"https://connect.mailerlite.com/api/subscribers",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${API_KEY}`,
				},
				body: JSON.stringify({
					email: email,
					groups: [GROUP_ID],
				}),
			}
		);

		if (!response.ok) {
			const errorData = await response
				.json()
				.catch(() => ({ message: "Prenumeration misslyckades" }));
			const errorMessage = errorData?.message ?? "Prenumeration misslyckades";
			console.error("MailerLite API error", errorData);
			return NextResponse.json(
				{ error: errorMessage },
				{ status: response.status }
			);
		}

		return NextResponse.json({ message: "Success" }, { status: 201 });
	} catch (error) {
		console.error("Newsletter route error", error);
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ error: error.issues[0]?.message ?? "Ogiltig e-postadress." },
				{ status: 400 }
			);
		}
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
