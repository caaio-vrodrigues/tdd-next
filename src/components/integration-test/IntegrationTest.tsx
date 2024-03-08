'use client';

import { useState } from "react";

// components
import { ButtonA } from "./ButtonA";

export const IntegrationTest = () => { 
  const msg = 'Texto teste para componente de testes de integração.';
  const alteredMsg = 'Texto de testes de integração ALTERADO!';
  
  const [text, setText] = useState<string>(msg);

  return (
    <main>
      <article>
        <h1>Hello World</h1>
        <p>{text}</p>
      </article>
      <ButtonA onClick={() => setText(alteredMsg)}/>
    </main>
  );
};