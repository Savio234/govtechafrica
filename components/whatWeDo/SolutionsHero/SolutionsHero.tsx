"use client";
import React from "react";
import styles from "./SolutionsHero.module.scss";
import Link from "next/link";

const SolutionsHero = () => {
    const handleScrollToSolutions = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const solutionsElement = document.getElementById("our-solutions") || document.getElementById("solutions");
        if (solutionsElement) {
            solutionsElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className={styles.hero_section}>
            {/* <div className={styles.stars_background}></div> */}
            {/* <div className={styles.ambient_glow}></div> */}
            <div className={styles.container}>
                <div className={styles.hero_content}>
                    <div className={styles.eyebrow}>
                        <span className={styles.dash}>—</span>
                        <span>DIGITAL PRODUCTS</span>
                    </div>

                    <h1 className={styles.title}>
                        Purpose-built software platforms that transform public sector delivery.
                    </h1>

                    <p className={styles.description}>
                        We build digital products that turn ambitious policy goals into transparent execution,
                        measurable delivery, and citizen impact across Africa.
                    </p>

                    <div className={styles.cta_row}>
                        <Link href="#our-solutions" onClick={handleScrollToSolutions} className={styles.explore_btn}>
                            <span>Explore our solutions</span>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <polyline points="19 12 12 19 5 12" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className={styles.stats_grid}>
                    <div className={styles.stat_card}>
                        <span className={styles.stat_number}>01</span>
                        <h4 className={styles.stat_title}>Architecture</h4>
                        <p className={styles.stat_desc}>
                            Zero-trust security and complete national data sovereignty built in.
                        </p>
                    </div>

                    <div className={styles.stat_card}>
                        <span className={styles.stat_number}>02</span>
                        <h4 className={styles.stat_title}>Interoperable by Design</h4>
                        <p className={styles.stat_desc}>
                            Unified APIs connecting federal, state, and local agency systems.
                        </p>
                    </div>

                    <div className={styles.stat_card}>
                        <span className={styles.stat_number}>03</span>
                        <h4 className={styles.stat_title}>Measurable Delivery</h4>
                        <p className={styles.stat_desc}>
                            Real-time milestone verification and transparent fiscal accountability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsHero;