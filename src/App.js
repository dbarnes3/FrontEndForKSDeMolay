import React, { Component } from 'react';
import {Card, Tabs, Row, Col, List} from 'antd';
import './App.css';

const TabPane = Tabs.TabPane;


class App extends Component {
    render() {
        let valuesData = [
            {
                title: 'Filial Love',
                content: ' To understand, appreciate, and reciprocate the love our parents give to us.'
            },
            {
                title: 'Reverence for Sacred Things',
                content: 'To respect the religious beliefs of everyone, and to believe in a cause higher than ourselves.',
            },
            {
                title: 'Courtesy',
                content: 'To value every person through acceptance, empathy, respect, and tolerance.',
            },
            {
                title: 'Comradship',
                content: 'To form true and long lasting friendships far and wide.',
            },
            {
                title: 'Fidilety',
                content: 'To be true, trustworthy, and honest to yourself and your values.',
            },
            {
                title: 'Cleanliness',
                content: 'To be clean in thought, word, and deed.',
            },
            {
                title: 'Patriotism',
                content: 'To honor your country and be a contributing citizen.  To respect those who have and continue to serve our Country in every field of sacrifice and service.',
            }
        ];
        let skillsData = [
            {
                title: 'Leadership',
                content: ''
            },
            {
                title: 'Communication',
                content: ''
            },
            {
                title: 'Event Planning',
                content: ''
            },
            {
                title: 'Team Work',
                content: ''
            },
        ];
        let DemolayIs = [
            {
                title: "A youth-led, adult-advised organization in which young men learn to plan, organize, and facilitate their own programs."
            },
            {
                title: "An organization dedicated to making youn men better people and leaders."
            },
            {
                title: "A program built on timeless principles and practical experience."
            },
            {
                title: "An Organization where all activities are 100% guided by the interests of the members."
            },
            {
                title: "An organizaiton that provides endless fun, and friendships that last a lifetime."
            },
            {

            }
        ];
        let Squires = [
            {
                title: "Organization providing boys age 9 to 111 an opportunity to be a part of, and support, Demolay."
            },
            {
                title: "Through Collaborative efforts with the local DeMolay chapter, squires plan their own program of activities."
            },
            {
                title: "The group supports the purpose and ideals of DeMolay through quality programs teaching leadership skills, social development and cooperative activities with the DeMolay Chapters and other local community groups. "
            },
            {
                title: " The goal of the Squires program is for its members and their parents to have fun while learning three important life lessons: Wisdom (the importance of education), Truth (honesty), and Justice (equality and fairness)."
            },
            {
                title: "By providing a fun environment and teaching three very simple lessons, the Squires will help parents draw closer to their sons and instill values that will stay with their sons throughout their lives."
            },

        ];
        return (
            <div className="App">
                <div style={{'min-width': '640px'}}>
                    <Card>
                        <img src="http://ksdemolay.org/images/logo2.jpeg" alt={""}  height="200em"/>
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition={"top"}
                            style={{'textAlign': 'center', color: 'black'}}
                        >
                            <TabPane tab="Home" key="1">
                                <img src="/images/paintball.jpg" alt={""} style={{height: '250px', margin: '10px'}}/>
                                <img src="/images/conclave_rodeo.jpg" alt={""} style={{height: '250px', margin: '10px'}}/>
                                <img src="/images/chips2.jpg" alt={""} style={{height: '250px', margin: '10px'}}/>
                                <img src="/images/waterFight.jpg" alt={""} style={{height: '250px', margin: '10px'}}/>
                                <img src="/images/proclomation.jpg" alt={""} style={{height: '250px', margin: '10px'}}/>
                                <h1>DeMolay Is:</h1>
                                <List
                                    dataSource={DemolayIs}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={item.title}
                                                description=""
                                            />
                                        </List.Item>
                                    )}
                                />
                                <p>But words are insufficient to describe DeMolay - it must be experienced!  No youth organization provides such life-changing experiences like DeMolay. In this day and age, when more and more of us are distanced by technology, why not get in touch with real people who share your value and intrests?
                                </p>
                            </TabPane>

                            <TabPane tab="Mission Statement" key="2">

                                <h1>Kansas DeMolay strives to empower and mentor young men to improve themselves, their families, and their communities through brotherhood.</h1>
                                <img src="http://ksdemolay.org/images/demolay.jpg" alt={""} style={{height: '250px', margin: '10px'}}/>
                            </TabPane>
                            <TabPane tab="Squires" key="3">
                                <img src="/images/squires.jpg" alt={""} style={{height: '250px'}}/>
                                <h1>Squires</h1>
                                <List
                                    dataSource={Squires}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={item.title}
                                                description=""
                                            />
                                        </List.Item>
                                    )}
                                />
                                <p>
                                The basic Squire organization is called a “Manor.”  Every Manor is sponsored by a DeMolay Chapter or a DeMolay Jurisdiction.  Its adult leaders, who are registered DeMolay Advisors have been educated in Youth Protection and been subjected to the rigorous certification process.  In addition, when possible, there is a DeMolay member appointed to the Manor as a “Squire Mentor,” or liaison between the sponsoring chapter and the Manor.  His role is to be a big brother and example to the members of the Manor.
                                </p>
                            </TabPane>
                            <TabPane tab="Activities" key="4">
                                <img src="/images/fun.jpg" alt={""} style={{height: '250px', margin: '10px'}}/>
                                <img src="/images/arcade.jpg" alt={""} style={{height: '250px', margin: '10px'}}/>
                                <img src="/images/saltmine.jpg" alt={""} style={{height: '250px', margin: '10px'}}/>
                                <img src="/images/bumbercars.jpg" alt={""} style={{height: '250px', margin: '10px'}}/>
                                <p>DeMolay Chapters are constantly organizing fun gatherings, from dances, to movie trips, to bowling trips, to sports tournaments, to anything fun you can think of doing. Because you have the ability to create your own events, you and your friends get to decide what you want to do. Board game nights? Easy. Lockins? Piece of cake. Video game tournaments? They’re everywhere. All the fun get-togethers you can dream of are possible with your leadership and the help and guidance of your advisors. Sometimes that’s just meeting up at a park to have pizza and talk about life, other times it’s having a grand, formal banquet. The sky is the limit</p>
                                <p>If you’re like most young men, you’re probably going to have a lot more fun at DeMolay events when there are girls to socialize with. Luckily, there are Job’s Daughters and Rainbow Girls, which are just like DeMolay, but for young women. Job’s Daughters Bethels and Rainbow Girl Assemblies are all around the world, and they’re likely active in your area. A Masonic Youth event is the perfect environment to meet and talk to girls your age with similar interests, so be sure to ask your advisors and Chapter friends about your immediate Masonic Youth community.</p>
                            </TabPane>
                            <TabPane tab="Core Values & Skills Learned" key="5">
                                <Col span={12}>
                                    <Card title="Core Values" bordered={true} style={{margin: '10px'}}>
                                        <List
                                            dataSource={valuesData}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        title={item.title}
                                                        description={item.content}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card title="Skills Learned" bordered={true} style={{margin: '10px'}}>
                                            <List
                                                dataSource={skillsData}
                                                renderItem={item => (
                                                    <List.Item>
                                                        <List.Item.Meta
                                                            title={item.title}
                                                            description={item.content}
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                    </Card>
                                </Col>
                            </TabPane>
                            <TabPane tab="Locations" key="7">
                                <div style={{  padding: '30px' }}>
                                            <img src="/images/deleware.jpg" alt={""} style={{height: '250px', 'margin-bottom': '10px', 'margin-top': '10px'}}/>
                                            <Card title="Delaware Chapter" bordered={true}>
                                                <Card title="Location" bordered={false}>
                                                    Kansas City, KS
                                                </Card>
                                                <Card title={"Meeting Nights"} bordered={false}>
                                                    1st and 3rd Thursdays at 7 p.m.
                                                </Card>
                                                <Card title={"Contact Email"} bordered={false}>
                                                    jenniferareed1180@gmail.com
                                                </Card>
                                            </Card>
                                            <img src="/images/excalibur.jpg" alt={""} style={{height: '250px', 'margin-bottom': '10px', 'margin-top': '10px'}}/>
                                            <Card title="Excalibur Chapter" bordered={true}>
                                                <Card title="Location" bordered={false}>
                                                    Wichita, KS
                                                </Card>
                                                <Card title={"Meeting Nights"} bordered={false}>
                                                    1st and 3rd Tuesdays
                                                </Card>
                                                <Card title={"Contact Email"} bordered={false}>
                                                    excaliburdemolayks@gmail.com
                                                </Card>
                                            </Card>
                                            <img src="/images/kingaurthur.jpg" alt={""} style={{height: '250px', 'margin-bottom': '10px', 'margin-top': '10px'}}/>
                                            <Card title="King Arthur Chapter" bordered={true}>
                                                <Card title="Location" bordered={false}>
                                                    Coffeyville, KS
                                                </Card>
                                                <Card title={"Contact Email"} bordered={false}>
                                                    ksgarton@yahoo.com
                                                </Card>
                                            </Card>
                                            <img src="/images/roundtable.jpg" alt={""} style={{height: '250px', 'margin-bottom': '10px', 'margin-top': '10px'}}/>
                                            <Card title="Round Table Chapter" bordered={true}>
                                                <Card title="Location" bordered={false}>
                                                    Topeka, KS
                                                </Card>
                                                <Card title={"Meeting Nights"} bordered={false}>
                                                    1st and 3rd Sundays at 7 p.m.
                                                </Card>
                                                <Card title={"Contact Email"} bordered={false}>
                                                    david.barnes2012@gmail.com
                                                </Card>
                                            </Card>
                                </div>
                            </TabPane>
                            <TabPane tab="Calendar" key="8">
                                <iframe
                                    title="calendar"
                                    src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=a3NkZW1vbGF5MTkxOUBnbWFpbC5jb20&amp;src=YXFtZWpydmxoYzcyNzk2aTZkcnFmcGcyMWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%23A79B8E"
                                    style={{border: 0}}
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                    scrolling="no"
                                />
                            </TabPane>
                        </Tabs>
                    </Card>
                </div>
            </div>
        );
    }
}

export default App;