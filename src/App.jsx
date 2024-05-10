import Hero from "./Components/Hero";
import PopularProduct from "./Components/PopularProduct";
import SuperQuality from "./Components/SuperQuality";
import Services from "./Components/Services";
import SpecialOffers from "./Components/SpecialOffers";
import CustomerReviews from "./Components/CustomerReviews";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";
import Nav from "./Navbar/Nav";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r  padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding -x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32  py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
