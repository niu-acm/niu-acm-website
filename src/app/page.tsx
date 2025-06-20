import Header from './header';
import Footer from './footer';
import SigCard from './sig_card';

export default function Home() {
  return (
    <div>
      <Header />

      <h1>acm</h1>

      <SigCard
        name="SIGmainframe"
        description="SIGmainframe is our deep dive into the world of enterprise computing,
         especially focused on IBM mainframes.
         Whether you're curious about what powers the world’s banking and airline systems,
         or you want to earn IBM Z Developer Badges, this is the SIG for you!"
        image_url="/IBM_z16_.png" //these are just placeholder images that fit the vibe. find better later
      />
      <SigCard
        name="SIGwebdev"
        description="SIGwebdev is for anyone interested in building things on the web—from total beginners to experienced devs.
         If you're into HTML/CSS, PHP, React, Tailwind, or just want to make your portfolio shine, this is your space"
        image_url="/webdev.png" //these are just placeholder images that fit the vibe. find better later
        flipped={true} // Example of using the flipped prop
      />

      <Footer />
    </div>
  );
}