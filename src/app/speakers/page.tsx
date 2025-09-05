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
                title="October 2nd: Michael Minella, Director of Spring-Boot (Broadcom)"
                content="Michael Minella is an engineer, Java Champion, speaker, & author with over 21 years of enterprise development experience.
                 He has been a member of the Spring OSS team for over 11 years and currently serves as the Director responsible 
                 for Spring R&D. Formerly he lead the Spring Batch project and was the founder of the Spring Cloud Task project. 
                 Michael has spoken on topics that include Java and Spring & is a JavaOne Rockstar. He was a member of the expert 
                 group for JSR-352 (java batch processing) & is a committer on the Jakarata EE JBatch project. Michael is the author 
                 of The Definitive Guide to Spring Batch and the regular curmudgeon on the podcast OffHeap"
                imageSrc2="https://github.com/user-attachments/assets/5a10c948-b46c-4df8-beb7-654f56b03393"
            />

            <SectionBody
                title="October 16th: Marianne Guieb of ComEd"
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