import owencry from '../images/owencry.jpg'
import '../styles/App.scss'

function NotFound() {
    return (
        <div className="notfound">
            <h1 className="notfound__h1">¡WOW! La escena que estas buscando no existe ¡lo sentimos!</h1>
            <img className="notfound__img" src={owencry} alt="imagen de Owen Wilson llorando" />
        </div>
    );
}

export default NotFound;