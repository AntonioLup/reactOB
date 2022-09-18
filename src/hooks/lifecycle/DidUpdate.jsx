import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado"
    );
  }

  render() {
    return <div>DidUpdate</div>;
  }
}

export function DidUpdateHook() {
  useEffect(() => {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado"
    );
  });

  return <div>DidUpdate</div>;
}
