import styles from "./Stats.module.css";
import React from "react";

const Stats = () => {
  const statsData = [
    { id: 1, number: "+50", label: "مشروع ناجح" },
    { id: 2, number: "+25", label: "عميل سعيد" },
    { id: 3, number: "+5", label: "سنوات خبرة" },
    { id: 4, number: "+15k", label: "ساعة كود" },
  ];
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {statsData.map((stat) => (
            <div key={stat.id} className={styles.statBox}>
              <h2 className={styles.statNumber}>{stat.number}</h2>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
