"use client";
import React, { useState } from "react";
import { Button } from "..";
import { TechnologyCardProps } from "@/interfaces";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./TechnologyCard.module.scss";

const TechnologyCard = ({ technology, index, cardType }: TechnologyCardProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const currentUrl = new URL(window?.location?.href);
    const originUrl = currentUrl?.origin;
    const isTestLink = originUrl === "https://govtechafricabeta.netlify.app" || originUrl === "http://localhost:3000"
    const onHover = () => setIsHover(true);
    const offHover = () => setIsHover(false);
  return (
    <motion.div id={technology.id} className={styles.card} data-active={isHover} data-card={technology?.id}
        onMouseEnter={onHover} onMouseLeave={offHover} 
        // style={{ y, opacity }}
    >
        <div className={styles.card_content}>
            <div className={styles.details}>
                <h3>{technology.title}</h3>
                <p>{technology.description}</p>
            </div>
            <div data-active={isHover} data-image={technology.id} className={`${styles.card_image}`}>
                <Image alt="image" fill src={technology?.image} />
            </div>
        </div>

        {(cardType === 'technology' && isTestLink) && (
            <Link href={technology.href}>
                <Button className={styles.button}>
                    {index === 0 ? "Explore" : "Read more"}
                </Button>
            </Link>
        )}
        {(cardType === 'consulting' && isTestLink) && (
            <Link href={technology.href}>
                <Button className={styles.button}>
                    Explore
                </Button>
            </Link>
        )}
        <div className={styles.details_mob}>
            <div className={styles.content}>
                <div className={styles.card_content}>
                    <h3>{technology.title}</h3>
                    <p>{technology.description}</p>
                </div>
                {(cardType === 'technology' && isTestLink) && (
                    <Link href={technology.href}>
                        <Button className={styles.button_mob}>
                            {index === 0 ? "Explore" : "Read more"}
                        </Button>
                    </Link>
                )}
                {(cardType === 'consulting' && isTestLink) && (
                    <Link href={technology.href}>
                        <Button className={styles.button_mob}>
                            Explore
                        </Button>
                    </Link>
                )}
            </div>
            <div data-image={technology.id} className={`${styles.card_image_mob}`}>
                <Image alt="image" fill src={technology?.image} />
            </div>
        </div>
    </motion.div>
  )
}

export default TechnologyCard