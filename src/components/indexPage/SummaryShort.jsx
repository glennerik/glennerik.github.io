import React from "react"

export default () => (
  <>
    <h2 className="subtitle is-size-3">
      Q &amp; A
      <span className="help">
        Or <u>summary of qualifications</u> is another way to look at it
      </span>
    </h2>

    <div className="columns">
      <div className="column is-narrow">
        <h3 className="subtitle is-italic">Main occupation?</h3>
      </div>
      <div className="column">Freelance React / Node developer</div>
    </div>

    <div className="columns">
      <div className="column is-narrow">
        <h3 className="subtitle is-italic">For hire?</h3>
      </div>
      <div className="column">Yes, given the right project</div>
    </div>

    <div className="columns">
      <div className="column is-narrow">
        <h3 className="subtitle is-italic">
          OK Cool. How can we get in touch?
        </h3>
      </div>
      <div className="column">
        Send me a DM on{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/glennerik/"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        , or even{" "}
        <a
          target="_blank"
          href="https://twitter.com/glenneriks"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </div>

    <div className="columns">
      <div className="column is-narrow">
        <h3 className="subtitle is-italic">
          You look young, but how old are you really?
        </h3>
      </div>
      <div className="column">40+ =)</div>
    </div>

    <div className="columns">
      <div className="column is-narrow">
        <h3 className="subtitle is-italic">Religion?</h3>
      </div>
      <div className="column">Simulation theory</div>
    </div>

    <div className="columns">
      <div className="column is-narrow">
        <h3 className="subtitle is-italic">Political views?</h3>
      </div>
      <div className="column">
        Kardemommeloven. However, life is a single player game
        <span className="has-margin-left-5" role="img" aria-label="joystick">
          🕹
        </span>
      </div>
    </div>
  </>
)
