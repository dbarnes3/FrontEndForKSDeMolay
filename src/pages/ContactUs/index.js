import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import UnderDevelopment from './../UnderDevelopment';

class ContactUsPage extends React.Component {
  static defaultProps = {
    pathName: 'Contact Us',
    roles: ['agent', 'administrator'],
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Contact Us" />
        <UnderDevelopment/>
      </Page>
    );
  }
}

export default ContactUsPage
