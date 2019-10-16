import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward } from "@fortawesome/free-solid-svg-icons"

export default () => (
  <div className="has-margin-top-30">
    <h3 className="subtitle" style={{ marginBottom: 0 }}>
      Do you have any past or current projects you wanna share with us?
    </h3>
    I have several, but I&#39;ll only show you these:{" "}
    <a
      target="_blank"
      href="https://www.krakenlyrics.com"
      rel="noopener noreferrer"
    >
      Kraken Lyrics
    </a>
    <FontAwesomeIcon
      icon={faAward}
      className="has-margin-right-10 has-margin-left-10"
    />
    <a target="_blank" href="https://www.myip.info" rel="noopener noreferrer">
      MyIP
    </a>
  </div>
)
