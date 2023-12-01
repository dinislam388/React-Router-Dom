import style from './Footer.module.css'
const Footer = () => {
    return (
        <div>
            <div className={style["footer-content"]}>            
            <div className={style["container-eight"]}>
            <div className={style["hero-area8"]}>
            <div className={style["loto-side"]}>
                <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Arcu, sit risus mattis erat fermentum.</p>
            </div>
            <div className={style["coustomer"]}>
                <h2>Customer Support</h2>
                <p>Shipping <br/>
                Free Returns <br/> 
                Track Your Order 
                Gift Cards</p>
            </div>
            <div className={style["about"]}>
                <h2>About Us</h2>
                <p>Our Values <br/>
                Sustainability <br/>
                Brand Ambassadors <br/>
                Fitness Professionals
                Gap Inc. <br/> Sustainability</p>
            </div>
            <div className={style["services"]}>
                <h2>Customer Service</h2>
                <p>Help <br/>
                Leader Support <br/>
                Pleasant Grove Product Center <br/>
                Recall—Important Safety Information</p>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;