import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {
    return (
        <div className={styles.container}>
            <Banner />
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <Link to="/about" className={styles.blockLink}>수영에 대하여</Link>
                </div>
                <div className={styles.block}
                    onClick={() => console.log("press")}>
                    <Link to="/list" className={styles.blockLink}>전국 지역별 수영장</Link>
                </div>
            </div>
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <Link to="/method" className={styles.blockLink}>영법</Link>
                </div>
                <div className={styles.block}
                    onClick={() => console.log("press")}>
                    <Link to="/coution" className={styles.blockLink}>주의사항</Link>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Home;