import styles from './Tabs.module.css';
import React, { useState } from 'react';

export const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Quote 1',
            title: 'A linea.'
        },
        {
            id: 2,
            tabTitle: 'Quote 2',
            title: 'A capite ad calcem.'
        },
        {
            id: 3,
            tabTitle: 'Quote 3',
            title: 'A casu ad casum.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className={styles.content}>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <p className={styles.title}>{tab.title}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}
