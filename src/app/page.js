import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Contact from "./components/Contact/Contact";

const page = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Contact />
    </main>
  );
};
export default page;
