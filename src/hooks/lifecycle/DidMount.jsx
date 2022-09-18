import React, { Component, useEffect } from "react";

export class DidMount extends Component {
  componentDidMount() {
    console.log("comportamiento antes de que se monte");
  }
  render() {
    return <div>DidMount</div>;
  }
}

export function DidMountHook() {
  useEffect(() => {
    console.log("comportamiento antes de que se agregue");
  }, []);

  return <div>DidMount</div>;
}
