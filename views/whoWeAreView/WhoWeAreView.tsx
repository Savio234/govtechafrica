import React from "react";
import { Hero } from "@/shared";
import { RelatedInsights } from "@/components";
import { MeetTheTeam, Coalition, NewMission, NewValues, OurValuesSection } from "@/components/whoWeAre";
import { Annoucements } from "@/components/home";

const WhoWeAreView = () => {
	return (
		<React.Fragment>
			<Hero backgroundImage="/images/new_who_we_are.png" backgroundType="image" type="new" dataType="new-are"
				title="We are Drivers of Change"
				description='At Govtech Africa, we are driven by the need to close the technology gap for governments across
					the African continent.'
			/>
			<Coalition />
			<NewMission />
			<OurValuesSection />
			<NewValues />
			<Annoucements />
			<MeetTheTeam />
			<RelatedInsights type="new" />
		</React.Fragment>
	);
};

export default WhoWeAreView;
