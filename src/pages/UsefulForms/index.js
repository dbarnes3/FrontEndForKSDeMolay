import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import UnderDevelopment from './../UnderDevelopment';

class UsefulFormsPage extends React.Component {
  static defaultProps = {
    pathName: 'Useful Forms',
    roles: ['agent', 'administrator'],
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Useful Forms" />
        <UnderDevelopment/>
      </Page>
    );
  }
}

export default UsefulFormsPage
