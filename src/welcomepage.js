import Header from "./header";
import Footer from "./footer";
import RegisterBody from "./registerbody";

export default function Welcome() {
    return (
        <div>
            <Header name = "Welcome"/>
            <RegisterBody/>
            <Footer/>
        </div>

    ); 
}