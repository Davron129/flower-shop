import Styles from './Footer.module.css'
import Logo from '../../assets/images/Logo.png'

const Footer = () => {
    return (
        <div className={ Styles.footer }>
            <div className={ Styles.container }>
                <div className={ Styles.footer__news }>
                    <div className={ Styles.news__cards }>
                        {
                            new Array(3).fill(1).map((el, index) => (
                                <div className={ Styles.card } key={"new__card" + index}>
                                    <div className={ Styles.card__img }>
                                        <span></span>
                                    </div>
                                    <div className={ Styles.card__body }>
                                        <span className={ Styles.card__title }>Garden Care</span>
                                        <div className={ Styles.card__content }>
                                            We are an online plant shop offering a wide range of cheap and trendy plants.
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={ Styles.news__form }>
                        <p className={ Styles.form__title }>Would you like to join newsletters?</p>
                        <form>
                            <input type="text" placeholder='enter your email address...' />
                            <button>Join</button>
                        </form>
                        <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                    </div>
                </div>
                <div className={ Styles.footer__contacts }>
                    <div className={ Styles.footer__logo }>
                        <img src={ Logo } alt="Greenshop logo" />
                    </div>
                    <div className={ Styles.footer__address }>
                        <address>
                            70 West Buckingham Ave.
                            Farmingdale, NY 11735
                        </address>
                    </div>

                    <div className={ Styles.footer__email }>
                        <span>contact@greenshop.com</span>
                    </div>

                    <div className={ Styles.footer__phone }>
                        <span>+88 01911 717 490</span>
                    </div>
                </div>
                <div className={ Styles.footer__nav }>
                    <div className={ Styles.footer__menu }>
                        <span className={ Styles.menu__title }>My Account</span>
                        <ul>
                            <li>My Account</li>
                            <li>Our stores</li>
                            <li>Contact us</li>
                            <li>Careeer</li>
                            <li>Specials</li>
                        </ul>
                    </div>
                    <div className={ Styles.footer__menu }>
                        <span className={ Styles.menu__title }>My Account</span>
                        <ul>
                            <li>Help Center</li>
                            <li>How ot Buy</li>
                            <li>Shipping & Delivery</li>
                            <li>Product Policy</li>
                            <li>How ot Return</li>
                        </ul>
                    </div>
                    <div className={ Styles.footer__menu }>
                        <span className={ Styles.menu__title }>My Account</span>
                        <ul>
                            <li>House Plants</li>
                            <li>Potter Plants</li>
                            <li>Seeds</li>
                            <li>Small Plants</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div className={ Styles.footer__socials }>
                        <span className={ Styles.socials__title }>Social Media</span>
                        <ul className={ Styles.socials__menu }>
                            <li><div><span></span></div></li>
                            <li><div><span></span></div></li>
                            <li><div><span></span></div></li>
                            <li><div><span></span></div></li>
                            <li><div><span></span></div></li>
                        </ul>
                        <div className={ Styles.footer__payments }>
                            <span className={ Styles.payments__title }>We accept</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer