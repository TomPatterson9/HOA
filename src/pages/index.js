import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundimage: "url(./logo.png)"

}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}



const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        HOA
        <br />
        
      </h1>
      <StaticImage src="../images/HOA.png" alt="A dinosaur" />
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
