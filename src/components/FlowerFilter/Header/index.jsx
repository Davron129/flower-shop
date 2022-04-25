import { useSearchParams } from 'react-router-dom';
import Styles from './Header.module.scss';

function Header() {
  let [searchParams, setSearchParams] = useSearchParams({ sort: "all"});

  const changeSearchParams = (param) => {
    setSearchParams(param);
  }

  return (
    <div className={Styles.header}>
        <div className={Styles.header__left}>
          <ul className={Styles.header__tab}>
              <li className={`${Styles.tab__item} ${searchParams.get("sort") === "all" && Styles.active}`} onClick={() => changeSearchParams({ sort: "all"})}>
                <span>All Plants</span>
              </li>
              <li className={`${Styles.tab__item} ${searchParams.get("sort") === "new" && Styles.active}`} onClick={() => changeSearchParams({ sort: "new"})}>
                <span>New Arrivals</span>
              </li>
              <li className={`${Styles.tab__item} ${searchParams.get("sort") === "sale" && Styles.active}`} onClick={() => changeSearchParams({ sort: "sale"})}>
                <span>Sale</span>
              </li>
          </ul>
        </div>

        <div className={Styles.header__right}>
          <div className={Styles.header__srort}>
            <span>Sort by: Default sorting</span>
          </div>
        </div>
    </div>
  )
}

export default Header