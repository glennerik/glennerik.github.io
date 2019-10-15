// ! Make <GoogleAnalytics pageview="index" />

import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  GlennFig,
  SummaryShort,
  SummaryLong,
  Projects,
  EndNotes,
} from "../components/indexPage/"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Helmet link={[{ rel: "canonical", href: "https://www.glennerik.no" }]} />
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title is-size-1 has-text-centered has-margin-bottom-50">
            Glenn-Erik Sandbakken
          </h1>
          <div className="columns">
            <div className="column is-narrow">
              <GlennFig />
            </div>
            <div className="column">
              <SummaryShort />
            </div>
          </div>
          <SummaryLong />
          <Projects />
          <EndNotes />
        </div>
      </section>
    </Layout>
  </>
)

export default IndexPage
