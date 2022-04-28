
import Styles from './Pagination.module.scss';

function Pagination({ pageCount }) {
  return (
    <div className={Styles.pagination}>
        <div className={Styles.pagination__wrapper}>
            <div className={Styles.pagination__element}></div>
            {
                new Array(pageCount).fill(1).map((el, index) => (
                    <div className={Styles.pagination__element} key={index}>
                        <span>{ index + 1 }</span>
                    </div>
                ))
            }
            <div className={Styles.pagination__element}></div>
        </div>
    </div>
  )
}

export default Pagination