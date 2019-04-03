import React from 'react'
import Title, {TitleSize} from "../../../../../00-atoms/title";
import styles from './style.module.css'

const title = "Quam si explicavisset";


const Top = () => (
    <div className={styles.block}>
        <div className={styles.title}>
    <Title titleSize={TitleSize.LARGE}>
        {title}
    </Title>
        </div>
    </div>
);

export default Top;