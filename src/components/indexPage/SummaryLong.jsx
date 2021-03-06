import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGamepad, faBinoculars } from "@fortawesome/free-solid-svg-icons"

export default () => (
  <>
    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: 0 }}>
        Do you have a CV for me to download and show the ones I have to
        convince?
      </h3>
      Sure, try one of these:
      <ul>
        <li>
          <a href="/CV English Glenn-Erik Sandbakken.pdf">
            CV English Glenn-Erik Sandbakken
          </a>
        </li>
        <li>
          <a href="/CV Norsk Glenn-Erik Sandbakken.pdf">
            CV Norsk Glenn-Erik Sandbakken
          </a>
        </li>
      </ul>
    </div>

    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: 0 }}>
        You look young, how young are you really?
      </h3>
      I know, it&#39;s wild, I&#39;m almost under fourty! Actually I was born,
      on the day, exactly 100 years after Albert Einstein. My daughter,
      Eli-Marie was born, on the day, 36 years after me. The date is March 14,
      which is, observed correctly, the beginning of PI 3,14. Eli&#39;s birthday
      in 2015 is even closer: 3.1415 &mdash; it&#39;s almost spooky!
    </div>

    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: 0 }}>
        Who&#39;s your Idol?
      </h3>
      Easy: Albert Einstein. A living one must be Bill Gates.
    </div>

    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: 0 }}>
        Political views?
      </h3>
      <i>Kardemommeloven</i>
      <br />
      However, reality transforms and becomes clearer once you realize that life
      is a
      <FontAwesomeIcon
        icon={faGamepad}
        className="has-margin-right-5 has-margin-left-5 icon"
      />
      single player game in a (simple) simulation{" "}
      <span role="img" aria-label="joystick" className="icon">
        🕹
      </span>
    </div>

    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: "1rem" }}>
        Top three favorite animals?
      </h3>
      <div className="has-margin-left-30 has-margin-bottom-30">
        <ol>
          <li>Birds</li>
          <li>Octopus</li>
          <li>
            Squirrel, Hedgehog &amp; Human <i>(a Tie)</i>
          </li>
        </ol>
        <p className="has-margin-top-20">
          Moose and Hippos are also pretty awesome animals, but not enough to
          make it to the top three. Cats are waaay waay down on the list,
          propably all the way down to place 100 or beyond. Because they like to
          torture and kill little birds. Luckily birds have the Crows, who
          sometimes tease and annoy the crap out of cats.
        </p>
      </div>
    </div>

    <div className="has-margin-top-30">
      <h3 className="subtitle" style={{ marginBottom: 0 }}>
        What do you do in your spare time?
      </h3>
      I sometimes attend events with or in relation to{" "}
      <a
        target="_blank"
        href="http://www.oafweb.org/"
        rel="noopener noreferrer"
      >
        Oslo
        <FontAwesomeIcon
          icon={faBinoculars}
          className="has-margin-right-5 has-margin-left-5 icon"
        />
        Amatørastronomers Forening
      </a>
      . I also spend time with my daughter Eli-Marie Sandbakken and Wife Hang
      Thi Hoang.
    </div>
  </>
)
