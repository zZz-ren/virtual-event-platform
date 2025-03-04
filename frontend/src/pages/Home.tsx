import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/Home/About";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div className="min-h-screen dark:bg-gunmetal">
      <Header />
      <Hero />
      {/* <Features />
      <About /> */}
      <Footer />
    </div>
  );
};

export default Home;
