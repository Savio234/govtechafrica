"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shared";
import styles from "./Fulcrum.module.scss";

interface FeaturePillar {
    id: string;
    tag: string;
    title: string;
    description: string;
    icon: string;
}

const fulcrumFeatures: FeaturePillar[] = [
    {
        id: "1",
        tag: "EXECUTION & TRACKING",
        title: "Real-Time Milestone & KPI Monitoring",
        description: "Unprecedented live visibility into multi-agency project progress, contractor milestones, and delivery bottlenecks across ministries, departments, and agencies.",
        icon: "/svgs/success.svg",
    },
    {
        id: "2",
        tag: "FISCAL OVERSIGHT",
        title: "Budget & Disbursement Accountability",
        description: "Monitor capital allocations, contract disbursements, and expenditure burn rates with an immutable, transparent audit trail for public funds.",
        icon: "/svgs/remita.svg",
    },
    {
        id: "3",
        tag: "POLICY IMPACT",
        title: "SDG & Strategic Priority Alignment",
        description: "Directly map agency initiatives and capital projects against national development agendas, state master plans, and UN Sustainable Development Goals.",
        icon: "/svgs/strategy.svg",
    },
    {
        id: "4",
        tag: "EXECUTIVE INTELLIGENCE",
        title: "Automated Leadership Dashboards",
        description: "Actionable executive summaries, cross-MDA bottleneck heatmaps, and automated weekly briefs prepared directly for Governors, Ministers, and Directors.",
        icon: "/svgs/it.svg",
    },
];

const Fulcrum = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end center"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

    return (
        <section ref={sectionRef} className={styles.section} id="fulcrum">
            <div className={styles.section_container}>
                {/* Intro Headline */}
                <div className={styles.intro_text}>
                    <div className={styles.eyebrow}>
                        <span className={styles.dash}>—</span>
                        <span>FLAGSHIP PLATFORM</span>
                    </div>
                    <h1>Empowering Leadership with Real-Time Project & Delivery Visibility</h1>
                    <p>
                        Fulcrum gives public sector leadership end-to-end visibility into capital project delivery,
                        budget disbursements, milestone tracking, and strategic policy alignment across government institutions.
                    </p>
                </div>

                {/* Banner Hero Showcase */}
                <div className={styles.banner_container}>
                    <motion.div
                        className={styles.banner_bg}
                        style={{ scale: imageScale }}
                    />
                    <div className={styles.banner_overlay}></div>

                    <div className={styles.banner_content}>
                        <div className={styles.platform_badge}>
                            <Image
                                src="/svgs/fulcrum_section_icon.svg"
                                alt="Fulcrum Icon"
                                width={24}
                                height={24}
                                className={styles.badge_icon}
                            />
                            <span>FULCRUM PLATFORM</span>
                        </div>

                        <h2>Fulcrum</h2>
                        <h3>
                            Sovereign project management and delivery tracking{" "}
                            <span>
                                engineered for transparency, accountability, and accelerated governance.
                            </span>
                        </h3>

                        <div className={styles.cta_row}>
                            <Link
                                href="https://fulcrum.govtechafrica.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.launch_btn}
                            >
                                <Button className={styles.button}>
                                    <span>Explore Fulcrum</span>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Feature Capabilities Grid */}
                <div className={styles.features_grid}>
                    {fulcrumFeatures.map((feature, index) => (
                        <div key={feature.id} className={styles.feature_card}>
                            <div className={styles.card_header}>
                                <span className={styles.card_tag}>{feature.tag}</span>
                                <span className={styles.card_number}>0{index + 1}</span>
                            </div>
                            <h4 className={styles.card_title}>{feature.title}</h4>
                            <p className={styles.card_desc}>{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Interactive Platform Highlight Banner */}
                <div className={styles.showcase_box}>
                    <div className={styles.showcase_content}>
                        <div className={styles.showcase_text}>
                            <h3>Ready to see Fulcrum in action?</h3>
                            <p>
                                Experience how public institutions are transforming project execution with centralized
                                data, real-time KPI alerts, and executive decision tools.
                            </p>
                        </div>
                        <Link
                            href="https://fulcrum.govtechafrica.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.showcase_btn_link}
                        >
                            <Button className={styles.showcase_btn}>
                                <span>Visit fulcrum.govtechafrica.com</span>
                                <span className={styles.arrow_icon}>↗</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.divider}></div>
        </section>
    );
};

export default Fulcrum;