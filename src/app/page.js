import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const page = () => {
  return (
    <main>
      <Hero />
      <Services />
    </main>
  );
};
export default page;
