import React from "react"

export default () => (
  <>
    <h2 className="subtitle is-size-3">
      Q &amp; A
      <span className="help">
        Or <u>summary of qualifications</u> is another way to look at it
      </span>
    </h2>
    <h3 className="subtitle">Top three favorite animals</h3>
    <div className="has-margin-left-30 has-margin-bottom-30">
      <ol>
        <li>Birds</li>
        <li>Octopus</li>
        <li>
          Squirrel, Hedgehog, Human <i>(a Tie)</i>
        </li>
      </ol>
      <p className="has-margin-top-20">
        Hippos are also pretty cool, but not enough to make it to the top three.
        Cats are waaay way down on the list, propably all the way down on place
        100 or beyond. Because they like to torture and kill little birds.
        Luckily birds have the Crows, who like to tease and annoy the crap out
        of cats.
      </p>
    </div>

    <div className="columns">
      <div className="column is-narrow">
        <h3 className="subtitle">Political views</h3>
      </div>
      <div className="column">
        <span className="is-italic">
          Kardemommeloven. However, life is a single player game
        </span>
        <span className="has-margin-left-5" role="img" aria-label="joystick">
          🕹
        </span>
      </div>
    </div>
    <div className="columns">
      <div className="column is-narrow">
        <h3 className="subtitle">Religion</h3>
      </div>
      <div className="column is-italic">Simulation theory</div>
    </div>

    <div className="columns">
      <div className="column is-narrow">
        <h3 className="subtitle">Main occupation</h3>
      </div>
      <div className="column is-italic">React / Node dveloper</div>
    </div>
  </>
)
