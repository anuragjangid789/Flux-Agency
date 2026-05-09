import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Services from "./Components/Service/Service";
import Steps from "./Components/Steps/Steps";
import Feature from "./Components/Feature/Feature";
import Reviews from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div id="home"><Navbar /></div>
      <Home />
      <div id="services"><Services /></div>
      <div id="about"><Steps /></div>
      <div id="blog"><Feature /></div>
      <Reviews />
      <div id="contact"><Footer /></div>
    </>
  );
}
export default App;