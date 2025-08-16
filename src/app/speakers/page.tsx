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
                title="Industry Speakers"
                content="ACM at NIU regularly hosts talks from industry professionals in the technology field. These speakers share their insights, experiences, and knowledge on various topics related to computer science and technology. Past speakers have included software engineers, data scientists, cybersecurity experts, and tech entrepreneurs. These events provide valuable learning opportunities for students and help them stay updated with the latest trends in the tech industry."
                imageSrc2="https://github.com/user-attachments/assets/f64f5d13-134c-43d9-97ae-4daa162c6629"
                />

            <SectionBody
                title="Speaker #1"
                content="Bio"
                imageSrc2="https://github.com/user-attachments/assets/adeccf3e-80e7-4eae-a30a-6ef7ae2cce0b"
            />

            <SectionBody
                title="Speaker #2"
                content="Bio"
                imageSrc2="https://github.com/user-attachments/assets/adeccf3e-80e7-4eae-a30a-6ef7ae2cce0b"
            />

            <SectionBody
                title="Speaker #3"
                content="Bio"
                imageSrc2="https://github.com/user-attachments/assets/adeccf3e-80e7-4eae-a30a-6ef7ae2cce0b"
            />

            <Footer />
        </>
    );
}