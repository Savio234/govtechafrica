"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./DealsAndAnnouncements.module.scss";
import { DealsAndAnnouncementCard } from "@/shared";
import { dealsAndAnnouncementsArray } from "@/mock/navLists.mock";

const filterCategories = ["All", "Updates", "Events", "Deadlines"];

const DealsAndAnnouncements = () => {
    const [activeFilter, setActiveFilter] = useState<string>("All");
    const [visibleCount, setVisibleCount] = useState<number>(8);
    const dealsAndAnnoucements = dealsAndAnnouncementsArray;

    const filteredAnnouncements = dealsAndAnnoucements.filter((item) => {
        if (item.pinned) return false;
        if (activeFilter === "All") return true;
        return item.category.toLowerCase() === activeFilter.toLowerCase();
    });

    const pinnedItem = dealsAndAnnoucements.find((item) => item.pinned === true);

    const displayedAnnouncements = filteredAnnouncements.slice(0, visibleCount);
    const hasMore = filteredAnnouncements.length > visibleCount;
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    return (
        <div className={styles.announcements_section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Announcements</h1>
                    <p className={styles.subtitle}>
                        Everything from policy milestones to upcoming events, in one place.
                    </p>
                </div>

                <div className={styles.divider} />

                <div className={styles.filter_row}>
                    {filterCategories.map((cat) => (
                        <button key={cat} className={`${styles.filter_btn} ${activeFilter === cat ? styles.active : ""}`}
                            onClick={() => {
                                setActiveFilter(cat);
                                setVisibleCount(8);
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {(activeFilter === "All" || activeFilter === "Events" || activeFilter === "Updates" || activeFilter === "Deadlines") && pinnedItem && (
                    <div className={styles.pinned_card}>
                        <div className={styles.pinned_content}>
                            <div className={styles.pinned_badge}>
                                <span className={styles.pinned_dot} />
                                <span className={styles.pinned_text}>PINNED</span>
                            </div>
                            <h2 className={styles.pinned_title}>
                                {pinnedItem.title}
                            </h2>
                            <p className={styles.pinned_description}>
                                {pinnedItem.description}
                            </p>
                            {pinnedItem.url && (
                                <Link href={pinnedItem.url} className={styles.pinned_btn}>
                                    <span>Read More</span>
                                    <span className={styles.arrow}>→</span>
                                </Link>
                            )}
                        </div>
                        <div className={styles.pinned_graphic}>
                            <div className={styles.graphic_inner}>
                                <div className={styles.center_pulse} />
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.timeline_wrapper}>
                    {displayedAnnouncements.map((item) => (
                        <DealsAndAnnouncementCard key={item.id} date={item.date} tag={item.tag} tagType={item.tagType}
                            title={item.title} description={item.description}
                        />
                    ))}
                </div>

                {hasMore && (
                    <div className={styles.load_more_wrapper}>
                        <button className={styles.load_more_btn} onClick={handleLoadMore}>
                            Load more announcements
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DealsAndAnnouncements;