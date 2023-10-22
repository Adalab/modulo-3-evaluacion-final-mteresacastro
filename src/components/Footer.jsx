import '../styles/App.scss';
import wowOwen from '../images/wowOwen.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__img">
                <img className="footer__img--Owen" src={wowOwen} alt="icono letras WOW!" />
            </div>
            <span className="footer__text"> © Owen Wilson 2023</span>
        </footer>
    );
};

export default Footer;