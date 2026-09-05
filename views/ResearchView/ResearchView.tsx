"use client";
import React, { useEffect, useState } from "react";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import { ResearchCard, BackgrounderCard, ReportCard } from "@/shared";
import styles from "./ResearchView.module.scss";

const ResearchView = () => {
    const categories = ["All", "Backgrounder", "Article", "Report", "Policy Insight"];
    const { fetchBlogs, sortedBlogs } = useGetContentful();
    const [activeCategory, setActiveCategory] = useState<string>("All");

    useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const interviews = sortedBlogs?.filter((blog: BlogDetailsProps) => blog.type?.toLowerCase() !== "interview")
    const filteredInterviews = interviews.filter((item) => {
        if (activeCategory === "All") return true;
        return item.type.toLowerCase() === activeCategory.toLowerCase();
    });

    return (
        <div className={styles.interviews_view}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.header_text}>
                        <h1 className={styles.title}>Research</h1>
                        <p className={styles.subtitle}>
                            In-depth analysis, reports, and insights shaping digital governance and public sector innovation across Africa.
                        </p>
                    </div>
                    <div style={{display: "none"}} className={styles.sort_container}>
                        <button className={styles.sort_btn}>
                            <span>Newest first</span>
                        </button>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.filter_row}>
                    {categories.map((cat, index) => (
                        <button key={cat} className={`${styles.filter_btn} ${activeCategory === cat ? styles.active : ""}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {index === 0 ? cat : `${cat}s`}
                        </button>
                    ))}
                </div>

                {!filteredInterviews?.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.research_wrapper}>
						{filteredInterviews?.map((blog: BlogDetailsProps, index: number) => {
							const getType = blog?.type?.toLowerCase();
							const getResearchType = getType?.replace(' ', '-');
							const isReport = getType === "report";

							return blog?.type === "backgrounder" ? (
								<BackgrounderCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug}
									date={blog?.date}
									publishedAt={blog?.publishedAt}
								/>
							) : isReport ? (
								<ReportCard key={index} title={blog?.title} slug={blog?.slug} date={blog?.date}
									publishedAt={blog?.publishedAt} externalUrl={blog?.externalUrl}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
								/>
							) : (
								<ResearchCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									alt={`https:${blog?.thumbnail?.fields?.description}`}
									description={blog?.description}
									btnText={blog?.type}
									slug={blog?.slug}
									researchType={getResearchType}
								/>
							)
						})}
					</div>
				)}
            </div>
        </div>
    )
}

export default ResearchView