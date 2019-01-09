import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import UnderDevelopment from './../../UnderDevelopment';

class StateOfficerPage extends React.Component {
  static defaultProps = {
    pathName: 'State Officers',
    roles: ['agent', 'administrator'],
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="State Officers" />
        <UnderDevelopment/>
      </Page>
    );
  }
}

export default StateOfficerPage
