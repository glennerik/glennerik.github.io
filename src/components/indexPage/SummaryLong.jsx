import React from "react"

export default () => (
  <>
    <h3 className="subtitle is-italic">Top three favorite animals?</h3>
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
        Luckily birds have the Crows, who sometimes tease and annoy the crap out
        of cats.
      </p>
    </div>

    <h3 className="subtitle is-italic">What do you do in your spare time?</h3>
    <div className="has-margin-bottom-30">
      I sometimes attend events with or in relation to{" "}
      <a
        target="_blank"
        href="http://www.oafweb.org/"
        rel="noopener noreferrer"
      >
        Oslo Amatørastronomers Forening
      </a>
      . I also spend time with my daughter Eli-Marie Sandbakken and Wife Hang
      Thi Hoang.
    </div>
  </>
)
