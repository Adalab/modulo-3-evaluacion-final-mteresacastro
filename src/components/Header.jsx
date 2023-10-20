import wowOwen from '../images/wowOwen.png'
import wow from '../images/wow.ico'

function Header() {
    return (
        <>
            <div className="imageDiv">
                <img src={wowOwen} alt="imagen de la cara de Owen Wilson" />
                <img src={wow} alt="icono letras WOW!" />
            </div>
            <h1>Owen Wilson`s WOW </h1>
        </>
    );
}

export default Header;