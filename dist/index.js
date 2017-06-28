Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="components/index.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  width: ",";\n  height: 50;\n  flexDirection: row;\n"],["\n  width: ",";\n  height: 50;\n  flexDirection: row;\n"]),_templateObject2=_taggedTemplateLiteral(["\n  background-color: ",";\n  width: ",";\n  height: 2;\n  flexDirection: row;\n  border-radius: 3;\n"],["\n  background-color: ",";\n  width: ",";\n  height: 2;\n  flexDirection: row;\n  border-radius: 3;\n"]),_templateObject3=_taggedTemplateLiteral(["\n  background-color: ",";\n  width: ",";\n  height: ",";\n  left: ",";\n  position: absolute;\n  border-radius: ",";\n  top: ",";\n  shadow-color: rgba(0, 0, 0, 0.3);\n  shadow-offset: 3;\n  border: 2 solid ",";\n"],["\n  background-color: ",";\n  width: ",";\n  height: ",";\n  left: ",";\n  position: absolute;\n  border-radius: ",";\n  top: ",";\n  shadow-color: rgba(0, 0, 0, 0.3);\n  shadow-offset: 3;\n  border: 2 solid ",";\n"]),_templateObject4=_taggedTemplateLiteral(["\n  position: absolute;\n  top: -38;\n  left: ","\n"],["\n  position: absolute;\n  top: -38;\n  left: ","\n"]),_templateObject5=_taggedTemplateLiteral(["\n  background-color: ",";\n  width: ",";\n  left: ",";\n  position: absolute;\n  height: 2;\n  position: absolute;\n  top: 1;\n  border-radius: 20;\n"],["\n  background-color: ",";\n  width: ",";\n  left: ",";\n  position: absolute;\n  height: 2;\n  position: absolute;\n  top: 1;\n  border-radius: 20;\n"]);






var _react=require("react");var _react2=_interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNativeGenericText=require("react-native-generic-text");var _reactNativeGenericText2=_interopRequireDefault(_reactNativeGenericText);
var _reactNative=require("react-native");





var _native=require("styled-components/native");var _native2=_interopRequireDefault(_native);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}

var PURPLE="#5e23dc";
var WHITE="#ffffff";
var GREY="#f7f7f7";

var Wrapper=_native2.default.View(_templateObject,
function(props){return props.w;});



var GreySlider=_native2.default.View(_templateObject2,
function(props){return props.rangeStyle.color||GREY;},
function(props){return props.width;});




var Marker=_native2.default.View(_templateObject3,
function(props){return props.markerStyle.color||WHITE;},
function(props){return props.width;},
function(props){return props.width;},
function(props){return props.value;},

function(props){return props.width/2;},
function(props){return-(props.width/2);},


function(props){return props.markerStyle.border||PURPLE;});

var Label=_native2.default.View(_templateObject4,


function(props){return props.left;});

var SelectorWidth=_native2.default.View(_templateObject5,
function(props){return props.selectorStyle.color||PURPLE;},
function(props){return props.width;},
function(props){return props.left;});var







MultiRangeSliderFilter=function(_PureComponent){_inherits(MultiRangeSliderFilter,_PureComponent);


























function MultiRangeSliderFilter(props){_classCallCheck(this,MultiRangeSliderFilter);var _this=_possibleConstructorReturn(this,(MultiRangeSliderFilter.__proto__||Object.getPrototypeOf(MultiRangeSliderFilter)).call(this,
props));_this.





































































































































































getLabelValue=function(val){return parseInt(val*_this.divisior,10);};_this.padding=props.paddingRight;_this.screenWidth=_reactNative.Dimensions.get("window").width;var _this$getRange=_this.getRange(props.minVal,props.maxVal,props.range,_this.screenWidth),minVal=_this$getRange.minVal,maxVal=_this$getRange.maxVal,range=_this$getRange.range,divisior=_this$getRange.divisior;_this.divisior=divisior;_this.state={minValue:minVal||0,maxValue:maxVal,screenWidth:_this.screenWidth,range:range,rangeWidth:maxVal-minVal+props.markerWidth/2,rangeLeft:minVal};_this.lowerPanResponder=_reactNative.PanResponder.create({onStartShouldSetPanResponder:function onStartShouldSetPanResponder(_ref){var touches=_ref.nativeEvent.touches;return touches.length===1;},onStartShouldSetPanResponderCapture:function onStartShouldSetPanResponderCapture(){return true;},onShouldBlockNativeResponder:function onShouldBlockNativeResponder(){return true;},onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(_ref2){var touches=_ref2.nativeEvent.touches;return touches.length===1;},onPanResponderGrant:function onPanResponderGrant(){return true;},onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(_ref3){var touches=_ref3.nativeEvent.touches;return touches.length===1;},onPanResponderTerminationRequest:function onPanResponderTerminationRequest(){_this.props.onChange&&_this.props.onChange([parseInt(_this.state.minValue*_this.divisior,10),parseInt(_this.state.maxValue*_this.divisior,10)])&&_this.props.setScrollMode(true);return true;},onPanResponderTerminate:function onPanResponderTerminate(){_this.props.onChange&&_this.props.onChange([parseInt(_this.state.minValue*_this.divisior,10),parseInt(_this.state.maxValue*_this.divisior,10)])&&_this.props.setScrollMode(true);return true;},onPanResponderMove:function onPanResponderMove(evt,gestureState){_this.props.setScrollMode(false);var midway=_this.state.rangeLeft+(_this.state.maxValue-_this.state.minValue)/2;var x=gestureState.moveX-(_this.props.markerWidth+_this.props.markerWidth/2);if(x>midway-_this.props.markerWidth||_this.props.type===1){if(x+_this.props.markerWidth>_this.state.range-_this.props.markerWidth/2){return false;}if(x-_this.props.markerWidth/2<_this.state.minValue&&_this.props.type!==1){return false;}_this.setState({maxValue:x+_this.props.markerWidth/2,rangeWidth:x-_this.state.minValue+_this.props.markerWidth/2+2});return true;}if(x>_this.state.maxValue-_this.props.markerWidth){return false;}if(_this.getLabelValue(x+_this.props.markerWidth/2)<=0){_this.setState({minValue:0,rangeLeft:_this.props.markerWidth/2,rangeWidth:_this.state.maxValue-_this.props.markerWidth/2});return false;}_this.setState({minValue:x+_this.props.markerWidth/2,rangeLeft:x+_this.props.markerWidth/2,rangeWidth:_this.state.maxValue-x+_this.props.markerWidth/2});return false;},onPanResponderRelease:function onPanResponderRelease(){return _this.props.onChange&&_this.props.onChange([parseInt(_this.state.minValue*_this.divisior,10),parseInt(_this.state.maxValue*_this.divisior,10)])&&_this.props.setScrollMode(true);}});return _this;}_createClass(MultiRangeSliderFilter,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;_reactNative.InteractionManager.runAfterInteractions(function(){var _getRange=_this2.getRange(_this2.props.minVal,_this2.props.maxVal,_this2.props.range,_this2.screenWidth),minVal=_getRange.minVal,maxVal=_getRange.maxVal;_this2.setState(function(prevstate,props){return{minValue:minVal,maxValue:maxVal,rangeWidth:maxVal-minVal+props.markerWidth/2,rangeLeft:minVal};});});}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){var _this3=this;if(this.props!==nextProps){if(this.props.minVal===nextProps.minVal&&this.props.maxVal===nextProps.maxVal){return true;}_reactNative.InteractionManager.runAfterInteractions(function(){if(nextProps.minVal===null&&nextProps.maxVal===null){var _getRange2=_this3.getRange(nextProps.minVal,nextProps.maxVal,nextProps.range,_this3.screenWidth),minVal=_getRange2.minVal,maxVal=_getRange2.maxVal;_this3.setState({minValue:minVal,maxValue:maxVal,rangeWidth:maxVal-minVal+nextProps.markerWidth/2,rangeLeft:minVal});}});}return true;}},{key:"getRange",value:function getRange(min,max,nRange,width){var divisior=nRange/(width-this.padding);var range=width-this.padding;var maxVal=max?max/divisior:range;var minVal=min?min/divisior:0;if(maxVal>range-this.props.markerWidth/2){maxVal=range-this.props.markerWidth/2;}if(minVal<0){minVal=0;}return{minVal:minVal,maxVal:maxVal-this.props.markerWidth/2,range:range,divisior:divisior};}},{key:"render",value:function render()

{
var singleSlider=this.props.type===1;var
showLabels=this.props.showLabels;
return(
_react2.default.createElement(Wrapper,_extends({
w:this.state.screenWidth-this.props.paddingRight-this.props.left,
l:this.props.left},
this.lowerPanResponder.panHandlers,{__source:{fileName:_jsxFileName,lineNumber:263}}),

showLabels&&
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:269}},
_react2.default.createElement(Label,{left:3,__source:{fileName:_jsxFileName,lineNumber:270}},
_react2.default.createElement(_reactNativeGenericText2.default,{__source:{fileName:_jsxFileName,lineNumber:271}},
this.props.format(this.getLabelValue(this.state.minValue)))),


_react2.default.createElement(Label,{
left:
this.state.range-
this.props.paddingRight-
this.props.markerWidth/2,__source:{fileName:_jsxFileName,lineNumber:275}},


_react2.default.createElement(_reactNativeGenericText2.default,{__source:{fileName:_jsxFileName,lineNumber:282}},
this.props.format(
this.getLabelValue(this.state.maxValue))+" +"))),




_react2.default.createElement(GreySlider,{
width:this.state.range,
rangeStyle:this.props.rangeStyle,__source:{fileName:_jsxFileName,lineNumber:289}}),

_react2.default.createElement(SelectorWidth,{
width:this.state.rangeWidth,
left:this.state.rangeLeft,
selectorStyle:this.props.selectorStyle,__source:{fileName:_jsxFileName,lineNumber:293}}),

!singleSlider&&
_react2.default.createElement(Marker,{
width:this.props.markerWidth,
height:this.props.markerWidth,
value:this.state.minValue-1,
markerStyle:this.props.markerStyle,__source:{fileName:_jsxFileName,lineNumber:299}}),

_react2.default.createElement(Marker,{
width:this.props.markerWidth,
value:this.state.maxValue,
markerStyle:this.props.markerStyle,__source:{fileName:_jsxFileName,lineNumber:305}})));



}}]);return MultiRangeSliderFilter;}(_react.PureComponent);MultiRangeSliderFilter.propTypes={minVal:_propTypes2.default.number,maxVal:_propTypes2.default.number,range:_propTypes2.default.number.isRequired,paddingRight:_propTypes2.default.number.isRequired,onChange:_propTypes2.default.func.isRequired,markerWidth:_propTypes2.default.number.isRequired,type:_propTypes2.default.number,left:_propTypes2.default.number.isRequired,showLabels:_propTypes2.default.bool.isRequired,setScrollMode:_propTypes2.default.func,format:_propTypes2.default.func.isRequired,markerStyle:_propTypes2.default.object.isRequired,selectorStyle:_propTypes2.default.object.isRequired,rangeStyle:_propTypes2.default.object.isRequired};MultiRangeSliderFilter.defaultProps={type:2,minVal:0,maxVal:0,setScrollMode:function setScrollMode(){},format:function format(val){return val;},markerStyle:{},selectorStyle:{},rangeStyle:{}};exports.default=MultiRangeSliderFilter;