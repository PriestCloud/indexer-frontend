/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3">Using Fuel Network</h3>
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-spaceship" />
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bag-16" />
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      Access, read and edit Fuel network data.
                      Constant Information flow is guarateed
                       <br />
                      <br />
                      Power your fuel networks apps with real-time blockchain data 
                      and subgraphs without managing any complex infrastructure.
                    </p>
                  </TabPane>
                  <TabPane tabId="link2">
                  <p>
                      Access, read and edit Fuel network data.
                      Constant Information flow is guarateed
                       <br />
                      <br />
                      Power your fuel networks apps with real-time blockchain data 
                      and subgraphs without managing any complex infrastructure.
                    </p>
                  </TabPane>
                  <TabPane tabId="link3">
                  <p>
                      Access, read and edit Fuel network data.
                      Constant Information flow is guarateed
                       <br />
                      <br />
                      Power your fuel networks apps with real-time blockchain data 
                      and subgraphs without managing any complex infrastructure.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 5
                      })}
                      onClick={(e) => setTextTabs(5)}
                      href="#pablo"
                    >
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 6
                      })}
                      onClick={(e) => setTextTabs(6)}
                      href="#pablo"
                    >
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                  <p>
                      TorchIndex lets you develop real-time streams for your decentralized 
                      applications so you dont have to manage complex data yourself. 
                      <br />
                      By indexing data from Fuel Network, TorchIndex helps transform the
                      needed data to serve your app's requirement in real-time.
                    </p>
                  </TabPane>
                  <TabPane tabId="link5">
                  <p>
                      TorchIndex lets you develop real-time streams for your decentralized 
                      applications so you dont have to manage complex data yourself. 
                      <br />
                      By indexing data from Fuel Network, TorchIndex helps transform the
                      needed data to serve your app's requirement in real-time.
                    </p>
                  </TabPane>
                  <TabPane tabId="link6">
                  <p>
                      TorchIndex lets you develop real-time streams for your decentralized 
                      applications so you dont have to manage complex data yourself. 
                      <br />
                      By indexing data from Fuel Network, TorchIndex helps transform the
                      needed data to serve your app's requirement in real-time.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
