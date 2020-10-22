import React from "react"
import { Helmet } from "react-helmet"
import styles from "./index.module.css"
export default function Home() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Backyard Biodiversity</title>
      </Helmet>
      <div className={styles.centeredContent}>
        <img
          className={styles.image}
          alt="logo"
          src={require("../../static/logo_512.png")}
        />
        <h1>Coming soon</h1>
      </div>
    </div>
  )
}
