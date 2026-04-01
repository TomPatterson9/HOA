import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./ProductCard.module.css"

export const ProductCard = ({ title, price, description }) => (
  <div className={styles.card}>
    <StaticImage src="../images/HOA.png" alt="product" width={200} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className={styles.price}>{price}</div>
  </div>
)