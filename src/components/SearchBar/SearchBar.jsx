import Cola from '../../assets/cocacola.svg'
import Disney from '../../assets/disney.svg'
import Fb from '../../assets/fb.svg'
import Microsoft from '../../assets/microsoft.svg'
import Sony from '../../assets/sony.svg'
import styles from './SearchBar.module.css'

function SearchBar() {
    return (
        <>
            <div className={styles.search}>
                <div className="container">
                    <div className={styles.search_inner}>
                        <div className={styles.head}>
                            <h1 className='title'>
                                Один клик и работа в кармане
                            </h1>
                        </div>
                        <div >
                            <form className={styles.form} action="">
                                <input className={styles.job} type="text" placeholder='Должность или компания' />
                                <input className={styles.location} type="text" placeholder='Город, Страна' />
                                <button className={styles.btn_search} type="submit">Поиск</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.logos}>
                <div className="container">
                    <div className={styles.container_inner}>
                        <p>Помогаем найти работу:</p>
                        <div className={styles.logo_items}>
                            <img src={Disney} alt="logo" />
                            <img src={Fb} alt="logo" />
                            <img src={Microsoft} alt="logo" />
                            <img src={Sony} alt="logo" />
                            <img src={Cola} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchBar;
