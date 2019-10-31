import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <>
    <Helmet
      link={[{ rel: "canonical", href: "https://www.glennerik.no/contact" }]}
    />
    <SEO title="Get in touch" pageName="contact" />
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title is-size-1 has-text-centered">Get in touch</h1>
          <noscript>
            <div className="notification is-danger has-margin-top-50 has-margin-bottom-50 has-text-centered">
              To use this form you must enable javascript
            </div>
          </noscript>
          <div className="content">
            <p>
              <Link to="/">www.glennerik.no</Link> &mdash; Project suggestions
              with details are welcomed
            </p>
          </div>
          <form name="www.glennerik.no" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="www.glennerik.no" />
            <input type="hidden" name="site" value="www.glennerik.no" />

            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  name="name"
                  className="input"
                  type="text"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  name="email"
                  className="input"
                  type="email"
                  placeholder="Your email address"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <input
                  name="subject"
                  className="input"
                  type="text"
                  placeholder="Request subject"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  name="message"
                  className="textarea"
                  placeholder="Email message"
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-link">
                  Send
                </button>
              </div>
              <div className="control">
                <button type="reset" className="button is-text">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  </>
)

export default ContactPage
