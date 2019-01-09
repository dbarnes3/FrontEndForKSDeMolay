import React from 'react'
import PaymentCard from 'components/CleanComponents/PaymentCard'
import PaymentAccount from 'components/CleanComponents/PaymentAccount'
import PaymentTx from 'components/CleanComponents/PaymentTx'
import ChartCard from 'components/CleanComponents/ChartCard'
import { Button, Input, Icon, Table, Tabs, Card } from 'antd'
import { tableData } from './data.json'
const TabPane = Tabs.TabPane;
class DashboardAlpha extends React.Component {
  state = {
    tableData: tableData,
  }

  render() {
    const tableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Office',
        dataIndex: 'office',
        key: 'office',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary',
        sorter: (a, b) => a.salary - b.salary,
      },
    ]

    return (
      <div>
        <Card>
        <Tabs
            defaultActiveKey="1"
            tabPosition={"top"}
            style={{'text-align': 'center'}}
        >
          <TabPane tab="General Information" key="1">
            <img src="http://ksdemolay.org/images/demolay.jpg"/>
            <section class="main-content clearfix" role="main">
              <article id="post-5935" class="post-5935 page type-page status-publish hentry">
                <p>DeMolay is the premier youth leadership organization dedicated to making young men better people and leaders. Providing a program based on timeless principles and practical experience, DeMolay strives to not only create the ordinary leader, but a leader of character. DeMolays hold themselves to a higher moral standard, striving to constantly improve and be better each and every day.</p>
                <p>DeMolay is a youth-led, adult-advised organization in which young men learn to plan, organize, and facilitate their own programs. DeMolays take part in a wide-range of activities, from athletic competitions, to public speaking tournaments, to community service events. All activities are guided by the interests of the local chapter. If you can dream it, you can do it in DeMolay.</p>
                <p>DeMolay still manages to provide endless fun and friendships that last a lifetime, even with such a serious mission. When a young man joins DeMolay, he instantly gains over four million brothers across the globe. No youth organization provides such life-changing experiences like DeMolay.</p>
                <p>But words are insufficient to describe DeMolay; it must be experienced. Give it a chance and we know you will discover what we already know; DeMolay is the greatest youth organization in the world.</p>
                <p>&nbsp;</p>
              </article>
            </section>
          </TabPane>
          <TabPane tab="Squires" key="2">Content of tab 2</TabPane>
          <TabPane tab="Activities" key="3">Content of tab 2</TabPane>
          <TabPane tab="Core Values & Skills Learned" key="4">Content of tab 4</TabPane>
          <TabPane tab="Community Involvement" key="5">Content of tab 5</TabPane>
          <TabPane tab="Locations" key="6">Content of tab 6</TabPane>
        </Tabs>
        </Card>
      </div>
    )
  }
}

export default DashboardAlpha
