"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./TheApproach.module.scss";

interface ApproachPillar {
    title: string;
    description: string;
}

const approachPillars: ApproachPillar[] = [
    {
        title: "Data",
        description: `Our digital products are only as strong as the data behind them. Govtech Africa's experience with the 
            continent's most complex public sector data estates—highly regulated, deeply specialized, and historically 
            fragmented—gives us the architecture, taxonomies, and engineering rigor to turn raw administrative data into 
            operational advantage across every tier of government.`,
    },
    {
        title: "Domain",
        description: `We understand how ministries, departments, and agencies operate and where administrative transformation 
            creates measurable value. Decades of institutional and public policy experience are encoded directly into our 
            platform workflows and logic. There is no need for agencies to build from scratch what Govtech Africa has 
            already proven at scale.`,
    },
    {
        title: "Deployment",
        description: `Our collaborative, build-with-you model delivers meaningful results rapidly. We validate our software 
            in real-world public administration environments before deploying into agency infrastructure—seamlessly 
            integrating with existing government databases and treasury systems while meeting all national data residency, 
            security, and sovereign compliance standards.`,
    },
];

const TheApproach = () => {
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
        <section ref={sectionRef} className={styles.approach_section}>
            <motion.div style={{ y, opacity }} className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Approach</h2>
                    <p className={styles.subtitle}>
                        We build digital products from our institutional governance work, turning public sector
                        knowledge and operational insight into repeatable results.
                    </p>
                </div>

                <div className={styles.pillars_grid}>
                    {approachPillars.map((pillar) => (
                        <div key={pillar.title} className={styles.pillar_col}>
                            <div className={styles.purple_bar}></div>
                            <h3 className={styles.pillar_title}>{pillar.title}</h3>
                            <p className={styles.pillar_description}>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default TheApproach;