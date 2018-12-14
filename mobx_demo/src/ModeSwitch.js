import React from 'react';
import Switch from 'react-switch';

import {observable, configure} from 'mobx';
import {observer} from 'mobx-react';

@observer
class ModeSwitch extends React.Component {
  @observable enforceActions = false;

  handleToggleStrict = (checked) => {
    this.enforceActions = checked;

    configure({enforceActions: checked});
  }

  render() {
    return(
      <label>
        <Switch
          checked={this.enforceActions}
          onChange={this.handleToggleStrict}
        />
        <span>Enforce Actions</span>
      </label>
    );
  }
}

export default ModeSwitch;


