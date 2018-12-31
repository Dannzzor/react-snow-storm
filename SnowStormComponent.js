import React from 'react';
import snowStorm from './snowstorm';

export default class SnowStorm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.storm = new snowStorm(props);
  }

  componentDidMount() {
    this.storm.start();
  }

  componentWillUnmount() {
    this.storm.stop();
    Array.from(document.getElementsByClassName('___snowStorm___')).forEach(
      element => {
        element.parentNode.removeChild(element);
      }
    );
  }

  render() {
    return null;
  }
}
