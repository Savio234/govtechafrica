import React from "react";
import { RelatedInsights } from "@/components";
import { SolutionsHero, SolutionsIntro, OurProducts, TheApproach } from "@/components/whatWeDo";
import styles from "./SolutionsView.module.scss";

const SolutionsView = () => {
    return (
        <div className={styles.solutions_view}>
            <div className={styles.spacing} />
            <SolutionsHero />
            <OurProducts />
            <TheApproach />
            <SolutionsIntro />
            <RelatedInsights type="new" />
        </div>
    );
};

export default SolutionsView;
