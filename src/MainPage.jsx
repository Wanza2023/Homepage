import { Section, SectionsContainer } from "react-fullpage";
import Vision from "./Vision";
import WhatWanza from "./WhatWanza";
import Team from "./Team";

export default function MainPage() {
    let options = {
        anchors: ['Home','Wanza', 'Team', 'Vision', 'Member', 'Project'],
        navigation: false,
        verticalAlign: true
    };

    return (
        <SectionsContainer {...options}>
            <Section>Home</Section>
            <Section><WhatWanza /></Section>
            <Section><Team/></Section>
            <Section><Vision /></Section>
            <Section>Member</Section>
            <Section>Project</Section>
        </SectionsContainer>
    )
}
