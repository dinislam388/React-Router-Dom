import HomeComponents from "../../Components/HomeComponents/HomeComponents";
import Footer from "../../Components/SharedComponents/Footer";
import NavBar from "../../Components/SharedComponents/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <HomeComponents/>
            <Footer/>
        </div>
    );
};

export default Home;