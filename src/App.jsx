import Navbar from "./common_components/navbar";
import Hero from "./homepage_components/hero";
import ImageList from "./homepage_components/image_list";
import MayorInfo from "./homepage_components/mayor_info";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MayorInfo />
      <ImageList />
    </div>
  );
}

export default App;
