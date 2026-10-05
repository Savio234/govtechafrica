'use client';
import React, { useRef } from "react";
import { technologies } from "@/mock/navLists.mock";
import { TechnologyCard } from "@/shared";
import { useScroll, motion, useTransform } from "framer-motion";
import { TechnologyProps } from "@/interfaces";
// import Image from "next/image";
import styles from "./Technology.module.scss";

const Technology = () => {
	const topSectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: topSectionRef,
		offset: ["start end", "end center"],
	});
	const { scrollYProgress: imageYProgress } = useScroll({
		target: topSectionRef,
		offset: ["start end", "end center"],
	});
	const imageScale = useTransform(imageYProgress, [0, 1], [1, 1.4]);
	return (
		<div ref={topSectionRef} className={styles.section} id="technology">
			<div className={styles.section_container}>
				<div className={styles.intro_text}>
					<h1>Revolutionizing Governance Through Technology</h1>
					<p>
						For some, the word impossible ends discussions. For us, it starts 
						the conversation.
					</p>
				</div>
				<div className={styles.text_container}>
					<motion.div className={styles.image_container}
						style={{ scale: imageScale }}
					/>
					{/* <Image alt="" fill src="/images/technology_header.png" sizes="100%" /> */}
					<div className={styles.text}>
						<h2>Technology</h2>
						<h3>
							We empower African governments{" "}
							<span>
								to thrive through innovative IT solutions tailored for societal advancement.
							</span>
						</h3>
					</div>
				</div>
				<div className={styles.rows}>
					<div className={styles.large_row}>
						{technologies.slice(0, 3).map((technology: TechnologyProps, index: number) => (
							<TechnologyCard key={index} scrollYProgress={scrollYProgress}
								cardType="technology" index={index}
								technology={technology}
							/>
						))}
					</div>
					<div className={styles.small_row}>
						{technologies.slice(3).map((technology: TechnologyProps, index: number) => (
							<TechnologyCard key={technology?.id} scrollYProgress={scrollYProgress}
								cardType="technology" index={index} 
								technology={technology}
							/>
						))}
					</div>
				</div>
				<div className={styles.rows_mob}>
					{technologies.map((technology: TechnologyProps, index: number) => (
						<TechnologyCard key={index} scrollYProgress={scrollYProgress}
							cardType="technology" index={index}
							technology={technology}
						/>
					))}
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Technology;
