import "./ContactComponents.css"
const ContactComponents = () => {
    return (
        <div>
            <div className="contactPage">
                <h1 className="contacth1">Contact Us</h1>
                <p className="contactP">Email: <a href="mailto:info@example.com">info@example.com</a></p>
                <p className="contactP">Phone: +1 (555) 123-4567</p>
                <p className="contactP">Address: 123 Main Street, Cityville, State, Zip Code</p>

                <form action="/submit" method="post">
                    <label className="contactLabel" htmlFor="name">Name:</label>
                    <input className="contactInput" type="text" id="name" name="name" required />

                    <label className="contactLabel" htmlFor="email">Email:</label>
                    <input className="contactInput" type="email" id="email" name="email" required />

                    <label className="contactLabel" htmlFor="message">Message:</label>
                    <textarea className="textareaContact" id="message" name="message" required></textarea>

                    <button className="contactSubmitBtn" type="submit">Submit</button>
                </form>

                <p className="contactFollowText">Follow us on social media:</p>
                <ul className="contactUl">
                    <li><a href="https://www.facebook.com/example">Facebook</a></li>
                    <li><a href="https://twitter.com/example">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/company/example">LinkedIn</a></li> 
                </ul>  
            </div>
        </div>
    );
};

export default ContactComponents;