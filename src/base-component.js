/**
 * @file BaseComponent
 * Serve as a base reference component to create new component
 */

/**
 * Import styles
 */
import './components.scss';

/**
 * Import modules
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component class
 */
class BaseComponent extends React.Component {
  render() {
    const welcomeText = this.props;

    return (
      <div className="base-component">
        <h1>{welcomeText}</h1>
      </div>
    )
  }
}

/**
 * Define default value for props
 */
BaseComponent.defaultProps = {
  welcomeText: 'Hello World! Thank you for your support and using GetReactComponents'
};

/**
 * Define props types
 */
BaseComponent.propTypes = {
  welcomeText: PropTypes.string
};

export default BaseComponent;