import { Section, SectionsContainer } from "react-fullpage";

export default function MainPage() {
    let options = {
        anchors: ['Home', 'Team', 'Vision', 'Member', 'Project'],
        navigation: false,
        verticalAlign: true
    };

    return (
        <SectionsContainer {...options}>
            {/* <Section>Home</Section>
            <Section>Team</Section>
            <Section>Vision</Section>
            <Section>Member</Section>
            <Section>Project</Section> */}
            <Section>Home</Section>
            <Section>Team</Section>
            <Section>Vision</Section>
            <Section>Member</Section>
            <Section>Project</Section>
        </SectionsContainer>
    )
}
