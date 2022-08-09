import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const TabCustom = () => {
  return (

    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              Body's end? Then soul, live thou upon thy servant's loss, And let that pine to aggravate thy store;
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              Poor soul, the centre of my sinful earth, My sinful earth these rebel powers array, Why dost thou pine within and suffer dearth, Painting thy outward walls so costly gay? Why so large cost, having so short a lease, 
              Dost thou upon thy fading mansion spend? Shall worms, inheritors of this excess, Eat up thy charge? Is this thy body's end? Then soul, live thou upon thy servant's loss, And let that pine to aggravate thy store;
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

  )
}

export default TabCustom