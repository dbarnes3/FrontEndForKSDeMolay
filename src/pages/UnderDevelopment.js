import React from 'react';
import {Card} from 'antd';

class UnderDevelopment extends React.Component {
    render() {
        return (
            <Card style={{'text-align': 'center'}}>
                <img src="http://ksdemolay.org/images/demolay.jpg"/>
                <h1>Page Under Development.  Please check back later.</h1>
            </Card>
        )
    }
}export default UnderDevelopment
