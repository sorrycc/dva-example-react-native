import React, { Component } from 'react';
import {
  Text
} from 'react-native';

var CounterText = React.createClass({

  render: function() {
    return (
      <Text>
        Count: { this.props.count }
      </Text>
    );
  }

});

module.exports = CounterText;
