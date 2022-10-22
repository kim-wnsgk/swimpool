import { useEffect, useState } from 'react';
import styles from './Rank.module.css';
import Banner from '../components/Banner';
import data from '../sourse.json';
import { Link, useParams } from 'react-router-dom';


function Rank({ match }) {
    const { loc } = useParams();
    useEffect(() => {
        data.sort();
    }, []);
    return (
        <div className={styles.container}>
            <Banner />
            <h1>{loc} 수영장을 검색합니다.</h1>
            {data.map((location) => {
                return <div>
                    {location.addr.indexOf(loc) != -1 ? (
                        <div className={styles.block}>
                            <a href={`https://search.naver.com/search.naver?query=${location.name}`} className={styles.blockLink}>{location.name}</a>
                            <div>{location.addr}</div>
                        </div>

                    ) : null}
                </div>

            })}
        </div >
    );
}

export default Rank;