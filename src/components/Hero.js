import * as React from "react"
import * as styles from "./Hero.module.css"

export const Hero = () => (
  <section className={styles.hero}>
    <h1>Underground Access</h1>
    <p>Minimal. Secure. Direct.</p>
    <button>Browse Listings</button>
  </section>
)