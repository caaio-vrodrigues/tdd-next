'use client';

import { useState } from "react";

export const Flow = () => {
  const [text, setText] = useState<string>('Texto original.');

  return (
    <article>
      <h1>Flow Tests</h1>
      <br />
      <p>{text}</p>
      <br />
      <button onClick={() => setText('Texto alterado.')}
      className={`border border-white p-3`}>
        Change Text
      </button>
    </article>
  );
};