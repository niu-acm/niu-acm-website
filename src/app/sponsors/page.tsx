import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';
import SectionBody from '@/components/sectionbody';

export default function Home() {
    return (
        <>
            <Header />
            <Background />

            <SectionBody
                title="Sponsors"
                content="Our sponsors play a crucial role in supporting ACM at NIU. They provide funding, resources, and expertise to help us achieve our goals. Our sponsors include local businesses, tech companies, and industry professionals who are passionate about fostering the next generation of tech talent."
            />

            <SectionBody
                title="Gold Sponsors"
                content="space holder"
            />

            <SectionBody
                title="Silver Sponsors"
                content="space holder"
            />

            <SectionBody
                title="Bronze Sponsors"
                content="space holder"
            />

            <SectionBody
                title="Alumni Sponsors"
                content="space holder"
            />

            <Footer />
        </>
    );
}