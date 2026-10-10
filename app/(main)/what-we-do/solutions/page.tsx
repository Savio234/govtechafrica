import { SolutionsView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Solutions",
    description: `Explore Govtech Africa's innovative technology solutions designed for the public sector — including
        Fulcrum for project delivery and leadership visibility, and Atlas for geospatial intelligence and asset monitoring.`,
    alternates: {
        canonical: "https://govtechafrica.com/what-we-do/solutions",
    },
    openGraph: {
        title: "Our Solutions",
        description: `Explore Govtech Africa's sovereign technology solutions for the public sector — including Fulcrum and Atlas.`,
        url: "https://govtechafrica.com/what-we-do/solutions",
        siteName: "Govtech Africa",
        type: "website",
        images: [
            {
                url: "https://govtechafrica.com/images/opengraph_image.png",
                width: 1200,
                height: 630,
                alt: "Govtech Africa - Technology Solutions for Public Sector",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Solutions",
        description: `Explore Govtech Africa's sovereign technology solutions for the public sector — including Fulcrum and Atlas.`,
        images: [
            {
                url: "https://govtechafrica.com/images/opengraph_image.png",
                width: 1200,
                height: 630,
                alt: "Govtech Africa - Technology Solutions for Public Sector",
            }
        ],
        site: "https://x.com/govtech_africa",
    },
};

export default function WhatWeDoSolutionsPage() {
    return <SolutionsView />;
}