import React from "react";
// import Link from "next/link";
import styles from "./DealsAndAnnouncementCard.module.scss";
import { DealsAndAnnouncementCardProps } from "@/interfaces";

const DealsAndAnnouncementCard = ({ date, tag, tagType, title, description}: DealsAndAnnouncementCardProps) => {
    const getTagClass = () => {
        const type = (tagType || tag).toLowerCase();
        if (type.includes("deadline")) return styles.badge_deadline;
        if (type.includes("event")) return styles.badge_event;
        return styles.badge_update;
    };

    return (
        <div className={styles.timeline_item}>
            <div className={styles.timeline_dot}></div>
            <article className={styles.card}>
                <div className={styles.card_header}>
                    <span className={styles.date}>{date}</span>
                    <span className={`${styles.badge} ${getTagClass()}`}>
                        {tag.toUpperCase()}
                    </span>
                </div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </article>
        </div>
    );
};

export default DealsAndAnnouncementCard;