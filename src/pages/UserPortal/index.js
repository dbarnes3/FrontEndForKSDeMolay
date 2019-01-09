import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import UnderDevelopment from './../UnderDevelopment';

class UserPortalPage extends React.Component {
  static defaultProps = {
    pathName: 'User Portal',
    roles: ['agent', 'administrator'],
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="User Portal" />
        <UnderDevelopment/>
      </Page>
    );
  }
}

export default UserPortalPage
