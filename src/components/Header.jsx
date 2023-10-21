import wowOwen from '../images/wowOwen.png'
import wow from '../images/wow.ico'

function Header() {
    return (
        <header>
            <div className="imageDiv">
                <img src={wowOwen} alt="imagen de la cara de Owen Wilson" />
                <img src={wow} alt="icono letras WOW!" />
            </div>
            <h1>Owen Wilson`s WOW </h1>
        </header>
    );
}

export default Header;