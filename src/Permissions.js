import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { allPass } from 'ramda';

@connect((state) => ({
  session: state.session
}))
export default class Permissions extends Component {
  static propTypes = {
    has: PropTypes.array,
    not: PropTypes.array,
    session: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  }

  render() {
    const {
      session,
      children,
      has,
      not,
    } = this.props;

    let node = null;

    if (has) {
      const invalidSize = has
        .map(i => session.getIn(i.split('.'), false))
        .filter(i => i === false)
        .length;

      node = invalidSize === 0 ?
        children : null;
    }

    return (
      <div>
        { node }
      </div>
    );
  }
}
