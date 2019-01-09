import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import UnderDevelopment from './../../UnderDevelopment';

class PastEosPage extends React.Component {
  static defaultProps = {
    pathName: 'Past EOs',
    roles: ['agent', 'administrator'],
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Past EOs" />
        <UnderDevelopment/>
      </Page>
    );
  }
}

export default PastEosPage
