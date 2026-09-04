import React from "react";
import { Hero, About, Speakers, Register, GreenSection, Footer, Agenda, Media, ParticipatingOrganisations } from "@/components/PolicyRoundTable";

const PolicyRoundTableView = () => {
    return (
        <React.Fragment>
            <Hero type="default" />
            <GreenSection />
            <About />
            <ParticipatingOrganisations />
            <Agenda />
            <Speakers />
            <Register />
            <Media />
            <Footer />
        </React.Fragment>
    )
}

export default PolicyRoundTableView;