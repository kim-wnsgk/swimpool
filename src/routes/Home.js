import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import Banner from '../components/Banner'

function Home() {
    return (
        <div className={styles.container}>
            <Banner />
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <Link to="/rank" className={styles.blockLink}>여행지 순위</Link>
                </div>
                <div className={styles.block}
                    onClick={() => console.log("press")}>
                    <Link to="/location" className={styles.blockLink}>지도</Link>
                </div>
            </div>

        </div >
    );
}

export default Home;