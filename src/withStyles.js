/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';

function withStyles(ComposedComponent, ...styles) {
  return class Styles extends Component {
    static contextTypes = {
      insertCss: PropTypes.func.isRequired,
    };

    componentWillMount() {
      this.removeCss = this.context.insertCss.apply(undefined, styles);
    }

    componentWillUnmount() {
      setTimeout(this.removeCss, 0);
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
}

export default withStyles;