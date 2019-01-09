import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import DashboardAlpha from './DashboardAlpha'

class AboutPage extends React.Component {
  static defaultProps = {
    pathName: 'About',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="About" />
        <DashboardAlpha />
      </Page>
    )
  }
}

export default AboutPage
