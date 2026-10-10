"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./InterviewsCard.module.scss";
import { formatDate } from "@/utils/formatUrl";

export interface InterviewsCardProps {
    title: string;
    subtitle?: string;
    quote?: string;
    description?: string;
    date?: string;
    publishedAt?: string;
    image: string;
    slug?: string;
    role?: string;
    category?: string;
}

const InterviewsCard = ({ title, subtitle, date, publishedAt, image, slug }: InterviewsCardProps) => {
    // const displaySubtitle = subtitle || role || "";
    const displaySubtitle = subtitle;
    // const displayQuote = quote || description || "";
    const displayDate = date || publishedAt || "";
    const getFormattedDate = formatDate(displayDate)
    const dateFormat = getFormattedDate?.slice(0, 3) + " " + getFormattedDate?.slice(-4);

    return (
        <Link href={`/insights/research/${slug}`}>
            <article className={styles.interview_card}>
                <div className={styles.avatar_wrapper}>
                    <div className={styles.avatar_inner}>
                        <Image src={image || "/images/ZM.png"} alt={title} fill className={styles.avatar_img} sizes="100%" />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.header_row}>
                        {/* <h2 className={styles.name}>{title}</h2> */}
                        <h2 className={styles.name}>Interview - Govtech Africa Insights</h2>
                        {displayDate && <span className={styles.date}>{dateFormat}</span>}
                    </div>
                    {displaySubtitle && (
                        <p className={styles.role}>
                            {displaySubtitle}
                        </p>
                    )}
                    <p className={styles.quote}>Read More</p>
                    {/* {displayQuote && <p className={styles.quote}>{`"${displayQuote}"`}</p>} */}
                </div>
            </article>
            
        </Link>
    );
};

export default InterviewsCard;