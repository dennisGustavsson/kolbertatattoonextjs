import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";

import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);
const urlFor = (source: SanityImageSource) => builder.image(source);

type PostPreview = SanityDocument & {
	slug: { current: string };
	title?: string;
	publishedAt?: string;
	image?: { asset?: { _id?: string } };
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image{asset->{_id,url}}}`;

const options = { next: { revalidate: 30 } };
export default async function Page() {
	const posts = await client.fetch<PostPreview[]>(POSTS_QUERY, {}, options);
	return (
		<section className=' flex flex-col items-center pb-16 w-full'>
			<article className='blog-section grid grid-cols-1 w-full'>
				<div className='flex flex-col blog-header'>
					<h1 className='text-center text-7xl font-black text-white mb-7'>
						Kolbertas Blogg
					</h1>
					<p className='text-center text-xl font-semibold text-white max-w-2xl mx-auto mb-5'>
						Ett urval av berättelser, inspiration och senaste nyheter från
						studion. Bläddra bland inlägg, titta på nästan bilder och följ resan
						från idé till färdig tatuering.
					</p>
				</div>
			</article>
			<article className='blog-section grid grid-cols-1 gap-4 px-4 lg:px-10 py-7'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 blog-posts'>
					{posts.map((post) => {
						const imageUrl = post.image?.asset
							? urlFor(post.image).width(600).height(400).url()
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
										<h2 className='text-xl font-semibold'>{post.title}</h2>
										<p className='text-sm text-gray-600'>
											{post.publishedAt
												? new Date(post.publishedAt).toLocaleDateString()
												: ""}
										</p>
									</div>
								</Link>
							</article>
						);
					})}
				</div>
			</article>
		</section>
	);
}
