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
      <StaticImage src="https://cdn.discordapp.com/attachments/1465878963015516293/1488329920961708275/HOA.png?ex=69cc62c0&is=69cb1140&hm=a89d1de063bcc7e68dd3e135d1761dde4308db9317c78419b239519b1ec81191&" alt="A dinosaur" />
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
