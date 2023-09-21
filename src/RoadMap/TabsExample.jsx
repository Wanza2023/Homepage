import React from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function TabsExample() {
    // Tab과 Content에 대한 정보를 배열로 관리합니다.
    const tabs = [
        {
            id: 'link1',
            date: '23년 9월',
            contents: ['팀 결성', '내용1', '내용2'],
        },
        {
            id: 'link2',
            date: '23년 10월',
            contents: ['탭 홈페이지제작', '내용3', '내용4'],
        },
        // 다른 탭 정보를 필요한 만큼 추가할 수 있습니다.
    ];

    return (
        <Row className="justify-content-center">
            <Col sm={3}>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey={tabs[0].id}>
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                {tabs.map((tab) => (
                                    <ListGroup.Item key={tab.id} action href={`#${tab.id}`}>
                                        {tab.date}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                {tabs.map((tab) => (
                                    <Tab.Pane key={tab.id} eventKey={`#${tab.id}`}>
                                        {/* Content를 세로로 나열합니다. */}
                                        {tab.contents.map((content, index) => (
                                            <div key={index}>{content}</div>
                                        ))}
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Col>
        </Row>
    );
}

export default TabsExample;