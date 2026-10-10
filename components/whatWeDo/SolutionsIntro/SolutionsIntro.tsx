"use client";
import React, { useRef } from "react";
// import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./SolutionsIntro.module.scss";

const SolutionsIntro = () => {
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
        <section ref={sectionRef} className={styles.intro_section}>
            <motion.div style={{ y, opacity }} className={styles.container}>
                <div className={styles.split_grid}>
                    <div className={styles.text_column}>
                        <div className={styles.purple_bar}></div>

                        <h2 className={styles.headline}>
                            The enterprise, within reach.
                        </h2>

                        <p className={styles.description}>
                            Across project delivery, public finance, geospatial intelligence, civil service skilling
                            and beyond, we&apos;re building products that don&apos;t just surface insights, they deliver
                            outcomes—helping government act, adapt and operate at a pace no legacy system can match.
                        </p>
                    </div>

                    <div className={styles.media_column}>
                        <div className={styles.dashboard_card}>
                            <div className={styles.card_header}>
                                <div className={styles.brand_indicator}>
                                    <div className={styles.dot_avatar}>G</div>
                                    <span className={styles.agency_name}>Govtech Workspace</span>
                                </div>
                                <div className={styles.top_actions}>
                                    <span className={styles.pulse_badge}>Live Monitoring</span>
                                </div>
                            </div>

                            <div className={styles.card_body}>
                                <div className={styles.greeting_row}>
                                    <div className={styles.greeting_text}>
                                        <span className={styles.sparkle_icon}>✦</span>
                                        <p>
                                            Good morning, Leadership. I cleared <strong>6 milestones</strong> overnight.{" "}
                                            <span className={styles.highlight_text}>4 need your review.</span>
                                        </p>
                                    </div>
                                    <button className={styles.quick_action_btn}>Quick review</button>
                                </div>

                                <div className={styles.alerts_list}>
                                    <div className={styles.alert_item}>
                                        <div className={styles.alert_tag_critical}>ACT</div>
                                        <div className={styles.alert_details}>
                                            <h5>National ID rollout Phase 2 — Biometric Hubs</h5>
                                            <p>Expedite 1,200 units from Hub 01 to close rural registration gap.</p>
                                        </div>
                                        <span className={styles.alert_chevron}>&gt;</span>
                                    </div>

                                    <div className={styles.alert_item}>
                                        <div className={styles.alert_tag_warning}>PLAN</div>
                                        <div className={styles.alert_details}>
                                            <h5>Cross-Border Treasury Settlement SLA</h5>
                                            <p>Simulation ready: raise regional buffer target to 95% across MDAs.</p>
                                        </div>
                                        <span className={styles.alert_chevron}>&gt;</span>
                                    </div>

                                    <div className={styles.alert_item}>
                                        <div className={styles.alert_tag_critical}>ACT</div>
                                        <div className={styles.alert_details}>
                                            <h5>Geospatial Grid Surveillance Alert</h5>
                                            <p>Redistribute field maintenance nodes across 14 high-volume districts.</p>
                                        </div>
                                        <span className={styles.alert_chevron}>&gt;</span>
                                    </div>
                                </div>

                                <div className={styles.card_footer}>
                                    <div className={styles.metric_item}>
                                        <span className={styles.metric_label}>Run-rate variance</span>
                                        <span className={styles.metric_value_green}>+4.2%</span>
                                    </div>

                                    <div className={styles.metric_item}>
                                        <span className={styles.metric_label}>Verified disbursement</span>
                                        <span className={styles.metric_value}>₦366.1M</span>
                                    </div>

                                    <div className={styles.agent_active_pill}>
                                        <span className={styles.gear_icon}>⚙</span>
                                        <span>Automated Audit Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default SolutionsIntro;