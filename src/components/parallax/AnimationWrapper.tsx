import * as React from 'react';
import styled from '../../styling/styled';

const Wrapper = styled('div')({
  position: 'relative',
  minHeight: '100%',
  width: '100%',
  zIndex: 10,
});

interface AnimationWrapperProps {
  render: (state: AnimationWrapperState) => React.ReactChild;
}

export interface AnimationWrapperState {
  animationWrapperHeight: number;
  wrapperTopPosition: number;
}

class AnimationWrapper extends React.PureComponent<AnimationWrapperProps, AnimationWrapperState> {
  state = {
    animationWrapperHeight: 0,
    wrapperTopPosition: 0,
  };

  wrapper: HTMLDivElement | null = null;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.animationWrapperHeight === 0) {
      this.setState({
        animationWrapperHeight: this.wrapper ? this.wrapper.clientHeight : 0,
      });
    }
    this.setState({
      wrapperTopPosition: this.wrapper ? this.wrapper.getBoundingClientRect().top : 0,
    });
  };

  render() {
    return <Wrapper ref={c => (this.wrapper = c)}>{this.props.render(this.state)}</Wrapper>;
  }
}

export default AnimationWrapper;
