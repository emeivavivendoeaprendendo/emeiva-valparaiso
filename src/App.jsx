import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Enrollment from "./components/Enrollment/Enrollment";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import Team from "./components/Team/Team";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <Enrollment />
        <Infrastructure />
        <Team />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
