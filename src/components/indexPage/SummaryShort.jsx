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
      Freelance React <i className="fab fa-react" /> and Node{" "}
      <i className="fab fa-node-js" /> developer
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
        <span className="icon">
          <i className="fab fa-twitter" />
        </span>
      </a>
    </div>

    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: 0 }}>
        You look young, how young are you really?
      </h3>
      I know, it&#39;s wild, I&#39;m almost under fourty!
    </div>
  </>
)
