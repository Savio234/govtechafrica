"use client";
import React from "react";
import { Consulting, Technology } from "@/components/whatWeDo";
import styles from './WhatWeDoView.module.scss';

const WhatWeDoView = () => {
	return (
		<React.Fragment>
			<div className={styles.top_margin}></div>
			<Technology />
			<Consulting />
		</React.Fragment>
	);
};

export default WhatWeDoView;
