"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Annoucements.module.scss";
import { Button } from "@/shared";

export const PauseIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <polygon points="6 4 20 12 6 20 6 4" />
        </svg>
    )
}
export const PlayIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
    )
}
export interface AnnouncementSlide {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    category?: string;
}

const announcementData: AnnouncementSlide[] = [
    {
        id: "1",
        slug: "national-digital-id-rollout-phase-2",
        title: "National Digital ID rollout enters Phase 2 across sub-national governments",
        description: "Govtech Africa partners with regional agencies to expand biometric enrollment and decentralized digital registries to over 40 million citizens.",
        image: "/images/collab.png",
    },
    {
        id: "2",
        slug: "scaling-ai-to-rewire-everyday-public-work",
        title: "Govtech Africa scales AI to rewire everyday public sector workflows",
        description: "Putting public servants at the center of AI ambition—accelerating cross-agency data harmonization, automated citizen routing, and policy intelligence.",
        image: "/images/article_1.jpeg",
    },
    {
        id: "3",
        slug: "cross-border-payment-integration-pilot",
        title: "Cross-border public payment interoperability pilot launches in West Africa",
        description: "Accelerating seamless treasury single account integrations and cross-border settlement channels for public service delivery across 6 partner nations.",
        image: "/images/tech.png",
    },
    {
        id: "4",
        slug: "securing-sovereign-infrastructure-zero-trust",
        title: "Securing sovereign infrastructure with next-gen zero-trust architecture",
        description: "A comprehensive framework safeguarding government cloud services, ministerial networks, and critical national databases against cyber threats.",
        image: "/images/secure_systems.png",
    },
    {
        id: "5",
        slug: "pan-african-govtech-summit-policy-breakthroughs",
        title: "Pan-African Govtech Summit delivers historic regional data exchange pact",
        description: "Public sector leaders and technology innovators establish unified data governance and digital public infrastructure standards in Abuja.",
        image: "/images/driver_1.jpg",
    },
];

const AUTO_SLIDE_INTERVAL = 7000;

const Annoucements = () => {
    const annoucementRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: annoucementRef,
        offset: ["start end", "end center"],
    });
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAutoPlayPaused, setIsAutoPlayPaused] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const totalSlides = announcementData.length;

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const rawY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });
    const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const opacity = useSpring(rawOpacity, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });
    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const togglePlayPause = () => {
        setIsAutoPlayPaused((prev) => !prev);
    };

    useEffect(() => {
        if (isAutoPlayPaused || isHovered) return;

        const timer = setInterval(() => {
            handleNext();
        }, AUTO_SLIDE_INTERVAL);

        return () => clearInterval(timer);
    }, [isAutoPlayPaused, isHovered, handleNext]);

    return (
        <div ref={annoucementRef} className={styles.announcements_wrapper}>
            <motion.div style={{ y, opacity }} className={styles.announcements_container}>
                <div className={styles.announcements_section} aria-label="Announcements and News Carousel">
                    <div className={styles.inside_header}>
                        <h2>Inside Govtech Africa</h2>
                        <Button className={styles.explore_btn}>
                            Explore More
                        </Button>
                        {/* <Link href="/insights/news">Explore More</Link> */}
                    </div>
                    <div className={styles.carousel_wrapper}>
                        <div className={styles.slider_track}
                            style={{
                                transform: `translateX(calc(-${currentIndex} * (var(--slide-width) + var(--slide-gap))))`,
                            }}
                        >
                            {announcementData.map((item, index) => {
                                const isActive = index === currentIndex;
                                return (
                                    <div key={item.id} onMouseEnter={() => isActive ? setIsHovered(true) : null}
                                        onMouseLeave={() => isActive ? setIsHovered(false) : null}
                                        className={`${styles.slide_item} ${isActive ? styles.active_slide : ""}`}
                                    >
                                        <Link href={`/insights/news/${item.slug}`} className={styles.slide_link}
                                            tabIndex={isActive ? 0 : -1}
                                            aria-label={item.title}
                                        >
                                            <div className={styles.image_col}>
                                                <div className={styles.image_wrapper}>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        priority={index === 0}
                                                        className={styles.slide_image}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                                                    />
                                                </div>
                                            </div>

                                            <div className={styles.content_col}>
                                                <h3 className={styles.slide_title}>{item.title}</h3>
                                                <p className={styles.slide_description}>
                                                    {item.description}
                                                </p>

                                                <div className={styles.read_more_cta}>
                                                    <span className={styles.read_more_text}>Read more</span>
                                                    <span className={styles.arrow_badge} aria-hidden="true">
                                                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="2.4"
                                                                strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles.controls_container}>
                        <button type="button" onClick={togglePlayPause} className={styles.ctrl_btn}
                            aria-label={isAutoPlayPaused ? "Resume carousel auto-play" : "Pause carousel auto-play"}
                            title={isAutoPlayPaused ? "Play" : "Pause"}
                        >
                            {(isAutoPlayPaused || isHovered) ? <PauseIcon /> : <PlayIcon />}
                        </button>

                        <div className={styles.nav_group}>
                            <button
                                type="button"
                                onClick={handlePrev}
                                className={styles.ctrl_btn}
                                aria-label="Previous announcement"
                                title="Previous"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="19" y1="12" x2="5" y2="12" />
                                    <polyline points="12 19 5 12 12 5" />
                                </svg>
                            </button>

                            <div className={styles.counter_display} aria-live="polite">
                                {currentIndex + 1}/{totalSlides}
                            </div>

                            <button
                                type="button"
                                onClick={handleNext}
                                className={styles.ctrl_btn}
                                aria-label="Next announcement"
                                title="Next"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Annoucements;