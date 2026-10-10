"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RichText, ResearchCard, BackgrounderCard, ExpertTakeCard, Button, ReportCard } from "@/shared";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./Interviews.module.scss";
import { formatDate } from "@/utils/formatUrl";

interface InterviewsProps {
    blog: BlogDetailsProps;
    contentToShow?: BlogDetailsProps[];
}

const Interviews = ({ blog, contentToShow }: InterviewsProps) => {
    const avatarUrl = blog?.thumbnail?.fields?.file?.url 
        ? `https:${blog?.thumbnail?.fields?.file?.url}`
        : blog?.bannerImage?.fields?.file?.url
        ? `https:${blog?.bannerImage?.fields?.file?.url}`
        : null;
    const getFormattedDate = formatDate(blog?.date ?? "")
    const dateFormat = getFormattedDate?.slice(0, 3) + " " + getFormattedDate?.slice(-4);

    return (
        <article className={styles.interviews_article}>
            <div className={styles.top_bar}>
                <div className={styles.top_bar_container}>
                    <Link href="/interviews" className={styles.back_link}>
                        <div className={styles.chevron}>
                            <Image alt="Back" fill src="/svgs/chevron.svg" />
                        </div>
                        <span>Interviews feed</span>
                    </Link>
                </div>
            </div>

            <header className={styles.details_content_header}>
                <div className={styles.breadcrumbs}>
                    <Link href="/interviews" className={styles.parent_link}>
                        <span>Interviews</span>
                    </Link>
                    <span className={styles.slash}>/</span>
                    <span className={styles.current}>{blog?.title}</span>
                </div>

                <div className={styles.profile_header}>
                    {avatarUrl && (
                        <div className={styles.avatar_wrapper}>
                            <Image alt={blog?.title || "Interviewee"} fill sizes="100%" priority src={avatarUrl}
                                className={styles.avatar_img}
                            />
                        </div>
                    )}
                    <div className={styles.profile_info}>
                        <h1 className={styles.interviewee_title}>{blog?.authors?.[0]}</h1>
                        <p className={styles.subtitle}>
                            {blog?.title} - {dateFormat}
                        </p>
                    </div>
                </div>
            </header>

            <div className={styles.details_content}>
                <div className={styles.content_body}>
                    <div className={styles.research_details}>
                        {blog?.researchContent && <RichText type="interview" content={blog?.researchContent} />}
                    </div>
                </div>

                <div style={{display: "none"}} className={styles.related_insights}>
                    <div className={styles.insights_header}>
                        <h2>Related Insights</h2>
                    </div>
                    <div className={styles.research_wrapper}>
                        {contentToShow?.slice(0, 3).map((relatedBlog: BlogDetailsProps, index: number) =>
                            relatedBlog?.type?.toLowerCase() === 'perspective' ||
                            relatedBlog?.type?.toLowerCase() === "opinion piece" ||
                            relatedBlog?.type?.toLowerCase() === "insight" ? (
                                <ExpertTakeCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    slug={relatedBlog?.slug}
                                    date={relatedBlog?.date} publishedAt={relatedBlog?.publishedAt}
                                />
                            ) : relatedBlog?.type?.toLowerCase() === "backgrounder" ? (
                                <BackgrounderCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    slug={relatedBlog?.slug}
                                    date={relatedBlog?.date} publishedAt={relatedBlog?.publishedAt}
                                />
                            ) : relatedBlog?.type?.toLowerCase() === "report" ? (
                                <ReportCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    slug={relatedBlog?.slug} date={relatedBlog?.date}
                                    publishedAt={relatedBlog?.publishedAt}
                                    externalUrl={relatedBlog?.externalUrl}
                                />
                            ) : (
                                <ResearchCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    alt={`https:${relatedBlog?.thumbnail?.fields?.description}`}
                                    description={relatedBlog?.description}
                                    btnText={relatedBlog?.type}
                                    slug={relatedBlog?.slug}
                                />
                            )
                        )}
                    </div>
                    <Button className={styles.explore_btn} href="/interviews">
                        See more
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default Interviews;