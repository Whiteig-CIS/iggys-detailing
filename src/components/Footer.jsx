import '../css/Footer.css';
import linkedinLogo from "../images/linkedinLogo.svg";
import githubLogo from "../images/githubLogo.svg";
import phoneLogo from "../images/phoneLogo.svg";

const Footer = () => {
    return (
       
        
        <footer id="main-footer">
            <section id="footer-section" className="columns">
                <div className="footer-third">
                        <div>
                            <a href="https://www.linkedin.com/in/isaac-white31/">
                                <div className='social-logo-div'>
                                    <img src={linkedinLogo} alt="linkedin"></img>
                                </div>
                            </a>
                        </div>
                </div>
                <div className="footer-third">
                        <div>
                            <a href="https://github.com/Whiteig-CIS">
                                <div className='social-logo-div'>
                                    <img src={githubLogo} alt="github"></img>
                                </div>
                            </a>
                        </div>
                </div>
                <div className="footer-third">
                        <div>
                            <a href="tel:+18034878156">
                                <div className='social-logo-div'>
                                    <img src={phoneLogo} alt="phone"></img>
                                </div>
                            </a>
                        </div>
                </div>
           </section>
        </footer>
    
    );
};

export default Footer;