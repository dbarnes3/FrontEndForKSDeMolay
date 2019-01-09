import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import UnderDevelopment from './../UnderDevelopment';

class CalendarPage extends React.Component {
  static defaultProps = {
    pathName: 'Calendar',
    roles: ['agent', 'administrator'],
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Calendar" />
        <UnderDevelopment/>
      </Page>
    );
  }
}

export default CalendarPage
