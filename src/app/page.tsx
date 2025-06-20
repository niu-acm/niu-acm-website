import Header from './header';
import Footer from './footer';
import SigCard from './sig_card';

export default function Home() {
  return (
    <div>
      <Header />

      <h1>acm</h1>

      <SigCard
        name="Juan"
        description="A software engineer with a passion for building scalable applications."
        image_url="https://avatars.githubusercontent.com/u/123456789?v=4"
      />
      <SigCard
        name="Boltium Fortnitum"
        description="A fictional character known for his expertise in fortnite strategies."
        image_url="https://avatars.githubusercontent.com/u/987654321?v=4"
        flipped={true} // Example of using the flipped prop
      />

      <Footer />
    </div>
  );
}