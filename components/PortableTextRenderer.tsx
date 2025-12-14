import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";
import { PortableText, type PortableTextComponents } from "next-sanity";

import { client } from "@/sanity/client";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
	projectId && dataset
		? imageUrlBuilder({ projectId, dataset }).image(source)
		: null;

type PortableTextRendererProps = {
	value: unknown;
};

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => <p className='leading-7'>{children}</p>,
		h2: ({ children }) => (
			<h2 className='mt-8 scroll-m-20 text-2xl font-bold tracking-tight'>
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className='mt-6 scroll-m-20 text-xl font-bold tracking-tight'>
				{children}
			</h3>
		),
		h4: ({ children }) => (
			<h4 className='mt-5 scroll-m-20 text-lg font-semibold tracking-tight'>
				{children}
			</h4>
		),
		blockquote: ({ children }) => (
			<blockquote className='border-l-2 pl-4 italic'>{children}</blockquote>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className='my-4 list-disc pl-6'>{children}</ul>
		),
		number: ({ children }) => (
			<ol className='my-4 list-decimal pl-6'>{children}</ol>
		),
	},
	listItem: {
		bullet: ({ children }) => <li className='my-1'>{children}</li>,
		number: ({ children }) => <li className='my-1'>{children}</li>,
	},
	marks: {
		strong: ({ children }) => (
			<strong className='font-semibold'>{children}</strong>
		),
		em: ({ children }) => <em className='italic'>{children}</em>,
		link: ({ value, children }) => {
			const href = typeof value?.href === "string" ? value.href : "";
			const isExternal = href.startsWith("http");

			if (!href) return <>{children}</>;

			if (isExternal) {
				return (
					<a
						href={href}
						target='_blank'
						rel='noopener noreferrer'
						className='underline'
					>
						{children}
					</a>
				);
			}

			return (
				<Link href={href} className='underline'>
					{children}
				</Link>
			);
		},
	},
	types: {
		image: ({ value }) => {
			const imageBuilder = value?.asset ? urlFor(value) : null;
			const src = imageBuilder ? imageBuilder.width(1200).url() : null;

			if (!src) return null;

			return (
				<figure className='my-6'>
					<Image
						src={src}
						alt={value?.alt ?? ""}
						width={1200}
						height={800}
						className='rounded-3xl object-cover'
						loading='lazy'
						sizes='(min-width: 1024px) 900px, 100vw'
					/>
					{value?.caption ? (
						<figcaption className='mt-2 text-sm opacity-80'>
							{value.caption}
						</figcaption>
					) : null}
				</figure>
			);
		},
	},
};

export default function PortableTextRenderer({
	value,
}: PortableTextRendererProps) {
	if (!Array.isArray(value)) return null;

	return (
		<div className='portabletext flex flex-col gap-4'>
			<PortableText value={value} components={components} />
		</div>
	);
}
