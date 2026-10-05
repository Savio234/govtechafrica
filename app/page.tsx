import React from "react";
import { HomeView } from "@/views";
import MainLayout from "./(main)/layout";
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
	metadataBase: new URL('https://govtechafrica.com'),
	title: {
		default: 'Govtech Africa | Automating Government Processes',
		template: '%s | Govtech Africa',
	},

	description: `Govtech Africa enables African governments to better serve citizens and businesses by leveraging technology \
		and the digital economy — through custom software, cloud, cybersecurity, data & AI, and IT consulting for the public
		sector.`,
	keywords: [
		'Govtech Africa',
		'Government technology Africa',
		'Digital transformation public sector Africa',
		'African digital governance',
		'Public sector innovation Africa',
		'Smart governance Africa',
		'African government digitisation',
		'Govtech innovation in Africa',
		'Public sector digital solutions Africa',
		'AI in public sector Africa',
		'Digital ID and infrastructure in African governance',
	],
	authors: [{ name: 'Govtech Africa', url: 'https://govtechafrica.com' }],
	creator: 'Govtech Africa',
	publisher: 'Govtech Africa',
	applicationName: 'Govtech Africa',
	category: 'Government Technology',
	alternates: {
		canonical: 'https://govtechafrica.com',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
	openGraph: {
		type: 'website',
		url: 'https://govtechafrica.com',
		siteName: 'Govtech Africa',
		title: 'Govtech Africa | Automating Government Processes',
		description: 'African technology for Government Excellence.',
		locale: 'en_US',
		images: [
			{
				url: 'https://govtechafrica.com/images/opengraph_image.png',
				width: 1200,
				height: 630,
				alt: 'Govtech Africa',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `Govtech Africa | Automating Government Processes`,
		description: `African technology for Government Excellence`,
		images: [
			{
				url: 'https://govtechafrica.com/images/opengraph_image.png',
				width: 1200,
				height: 630,
				alt: 'Govtech Africa',
			}
		],
		site: 'https://x.com/govtech_africa',
	},
	icons: {
		icon: 'https://govtechafrica.com/svgs/favicon.svg',
		shortcut: 'https://govtechafrica.com/svgs/favicon.svg',
		apple: 'https://govtechafrica.com/svgs/favicon.svg',
	},
	// manifest: 'https://govtechafrica.com/site.webmanifest',
	verification: {
		google: "[G-2CVY7FBLX3]",
	},
};

export default function Home() {
	return (
		<React.Fragment>
			<MainLayout>
				<HomeView />
			</MainLayout>
		</React.Fragment>
	);
}
