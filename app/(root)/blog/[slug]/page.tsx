import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";
import Link from "next/link";

import { client } from "@/sanity/client";
import PortableTextRenderer from "@/components/PortableTextRenderer";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
	projectId && dataset
		? imageUrlBuilder({ projectId, dataset }).image(source)
		: null;

const options = { next: { revalidate: 30 } };

type PostPageProps = {
	params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
	const post = await client.fetch<SanityDocument>(
		POST_QUERY,
		await params,
		options
	);
	const imageBuilder = post.image?.asset ? urlFor(post.image) : null;
	const postImageUrl = imageBuilder
		? imageBuilder.width(900).height(900).url()
		: null;

	return (
		<section className='about flex flex-col items-center gap-6 pt-10 pb-16 w-full'>
			<article className='grid grid-cols-1 gap-4 border-rad-theme-2 px-10 py-7 pb-16 w-full max-w-3xl container mt-10'>
				<Link
					href='/blog'
					className='text-sm font-medium text-gray-600 hover:underline'
				>
					← Tillbaka
				</Link>
				{postImageUrl && (
					<Image
						src={postImageUrl}
						alt={post.title ?? "Post image"}
						width={900}
						height={900}
						className='rounded-3xl object-cover'
						priority={false}
						loading='lazy'
						sizes='(min-width: 1024px) 900px, 100vw'
					/>
				)}
				<div className='flex flex-col gap-3'>
					<h1 className='text-4xl font-bold'>{post.title}</h1>
					<p className='text-sm text-gray-500'>
						{post.publishedAt
							? new Date(post.publishedAt).toLocaleDateString()
							: ""}
					</p>
				</div>

				<div>
					<PortableTextRenderer value={post.body} />
				</div>
			</article>
		</section>
	);
}
