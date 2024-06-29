import Footer from "./common_components/footer";
import Navbar from "./common_components/navbar";
import Hero from "./homepage_components/hero";
import ImageList from "./homepage_components/image_list";
import MapSection from "./homepage_components/mapsection";
import MayorInfo from "./homepage_components/mayor_info";
import Numbers from "./homepage_components/numbers";
import About from "./pages/about";
import Cabinets from "./pages/cabinets";
import Home from "./pages/home";

function App() {
  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/cabinets":
      Component = Cabinets;
      break;
    case "/about":
      Component = About;
      break;
    // case "/help":
    //   Component = HelpSection;
    //   break;
    // case "/contact":
    //   Component = Contact;
    //   break;
  }

  return (
    <div className="w-full ">
      <Navbar />
      <div className="pt-44 pb-6">
        <Component />
      </div>
      <Footer />
    </div>
  );
}

export default App;
