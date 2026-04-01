import * as React from "react"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { ProductCard } from "../components/ProductCard"

const IndexPage = () => {
  const products = [
    { title: "Item Alpha", price: "$1200", description: "High quality asset." },
    { title: "Item Beta", price: "$850", description: "Limited availability." },
    { title: "Item Gamma", price: "$2300", description: "Premium tier." },
  ]

  return (
    <main style={{ background: "#0d0d0d", minHeight: "100vh" }}>
      <Header />
      <Hero />

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
        padding: "20px",
      }}>
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </section>
    </main>
  )
}

export default IndexPage