import HomeComponents from "./Components/HomeComponents/HomeComponents";
import Footer from "./Components/SharedComponents/Footer";
import NavBar from "./Components/SharedComponents/NavBar";
const App = () => {
  return (
    <>
      <div>
        <NavBar/>
        {/* <h1 style={{color: "red"}}>This is App</h1> */}
      </div>
      <HomeComponents/>
      <Footer/>
    </>
  );
};

export default App;
