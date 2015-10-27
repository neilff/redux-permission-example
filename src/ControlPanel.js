import React, { PropTypes, Component } from 'react';

export default class ControlPanel extends Component {
  static propTypes = {
    permissions: PropTypes.object.isRequired,
    changePermission: PropTypes.func.isRequired
  }

  onChange(key, val) {
    return function() {
      this.props.changePermission([key, val]);
    };
  }

  render() {
    const {
      permissions
    } = this.props;

    return (
      <div
        styles={ styles }
        className="fixed top-0 right-0 bottom-0 border p3 bg-white">
        <h3>Change Permissions</h3>
        {
          permissions.map((val, key) => {
            return(
              <div>
                <h4>{ key }</h4>
                <ul className="list-reset">
                  {
                    val.map((i, idx) => {
                      return (
                        <li>
                          <input
                            className="mr2"
                            onChange={ this.onChange(key, idx).bind(this) }
                            type="checkbox"
                            checked={ i } />
                          { idx }
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            );
          })
        }
      </div>
    );
  }
}

const styles = {
  position: 'fixed',
  padding: '15px',
  borderRadius: '5px',
  width: '120px',
  top: '15px',
  right: '15px',
  border: '1px solid black',
}
