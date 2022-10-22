import styles from './Banner.module.css'
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div>
            <div className={styles.title}>
                <Link
                    to='/'
                    style={{ textDecoration: 'none', color: 'white' }}
                >swimmers</Link>
            </div>
        </div>

    );
}

export default Banner;