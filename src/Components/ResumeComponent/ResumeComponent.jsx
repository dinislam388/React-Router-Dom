import "./ResumeComponent.css"
import {Link} from "react-router-dom"
const ResumeComponent = () => {
    return (
        <>
        <div className="error">
            <h1 className="unexpected">Unexpected Application Error!</h1>
            <h1 className="error404">404 Not Found</h1>
            <h3 className="errorh3">💿 Hey User 👋</h3>
            <p>You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.</p>
            <Link to={"/"}>
            <button className="errorBackBtn">Back To Home</button>
            </Link>
            
        </div>
        
        </>
    );
};

export default ResumeComponent;