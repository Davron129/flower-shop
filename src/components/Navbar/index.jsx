import Logo from '../../assets/images/Logo.png';
import Styles from './Navbar.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'; 
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg'; 
import { ReactComponent as LoginIcon } from '../../assets/icons/Logout.svg'; 

const Navbar = () => {
    return (
        <nav className={Styles.nav}>
            <div className={Styles.container}>
                <div className={Styles.nav__left}>
                    <div className={Styles.nav__logo}>
                        <img src={Logo} alt="Green Shop Logo" />
                    </div>
                </div>
                <div className={Styles.nav__middle}>
                    <ul className={Styles.nav__menu}>
                        <li className={Styles.nav__item}>
                            <a href="/" className={`${Styles.nav__link} ${Styles.active}`}>Home</a>
                        </li>
                        <li className={Styles.nav__item}>
                            <a href="/" className={Styles.nav__link}>Shop</a>
                        </li>
                        <li className={Styles.nav__item}>
                            <a href="/" className={Styles.nav__link}>Plant Care</a>
                        </li>
                        <li className={Styles.nav__item}>
                            <a href="/" className={Styles.nav__link}>Blogs</a>
                        </li>
                    </ul>
                </div>
                <div className={Styles.nav__right}>
                    <div className={Styles.search}>
                        <SearchIcon />
                    </div>
                    <div className={Styles.basket}>
                        <BasketIcon />
                    </div>
                    <div className={Styles.login + " " + Styles.main__btn }>
                        <div className={Styles.login__icon}>
                            <LoginIcon />
                        </div>
                        <span>Login</span>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
