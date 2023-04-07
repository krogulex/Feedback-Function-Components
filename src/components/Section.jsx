import React from 'react';

export function Section( { title, children }) {

  return (
    <section className="box">
      <h1>{title}</h1>
      {children}
    </section>
  );
  }