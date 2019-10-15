import React from "react"

export default () => (
  <>
    <h2 className="subtitle is-size-3">
      Q &amp; A
      <span className="help">
        Or <u>summary of qualifications</u> is another way to look at it
      </span>
    </h2>

    <h3 className="subtitle">Main occupation?</h3>
    <div className="has-margin-bottom-30">
      Freelance React &amp; Node developer
    </div>

    <h3 className="subtitle">For hire?</h3>
    <div className="has-margin-bottom-30">Yes, given the right project</div>

    <h3 className="subtitle">OK cool, how can we get in touch?</h3>
    <div className="has-margin-bottom-30">
      Send me a DM on{" "}
      <a
        target="_blank"
        href="https://www.linkedin.com/in/glennerik/"
        rel="noopener noreferrer"
      >
        LinkedIn{" "}
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
        Twitter{" "}
        <span className="icon">
          <i className="fab fa-twitter" />
        </span>
      </a>
    </div>

    <h3 className="subtitle">You look young, how young are you really?</h3>
    <div className="has-margin-bottom-30">
      I know, it&#39;s wild, I&#39;m almost under fourty!
    </div>

    <div className="columns">
      <div className="column is-narrow">
        <h3 className="subtitle">Any religion?</h3>
      </div>
      <div className="column is-italic">Simulation theory</div>
    </div>
  </>
)
