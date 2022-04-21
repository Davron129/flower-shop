import { Pagination,  Autoplay,EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Styles from './Header.module.scss'
import HeaderImg from '../../assets/images/flower1.png';
import HeaderImgBig from '../../assets/images/flower1big.png';


const Header = () => {
    return (
        <section className={Styles.header}>
            <div className={Styles.header__wrapper}>
                <div className={Styles.container}>
                    {/* Swiperga oraladi */}
                    <Swiper
                        pagination={true}
                        effect={"fade"}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        loop={true}

                        modules={[Pagination, Autoplay, EffectFade]}
                    >
                        {
                            Array(3).fill(1).map((el, index) => (
                                <SwiperSlide key={index}>
                                    <div className={Styles.header__container}>
                                        <div className={Styles.header__left}>
                                            <div className={Styles.header__content}>
                                                <p className={Styles.welcome__text}>Welcome to greenshop</p>
                                                <p className={Styles.motto}>
                                                    Let's make a <br /> 
                                                    better <span className={Styles.green}>planet</span>
                                                </p>
                                                <p className={Styles.content}>
                                                    We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                                                </p>
                                            </div>
                                            <button className={Styles.header__btn}>
                                                SHOP NOW
                                            </button>
                                        </div>

                                        <div className={Styles.header__right}>
                                            <img src={HeaderImg} alt="Flower 1" className={Styles.header__img1} />
                                            <img src={HeaderImgBig} alt="Flower 1" className={Styles.header__img2} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    {/* Swiperga oraladi */}
                </div>
            </div>
        </section>
    )
}

export default Header