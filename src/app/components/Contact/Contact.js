"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import React from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // منع المتصفح من إعادة تحميل الصفحة الافتراضية

    // هنا مستقبلاً نقوم بربط الـ API لإرسال البيانات للخادم
    console.log("البيانات المرسلة:", formData);

    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // تصفير الحقول بعد الإرسال
  };
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>تواصل معنا اليوم</h2>
            <p>
              لديك فكرة مشروع أو استفسار؟ لا تتردد في مراسلتنا، وسيقوم فريقنا
              البرمجي بالرد عليك في أقرب وقت ممكن.
            </p>
            <div className={styles.infoItems}>
              <p>📍 غزة، فلسطين</p>
              <p>📧 info@mysite.com</p>
              <p>📞 +970 599 000 000</p>
            </div>
          </div>
        </div>
        <div className={styles.contactFormWrapper}>
          {isSubmitted ? (
            <div className={styles.successMessage}>
              <h3>🎉 شكرًا لتواصلك معنا!</h3>
              <p>تم استلام رسالتك بنجاح، وسنتواصل معك قريبًا.</p>
            </div>
          ) : (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">الاسم الكامل</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">نص الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                إرسال الرسالة
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
