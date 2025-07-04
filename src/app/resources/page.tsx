import Header from '../../components/header';
import Footer from '../../components/footer';
import Background from '@/components/background';
import SectionBody from '../../components/sectionbody';

export default function Home() {
    return (
        <div>
            <Background />
            <Header />

            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    minHeight: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <div style={{
                    width: "100%",
                    maxWidth: "1500px"
                }}>
                    {/* GitHub */}
                    <SectionBody
                        title="Community GitHub"
                        content="Our GitHub is the central hub for all our projects, resources, and community contributions. Whether you're looking to collaborate on a project, find resources, or just explore what we're working on"
                        imageSrc="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
                        link={{ url: "https://github.com/niu-acm", text: "Visit Our GitHub" }}
                    />

                {/* Schedule  */}
                    <SectionBody
                        title="Resources and Musings"
                        content="Just a bunch of useful websites"
                        imageSrc="https://www.niu.edu/academics/images/apply-block-images/alejandro-cut-out.png"
                        link={{ url: "https://leetcode.com/problemset/", text: "Leetcode" }}
                        link2={{ url: "https://niucsci.wiki/", text: "NIU CSCI Wiki" }}
                        link3={{ url: "https://vyxz.xyz/sshfs-vscode", text: "Remote development in VSCode with SSHFS" }}
                        link4={{ url: "https://niucsci.wiki/guide/make", text: "How to make Makefiles" }}
                        link5={{ url: "https://niucsci.wiki/guide/documentation", text: "Doc-driven development with doxygen and git" }}
                        link6={{ url: "https://web.archive.org/web/20051231223018/http://www.cs.niu.edu/", text: "CS Department's Website in 2006" }}
                        link7={{ url: "https://www.youtube.com/watch?v=HXeLdyB6zME", text: "John Winans 340 Youtube Course" }}
                    />

                    <SectionBody
                        title="Old NIU ACM Websites"
                        content="A collection of old NIU ACM websites from the Wayback Machine"
                        link={{ url: "https://web.archive.org/web/19980524234956/http://www.cs.niu.edu/~niuacm/", text: "1990s Website" }}
                        link2={{ url: "https://web.archive.org/web/20040901095600/http://www.cs.niu.edu/~niuacm/", text: "2000s Website" }}
                        link3={{ url: "https://web.archive.org/web/20240621002411/https://acm.cs.niu.edu/", text: "2010s-Mid 2020s Website" }}
                    />

                    <SectionBody
                        title="NIU ACM Flyers"
                        content="Look for the Student Chapter of the ACM's flyers posted on campus bulletin boards for announcements of activities."
                        imageSrc2="https://i.imgur.com/khcj2aF.png"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}