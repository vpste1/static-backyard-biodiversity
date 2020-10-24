import React from "react"
import { Helmet } from "react-helmet"

import styles from "./index.module.scss"

import Hero from "../../assets/hero.svg"
import ColourGrid from "../../assets/colourGrid.svg"
import Bird from "../../assets/bird1.svg"
import Bug from "../../assets/bug1.svg"

export default function Home() {
  return (
    <main className={styles.container}>
      <Helmet>
        <title>Backyard Biodiversity</title>
      </Helmet>

      <div className={styles.heroBar}>
        <h1>Backyard Biodiversity</h1>
        <Hero className={styles.imgLarge} />
        <div className={styles.definition}>
          <h2>Biodiversity</h2>
          <span className={styles.italicised}>noun</span>
          <span className={styles.numberedItem}>
            <span>
              The Earth’s various numbers of species, including plants, animals,
              and microorganisms.
            </span>
          </span>
        </div>
      </div>
      <div className={styles.body}>
        <ColourGrid className={styles.imgLarge} />
        <div className={`${styles.textBox}`}>
          <div className={styles.innerWrapper}>
            <h2>Why it's important</h2>
            <p>
              Biodiversity facilitates healthy ecosystems, and healthy
              ecosystems increase many of the natural services we rely on;
              including clean water, air, healthy soil and diversity of food
              sources.
              <br />
              <br />
              As city landscapes grow, available green spaces are decreasing -
              biodiversity levels are dropping and many plant and animal species
              that we rely on are losing their homes.
            </p>
          </div>
        </div>
        <Bird className={styles.imgSmall} />
        <div className={`${styles.textBox}`}>
          <div className={styles.innerWrapper}>
            <h2>Backyard biodiversity</h2>
            <p>
              Biodiversity can do great things in your backyard.
              <br />
              <br />
              Urban backyards large or small can help increase levels of
              biodiversity, wildlife species and support healthy ecosystems with
              just a few select garden choices.
            </p>
          </div>
        </div>
        <Bug className={styles.imgSmall} />
      </div>
    </main>
  )
}
