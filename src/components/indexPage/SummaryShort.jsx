import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faNodeJs,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

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
      Freelance
      <FontAwesomeIcon
        icon={faReact}
        className="has-margin-right-5 has-margin-left-5 icon"
      />
      React and Node
      <FontAwesomeIcon
        icon={faNodeJs}
        className="has-margin-right-5 has-margin-left-5 icon"
      />
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
      DM me on{" "}
      <a
        target="_blank"
        href="https://www.linkedin.com/in/glennerik/"
        rel="noopener noreferrer"
      >
        Linked
        <FontAwesomeIcon
          icon={faLinkedin}
          className="has-margin-left-5 has-margin-right-5 icon"
        />
      </a>
      or even{" "}
      <a
        target="_blank"
        href="https://twitter.com/glenneriks"
        rel="noopener noreferrer"
      >
        Twitter
        <FontAwesomeIcon
          icon={faTwitter}
          className="has-margin-right-5 has-margin-left-5 icon"
        />
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
