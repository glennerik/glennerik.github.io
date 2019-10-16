import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons"
import Instagram from "./Instagram"

export default () => (
  <>
    <div className="has-margin-top-30">
      <h2 className="subtitle" style={{ marginBottom: 0 }}>
        Any closing statements before we wrap this up?
      </h2>
      <div>
        Yes! I am <i>daglig leder (CEO)</i> in{" "}
        <a
          target="_blank"
          href="https://www.proff.no/selskap/meto-eiendom-as/oslo/eiendomshandel-og-utleie/IFZYJIP10MV/"
          rel="noopener noreferrer"
        >
          Meto Eiendom AS
        </a>
        , a real estate company renting out twenty five apartments on Ensjø.
      </div>
      <div>
        I am also <i>styreleder (chairman)</i> of the residential condominium
        (bolig-sameie){" "}
        <a
          target="_blank"
          href="http://www.ensjoveien31.no"
          rel="noopener noreferrer"
        >
          Ensjøveien 31
        </a>
        , with 45 apartments.
      </div>
      <hr />
      <div className="has-text-centered">
        <div className="has-margin-bottom-30">
          <span className="is-inline-block">
            You must check out my{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/glennerik.no"
              rel="noopener noreferrer"
            >
              Instagram
              <FontAwesomeIcon
                icon={faInstagram}
                className="has-margin-right-5 has-margin-left-5"
              />
            </a>
          </span>
          <span className="is-inline-block">
            and should probably follow me there, here&#39;s a taste:
          </span>
        </div>
        <Instagram />
      </div>
      <hr />
      Let&#39;s end it with this:
      <br />
      <i>
        If you wanna see strange things, and proof of intersecting universes,
        have a look at twitter &amp; facebook in general. That is the simulation
        creating history backwards in time, while we&#39;re watching. It can be
        pretty spectacular to watch, and the tool that enables it&#39;
        observation (the telescope or collider, if you like =) is the internet.
        (but that&#39;s beginning to move outside the scope of this interview)
      </i>
      . I also have a profile on
      <a
        target="_blank"
        href="https://www.facebook.com/glenneriks"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className="has-margin-right-5 has-margin-left-5"
        />
        Facebook
      </a>{" "}
      by the way
    </div>
  </>
)
