import '../styles/App.scss';

import logo from '../images/owenLogoTrans.png'

function Header() {
    return (
        <header className="header">
            <img className="header__img" src={logo} alt="logo owen wilson's wow" />
        </header>
    );
}

export default Header;