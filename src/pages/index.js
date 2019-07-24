import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
export default () => (
  <Layout>
    <SimleHero>
      <Banner
        title="continue exploring"
        info="“The gladdest moment in human life is a departure into unknown lands.” – Sir Richard Burton"
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimleHero>
    <About />
  </Layout>
)
