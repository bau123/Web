import React from 'react'
import styles from "./style.module.css"
import BlockTop from './top';
import BlockBottom from './bottom/'


const SectionTop = ({children}) => (
    <section className={styles["sectionBlock-one-third"]}>
        {children}
    </section>
);

const SectionBottom = ({children}) => (
    <section className={styles["sectionBlock-two-third"]}>
        {children}
    </section>
);

const Content = () => {
    return (
        <div className={styles.content}>
            <SectionTop>
                <BlockTop/>
            </SectionTop>
            <SectionBottom>
                <BlockBottom/>
            </SectionBottom>
        </div>
    )
};


export default Content;