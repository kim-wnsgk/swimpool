import { useEffect, useState } from 'react';
import styles from './List.module.css';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

function List() {
    return (
        <div className={styles.container}>
            <Banner />
            <h1>지역을 선택해주세요</h1>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <Link to="/rank/서울특별시" loc="서울특별시" className={styles.link}>서울특별시</Link>
                </div>
                <div className={styles.box}>
                    <Link to="/rank/인천광역시" loc="인천광역시" className={styles.link}>인천광역시</Link>
                </div>
                <div className={styles.box}>
                    <Link to="/rank/경기도" loc="경기도" className={styles.link}>경기도</Link>
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <Link to="/rank/대전광역시" loc="대전광역시" className={styles.link}>대전광역시</Link>
                </div>
                <div className={styles.box}>
                    <Link to="/rank/충청북도" loc="충청북도" className={styles.link}>충청북도</Link>
                </div>
                <div className={styles.box}>
                    <Link to="/rank/충청남도" loc="충청남도" className={styles.link}>충청남도</Link>
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <Link to="/rank/광주광역시" loc="광주광역시" className={styles.link}>광주광역시</Link>
                </div>
                <div className={styles.box}>
                    <Link to="/rank/전라북도" loc="전라북도" className={styles.link}>전라북도</Link>
                </div>
                <div className={styles.box}>
                    <Link to="/rank/전라남도" loc="전라남도" className={styles.link}>전라남도</Link>
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <Link to="/rank/대구광역시" loc="대구광역시" className={styles.link}>대구광역시</Link>
                </div>
                <div className={styles.box}>
                    <Link to="/rank/경상북도" loc="경상북도" className={styles.link}>경상북도</Link>
                </div>
                <div className={styles.box}>
                    <Link to="/rank/경상남도" loc="경상남도" className={styles.link}>경상남도</Link>
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <Link to="/rank/부산광역시" loc="부산광역시" className={styles.link}>부산광역시</Link>
                </div>
                <div className={styles.box}>
                    <Link to="/rank/울산광역시" loc="울산광역시" className={styles.link}>울산광역시</Link>
                </div>
                <div className={styles.box}>
                    <Link to="/rank/제주특별자치도" loc="제주특별자치도" className={styles.link}>제주도</Link>
                </div>
            </div>
        </div >
    );
}

export default List;