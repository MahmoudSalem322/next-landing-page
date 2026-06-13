import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import styles from "./Services.module.css";
import React from "react";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FaCode size={40} />,
      title: "تطوير الويب",
      desc: "بناء مواقع سريعة وقابلة للتوسع باستخدام أحدث تقنيات Next.js و React.",
    },
    {
      id: 2,
      icon: <FaMobileAlt size={40} />,
      title: "تصميم متجاوب",
      desc: "تضمن واجهات موقعك تجربة مستخدم مثالية على جميع الشاشات والجوالات.",
    },
    {
      id: 3,
      icon: <FaRocket size={40} />,
      title: "تحسين الأداء (SEO)",
      desc: "تهيئة الموقع لمحركات البحث لضمان ظهور مشروعك في الصفحات الأولى وسرعة تحميل فائقة.",
    },
  ];
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={`container`}>
        <div className={styles.sectionHeader}>
          <h2>خدماتنا والميزات</h2>
          <p>نقدم حلولاً برمجية متكاملة مخصصة لنمو أعمالك وتفوقك الرقمي</p>
        </div>
        <div className={styles.cardsGrid}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
