"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { dealsAndAnnouncementsArray } from "@/mock/navLists.mock";
import styles from "./Annoucements.module.scss";

const Annoucements = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const announcements = dealsAndAnnouncementsArray;
    const annoucementRef = useRef<HTMLDivElement>(null);
        const { scrollYProgress } = useScroll({
            target: annoucementRef,
            offset: ["start end", "end center"]
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
        <div ref={annoucementRef} className={styles.annoucements_section}>
            <motion.div style={{opacity, y}} className={styles.container}>
                <div className={styles.header_row}>
                    <div className={styles.left_header}>
                        <div className={styles.tag}>
                            <span className={styles.green_dot}></span>
                            <span className={styles.tag_text}>ANNOUNCEMENTS</span>
                        </div>
                        <h2 className={styles.title}>
                            Policy updates, events, and<br className={styles.br_desktop} /> deadlines — as they happen.
                        </h2>
                    </div>

                    <div className={styles.icon_wrapper}>
                        <Image
                            src="/svgs/announcement.svg"
                            alt="Announcement Graphic"
                            width={260}
                            height={250}
                            priority
                            className={styles.graphic_img}
                        />
                    </div>
                </div>

                <div className={styles.carousel_wrapper}>
                    <div ref={sliderRef} className={styles.carousel_track}>
                        {announcements.map((item) => {
                            const badgeType = item.tagType?.toLowerCase() || item.tag?.toLowerCase();
                            return (
                                // <Link key={item.id} href="/deals-and-announcements" className={styles.carousel_item}>
                                <div key={item.id} className={styles.carousel_item}>
                                    <span className={`${styles.badge} ${
                                            badgeType === "deadline"
                                                ? styles.badge_deadline
                                                : badgeType === "event"
                                                ? styles.badge_event
                                                : styles.badge_update
                                        }`}
                                    >
                                        {item.tag}
                                    </span>
                                    <span className={styles.item_title}>{item.title}</span>
                                    <span className={styles.separator}>/</span>
                                </div>
                                // </Link>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.bottom_bar}>
                    <Link href="/deals-and-announcements" className={styles.view_all_btn}>
                        <span>View All Announcements</span>
                        <span className={styles.arrow}>→</span>
                    </Link>

                    <div className={styles.updated_daily}>
                        <span className={styles.pulse_dot}></span>
                        <span>Updated daily</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Annoucements;