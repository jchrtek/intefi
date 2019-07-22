import * as React from 'react';
import styled from '../../styling/styled';

const Item = styled('div')<AnimationItemState>(({ positionX, transition }) => ({
  top: positionX || 0,
  transition: `top ${transition}s`,
  height: '50px',
  position: 'absolute',
  width: '100%',
}));

interface AnimationItemProps {
  endTop: number;
  startTop: number;
  wrapperHeight: number;
  wrapperPosition: number;
}

interface AnimationItemState {
  positionX: number;
  transition: number;
}

class AnimationItem extends React.PureComponent<AnimationItemProps, AnimationItemState> {
  constructor(props: AnimationItemProps) {
    super(props);
    this.state = {
      positionX: this.props.startTop > this.props.endTop ? this.props.startTop : this.props.endTop,
      transition: 0.3,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ positionX: this.props.startTop });
  }

  setPosition() {
    const { startTop, endTop, wrapperHeight, wrapperPosition } = this.props;

    if (startTop === endTop) {
      return startTop;
    }

    const diff = endTop - startTop;
    const speed = diff / wrapperHeight;
    const offsetLength = (wrapperHeight - wrapperPosition) * speed;
    const position = offsetLength + startTop;
    if (!isNaN(position)) {
      setTimeout(() => {
        this.setState({
          transition: 0,
        });
      }, 1500);
    }

    if (startTop > endTop) {
      return this.handleBorder(position, endTop, startTop);
    }
    return this.handleBorder(position, startTop, endTop);
  }

  handleBorder = (position: number, firstEdge: number, lastEdge: number) => {
    if (position < firstEdge) {
      return firstEdge;
    }

    if (position > lastEdge) {
      return lastEdge;
    }

    return position;
  };

  handleScroll = () => {
    this.setState({
      positionX: this.setPosition(),
    });
  };

  render() {
    const { children } = this.props;
    const { positionX, transition } = this.state;
    return (
      <Item positionX={positionX} transition={transition}>
        {children}
      </Item>
    );
  }
}

export default AnimationItem;
