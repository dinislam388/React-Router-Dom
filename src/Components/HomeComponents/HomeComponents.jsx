import images from './Images/pngwing 10.png';
import './HomeComponent.css'
const HomeComponents = () => {
    return (
        
        <>
        {/* <h1>This is Home Componenets</h1> */}
            <div className='design'>
                <div className="container">
                <div className="heroArea">
                    <div className="mainText">
                    <h1>Let's make beautiful flowers a part of your life.</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable</p>
                    </div>
                <button class="shopBtn">Shop Now</button>
                </div>
                </div>
                <div className="heroImg">
                    <img src={images} alt="" />
                </div>
            </div>
        </>
    );
};

export default HomeComponents;