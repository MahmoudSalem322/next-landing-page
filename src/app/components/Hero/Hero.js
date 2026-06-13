import React from "react";
import styles from "./Hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <h1>ابنِ مستقبلك البرمجي بأحدث التقنيات</h1>
          <p>
            نحن نساعدك على تحويل أفكارك إلى تطبيقات ويب حقيقية، سريعة، ومتجاوبة
            باستخدام أحدث تقنيات React و Next.js.
          </p>

          <div className={styles.buttonsGroup}>
            <Link href="#start" className={styles.primaryBtn}>
              ابدأ مشروعك
            </Link>
            <Link href="#services" className={styles.secondaryBtn}>
              خدماتنا
            </Link>
          </div>
        </div>
        {/* النصف الثاني: الصورة */}
        <div className={styles.imageContent}>
          {/* سنضع مربعاً رمزياً (Placeholder) مؤقتاً لحين استخدام صورة حقيقية */}
          <div className={styles.placeholder}>صورة المشروع هنا</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
