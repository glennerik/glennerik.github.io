import React from "react"

export default () => (
  <>
    <h2 className="subtitle is-size-3">
      Q &amp; A
      <span className="help">
        Or <u>summary of qualifications</u> is another way to look at it
      </span>
    </h2>

    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: 0 }}>
        Main occupation?
      </h3>
      Freelance React
      <span className="icon">
        <i className="fab fa-react" />
      </span>{" "}
      and Node
      <span className="icon">
        <i className="fab fa-node-js" />
      </span>{" "}
      developer
    </div>

    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: 0 }}>
        For hire?
      </h3>
      Yes, given the right project
    </div>

    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: 0 }}>
        OK cool, how can we get in touch?
      </h3>
      Send me a DM on{" "}
      <a
        target="_blank"
        href="https://www.linkedin.com/in/glennerik/"
        rel="noopener noreferrer"
      >
        LinkedIn
        <span className="icon">
          <i className="fab fa-linkedin" />
        </span>
      </a>{" "}
      or even{" "}
      <a
        target="_blank"
        href="https://twitter.com/glenneriks"
        rel="noopener noreferrer"
      >
        Twitter
        <span className="icon">
          <i className="fab fa-twitter" />
        </span>
      </a>
    </div>

    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: 0 }}>
        Any religion?
      </h3>
      Simulation theory
    </div>
  </>
)
