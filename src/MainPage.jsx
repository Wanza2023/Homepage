import { Header, Section, SectionsContainer } from "react-fullpage";
import Vision from "./components/vision";
import WhatWanza from "./components/WhatWanza";
import Team from "./components/Team";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import WanzaMember from "./components/WanzaMember";

export default function MainPage() {
    let options = {
        anchors: ['Home','Wanza', 'Team', 'Vision', 'Member', 'Project'],
        navigation: false,
        verticalAlign: true
    };

    return (
        <div>
            <Header>
                <Navbar/>
            </Header>
            <SectionsContainer {...options}>
                <Section><Home/></Section>
                <Section><WhatWanza /></Section>
                <Section><Team/></Section>
                <Section><Vision /></Section>
                <Section><WanzaMember/></Section>
                <Section><Project/></Section>
            </SectionsContainer>
        </div>
    )
}
