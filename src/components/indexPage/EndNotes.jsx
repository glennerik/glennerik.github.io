import React from "react"
import Instagram from "./Instagram"

export default () => (
  <>
    <h2 className="subtitle">Any closing statements before we wrap this up?</h2>
    <div>
      Yes! I am daglig leder (CEO) in Meto Eiendom AS, a real estate company
      renting out twenty five apartments on Ensjø. I am also styreleder
      (Chairman) of the residential condominium (bolig-sameie){" "}
      <a
        target="_blank"
        href="http://www.ensjoveien31.no"
        rel="noopener noreferrer"
      >
        Ensjøveien 31
      </a>
      , with 45 apartments.
      <hr />
      <div className="has-text-centered">
        <div className="has-margin-bottom-30">
          You must also check out my{" "}
          <a
            target="_blank"
            href="https://www.instagram.com/glennerik.no"
            rel="noopener noreferrer"
          >
            Instagram{" "}
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
          and should probably follow me there, here&#39;s a taste =)
        </div>
        <Instagram />
      </div>
      <hr />
      I guess I&#39;ll end with this:
      <br />
      <i>
        If you wanna see strange things, and proof of intersecting universes,
        have a look at twitter &amp; facebook in general. That is the simulation
        creating history backwards in time, while we&#39;re watching. It can be
        pretty spectacular to watch, and the tool that enables it&#39;
        observation (the telescope or collider, if you like =) is the internet.
        (but that&#39;s beginning to move outside the scope of this interview)
      </i>
      . I also have a profile on{" "}
      <a
        target="_blank"
        href="https://www.facebook.com/glenneriks"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <i className="fab fa-facebook" />
        </span>
        Facebook
      </a>{" "}
      by the way.
    </div>
  </>
)
