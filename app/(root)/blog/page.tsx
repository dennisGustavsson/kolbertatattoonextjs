import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { type SanityImageSource } from "@sanity/image-url";
import { z } from "zod";

import { client } from "@/sanity/client";
import { safeSanityImageUrl } from "@/sanity/image";

type PostPreview = SanityDocument & {
	slug: { current: string };
	title?: string;
	publishedAt?: string;
	image?: { asset?: { _id?: string; url?: string } };
};

const PostPreviewSchema = z.object({
	_id: z.string(),
	slug: z.object({
		current: z.string().min(1),
	}),
	title: z
		.string()
		.optional()
		.nullable()
		.transform((v) => v ?? undefined),
	publishedAt: z
		.string()
		.optional()
		.nullable()
		.transform((v) => v ?? undefined),
	image: z
		.object({
			asset: z
				.object({
					_id: z.string().optional(),
					url: z.string().url().optional(),
				})
				.optional(),
		})
		.optional(),
});

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image{asset->{_id,url}}}`;

const options = { next: { revalidate: 30 } };

async function fetchPostsSafe(): Promise<PostPreview[]> {
	try {
		const data = await client.fetch<unknown>(POSTS_QUERY, {}, options);

		const parsed = z.array(PostPreviewSchema).safeParse(data);
		if (!parsed.success) {
			console.error("Invalid Sanity posts response:", parsed.error.flatten());
			return [];
		}

		return parsed.data as PostPreview[];
	} catch (err) {
		console.error("Failed to fetch posts from Sanity:", err);
		return [];
	}
}

function formatDate(dateString?: string) {
	if (!dateString) return "";
	const d = new Date(dateString);
	if (Number.isNaN(d.getTime())) return "";
	return new Intl.DateTimeFormat("sv-SE", { dateStyle: "medium" }).format(d);
}

export default async function Page() {
	const posts = await fetchPostsSafe();

	return (
		<section className='flex flex-col items-center pb-16 w-full'>
			<article className='blog-section grid grid-cols-1 w-full'>
				<div className='flex flex-col blog-header'>
					<h1 className='text-center text-7xl font-black text-white mb-7'>
						Kolbertas Blogg
					</h1>
					<p className='text-center text-xl font-semibold text-white max-w-2xl mx-auto mb-5'>
						Ett urval av berättelser, inspiration och senaste nyheter från
						studion.
					</p>
				</div>
			</article>

			<article className='blog-section grid grid-cols-1 gap-4 px-4 lg:px-10 py-7 w-full'>
				{posts.length === 0 ? (
					<div className='mx-auto w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-7 shadow-sm'>
						<h2 className='text-xl font-semibold'>Inga inlägg ännu</h2>
						<p className='mt-2 text-gray-600'>
							Det finns inga blogginlägg att visa just nu. Kom gärna tillbaka
							snart.
						</p>
					</div>
				) : (
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 blog-posts'>
						{posts.map((post) => {
							const imageUrl = post.image?.asset
								? safeSanityImageUrl(post.image as SanityImageSource, {
										width: 500,
										height: 500,
										context: `BlogIndex.postCard:${post._id}`,
								  })
								: null;

							return (
								<article
									key={post._id}
									className='flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md'
								>
									<Link
										href={`/blog/${post.slug.current}`}
										className='flex flex-col gap-3'
									>
										{imageUrl && (
											<Image
												src={imageUrl}
												alt={post.title ?? "Post image"}
												width={600}
												height={400}
												className='rounded-2xl object-cover'
												priority={false}
												loading='lazy'
											/>
										)}
										<div className='flex flex-col gap-1'>
											<h2 className='text-xl font-semibold'>
												{post.title ?? "Utan titel"}
											</h2>
											<p className='text-sm text-gray-600'>
												{formatDate(post.publishedAt)}
											</p>
										</div>
									</Link>
								</article>
							);
						})}
					</div>
				)}
			</article>
		</section>
	);
}
