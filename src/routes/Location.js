import React from 'react';
import { NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import styles from './Location.module.css';
import Banner from '../components/Banner'

function Location() {
    return (
        <div className={styles.container}>
            <Banner />
            <div>Maps</div>
            <div className={styles.mapContainer}>
                <RenderAfterNavermapsLoaded
                    ncpClientId={"ukjpwq4a8c"}
                    error={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading...</p>}
                >
                    <NaverMap
                        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                        className={styles.map}
                        defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
                        defaultZoom={16}
                    />
                </RenderAfterNavermapsLoaded>
            </div>
        </div>
    );
}

export default Location;
