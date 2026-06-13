"use client"; // ضرورية جداً لأي مكون يحتوي على تفاعل (Hooks)
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContent}`}>
        {/* الشعار هنا الان  */}
        <div className={styles.logo}>
          <Link href="/">شِعاري</Link>
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <Link href="/">الرئيسية</Link>
          </li>
          <li>
            <Link href="#services">خدماتنا</Link>
          </li>
          <li>
            <Link href="#contact">اتصل بنا</Link>
          </li>
        </ul>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {/* الشرط هنا: 
          إذا كانت isOpen تساوي true، اعرض أيقونة الإغلاق (X).
          وإذا كانت false، اعرض أيقونة القائمة (Bars).
        */}
          {isOpen ? (
            <FaTimes size={24} color="#fff" />
          ) : (
            <FaBars size={24} color="#fff" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
