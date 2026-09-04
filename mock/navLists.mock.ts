import { cookiesPolicyDataProps, dealsAndAnnouncementsProps, NavLink, PrivacyPolicyProps, TechnologyProps } from "@/interfaces";

export const navLinks: NavLink[] = [
	// {
	// 	label: "Solutions",
	// 	external: false,
	// 	icon: "/svgs/link-main.svg",
	// 	subMenu: [
	// 		{
	// 			label: "Fulcrum",
	// 			href: "https://fulcrum.govtechafrica.com",
	// 			icon: "/svgs/link-main.svg",
	// 		}
	// 	]
	// },
	{
		label: "what we do",
		href: "what-we-do",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "solutions",
				icon: "/svgs/arrow.svg",
				// href: "https://fulcrum.govtechafrica.com",
				id: "solutions",
				menu: [
					{
						label: "Fulcrum",
						href: "https://fulcrum.govtechafrica.com",
						id: "fulcrum",
						icon: "",
						external: true
					},
					// {
					// 	label: "Cybersecurity",
					// 	href: "/cybersecurity",
					// 	id: "cybersecurity",
					// 	icon: "/svgs/link-user.svg",
					// 	external: false
					// },
					// {
					// 	label: "Cloud Services",
					// 	href: "/cloud-services",
					// 	id: "cloud",
					// 	icon: "/svgs/link-user.svg",
					// 	external: false
					// },
					// {
					// 	label: "Data and AI",
					// 	href: "/data-and-ai",
					// 	id: "data",
					// 	icon: "/svgs/link-ai.svg",
					// 	external: false
					// },
					// {
					// 	label: "Network Infrastructure Design & Implementation",
					// 	href: "/network-infrastructure",
					// 	id: "network",
					// 	icon: "/svgs/link-user.svg",
					// 	external: false
					// },
					// {
					// 	label: "Web3 & Blockchain Technology",
					// 	href: "/web3-and-blockchain",
					// 	id: "web3",
					// 	icon: "/svgs/link-user.svg",
					// 	external: false
					// },
					// {
					// 	label: "IT Support Services (Remote support & Maintenance)",
					// 	href: "/support-services",
					// 	id: "it",
					// 	icon: "/svgs/link-user.svg",
					// 	external: false
					// }
				]
			},
			{
				label: "services",
				icon: "/svgs/arrow.svg",
				// href: "/what-we-do",
				id: "services",
				menu: [
					{
						label: "Technology ",
						href: "/what-we-do#technology",
						id: "technology",
						// icon: "/svgs/link-user.svg",
						external: false
					},
					{
						label: "Consulting ",
						href: "/what-we-do#consulting",
						id: "consulting",
						// icon: "/svgs/link-user.svg",
						external: false
					},
					// {
					// 	label: "Strategy Consulting & Advisory",
					// 	href: "/strategy-consulting-and-advisory",
					// 	id: "strategy",
					// 	icon: "/svgs/link-user.svg",
					// 	external: false
					// },
					// {
					// 	label: "IT infrastructure procument & supply",
					// 	href: "/infrastructure-procurement-and-supply",
					// 	id: "infrastructure",
					// 	icon: "/svgs/link-user.svg",
					// 	external: false
					// },
					// {
					// 	label: "IT compliance & regulatory consulting",
					// 	href: "/compliance-and-regulatory-consulting",
					// 	id: "compliance",
					// 	icon: "/svgs/link-user.svg",
					// 	external: false
					// },
					// {
					// 	label: "capacity building & Trainings",
					// 	href: "/capacity-building-and-trainings",
					// 	id: "capacity",
					// 	icon: "/svgs/link-ai.svg",
					// 	external: false
					// },
					// {
					// 	label: "tech events design & delivery",
					// 	href: "/tech-events",
					// 	id: "tech",
					// 	icon: "/svgs/link-user.svg",
					// 	external: false
					// },
				]
			}
		]
	},
	{
		label: "who we are",
		href: "who-we-are",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			// {
			// 	label: "mission, Vision, values",
			// 	icon: "/svgs/link-main.svg",
			// 	href: "/who-we-are",
			// 	id: "mision"
			// },
			// {
			// 	label: "team",
			// 	icon: "/svgs/link-user.svg",
			// 	href: "/teams",
			// 	id: "team"
			// },
			// {
			// 	label: "partners",
			// 	icon: "/svgs/link-user.svg",
			// 	href: "/partners",
			// 	id: "partners"
			// },
			// {
			// 	label: "projects",
			// 	icon: "/svgs/link-user.svg",
			// 	href: "/who-we-are",
			// 	id: "projects"
			// }
		]
	},
	{
		label: "insights",
		external: false,
		// href: "insights",
		icon: "/svgs/link-main.svg",
		subMenu: [
			// {
			// 	label: "Backgrounders",
			// 	href: "/backgrounders",
			// 	id: "backgrounders",
			// },
			// {
			// 	label: "policy insights",
			// 	href: "/policy-insights",
			// 	id: "policy-insights",
			// },
			// {
			// 	label: "articles",
			// 	href: "/articles",
			// 	id: "articles",
			// },
			// {
			// 	label: "reports",
			// 	href: "/reports",
			// 	id: "reports",
			// },
			{
				label: "research",
				href: "/insights/research",
				id: "research",
			},
			{
				label: "deals and announcements",
				href: "/deals-and-announcements",
				id: "deals-and-announcements",
			},
			{
				label: "interviews",
				href: "/interviews",
				id: "interviews",
			},
		]
	}
];

export const footerNavLink: NavLink[] = [
	{
		label: "footer 1",
		href: "#",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "Manage Cookie Preferences",
				icon: "/svgs/link-main.svg",
				href: "",
				isHref: true,
				isCookie: true,
			},
			{
				label: "Privacy Policy",
				icon: "/svgs/link-user.svg",
				href: "/privacy-policy",
				isHref: true,
			},
			{
				label: "Terms of Use",
				icon: "/svgs/link-ai.svg",
				href: "/terms-of-use",
				isHref: true,
			},
			{
				label: "Site Map",
				icon: "/svgs/link-ai.svg",
				// href: "/site-map",
				href: "",
				isHref: false,
			}
		]
	},
	{
		label: "footer 2",
		href: "#",
		external: false,
		icon: "/svgs/link-main.svg",
		subMenu: [
			{
				label: "Contact Us",
				icon: "/svgs/link-main.svg",
				href: "/contact",
				isHref: true,
			},
			{
				label: "Careers",
				icon: "/svgs/link-user.svg",
				href: "/careers",
				isHref: true,
			},
			{
				label: "About us",
				icon: "/svgs/link-ai.svg",
				href: "/who-we-are",
				isHref: true,
			},
			{
				label: "Capabilities",
				icon: "/svgs/link-ai.svg",
				href: "/what-we-do",
				isHref: true,
			}
		]
	}
];

export const socialMediaLinks = [
	{
		label: "twitter",
		href: "https://x.com/govtech_africa",
		icon: "/svgs/twitter_dark.svg"
	},
	{
		label: "instagram",
		href: "https://www.instagram.com/govtech_africa",
		icon: "/svgs/instagram.svg"
	},
	{
		label: "linkedIn",
		href: "https://www.linkedin.com/company/govtech-africa-inc/",
		icon: "/svgs/linkedin.svg"
	},
	{
		label: "youtube",
		href: "https://www.youtube.com/channel/UCI9pb5Zbgr-q4ozIELvwFFw",
		icon: "/svgs/youtube.svg"
	},
	{
		label: "facebook",
		href: "https://www.facebook.com/share/1ZietUxCgj/?mibextid=wwXIfr",
		icon: "/svgs/facebook.svg"
	},
	{
		label: "tiktok",
		href: "https://www.tiktok.com/@govtech_africa?_r=1&_t=ZS-9510mjLpLyW",
		icon: "/svgs/tiktok.svg"
	},
];

export const posts = [
	{
		title: "Converged Cyber AI: A Paradigm Shift in Cybersecurity",
		description:
			`The advancement of generative AI capabilities presents enormous potential for 
			modernizing government operations but it also introduces new security gaps. While 
			automation allows developers to move from concept to minimum viable product faster 
			than ever, adversaries are developing similar AI-enabled techniques to discover and 
			exploit security vulnerabilities`,
		href: "",
		image: '/images/insight_image_1.jpg',
		bgColor: '#FFFFFF1A',
		tag: 'featured',
	},
	{
		title: "The intersection of AI governance and cybersecurity",
		description:
			"Learn about the impact of generative AI on cybersecurity planning and our proactive approach to AI implementation that focuses on governance and ethical use. You'll also hear about the dual nature of cloud computing, acknowledging its power for data accessibility and defensive capabilities and addressing the challenges of multi-cloud environments.",
		href: "",
		image: '/images/insight_image_2.jpg',
		bgColor: '#13361B',
		tag: 'featured',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/local_solutions.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/local_solutions.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/local_solutions.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/local_solutions.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/local_solutions.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/local_solutions.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/local_solutions.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/local_solutions.png',
		tag: 'insight',
	},
	{
		title: `Reforming the Public Sector in Africa Through Digital Transformation - Lessons from India's Digital Stack`,
		description: `This case study analyzes how India's Digital Public 
        	Infrastructure (DPI) successfully created a unified digital identity and 
        	financial system that serves one of the world's largest populations — 
            offering valuable insights for African governments.`,
		image: '/images/local_solutions.png',
		tag: 'insight',
	},
]

export const privacyPolicyData: PrivacyPolicyProps[] = [
	{
		title: 'Introduction',
		headerText: `Govtech Africa Limited (“Govtech Africa”, “we”, “us” or “our”) is committed to protecting the privacy and
			personal data of individuals who interact with our website, services and business activities. This Privacy
			& Data Protection Policy explains how we collect, use, disclose, retain, transfer and protect personal
			data, and how you may exercise your data protection rights.`,
		subText: `We process personal data in accordance with the Nigeria Data Protection Act 2023 (“NDP Act”), the
            Nigeria Data Protection Act - General Application and Implementation Directive 2025 (“GAID 2025”),
            applicable guidance of the Nigeria Data Protection Commission (“NDPC”), and other applicable laws.`,
		content: []
	},
	{
		title: 'Who We Are',
		headerText: `Govtech Africa Limited is a technology solutions and systems integration company supporting
			governments and public institutions with digital transformation, customised software, cloud services,
			cybersecurity, data and AI, infrastructure, consulting, training and related technology services`,
		subText: `Depending on the service or relationship, Govtech Africa may act as a data controller, where we
			determine why and how personal data is processed, or as a data processor, where we process personal
			data on the documented instructions of a client or other controller.`,
		content: []
	},
	{
		title: 'Who This Policy Applies To',
		headerText: "",
		content: [
			'Visitors to our website',
			'Persons who contact us or submit an enquiry',
			'Prospective and existing clients and their representatives',
			'Government and public-sector stakeholders',
			'Vendors, contractors, advisers and business partners',
			'Job applicants and',
			'Users of Govtech Africa services where Govtech Africa acts as the data controller'
		]
	},
	{
		title: 'Personal Data We May Collect',
		headerText: ``,
		content: [
			'Identity and contact data: name, title, organisation, email address, telephone number and other business contact details',
			'Professional data: employer, role, department, professional interests and information relating to your organisation',
			'Communications: enquiries, correspondence, requests, feedback, complaints and support communications',
			'Recruitment data: CV, qualifications, work history and information you submit in connection with an application.',
			'User Submissions: Feedback, inquiries, or any content provided via forms or communications',
			`Technical and usage data: IP address, browser and device information, timestamps, logs, referral information and website interaction data`,
			`Business relationship data: information reasonably necessary for proposals, procurement, due diligence, contracts, service administration and business relationships.`,
			`Event and subscription data: registration details, attendance information and communication preferences`,
		],
		postContent: `We do not intentionally request sensitive personal data through the general corporate website unless it
			is necessary and lawful for a specific purpose.`
	},
	{
		title: 'How We Collect Personal Data',
		headerText: '',
		content: [
			'Directly from you through our website forms, email, telephone, meetings or other communications',
			'From the organisation you represent',
			'Through website and system logs',
			'From clients, partners or service providers where we are authorised to receive it; and',
			'From public sources where lawful and relevant.',
		]
	},
	{
		title: 'Why We Process Personal Data',
		headerText: ``,
		content: [
			'To respond to enquiries, requests and proposals',
			'To provide, administer, support and improve our services',
			'To establish and manage client, partner and vendor relationships',
			'To communicate with stakeholders and administer events or training',
			'To manage recruitment',
			'To secure our website, systems and services and prevent misuse or fraud',
			'To establish, exercise or defend legal claims, and',
			'Where permitted, to provide requested updates, insights or marketing communications'
		]
	},
	{
		title: 'Lawful Bases for Processing',
		headerText: `Depending on the circumstances, we may rely on consent, performance of or steps connected with a
			contract, compliance with a legal obligation, legitimate interests, public interest, vital interests, or
			another lawful basis recognised by applicable law. Where we rely on consent, you may withdraw it at any time`,
		content: [],
	},
	{
		title: 'Cookies and Similar Technologies',
		headerText: `Our website may use cookies and similar technologies for core operation, security, preferences and,
			where enabled with the required choice, analytics or other optional purposes. Necessary technologies may operate where
			permitted without optional consent. Other tracking technologies are subject to the choices presented through our cookie
			controls. Please see our Cookie Policy and use the Manage Cookies control to change your preferences.`,
		content: [],
		subText: ``
	},
	{
		title: 'Sharing Personal Data',
		headerText: `We may share personal data with authorised employees, professional advisers, hosting and technology
			providers, security providers, contractors, auditors, regulators, courts, law-enforcement authorities,
			business partners and other recipients where the disclosure is necessary and lawful. We do not sell
			personal data`,
		subText: `Where a service provider processes personal data on our behalf, we require appropriate confidentiality,
			security and data protection safeguards.`,
		content: []
	},
	{
		title: 'Processing on Behalf of Clients',
		headerText: `Govtech Africa may process personal data for government institutions, public bodies and enterprise
			clients. Where we act solely as a processor, the relevant client determines the purposes of processing
			and its privacy notice may primarily govern the data. A request relating to client-controlled personal data
			may therefore be referred to the relevant client.`,
		content: []
	},
	{
		title: 'International Data Transfers',
		headerText: `Where personal data is transferred or made accessible outside Nigeria, Govtech Africa will use a lawful
			transfer basis and appropriate safeguards required by applicable data protection law.`,
		content: []
	},
	{
		title: 'Data Retention',
		headerText: `We retain personal data only for as long as reasonably necessary for the purpose for which it was collected and for
			applicable legal, contractual, audit, security and dispute-resolution requirements. When data is no longer required, it will
			be securely deleted, destroyed or anonymised, subject to lawful retention obligations`,
		content: [],
	},
	{
		title: 'Data Security',
		headerText: `We use appropriate technical and organisational measures designed to protect personal data against
			unauthorised access, unlawful processing, accidental loss, alteration, disclosure or destruction. Measures may include access
			controls, authentication, encryption where appropriate, secure configuration, logging, backups, vulnerability management,
			confidentiality controls and incident response. No internet-based system can be guaranteed to be completely secure`,
		content: [],
	},
	{
		title: 'Your Data Protection Rights',
		headerText: ``,
		content: [
			"The right to be informed about processing of your personal data",
			"The right to request access to your personal data",
			"The right to request correction of inaccurate or incomplete data",
			"The right to request erasure where applicable",
			"The right to request restriction of processing where applicable",
			"The right to object to certain processing",
			"The right to withdraw consent where processing is based on consent",
			"The right to data portability where applicable",
			"Rights relating to qualifying automated decision-making and",
			"The right to lodge a complaint with the Nigeria Data Protection Commission",
		],
		postContent: `These rights may be subject to lawful conditions, exemptions and limitations.`
	},
	{
		title: 'Automated Processing and Artificial Intelligence',
		headerText: `Where Govtech Africa uses automated processing or artificial intelligence in a context that may
			significantly affect individuals, we will assess applicable transparency, privacy, fairness, security and
			human-oversight requirements. A service-specific notice may provide additional information where appropriate.`,
		content: [],
	},
	{
		title: 'Children',
		headerText: `Our corporate website is not directed to children. Where a specific Govtech Africa service lawfully processes
			children’s personal data, appropriate legal bases, age-appropriate information and enhanced safeguards will be applied`,
		content: [],
	},
	{
		title: 'Personal Data Breaches',
		headerText: `Govtech Africa maintains measures for identifying, investigating and responding to personal data
			breaches. Where applicable law requires notification to the NDPC or communication to affected
			individuals, we will make the required notification or communication`,
		content: [],
	},
	{
		title: 'Privacy by Design',
		headerText: `We seek to integrate privacy and data protection considerations into relevant systems, services and
			projects from the design stage. Where processing is likely to create high risk to individuals, we will
			conduct an appropriate Data Protection Impact Assessment or other required assessment.`,
		content: [],
	},
	{
		title: 'Third-Party Links',
		headerText: `Our website may contain links to independent third-party websites or services. Govtech Africa does not
			control the privacy practices of those third parties. We encourage you to review their privacy notices
			before providing personal data.`,
		content: [],
	},
	{
		title: 'Data Protection Officer',
		headerText: `Fortune Ikenna Awuzie`,
		content: [
			'Data Protection Officer, Govtech Africa Limited',
			'Telephone: +2349139167076',
			'Email: fortune@govtechafrica.com'
		],
		postContent: `You may contact the Data Protection Officer about privacy enquiries, complaints, withdrawal of consent or requests
			to exercise your data protection rights`
	},
	{
		title: 'Complaints',
		headerText: `If you believe your personal data has been processed contrary to applicable data protection law, you
			may contact our Data Protection Officer. You also have the right, where applicable, to lodge a complaint
			with the Nigeria Data Protection Commission.e`,
		content: [],
	},
	{
		title: 'Changes to This Policy',
		headerText: `We may update this Policy to reflect changes in our services, technology or legal obligations. The
			current version will display the date on which it was last updated.`,
		content: [],
	},
]

export const termsOfUseData: PrivacyPolicyProps[] = [
    {
        title: 'Acceptance of These Terms',
        headerText: `These Terms of Use govern your access to and use of the Govtech Africa website. By using the
			website, you agree to comply with these Terms and applicable laws.`,
        content: []
    },
    {
        title: 'About Govtech Africa',
        headerText: `Govtech Africa Limited provides technology solutions and related services for governments and public
			institutions, including customised software, cloud services, cybersecurity, data and AI, infrastructure,
			technology consulting, capacity building and related services.`,
        content: [
            // 'Use the Site in a manner that could harm, disable, overburden, or impair its functionality.',
            // 'Upload, transmit, or distribute any malicious or harmful content.',
            // 'Attempt to gain unauthorized access to the Site, its servers, or related systems',
            // 'Violate any intellectual property rights or proprietary rights of Govtech Africa or third parties.',
        ]
    },
	{
        title: 'Permitted Use',
        headerText: `You may use this website for lawful informational and business purposes. You must not use the website
			to violate any law or third-party right, interfere with the website or its security, introduce malicious code,
			gain unauthorised access, impersonate another person, or perform unauthorised security testing or
			disruptive automated activity.`,
        content: []
    },
    {
        title: 'Intellectual Property',
        headerText: `Unless otherwise stated, the website, its branding, text, graphics, designs, software interfaces and other
			content are owned by or licensed to Govtech Africa and are protected by applicable intellectual-property
			laws. Access to the website does not transfer ownership or grant a licence beyond the limited right to
			use the website for its intended purpose`,
        content: [
			// `You may not reproduce, distribute, modify, or create derivative works of any content without prior written permission.`,
			// `You may use the content for personal, non-commercial purposes only.`
		]
    },
    {
        title: 'Information You Submit',
        headerText: `Information submitted through the website must be lawful and accurate to the best of your knowledge.
			Do not submit classified, restricted, security-critical or unnecessary sensitive information through a general website
			form unless Govtech Africa expressly provides a secure channel for that purpose`,
        content: [
			// `You are solely responsible for the content you submit and must ensure it does not infringe on the rights of any third party or violate any laws.`
		]
    },
    {
        title: 'Website Information',
        headerText: `Website content is provided for general information and may be updated from time to time. It does not,
			by itself, constitute legal, financial, procurement or other professional advice, and does not create a
			procurement award, partnership, agency or binding service commitment.`,
        content: []
    },
    {
        title: 'Third-Party Links',
        headerText: `The website may link to independent third-party websites or services. Govtech Africa is not responsible for
			third-party content, availability, security or privacy practices, and a link does not necessarily constitute endorsement.`,
        content: [
            // `The accuracy, completeness, or reliability of the Site's content.`,
			// 'The site being free from errors, viruses, or harmful components'
        ]
    },
    {
        title: ' Availability and Security',
        headerText: `We may modify, suspend or restrict parts of the website for maintenance, security or operational
			reasons. While we take reasonable measures to maintain the website, uninterrupted or error-free
			availability cannot be guaranteed`,
        content: [
			// ` Direct, indirect, incidental, or consequential damages arising from your use or inability to use the site`,
			// `Loss of data, profits, or business opportunities resulting from access to the site.`
		]
    },
    {
        title: '  Limitation of Liability',
        headerText: `To the maximum extent permitted by applicable law, Govtech Africa will not be liable for indirect or consequential
			loss arising solely from reliance on general website content or from circumstances outside our reasonable control. Nothing 
			in these Terms excludes liability that cannot lawfully be excluded.`,
        content: []
    },
    {
        title: 'Privacy',
        headerText: `Personal data collected through the website is handled in accordance with our Privacy & Data Protection Policy and 
			Cookie Policy`,
        content: []
    },
    {
        title: 'Governing Law',
        headerText: `These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute will be dealt with in accordance
            with applicable law and any binding agreement between the relevant parties`,
        content: []
    },
	// {
	// 	title: 'Changes to Terms of Use',
	// 	headerText: `Govtech Africa reserves the right to update or modify these Terms of Use at any time 
	// 		without prior notice. The updated version will be posted on this page with the effective date. 
	// 		Your continued use of the Site constitutes acceptance of any changes.`,
	// 	content: []
	// },
	{
		title: 'Contact',
		headerText: `Privacy-related matters should be directed to:`,
		content: [
			`Fortune Ikenna Awuzie, Data Protection Officer`,
			`Telephone: +2349139167076`,
			`Email: fortune@govtechafrica.com`
		]
	},
];

export const cookiesPolicyData: cookiesPolicyDataProps[] = [
    {
        title: 'About This Policy',
        headerText: `This Cookie Policy explains how Govtech Africa Limited uses cookies and similar technologies on its
			website and how you can manage your choices`,
        content: []
    },
    {
        title: 'What Are Cookies?',
        headerText: `Cookies are small data files or similar technologies placed on or accessed through your browser or
			device. They can support website operation, security, preferences and measurement of website use.`,
        content: []
    },
    {
        title: 'Types of Cookies and Technologies We May Use',
        headerText: '',
        content: [
            {
                title: 'Strictly Necessary',
                body: [
                    `Technologies required for core website functions, security, network stability, accessibility or storage of your privacy choices`,
                    // 'They enable core functionalities, such as page navigation and access to secure areas.',
                    // 'Disabling these cookies may impact your ability to use certain parts of the site.',
                ]
            },
            {
                title: 'Preference',
                body: [
                    `Technologies that remember optional settings or choices`,
                    // 'They help us improve the website’s performance and user experience.',
                    // 'All data collected by these cookies is aggregated and anonymous.',
                ]
            },
            {
                title: 'Analytics',
                body: [
                    'Technologies that help us understand how visitors use the website so that we can improve',
                    // 'They enhance personalization and make the Site more user-friendly.'
                ]
            },
            {
                title: 'Marketing or Advertising',
                body: [
                    `Technologies used to measure campaigns or personalise advertising, if Govtech Africa enables such functionality`,
                    // `They track your online activity across the Site and other websites to build a profile of your preferences.`,
					// 'They may also limit how often you see an ad',
                ]
            },
            // {
            //     title: 'Social Media Cookies',
            //     body: [
            //         'These cookies enable you to share content from our site on social media platforms.',
            //         'Social media platforms may use this information, as outlined in their privacy policies.'
            //     ]
            // },
        ]
    },
    {
        title: 'Your Cookie Choices',
        headerText: `Where consent is required, optional cookies or similar tracking technologies will be subject to your
			choice. You can select Accept All, Reject Non-Essential, or Manage Preferences. Strictly necessary
			technologies may remain active where they are required for the website to function or remain secure.`,
        content: [
            {
                title: '',
                body: [
					// `Provide a personalized browsing experience.`,
					// `Enhance security and prevent fraudulent activity.`,
					// `Deliver tailored advertising and content.`,
					// `Monitor and measure the effectiveness of our campaigns. `
                ]
            },
        ],
		postContent: `You can change or withdraw your choices later through the Manage Cookies control on the website.`
    },
    {
        title: 'Third-Party Technologies',
        headerText: `Some website features may be provided by third parties, such as embedded media, maps, analytics,
			security or communications services. Where those technologies are optional and require consent, they
			should operate in accordance with the preference you select. Third-party providers may also process
			information under their own privacy notices`,
        content: [
			// {
			// 	title: 'Cookie Consent Manager',
			// 	body: [
			// 		'When you visit our site, you can manage your cookie preferences using our Cookie Consent Manager',
			// 		' You can choose which types of cookies you want to enable or disable. '
			// 	]
			// },
			// {
			// 	title: 'Browser Settings',
			// 	body: [
			// 		'Most web browsers allow you to control cookies through their settings.',
			// 		'You can delete or block cookies by adjusting your browser preferences.',
			// 		'Note that disabling certain cookies may affect the functionality of the Site'
			// 	]
			// },
			// {
			// 	title: 'Opt-Out Tools',
			// 	body: [
			// 		'For advertising cookies, you can opt out of targeted advertising.',
			// 	]
			// },
		]
    },
    {
        title: 'Changes to This Cookie Policy',
        headerText: `We may update this Cookie Policy when our website technologies, purposes or legal obligations
			change. The current version will show the date of the latest update.`,
        content: [],
    },
    {
        title: 'Contact',
        headerText: `For questions about cookies or your privacy choices, contact:`,
        content: [
			{
				title: "Fortune Ikenna Awuzie",
				body: [
					"Data Protection Officer, Govtech Africa Limited",
					"Telephone: +2349139167076",
					"Email: fortune@govtechafrica.com"
				]
			}
		]
    },
];

export const consulting: TechnologyProps[] = [
	{
		title: "IT Infrastructure Procurement & Supply",
		image: '/svgs/infrastructure.svg',
		description: "We empower African governments with the right infrastructure",
		href: "/infrastructure-procurement-and-supply",
		id: "infrastructure",
	},
	{
		title: "Capacity Building & Trainings",
		image: '/svgs/capacity.svg',
		description:
			"We equip government stakeholders with the skills and tools they need to drive meaningful change and innovation.",
		href: "/capacity-building-and-trainings",
		id: "capacity",
	},
	{
		title: "Tech Events Design and Delivery",
		image: '/svgs/tech.svg',
		description: "We connect Industry stakeholders for brainstorming & knowledge sharing",
		href: "/tech-events",
		id: "tech",
	},
	{
		title: "IT Strategy Consulting & Advisory",
		image: '/svgs/strategy.svg',
		description: "We guide governments toward smarter, more effective tech solutions",
		href: "/strategy-consulting-and-advisory",
		id: "strategy",
	},
	{
		title: "IT Compliance & Regulatory Consulting",
		image: '/svgs/compliance.svg',
		description: "Compliance is key. We ensure government IT systems stay secure, compliant, and future-ready",
		href: "/compliance-and-regulatory-consulting",
		id: "compliance"
	}
];

export const technologies: TechnologyProps[] = [
	{
		title: "Customised Software Solutions",
		description: "We co-create the best solutions tailored to each agency’s need",
		href: "customised-software-solutions",
		image: '/svgs/customized.svg',
		id: "customised",
	},
	{
		title: "Cloud Services",
		description: "Governments require the speed and agility that cloud computing offers. Unleash the potential of the cloud.",
		href: "/cloud-services",
		image: '/svgs/cloud_services.svg',
		id: "cloud",
	},
	{
		title: "Web3 & Blockchain Technology",
		description: "Decentralized solutions for the public sector",
		href: "/web3-and-blockchain",
		image: '/svgs/web3.svg',
		id: "web3",
	},
	{
		title: "Cybersecurity",
		description: "Emerging threats demand revolutionary cyber protection. De-risk tomorrow by boosting cybersecurity today",
		href: "/cybersecurity",
		image: '/svgs/cybersecurity.svg',
		id: "cybersecurity",
	},
	{
		title: "Data and AI",
		description: "Elevating decision-making with secure and intelligent data processing, analytics and operational AI",
		href: "/data-and-ai",
		image: '/svgs/ai.svg',
		id: "data",
	},
	{
		title: "Network Infrastructure Design & Implementation",
		description: "Reliable and scalable networks that support government innovation and connectivity",
		href: "/network-infrastructure",
		image: '/svgs/network.svg',
		id: "network",
	},
	{
		title: "IT Support Services (Remote support & Maintenance)",
		description: "Seamless IT operations with proactive remote support and maintenance",
		href: "/support-services",
		image: '/svgs/it.svg',
		id: "it",
	}
];

export const sections = [
    {
		title: 'Formal Opening',
		speakersList: [
			{
				initials: '/images/TAA.png',
				name: 'Rt. Hon. Tajudeen Abbas',
				role: 'Keynote / Formal Opening',
				position: 'Speaker',
				org: 'House of Representatives',
			},
			{
				initials: '/images/BK.png',
				name: 'Rt. Hon. Benjamin Okezie Kalu',
				role: 'Keynote / Formal Opening',
				position: 'Deputy Speaker',
				org: 'House of Representatives',
			},
			{
				initials: '/images/BT.png',
				name: 'Dr. Bosun Tijani',
				role: 'Keynote / Formal Opening',
				position: 'Hon. Minister',
				org: 'Ministry of Communications, Innovation & Digital Economy',
			},
			{
				initials: '/images/HN.jpeg',
				name: 'Hon. Henry Nwawuba',
				role: 'Keynote / Formal Opening',
				position: 'Executive Secretary',
				org: 'National Assembly Library Trust Fund',
			},
			{
				initials: '/images/FT.jpeg',
				name: 'Fortune Toma',
				role: 'Keynote / Formal Opening',
				position: 'Director for Africa',
				org: 'Govtech Africa Inc.',
			},
			{
				initials: '/images/EG.jpeg',
				name: 'Elsie G. Attafuah',
				role: 'Keynote / Formal Opening',
				position: 'The Resident Rep',
				org: 'United Nations Development Programme',
			},
			{
				initials: '/images/GM.jpeg',
				name: 'Gautier Mignot',
				role: 'Keynote / Formal Opening',
				position: 'Head of the EU Delegation in Nigeria',
				org: 'EU in Nigeria.',
			},
			{
				initials: '/images/SS.jpeg',
				name: 'Sanna Selin',
				role: 'Keynote / Formal Opening',
				position: 'Ambassador',
				org: 'Embassy of Finland in Abuja',
			},
			{
				initials: '/images/MR.jpeg',
				name: 'Moses Rugema',
				role: 'Keynote / Formal Opening',
				position: 'Ambassador',
				org: 'Embassy of Rwanda in Nigeria',
			},
			{
				initials: '/images/KI.jpeg',
				name: 'Kashifu Inuwa Abdullahi, CCIE',
				role: 'Keynote / Formal Opening',
				position: 'Director General/CEO',
				org: 'National Information Technology Development Agency (NITDA)',
			},
			{
				initials: '/images/DI.jpeg',
				name: 'Dr. D. I. Arabi',
				role: 'Keynote / Formal Opening',
				position: 'Director General',
				org: 'Bureau of Public Service Reforms',
			},
		]
    },
    {
		title: 'Panel Discussants',
		speakersList: [
			{
				initials: '/images/DE.png',
				name: 'Mrs. Didi Esther Walson-Jack, OON, mni',
				role: 'panelist',
				position: `The Head of the Civil Service of the Federation`,
				org: 'Office of the Head of the Civil Service of the Federation'
			},
			{
				initials: '/images/KE.png',
				name: 'Kabir Eniola Akanbi, Esq.',
				role: `panelist`,
				position: 'The Chief Registrar',
				org: 'The Supreme Court of Nigeria'
			},
			{
				initials: '/images/AS.png',
				name: 'Hon. Adedeji Stanley Olajide',
				role: `panelist`,
				position: 'Chairman',
				org: 'Committee on Digital and Communications Technology, House of Representatives',
			},
			{
				initials: '/images/AO.png',
				name: 'Dr. Abdulateef O. Shittu',
				role: 'panelist',
				position: 'The Director General',
				org: 'Nigeria Governors Forum(NGF)',
			},
			{
				initials: '/images/ZM.png',
				name: 'Princess Zahrah Mustapha Audu',
				role: 'panelist',
				position: 'The Director General',
				org: 'Presidential Enabling Business Environment Council (PEBEC)',
			},
			{
				initials: '/images/PIA.jpeg',
				name: 'Prof. Ibrahim Adeyanju',
				role: 'panelist',
				position: 'MD/CEO',
				org: 'Galaxy Backbone Ltd',
			},
			{
				initials: '/images/GA.jpeg',
				name: 'Dr. (Mrs.) Gloria Ahmed',
				role: 'panelist',
				position: 'National Coordinator',
				org: 'Open Government Partnership',
			},
			// {
			// 	initials: '/images/EG.jpeg',
			// 	name: 'Elsie G. Attafuah',
			// 	role: 'panelist',
			// 	position: 'The Resident Representative',
			// 	org: 'United Nations Development Programme',
			// },
			{
				initials: '/images/AM.jpeg',
				name: 'Dr. Aminu Maida',
				role: 'panelist',
				position: 'EVC/CEO',
				org: 'Nigerian Communications Commission (NCC)',
			},
			{
				initials: '/images/DA.jpeg',
				name: 'Mr Deremi Atanda',
				role: 'panelist',
				position: 'MD/CEO',
				org: 'Remita Payment Services Limited',
			},
			{
				initials: '/images/UE.jpeg',
				name: 'Umoh Edet',
				role: 'moderator',
				position: 'Head of Government Affairs and Public Policy',
				org: 'Govtech Africa Inc.'
			},
			{
				initials: '/images/SO.jpeg',
				name: 'Dr. Salome Osia',
				role: 'moderator',
				position: 'SA to the Deputy Speaker',
				org: 'House of Representatives',
			},
			{
				initials: '/images/BO.png',
				name: 'Blessing Ajimoti',
				role: 'moderator',
				position: 'Principal Consultant',
				org: 'Public Digital',
			},
		]
    },
    // {
    //   title: 'Anchors / Moderators',
    //   speakersList: [
    //     {
    //       initials: '/images/UE.png',
    //       name: 'Umoh Edet',
    //       role: 'moderator',
    //       position: 'Head of Policy and Research, Govtech Africa Inc.',
    //     },
    //     {
    //       initials: '/images/BO.png',
    //       name: 'Blessing O. Ajimoti',
    //       role: 'moderator',
    //       position: 'Public Digital/Digital Transformation Consultant',
    //     },
    //   ]
    // },
]

export const dealsAndAnnouncementsArray: dealsAndAnnouncementsProps[] = [
    {
        id: "pinned-1",
        date: "Nov 12, 2026",
        tag: "EVENT",
        tagType: "event",
        title: "National Govtech Policy Roundtable returns to Abuja this November.",
        description: "Policymakers, technologists, and civil society leaders convene for three days to shape the next phase of Africa's digital governance agenda.",
        category: "Events",
        pinned: true,
        url: "/policy-roundtable",
    },
    {
        id: "1",
        date: "Aug 24, 2026",
        tag: "UPDATE",
        tagType: "update",
        title: "National Digital ID rollout enters Phase 2",
        description: "Enrollment centers expand to twelve additional local government areas, with mobile registration units launching in rural districts.",
        category: "Updates",
    },
    {
        id: "2",
        date: "Aug 18, 2026",
        tag: "DEADLINE",
        tagType: "deadline",
        title: "Civic-tech grant applications close September 30",
        description: "Early-stage teams building public-interest technology can still apply for this cycle's funding and mentorship track.",
        category: "Deadlines",
    },
    {
        id: "3",
        date: "Aug 9, 2026",
        tag: "EVENT",
        tagType: "event",
        title: "Govtech Policy Roundtable — Abuja, November 12–14",
        description: "Registration opens for this year's roundtable, featuring policy workshops, an interview studio, and a closing plenary session.",
        category: "Events",
    },
    {
        id: "4",
        date: "Jul 30, 2026",
        tag: "UPDATE",
        tagType: "update",
        title: "Open data portal now live for six states",
        description: "Public budget and procurement datasets are now searchable and downloadable, with four more states expected by year-end.",
        category: "Updates",
    },
];