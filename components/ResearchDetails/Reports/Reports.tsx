"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RichText, ResearchCard, ReportCard, Button, ExpertTakeCard, BackgrounderCard } from "@/shared";
import { formatDate } from "@/utils/formatUrl";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./Reports.module.scss";
interface ReportsProps {
    blog: BlogDetailsProps;
    contentToShow?: BlogDetailsProps[];
}

const Reports = ({ blog, contentToShow }: ReportsProps) => {
    const isAsideVisible = blog?.tableOfContent && blog?.tableOfContent?.length > 0;
    return (
        <article className={styles.backgrounders}>
            <header className={styles.details_content}>
                <div className={styles.details_header}>
                    <div className={styles.breadcrumbs}>
                        <Link href="/reports">
                            <p>Reports</p>
                        </Link>
                        <div className={styles.chevron}>
                            <Image alt="" fill src="/svgs/chevron.svg" />
                        </div>
                        <h3>{blog?.title}</h3>
                    </div>
                    <div className={styles.header_details}>
                        <div className={styles.name_type_and_date}>
                            <div className={styles.tag_and_name}>
                                <div className={styles.tag}>
                                    REPORT
                                </div>
                                <h1>{blog?.title}</h1>
                            </div>
                            <div className={styles.time_and_date}>
                                <h4>Date: {blog?.date ? formatDate(blog?.date) : blog?.publishedAt}</h4>
                            </div>
                        </div>
                        {blog?.bannerImage?.fields?.file?.url && (
                            <div className={styles.banner_image}>
                                <Image alt="" fill src={`https:${blog?.bannerImage?.fields?.file?.url}`}
                                    sizes="100%" priority
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.overview_authors_cta}>
                        <div className={styles.overview}>
                            <p>Overview</p>
                            <h5>{blog?.description}</h5>
                        </div>
                        {blog?.pdf?.fields?.file?.url && (
                            <div className={styles.cta}>
                                <p>Download Report</p>
                                <h4>{blog?.downloadText}</h4>
                                <button className={styles.download_btn}>
                                    <Link href={`https:${blog?.pdf?.fields?.file?.url}`} target="_blank" download rel="noopener noreferrer">
                                        <h5>Download PDF</h5>
                                    </Link>
                                </button>
                            </div>
                        )}
                    </div>
                </div>


            </header>

            <section className={styles.details_content}>
                <div data-aside={isAsideVisible} className={styles.main_layout}>
                    {blog?.tableOfContent?.length ? (
                        <aside className={styles.sidebar}>
                            <div className={styles.table_of_contents_sticky}>
                                <h2 className={styles.h2}>Table of Contents</h2>
                                <div className={styles.toc_content}>
                                    <ul>
                                        {blog.tableOfContent.map((item, index) => (
                                            <li key={index}>
                                                <Link href={`#topic${index + 1}`}>
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    ) : null}

                    <div className={styles.content_body}>
                        <div className={styles.research_details}>
                            {blog?.researchContent && <RichText content={blog?.researchContent} type="report" />}
                        </div>
                        {blog?.authors?.length ? (
                            <div id="credits" className={styles.written_by_bottom}>
                                <h2>WRITTEN BY</h2>
                                <div className={styles.line}></div>
                                <div className={styles.writer_details_container}>
                                    {blog?.authors?.map((author: string, index: number) => {
                                    const getRole = blog?.role?.length ? blog?.role[index] : 'Govtech Research';
                                    const getUrl = blog?.links?.length ? blog?.links[index] : '/';
                                    return (
                                        <div key={author} className={styles.writer_details}>
                                            <div className={styles.name_and_role}>
                                                <h4>{author}</h4>
                                                <h6>{getRole}</h6>
                                            </div>
                                            {blog?.links?.length && (
                                                <Link href={getUrl ?? '/'} target="_blank">
                                                <div className={styles.details_linkedin}>
                                                    <Image alt="linkedin" fill src="/svgs/linkedin.svg" />
                                                </div>
                                                </Link>
                                            )}
                                        </div>
                                    )
                                    })}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className={styles.related_insights}>
                    <div className={styles.insights_header}>
                        <h2>Related Insights</h2>
                    </div>
                    <div className={styles.research_wrapper}>
                        {contentToShow?.map((relatedBlog: BlogDetailsProps, index: number) =>
                            relatedBlog?.type.toLowerCase() === "report" ?
                            (
                                <ReportCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    slug={relatedBlog?.slug} date={relatedBlog?.date}
                                    publishedAt={relatedBlog?.publishedAt}
                                    externalUrl={relatedBlog?.externalUrl}
                                />
                            ) : relatedBlog?.type.toLowerCase() === "backgrounder" ? (
                                <BackgrounderCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    slug={relatedBlog?.slug}
                                    date={relatedBlog?.date} publishedAt={relatedBlog?.publishedAt}
                                />
                            ) : (relatedBlog?.type.toLowerCase() === 'perspective' || 
                                relatedBlog?.type.toLowerCase() === "opinion piece" || 
                                relatedBlog?.type.toLowerCase() === "insight") ? (
                                <ExpertTakeCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    slug={relatedBlog?.slug}
                                    date={relatedBlog?.date} publishedAt={relatedBlog?.publishedAt}
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
                    <Button className={styles.explore_btn} href="/insights/research">
                        See more
                    </Button>
                </div>
            </section>
            {/* <div className={styles.divider_green}></div> */}
        </article>
    )
}

export default Reports