import React, { Component } from 'react';
import { formatNumber, equalObject } from '../utils';

export default class AnimationCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: formatNumber(this.props.start, this.props.decimals, this.props.useGroup),
      startTime: new Date().getTime(),
    };
  }

  componentDidMount() {
    this.setTimer();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const propsFlag = !equalObject(this.props, nextProps);
    if (propsFlag) {
      this.setState({
        value: formatNumber(this.props.start),
        startTime: new Date().getTime(),
      });
      this.clearTimer();
      this.setTimer();
      return true;
    }
    const stateFlag = !equalObject(this.state, nextState);
    if (stateFlag) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  setTimer = () => {
    if (this.timer) {
      return;
    }
    this.timer = setInterval(() => {
      const t = new Date().getTime() - this.state.startTime;
      const b = this.props.start;
      const c = this.props.count - this.props.start;
      const d = this.props.duration;
      let result;
      if (t < this.props.duration) {
        result = this.countUp(t, b, c, d);
      } else {
        result = formatNumber(this.props.count, this.props.decimals, this.props.useGroup);
        clearInterval(this.timer);
      }
      this.setState({ value: result });
    }, 10);
  }

  clearTimer = () => {
    clearInterval(this.timer);
    this.timer = null;
  }

  countUp = (t, b, c, d) => {
    let result = parseFloat(((c * (-(2 ** ((-10 * t) / d)) + 1) * 1024) / 1023) + b);
    result = formatNumber(result, this.props.decimals, this.props.useGroup);
    return result;
  }

  render() {
    return (
      <span className="home-green-stat"> {this.state.value} </span>
    );
  }
}