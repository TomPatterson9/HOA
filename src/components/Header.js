import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./Header.module.css"

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>BLACKMARKET</div>
    <nav>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/products" className={styles.link}>Products</Link>
    </nav>
  </header>
)