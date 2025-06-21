import Header from './header';
import Footer from './footer';
import SigCard from './sig_card';
import IntroBody from './introbody';

export default function Home() {
  return (
    <div>
      <Header />

      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        
        <IntroBody
          title="NIU's Premier Computer Science Organization"
          content=" NIU ACM is your gateway to hands-on tech experience, career growth, and a community of like-minded students. Join us for workshops, guest speakers, and SIGs (Special Interest Groups) where you can build projects, learn new skills, connect with alumni, and have fun through socials and team events — whether you're just starting out or looking to level up, there's a place for you here."
          imageSrc="https://npr.brightspotcdn.com/e1/7b/9b044d4642d389e499176c5edd69/img-9121.jpg"
          altText="come join acm with me vro. come be deckerpilled"
          join="https://huskiehub.niu.edu/NIUACM/club_signup"
        />

        <b><h2>Special Interest Groups</h2></b>
        <SigCard
          name="SIGmainframe"
          description="SIGmainframe is our deep dive into the world of enterprise computing,
            especially focused on IBM mainframes.
            Whether you're curious about what powers the world’s banking and airline systems,
            or you want to earn IBM Z Developer Badges, this is the SIG for you!"
          image_url="/IBM_z16_.png"
        />
        <SigCard
          name="SIGwebdev"
          description="SIGwebdev is for anyone interested in building things on the web—from total beginners to experienced devs.
            If you're into HTML/CSS, PHP, React, Tailwind, or just want to make your portfolio shine, this is your space"
          image_url="/webdev.png"
          flipped={true}
        />

        <b><h2>Speaker Section</h2></b>
        <b><h2>Socials Section</h2></b>
      </div>

      <Footer />
    </div>
  );
}