import AboutComponent from "../../Components/AboutComponents/AboutComponent";
import Footer from "../../Components/SharedComponents/Footer";
import NavBar from "../../Components/SharedComponents/NavBar";

const About = () => {
    return (
        <div>
            <NavBar/>
            <AboutComponent/>
            <Footer/>
        </div>
    );
};

export default About;