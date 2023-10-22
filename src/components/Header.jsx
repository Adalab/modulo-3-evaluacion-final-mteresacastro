import '../styles/App.scss';
import wowOwen from '../images/wowOwen.png'

function Header() {
    return (
        <header className="header">
            <div className="header__img">
                <img className="header__img--Owen" src={wowOwen} alt="imagen de la cara de Owen Wilson" />
            </div>
            <h1 className="header__h1">Owen Wilson`s WOW </h1>
        </header>
    );
}

export default Header;