import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Permissions from './Permissions';
import ControlPanel from './ControlPanel';

function changePermission(key) {
  return {
    type: 'CHANGE_PERMISSION',
    payload: key
  };
}

@connect((state) => ({
  session: state.session
}), { changePermission })
export class App extends Component {
  static propTypes = {
    session: PropTypes.object.isRequired,
    changePermission: PropTypes.func.isRequired
  }

  render() {
    const {
      session,
      changePermission
    } = this.props;

    return (
      <div className="p2">
        <h1>React Redux Permissions Example</h1>

        <pre className="p2 bg-silver">{ JSON.stringify(session, null, 2) }</pre>
        <h2>Users Example</h2>

        <ControlPanel
          changePermission={ changePermission }
          permissions={ session }/>

        <Permissions has={ ['Users.canRead'] }>
          I am visible because canRead is true.
        </Permissions>

        <Permissions has={ ['Users.canCreate'] }>
          I am visible because canCreate is true.
        </Permissions>

        <Permissions has={ ['Users.canUpdate'] }>
          I am visible because canUpdate is true.
        </Permissions>

        <Permissions has={ ['Users.canDelete'] }>
          I am visible because canDelete is true.
        </Permissions>

        <Permissions has={ ['Users.canRead', 'Users.canCreate'] }>
          I am visible because canRead & canCreate is true.
        </Permissions>

        <Permissions has={ ['Users.canDelete', 'Users.canCreate'] }>
          I am visible because canDelete & canCreate is true.
        </Permissions>
      </div>
    );
  }
}
