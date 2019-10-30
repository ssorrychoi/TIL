import React from "react";
import StateIcon from "./StateIcon";

export default function Current() {
  return (
    <>
      <section>
        <h1>Current Location</h1>
        <article>
          <time>TIME</time>
          <p>Weather Status</p>
        </article>
      </section>
      <section>
        <article>
          <StateIcon />
          <p>Temperature</p>
          <section>
            <span>C</span>
            <span>F</span>
          </section>
        </article>
        <article>
          <p>강수량</p>
          <p>적설량</p>
          <p>습도</p>
          <p>풍속</p>
        </article>
      </section>
    </>
  );
}
