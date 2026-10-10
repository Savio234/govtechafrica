"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./OurProducts.module.scss";

export interface SolutionCardItem {
    id: string;
    category: string;
    name: string;
    description: string;
    link?: string;
    isReady: boolean;
}

const solutionsData: SolutionCardItem[] = [
    {
        id: "fulcrum",
        category: "PROJECT EXECUTION & DELIVERY",
        name: "Fulcrum",
        description: `A government execution platform providing leadership with real-time visibility into capital project delivery, 
            budget burn rates, milestone tracking, and SDG alignment across ministries, departments, and agencies.`,
        link: "https://fulcrum.govtechafrica.com",
        isReady: true,
    },
    {
        id: "atlas",
        category: "GEOSPATIAL INTELLIGENCE",
        name: "Atlas",
        description: `A centralized spatial intelligence platform mapping public infrastructure, government facilities, power
            distribution grids, and civic utilities with satellite intelligence, terrain analytics, and regional equity 
            modeling.`,
        link: "https://atlas.govtechafrica.com",
        isReady: true,
    },
    {
        id: "lms",
        category: "CIVIL SERVICE CAPACITY",
        name: "Learning Management System",
        description: `A scalable institutional learning portal designed to upskill civil service personnel across digital
            public infrastructure, regulatory compliance, data security, and modern public administration.`,
        isReady: false,
    },
    {
        id: "intelligence",
        category: "POLICY & DECISION INTELLIGENCE",
        name: "Govtech Africa Intelligence",
        description: `A decision-support engine leveraging customized language models and macroeconomic simulation to automate 
            citizen inquiry routing and inform evidence-based policy design.`,
        isReady: false,
    },
];

const OurProducts = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end center"],
    });
    const rawY = useTransform(scrollYProgress, [0, 0.2], [300, 0]);
    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const opacity = useSpring(rawOpacity, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });

    return (
        <section id="our-solutions" ref={sectionRef} className={styles.portfolio_section}>
            <motion.div style={{ y, opacity }} className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Solutions</h2>
                    <p className={styles.subtitle}>
                        Our purpose-built digital products reinvent how public sector institutions work, from single
                        tasks to entire operations.
                    </p>
                </div>

                <div className={styles.cards_grid}>
                    {solutionsData.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.purple_bar}></div>
                            <span className={styles.category_eyebrow}>{item.category}</span>
                            <h3 className={styles.card_title}>{item.name}</h3>
                            <p className={styles.card_desc}>{item.description}</p>

                            {item.isReady && item.link ? (
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.learn_more_link}
                                >
                                    <h3>Learn more</h3>
                                    <div className={styles.arrow} aria-hidden="true">
                                        <Image alt="" fill src="/svgs/chevron_light.svg" />
                                    </div>
                                </Link>
                            ) : null}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default OurProducts;