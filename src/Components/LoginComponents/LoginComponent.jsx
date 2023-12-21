import "./LoginComponent.css"
const LoginComponent = () => {
    return (
        <div>
            <div>
                <div class="container">
                    <div class="hero-area2">
                    <div class="form-box">
                        <input type="email" name="" placeholder="Enter your email"/>
                        <br/>
                        <input type="password" name="" placeholder="Enter Password"/>
                        <br/>
                        <button class="login">Login</button>
                        {/* <p>Don't have an account? <br/> <span>Sign up</span> here!</p> */}
                        <button>Go Back</button> 
                        <button>Sign Up</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;