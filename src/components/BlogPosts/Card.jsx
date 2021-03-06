import CardImg from '../../assets/images/01.png';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg';
import Styles from './BlogPost.module.scss';

function Card() {
  return (
    <div className={Styles.card}>
        <div className={Styles.card__body}>
            <div className={Styles.card__img}>
                <img src={CardImg} alt="Flower" />
            </div>

            <div className={Styles.card__content}>
                <div className={Styles.card__data}>
                    <span className={Styles.date}>September | </span>
                    <span className={Styles.read__time}>Read in 6 minutes</span>
                </div>
                <div className={Styles.title}>
                    <span>Cactus & Succulent Care Tips</span>
                </div>
                <div className={Styles.description}>
                    <span>Cacti are succulents are easy care plants for any home or patio. </span>
                </div>
                <div className={Styles.read_more}>
                    <span>Read More</span>
                    <div className={Styles.icon}>
                        <ArrowRight />
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Card