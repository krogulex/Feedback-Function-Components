import React from 'react';
import { Component } from 'react';

export class Section extends Component {
  render() {
    const { title, children } = this.props
    return (
      <section className="box">
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}
