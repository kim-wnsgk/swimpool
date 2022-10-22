import { useEffect, useState } from 'react';
import styles from './Location.module.css';
import Banner from '../components/Banner';
import data from '../sourse.json';
import { Link } from 'react-router-dom';


function Rank() {
    const [loading, setLoading] = useState(true);
    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '072f8f8eebmsh895eff4b244aad0p18de65jsn8ffc56ba2d8d',
            'X-RapidAPI-Host': 'travel-places.p.rapidapi.com'
        }
    };

    const getData = async () => {
        fetch('https://travel-places.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setLoading(false);
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        getData();
        data.sort();
    }, []);
    return (
        <div className={styles.container}>
            <Banner />
            <h1>rank</h1>
            {loading ? <div>loading...</div> : null}
            {data.map((location) => {
                return <div>
                    <a href={`https://search.naver.com/search.naver?query=${location.name}`} className={styles.blockLink}>{location.name}</a>
                    {location.addr} 보기
                </div>

            })}
        </div >
    );
}

export default Rank;