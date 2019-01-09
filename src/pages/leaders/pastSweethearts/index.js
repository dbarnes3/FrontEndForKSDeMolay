import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import UnderDevelopment from './../../UnderDevelopment';

class PastSweetheartsPage extends React.Component {
  static defaultProps = {
    pathName: 'Past State Sweethearts',
    roles: ['agent', 'administrator'],
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Past State Sweethearts" />
        <UnderDevelopment/>
      </Page>
    );
  }
}

export default PastSweetheartsPage
