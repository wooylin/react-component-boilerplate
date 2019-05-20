import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

@injectIntl
class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'wooylin'
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="hello">
        <FormattedMessage id="title" defaultMessage="hahah" />
        {name}
      </div>
    );
  }
}

export default SayHello;
