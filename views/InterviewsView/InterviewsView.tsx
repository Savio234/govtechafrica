"use client";
import React, { useEffect, useState } from "react";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import { InterviewsCard } from "@/shared";
import styles from "./InterviewsView.module.scss";
// const categories = ["All", "Q&A", "Video", "Audio", "Govtech Originals"];
const categories = ["All"];

const InterviewsView = () => {
    const { fetchBlogs, sortedBlogs } = useGetContentful();
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [visibleCount, setVisibleCount] = useState<number>(8);

    useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const interviews = sortedBlogs?.filter((blog: BlogDetailsProps) => blog.type?.toLowerCase() === "interview")

    const allInterviews = interviews;
    const filteredInterviews = allInterviews.filter((item) => {
        if (activeCategory === "All") return true;
        return item.type.toLowerCase() === activeCategory.toLowerCase();
    });

    const displayedInterviews = filteredInterviews.slice(0, visibleCount);
    const hasMore = filteredInterviews.length > visibleCount;
    const handleLoadMore = () => setVisibleCount((prev) => prev + 4);

    return (
        <div className={styles.interviews_view}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.header_text}>
                        <h1 className={styles.title}>Interviews</h1>
                        <p className={styles.subtitle}>
                            Conversations with the people shaping Govtech across Africa — new voices added regularly.
                        </p>
                    </div>
                    <div className={styles.sort_container}>
                        <button className={styles.sort_btn}>
                            <span>Newest first</span>
                        </button>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.filter_row}>
                    {categories.map((cat) => (
                        <button key={cat} className={`${styles.filter_btn} ${activeCategory === cat ? styles.active : ""}`}
                            onClick={() => {
                                setActiveCategory(cat);
                                setVisibleCount(8);
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={styles.list_container}>
                    {displayedInterviews.map((item, index) => (
                        <InterviewsCard key={index} title={item.title} subtitle={item?.role?.[0]} quote={item.description}
                            date={item.date} slug={item.slug} publishedAt={item.date}
                            image={item?.thumbnail?.fields?.file?.url ? `https:${item?.thumbnail?.fields?.file?.url}` : "/images/ZM.png"}
                        />
                    ))}
                </div>

                {hasMore && (
                    <div className={styles.load_more_wrapper}>
                        <button className={styles.load_more_btn} onClick={handleLoadMore}>
                            Load more interviews
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InterviewsView;