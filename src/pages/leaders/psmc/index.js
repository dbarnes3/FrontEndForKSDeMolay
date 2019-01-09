import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import UnderDevelopment from './../../UnderDevelopment';

class PSMCPage extends React.Component {
  static defaultProps = {
    pathName: 'PSMCs',
    roles: ['agent', 'administrator'],
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="PSMCs" />
        <UnderDevelopment/>
      </Page>
    );
  }
}

export default PSMCPage
