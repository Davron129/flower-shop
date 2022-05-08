import { useState} from 'react'
import Flower1 from '../../assets/images/flower2.png'
import Styles from './Card.module.scss'
import { ReactComponent as BasketIcon } from '../../assets/icons/basket.svg' 
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg' 
import { ReactComponent as SaveIcon} from '../../assets/icons/save.svg' 

function Card() {
  const [ isLiked, setIsLiked ] = useState(false);
  const [ isSaved, setIsSaved ] = useState(false);
  const [ hasAction, setHasAction ] = useState(false);

  const handleLike = () => {
    if(isLiked) {
      !isSaved && setHasAction(false)
      setIsLiked(false)
    } else {
      setIsLiked(true)
      setHasAction(true)
    }
  }

  const handleSave = () => {
    if(isSaved) {
      !isLiked && setHasAction(false)
      setIsSaved(false)
    } else {
      setHasAction(true)
      setIsSaved(true)
    }
  }

  return (
    <div className={Styles.card}>
        <div className={Styles.card__body + " " + Styles.active}>
          <div className={Styles.card__img} onDoubleClick={() => handleLike()}>
            <img src={ Flower1 } alt="Flower 1" />

            <div className={`${Styles.card__actions} ${hasAction ? Styles.card__active : ""}`}>
              <div className={Styles.icon} onClick={() => handleSave()}>
                <BasketIcon fill={isSaved ? "#46A358" : "#000"} />
              </div>
              <div className={Styles.icon + " " + Styles.liked} onClick={() => handleLike()}>
                <SaveIcon fill={isLiked ? "red" : "#000"} />
              </div>
              <div className={Styles.icon}>
                <SearchIcon />
              </div>
            </div>

          </div>

          <div className={Styles.card__content}>
            <div className={Styles.item__name}>
              <span>Barberton Daisy</span>
            </div>
            <div className={Styles.item__price}>
              <span>$119.00</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card