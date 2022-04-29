// import FindMoreImg from '../../assets/images/flower5.png';
import Styles from './FindMore.module.scss';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';

function Card() {
  return (
    <div className={Styles.card}>
        <div className={Styles.card__wrapper}>
            {/* rasmning orqa foni transparent bo`lmagani uchun vaqtincha qoyilmadi */}
            {/* <img src={ FindMoreImg } alt="summer cactus and succulents" className={Styles.card__img} /> */}

            <div className={`${Styles.round} ${Styles.round1}`}></div>
            <div className={`${Styles.round} ${Styles.round2}`}></div>
            
            <div className={Styles.card__body}>
                <div className={Styles.card__title}>
                    <span>SUMMER CACTUS <br /> & SUCCULENTS</span>
                </div>
                <div className={Styles.card__description}>
                    <span>We are online plant shop offering a wide range of cheap and trendy plants</span>
                </div>
                <button className={`${Styles.btn} ${Styles.card__btn}`}>
                    <span>Find More</span>
                    <div className={Styles.icon}>
                        <ArrowRight />
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card