import { useState } from "react";
import styles from './style.module.css'

export default function Tab({
  tabItems,
}: {
  tabItems: {
    key: string,
    label: string,
    content: React.ReactNode,
  }[]
}) {
  const [activeTab, setActiveTab] = useState(tabItems[0].key);

  return (
    <div>
      <div className={styles.tabContainer}>
        {tabItems.map((tab) => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={activeTab === tab.key ? styles.activeTab : ''}>{tab.label}</button>
        ))}
      </div>
      <div>{tabItems.find((tab) => tab.key === activeTab)?.content}</div>
    </div>
  )
}