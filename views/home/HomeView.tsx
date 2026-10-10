import React from "react";
import { Hero, OpenCookiesModal } from "@/shared";
import { GrowthV2, MissionV2, Research, CenterPieceV2, Experience, NPGR, IntroToFulcrum, InterviewSection, Annoucements } from "@/components/home";
// import { GrowthV2, MissionV2, Research, CenterPieceV2, Experience, NPGR, IntroToFulcrum, InterviewSection } from "@/components/home";
import { Governance } from "@/components/whoWeAre";
import styles from "./HomeView.module.scss";

const HomeView = () => {
	return (
		<React.Fragment>
			<div className={styles.desktop_hero}>
				<Hero backgroundType="video" backgroundImage="" title={null} description={null} dataType="home"
					backgroundVideo="/videos/hero_video_landcape.mp4"
				/>
			</div>
			<div className={styles.mobile_hero}>
				<Hero backgroundType="video" backgroundImage="" title={null} description={null} dataType="home"
					backgroundVideo="/videos/hero_video_portrait.mp4"
				/>
			</div>
			<Governance type="new" />
			<Research />
			<GrowthV2 />
			<MissionV2 />
			<Experience />
			<CenterPieceV2 />
			<NPGR />
			<IntroToFulcrum type="home" />
			<InterviewSection />
			<Annoucements />
			<OpenCookiesModal />
		</React.Fragment>
	);
};

export default HomeView;
