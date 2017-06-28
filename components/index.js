/**
 * @providesModule MultiRangeSliderFilter
 */

/* eslint-disable no-mixed-operators */
/* generic multi slide filter */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import GenericText from "react-native-generic-text";
import {
  Dimensions,
  View,
  PanResponder,
  InteractionManager
} from "react-native";
import styled from "styled-components/native";

const PURPLE = "#5e23dc";
const WHITE = "#ffffff";
const GREY = "#f7f7f7";

const Wrapper = styled.View`
  width: ${props => props.w};
  height: 50;
  flexDirection: row;
`;
const GreySlider = styled.View`
  background-color: ${props => props.rangeStyle.color || GREY};
  width: ${props => props.width};
  height: 2;
  flexDirection: row;
  border-radius: 3;
`;
const Marker = styled.View`
  background-color: ${props => props.markerStyle.color || WHITE};
  width: ${props => props.width};
  height: ${props => props.width};
  left: ${props => props.value};
  position: absolute;
  border-radius: ${props => props.width / 2};
  top: ${props => -(props.width / 2)};
  shadow-color: rgba(0, 0, 0, 0.3);
  shadow-offset: 3;
  border: 2 solid ${props => props.markerStyle.border || PURPLE};
`;
const Label = styled.View`
  position: absolute;
  top: -38;
  left: ${props => props.left}
`;
const SelectorWidth = styled.View`
  background-color: ${props => props.selectorStyle.color || PURPLE};
  width: ${props => props.width};
  left: ${props => props.left};
  position: absolute;
  height: 2;
  position: absolute;
  top: 1;
  border-radius: 20;
`;

export default class MultiRangeSliderFilter extends PureComponent {
  static propTypes = {
    minVal: PropTypes.number,
    maxVal: PropTypes.number,
    range: PropTypes.number.isRequired,
    paddingRight: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    markerWidth: PropTypes.number.isRequired,
    type: PropTypes.number,
    left: PropTypes.number.isRequired,
    showLabels: PropTypes.bool.isRequired,
    setScrollMode: PropTypes.func,
    format: PropTypes.func.isRequired,
    markerStyle: PropTypes.object.isRequired,
    selectorStyle: PropTypes.object.isRequired,
    rangeStyle: PropTypes.object.isRequired
  };
  static defaultProps = {
    type: 2,
    minVal: 0,
    maxVal: 0,
    setScrollMode: () => {},
    format: val => val,
    markerStyle: {},
    selectorStyle: {},
    rangeStyle: {}
  };
  constructor(props) {
    super(props);
    this.padding = props.paddingRight;
    this.screenWidth = Dimensions.get("window").width;
    const { minVal, maxVal, range, divisior } = this.getRange(
      props.minVal,
      props.maxVal,
      props.range,
      this.screenWidth
    );
    this.divisior = divisior;
    this.state = {
      minValue: minVal || 0,
      maxValue: maxVal,
      screenWidth: this.screenWidth,
      range,
      rangeWidth: maxVal - minVal + props.markerWidth / 2,
      rangeLeft: minVal
    };
    this.lowerPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: ({ nativeEvent: { touches } }) =>
        touches.length === 1,
      onStartShouldSetPanResponderCapture: () => true,
      onShouldBlockNativeResponder: () => true,
      onMoveShouldSetPanResponderCapture: ({ nativeEvent: { touches } }) =>
        touches.length === 1,
      onPanResponderGrant: () => true,
      onMoveShouldSetPanResponder: ({ nativeEvent: { touches } }) =>
        touches.length === 1,
      onPanResponderTerminationRequest: () => {
        this.props.onChange && // eslint-disable-line
          this.props.onChange([
            parseInt(this.state.minValue * this.divisior, 10),
            parseInt(this.state.maxValue * this.divisior, 10)
          ]) &&
          this.props.setScrollMode(true);
        return true;
      },
      onPanResponderTerminate: () => {
        this.props.onChange && // eslint-disable-line
          this.props.onChange([
            parseInt(this.state.minValue * this.divisior, 10),
            parseInt(this.state.maxValue * this.divisior, 10)
          ]) &&
          this.props.setScrollMode(true);
        return true;
      },
      onPanResponderMove: (evt, gestureState) => {
        this.props.setScrollMode(false);
        const midway =
          this.state.rangeLeft +
          (this.state.maxValue - this.state.minValue) / 2;
        const x =
          gestureState.moveX -
          (this.props.markerWidth + this.props.markerWidth / 2);
        // check vicinity
        if (x > midway - this.props.markerWidth || this.props.type === 1) {
          // max marker
          if (
            x + this.props.markerWidth >
            this.state.range - this.props.markerWidth / 2
          ) {
            return false;
          }
          if (
            x - this.props.markerWidth / 2 < this.state.minValue &&
            this.props.type !== 1
          ) {
            return false;
          }
          this.setState({
            maxValue: x + this.props.markerWidth / 2,
            rangeWidth: x - this.state.minValue + this.props.markerWidth / 2 + 2
          });
          return true;
        }
        // min marker
        if (x > this.state.maxValue - this.props.markerWidth) {
          return false;
        }
        if (this.getLabelValue(x + this.props.markerWidth / 2) <= 0) {
          this.setState({
            minValue: 0,
            rangeLeft: this.props.markerWidth / 2,
            rangeWidth: this.state.maxValue - this.props.markerWidth / 2
          });
          return false;
        }
        this.setState({
          minValue: x + this.props.markerWidth / 2,
          rangeLeft: x + this.props.markerWidth / 2,
          rangeWidth: this.state.maxValue - x + this.props.markerWidth / 2
        });

        return false;
      },
      onPanResponderRelease: () =>
        this.props.onChange &&
        this.props.onChange([
          parseInt(this.state.minValue * this.divisior, 10),
          parseInt(this.state.maxValue * this.divisior, 10)
        ]) &&
        this.props.setScrollMode(true)
    });
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      const { minVal, maxVal } = this.getRange(
        this.props.minVal,
        this.props.maxVal,
        this.props.range,
        this.screenWidth
      );
      this.setState((prevstate, props) => ({
        minValue: minVal,
        maxValue: maxVal,
        rangeWidth: maxVal - minVal + props.markerWidth / 2,
        rangeLeft: minVal
      }));
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      if (
        this.props.minVal === nextProps.minVal &&
        this.props.maxVal === nextProps.maxVal
      ) {
        return true;
      }
      InteractionManager.runAfterInteractions(() => {
        if (nextProps.minVal === null && nextProps.maxVal === null) {
          const { minVal, maxVal } = this.getRange(
            nextProps.minVal,
            nextProps.maxVal,
            nextProps.range,
            this.screenWidth
          );
          this.setState({
            minValue: minVal,
            maxValue: maxVal,
            rangeWidth: maxVal - minVal + nextProps.markerWidth / 2,
            rangeLeft: minVal
          });
        }
      });
    }
    return true;
  }
  getRange(min, max, nRange, width) {
    const divisior = nRange / (width - this.padding);
    const range = width - this.padding;
    let maxVal = max ? max / divisior : range;
    let minVal = min ? min / divisior : 0;
    if (maxVal > range - this.props.markerWidth / 2) {
      maxVal = range - this.props.markerWidth / 2;
    }
    if (minVal < 0) {
      minVal = 0;
    }
    return {
      minVal,
      maxVal: maxVal - this.props.markerWidth / 2,
      range,
      divisior
    };
  }
  getLabelValue = val => parseInt(val * this.divisior, 10);

  render() {
    const singleSlider = this.props.type === 1;
    const { showLabels } = this.props;
    return (
      <Wrapper
        w={this.state.screenWidth - this.props.paddingRight - this.props.left}
        l={this.props.left}
        {...this.lowerPanResponder.panHandlers}
      >
        {showLabels &&
          <View>
            <Label left={3}>
              <GenericText>
                {this.props.format(this.getLabelValue(this.state.minValue))}
              </GenericText>
            </Label>
            <Label
              left={
                this.state.range -
                this.props.paddingRight -
                this.props.markerWidth / 2
              }
            >
              <GenericText>
                {`${this.props.format(
                  this.getLabelValue(this.state.maxValue)
                )} +`}
              </GenericText>
            </Label>
          </View>}
        <GreySlider
          width={this.state.range}
          rangeStyle={this.props.rangeStyle}
        />
        <SelectorWidth
          width={this.state.rangeWidth}
          left={this.state.rangeLeft}
          selectorStyle={this.props.selectorStyle}
        />
        {!singleSlider &&
          <Marker
            width={this.props.markerWidth}
            height={this.props.markerWidth}
            value={this.state.minValue - 1}
            markerStyle={this.props.markerStyle}
          />}
        <Marker
          width={this.props.markerWidth}
          value={this.state.maxValue}
          markerStyle={this.props.markerStyle}
        />
      </Wrapper>
    );
  }
}
