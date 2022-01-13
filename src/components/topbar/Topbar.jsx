import "./topbar.css";
import TypeWriter from "typewriter-effect";
import {designation} from "../../data";

function Topbar() {
    return (
        <div className="topbar">
            <div className="topBanner">
                <div className="contacInfo">
                    <h2 className="contactLogo">
                        Contact me:
                    </h2>
                    <div className="contactDetails">
                        <div className="contact">
                            <a href="mailto:ayush.cs19@nsut.ac.in"><i className="fas fa-envelope"></i></a>
                        </div>
                        <div className="contact">
                            <a href="https://www.linkedin.com/in/ayush-kumar-521023191/"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="topBannerContent">
                    <h1 className="topBannerName">Ayush Kumar</h1>
                    <h2 className="topBannerDesignation">
                        <TypeWriter 
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: designation
                            }}
                        />
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Topbar
