import React from 'react';
import Page from 'components/LayoutComponents/Page';
import Helmet from 'react-helmet';
import {Card} from 'antd';

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
        <Card style={{ 'margin-bottom': '5px'}} title={"General Forms"}>
            <a href="/pdf/medical.pdf">Medical Release Form</a><br/>
            <a href="/pdf/bylaw.pdf">Kansas DeMolay By-Laws</a><br/>
        </Card>
        <Card>
            <h1>Petitions</h1>
            <a href="/pdf/demolay_petition.pdf">DeMolay</a><br/>
            <a href="/pdf/squires_petition.pdf">Squires</a><br/>
            <h1>Awards</h1>
            <a href="/pdf/demolayOfYear.pdf">DeMolay of the Year</a><br/>
            <a href="/pdf/chapterOfYear.pdf">Chapter of the Year</a><br/>
            <a>Past State Master Countilor - Meritorious Service Award (PMC-MSA)</a><br/>
            <a href="/pdf/representative_demolay_form.pdf">Representative DeMolay (RD)</a><br/>
            <h1>Ritual Competition Forms</h1>
            <a href="/pdf/ritualEvent.pdf">Universal Ritual Entry Form</a><br/>
            <h1>Membership Drive Information</h1>
            <a href="/pdf/membership.pdf">Membership 2016 Packet</a><br/>
            <a href="/doc/4stepProcess.docx">4 Step Process</a><br/>
            <a href="/doc/joiningceremony.docx">Joining Ceremony Outline</a><br/>
            <a href="/doc/sampleinvite.docx">Sample Invitational Letter</a><br/>
            <a href="/doc/samplePhoneMessage.docx">Sample Phone Messages</a><br/>
            <h1>Sweetheart Application</h1>
            <a href="/pdf/Application for State Sweetheart and Associate.docx">State Sweetheart Application</a><br/>
         </Card>
      </Page>
    );
  }
}

export default UsefulFormsPage
