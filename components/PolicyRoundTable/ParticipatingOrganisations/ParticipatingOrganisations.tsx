"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { Carousel } from "@/shared";
import Image from "next/image";
import styles from "./ParticipatingOrganisations.module.scss";

interface Props {
    type?: "new" | "default";
}

const ParticipatingOrganisations = ({ type = "default" }: Props) => {
    const images = [
        '/svgs/partner_1.svg',
        '/svgs/partner_2.svg',
        '/svgs/partner_3.svg',
        '/svgs/partner_4.svg',
        '/svgs/partner_5.svg',
        '/svgs/partner_6.svg',
        '/svgs/partner_7.svg',
        '/svgs/partner_8.svg',
        '/svgs/partner_9.svg',
        '/svgs/partner_10.svg',
        '/svgs/remita.svg',
        '/images/nibbs_logo.png',
        '/images/OHCSF.png',
        '/images/supreme_court.png',
        "/images/undp_logo.png",
        "/images/Rwanda.png",
        "/svgs/finland.svg",
        "/images/3mtt.png",
        "/images/fmyd.jpg",
        "/images/NA.png",
        "/images/nabro.png",
        "/images/nasrda.png",
        "/images/ncdc_logo.jpg",
        "/images/nepza.webp",
        "/images/nilds.png",
        "/images/nis.png",
        "/images/nmdpra.png",
        "/images/nuprc.png",
        "/images/senate.png",
        "/svgs/sec_logo.svg",
        "/svgs/budgit.svg",
        "/svgs/HOR.svg",
    ]
    const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 650);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const partnersRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: partnersRef,
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
        <div ref={partnersRef} data-type={type} className={styles.slider_container}>
            <motion.div style={{ y, opacity }} className={styles.slider_wrapper}>
                <h3 className={styles.h3}>
                    {type === "new" ? "our partners" : "participating organisations"}
                </h3>
                <div className={styles.slider_content}>
                    {isMobile ? (
                        <React.Fragment>
                            <Carousel direction="right" speed="normal"
                                type="children" className={styles.images_wrapper_sm}
                            >
                                {images.slice(0, 16).map((image, index) =>
                                    <div key={index} className={styles.carousel_image}>
                                        <Image alt="" fill src={image} sizes="100%" />
                                    </div>
                                )}
                            </Carousel>
                            <Carousel direction="left" speed="normal"
                                type="children" className={styles.images_wrapper_sm}
                            >
                                {images.slice(16).map((image, index) =>
                                    <div key={index} className={styles.carousel_image}>
                                        <Image alt="" fill src={image} sizes="100%" />
                                    </div>
                                )}
                            </Carousel>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Carousel direction="right" speed="normal"
                                type="children"
                            >
                                {images.map((image, index) =>
                                    <div data-index={index} key={index} className={styles.carousel_image}>
                                        <Image alt="" fill src={image} sizes="100%" />
                                    </div>
                                )}
                            </Carousel>
                        </React.Fragment>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default ParticipatingOrganisations