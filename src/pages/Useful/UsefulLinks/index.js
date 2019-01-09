import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import {Card} from 'antd';

class UsefulLinksPage extends React.Component {
  static defaultProps = {
    pathName: 'Useful Links',
    roles: ['agent', 'administrator'],
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Useful Links" />
          <Card>
              <a href="https://demolay.org/"><img src="http://ksdemolay.org/developing/images/logo.jpeg" width="225px" height="120px"/></a>
              <center><a href="https://demolay.org/">DeMolay International</a></center>

              <a href="https://demolay.org/resources/forms/"><img src="http://ksdemolay.org/developing/images/logo.jpeg" width="225px" height="120px"/></a>
               <center><a href="https://demolay.org/resources/forms/">DeMolay Forms</a></center>

                <a href="https://escribe.demolay.org/login.php"><img src="http://ksdemolay.org/developing/images/logo.jpeg" width="225px" height="120px"/></a>
                <center><a href="https://escribe.demolay.org/login.php">DeMolay Escribe</a></center>

          </Card>
          <Card title={"DeMolay Scholarships"}>
                      <a href="https://demolay.org/scholarships/"><img src="http://ksdemolay.org/developing/images/logo.jpeg" width="225px" height="120px"/></a>
                      <center><a href="https://demolay.org/scholarships/">General Scholarships</a></center>
                      <a href="https://demolay.org/scholarships/"><img src="http://ksdemolay.org/developing/images/logo.jpeg" width="225px" height="120px"/></a>
                      <center><a href="https://demolay.org/kachessay/">Kach Essay Scholarship</a></center>
          </Card>
          <Card title={"Kansas Masonic Foudnation Scholarship"}>
                      <a href="https://demolay.org/scholarships/"><img src="http://ksdemolay.org/images/kmflogo.png" width="225px" height="120px"/></a>
                      <center><a href="http://kansasmasonic.foundation/wp-content/uploads/2016/07/Scholarships-2017.pdf">Information</a></center>
                      <a href="https://demolay.org/scholarships/"><img src="http://ksdemolay.org/images/kmflogo.png" width="225px" height="120px"/></a>
                      <center><a href="https://app.wizehive.com/appform/login/kmfapp2017">Application</a></center>
          </Card>
      </Page>
    );
  }
}

export default UsefulLinksPage
