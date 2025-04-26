import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Suscription from "./components/Suscription/Suscription";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header>
        <Navbar handleOrderPopup={handleOrderPopup} />
      </header>
      <main>
        <Hero />
      </main>
      <section>
        <Products />
      </section>
      <section>
        <TopProducts />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Suscription />
      </section>
      <section>
        <Reviews />
      </section>
      <footer>
        <Footer />
      </footer>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
}

export default App;
