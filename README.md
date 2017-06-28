# react-native-multi-range

> A small multi range slider component for react-native

## Props

props			|	dafault	|	description
----------------|-----------|-----------------
type			| 2			| type of slider, single value = 1, multi value = 2
minVal			| 0			| min value marker
maxVal			| MAX_RANGE	| max value marker
range 			| null		| the range on which the distance has to be divided
markerWidth		| null		| width of the markers
paddingRight	| null		| padding of the marker from the right edge of the container
left			| null		| margin from the left edge of the container
showLabels		| false		| whether to show value labels
setScrollMode	| noop()	| A callback function to lock the scroll of the view when slider is active
format			| (val)=>val| Format the current integer value of the marker
markerStyle		| {}		| color value of marker
selectorStyle	| {}		| background color value of marker and its height
rangeStyle		| {}		| background color value of range line between the 2 markers and its height
onChange		| noop()	| A callback that returns {min, max} values on release of markers

### License
MIT @ Dron Rathore