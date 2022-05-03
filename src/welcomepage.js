import Header from "./header";
import Footer from "./footer";
import RegisterBody from "./registerbody";
import './welcomepage.css'

export default function Welcome() {
    return (
        <div>
            <Header name = "Welcome to JustInCase"/>
            <RegisterBody/>
            <div className="footer">
                <Footer/>
            </div>
        </div>

    ); 
}