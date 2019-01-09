import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import UnderDevelopment from './../../UnderDevelopment';

class StateStaffPage extends React.Component {
  static defaultProps = {
    pathName: 'State Staff',
    roles: ['agent', 'administrator'],
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="State Staff" />
        <UnderDevelopment/>
      </Page>
    );
  }
}

export default StateStaffPage
