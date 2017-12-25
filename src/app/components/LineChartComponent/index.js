/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow*/
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet, processColor,
  View,
  Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import { Card, CardItem, Body, Container, Header, Content, List, ListItem, Text, FooterTab, Icon, Button } from 'native-base';
import { LineChart, YAxis, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Circle } from 'react-native-svg'
import {
  compose,
  defaultProps,
  setPropTypes,
  withState,
  withProps,
  withHandlers,
  lifecycle
} from 'recompose';
import { bindActionCreators } from 'redux';


const mapStateToProps = ({ loginReducers, gasReducers }) => ({ loginReducers, gasReducers });

const enhance = compose(
  connect(mapStateToProps)
);

const LineChartComponent = ({
  params,
  date
}) => (
  <View style={ { flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height-200, flexDirection: 'row' } }>
    <View style={ { width: Dimensions.get('window').width, height: Dimensions.get('window').height-200, flexDirection: 'row' } }>
      <YAxis
          dataPoints={ params }
          contentInset={ { top: 20, bottom: 20 } }
          labelStyle={ { color: 'grey' } }
          formatLabel={ value => `${value}` }
      />
      <LineChart
          style={ { flex: 1 } }
          dataPoints={ params }
          svg={{
              stroke: 'rgb(134, 65, 244)',
          }}
          shadowSvg={ {
              stroke: 'rgba(134, 65, 244, 0.2)',
              strokeWidth: 5,
          }}
          gridMax={Math.max.apply(null, params)+50}
          gridMin={Math.min.apply(null, params)-50}
          contentInset={ { top: 20, bottom: 20 } }
          curve={ shape.curveLinear }
          renderDecorator={ ({ x, y, index, value }) => (
            <Circle
                key={ index }
                cx={ x(index) }
                cy={ y(value) }
                r={ 4 }
                stroke={ 'rgb(134, 65, 244)' }
                fill={ 'white' }
            />
          )}
      />
    </View>
    <View style={ { flex: 1} }>
      <XAxis
        values={ date }
        chartType={ XAxis.Type.LINE }
        formatLabel={ value => `${value}`}
        labelStyle={ { color: 'grey' } }
      />
    </View>
  </View>
);

export default enhance(LineChartComponent);
