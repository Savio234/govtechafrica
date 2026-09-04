import { Document } from "@contentful/rich-text-types";
import { MotionValue } from "framer-motion";
export interface NavLinkMenu {
	label: string;
	id?: string;
	href?: string;
	external: boolean;
	icon?: string;
}
export interface NavLinkSub {
	label: string;
	icon?: string;
	href?: string;
	id?: string;
	isHref?: boolean;
	isCookie?: boolean;
	menu?: NavLinkMenu[];
}
export interface NavLink {
	label: string;
	id?: string;
	href?: string;
	external: boolean;
	videoUrl?: string;
	subMenu?: NavLinkSub[];
	title?: string;
	description?: string;
	button?: string;
	icon?: string;
}
export interface GrowthCardProps {
	value: number;
	index: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	progress?: any;
	label: string;
	currency?: string;
	description: string;
	inView?: boolean;
	scrollYProgress: MotionValue<number>;
}
export interface GrowthCardMobileProps {
	value: number;
	index: number;
	label: string;
	currency?: string;
	description: string;
	inView?: boolean;
	scrollYProgress: MotionValue<number>;
}
export interface TechnologyProps {
	id: string;
	href: string;
	title: string;
	image: string;
	description: string;
}
export interface TechnologyCardProps {
	technology: TechnologyProps
	cardType: 'technology' | 'consulting';
	index: number;
	scrollYProgress: MotionValue<number>;
}
export interface CareersProps {
	title: string
	description: string
	href: string
	location: string
	time: string
}
export interface SectionProps {
    title: string
    subtext: string
    top_image: string
    top_image_class?: string
    bottom_image: string
    bottom_image_class?: string
    description: string
    description_class: string
    sec_description?: string
    subtext_class?: string
}
export interface StatisticsProps {
	title: string
	description: string
}
export interface StatisticsArrayProps {
    list: StatisticsProps[]
}
export interface CenterpieceProps {
	text: string
}
export interface CatalogueCardProps {
  image: string
  text: string
}
export interface CatalogueProps {
  btnText?: string
  header?: string
  isHeader: boolean
  spanText?: string
  description?: string
  type: 'full' | 'sm'
  catalogues: CatalogueCardProps[]
}
export interface ServiceCardProps {
  image: string
  title: string
  description: string
  web_direction: 'normal' | 'reverse'
  mob_direction: 'normal' | 'reverse'
}
export interface insightProps {
	title: string
	description: string
	href?: string
	image: string
	bgColor?: string
}
export interface insightCardProps {
	insight: insightProps
	index?: number
}
export interface ImageProps {
	fields: {
		description: string;
		title: string;
		file: {
			contentType: string;
			fileName: string;
			url: string;
			details: {
				size: number;
				image: {
					width: number;
					height: number;
				}
			}
		};
	},
	metadata: {
		concepts: [],
		tags: []
	},
	sys: {
		createdAt: string;
		id: string;
		locale: string;
		publishedVersion: number;
		revision: number;
		type: string;
		updatedAt: string;
		space: {
			sys: {
				id: string;
				linkType: string;
				type: string;
			}
		}
		environment: {
			sys: {
				id: string;
				linkType: string;
				type: string;
			}
		}
	},
	title: string;
}
export interface BlogDetailsProps {
	title: string;
	slug: string;
	type: string;
	readTime?: string;
	thumbnail: ImageProps;
	authors?: string[];
	links: string[];
	role: string[];
	bannerImage: ImageProps;
	date?: string;
	description?: string;
	addedImages?: ImageProps[];
	pdf: {
		fields: {
			description: string;
			title: string;
			file: {
				contentType: string;
				fileName: string;
				url: string;
				details: {
					size: number;
				}
			};
		},
		metadata: {
			concepts: [],
			tags: []
		},
		sys: {
			createdAt: string;
			id: string;
			locale: string;
			publishedVersion: number;
			revision: number;
			type: string;
			updatedAt: string;
			space: {
				sys: {
					id: string;
					linkType: string;
					type: string;
				}
			}
			environment: {
				sys: {
					id: string;
					linkType: string;
					type: string;
				}
			}
		},
	};
	publishedAt: string;
	researchContent: Document;
	tableOfContent?: string[];
	externalUrl?: string;
	downloadText?: string;
}

export interface PrivacyPolicyProps {
	title: string;
	headerText: string;
	subText?: string;
	content: string[];
	postContent?: string;
}
export interface ContentProps {
	title?: string;
	body?: string[];
}
export interface cookiesPolicyDataProps {
	title: string;
	headerText: string;
	subtext?: string;
	content: ContentProps[];
	postContent?: string;
}

export interface valueCardProps {
	title?: string;
	description: string;
	index: number;
	scrollYProgress: MotionValue<number>;
}

export interface DealsAndAnnouncementCardProps {
    date: string;
    tag: string;
    tagType?: "update" | "deadline" | "event" | string;
    title: string;
    description: string;
    slug?: string;
}

export interface dealsAndAnnouncementsProps {
	id: string;
    date: string;
    tag: string;
    tagType: string;
    title: string;
    description: string;
    category: string;
    pinned?: boolean;
    url?: string;
}