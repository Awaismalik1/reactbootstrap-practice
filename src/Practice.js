import React, { useState } from 'react'
import { Stack, Row, Col, Toast, Table, Button, Spinner, ProgressBar, Placeholder, Carousel, Form, Nav, Badge, Accordion, Card, CardImg, Container, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Practice() {
    const [color, setColor] = useState("red")
    const [show, setShow] = useState(false);

    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Spinner animation="border" variant="primary" />
                            <img
                                alt="logo"
                                src="https://pbs.twimg.com/profile_images/1349694499497406467/21ofPu1U_400x400.jpg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Enigmatix
                        </Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                            <Nav.Link href="#location">Location</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#contactUs">Contact us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            {/* <div>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://media-exp1.licdn.com/dms/image/C4D1BAQE_fKPpBqpDsw/company-background_10000/0/1610721047621?e=2159024400&v=beta&t=MOs3_ySoznJMBuRI4PU9FpCiGj5sdrg237QxZj0_B_Y" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div> */}

            <div>
                <Carousel interval={1000} variant="dark">
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src="https://media-exp1.licdn.com/dms/image/C4D1BAQE_fKPpBqpDsw/company-background_10000/0/1610721047621?e=2159024400&v=beta&t=MOs3_ySoznJMBuRI4PU9FpCiGj5sdrg237QxZj0_B_Y"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media-exp1.licdn.com/dms/image/C4D1BAQE_fKPpBqpDsw/company-background_10000/0/1610721047621?e=2159024400&v=beta&t=MOs3_ySoznJMBuRI4PU9FpCiGj5sdrg237QxZj0_B_Y"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media-exp1.licdn.com/dms/image/C4D1BAQE_fKPpBqpDsw/company-background_10000/0/1610721047621?e=2159024400&v=beta&t=MOs3_ySoznJMBuRI4PU9FpCiGj5sdrg237QxZj0_B_Y"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Card>
                <CardImg src="https://media-exp1.licdn.com/dms/image/C4D1BAQE_fKPpBqpDsw/company-background_10000/0/1610721047621?e=2159024400&v=beta&t=MOs3_ySoznJMBuRI4PU9FpCiGj5sdrg237QxZj0_B_Y" width="100px" height="200px" />
                <Card.Body className="text-center"> <h5>Come and Join Us for Bright Future</h5></Card.Body>
                <Card.Text> Enigmatix is the Software House and The domain of this Software house is the Web. I have more than 100 Experts that are the part of our company. Alhamdolillah this is one of the biggest software house in this area.</Card.Text>
            </Card>
            <div className='align center'>
                <h3>Click the bellow Button to Enroll Yourself</h3>
                <Button className="btn btn-success text-center" borderRadius="5px">Click Me</Button>
            </div>
            <div className="bg-light border" gap={3}>
                <h1>Color of the heading is the {color}</h1>

                <Button type="button" onClick={() => setColor("blue")}>Blue</Button>
                <Button type="button" onClick={() => setColor("yellow")}>yellow</Button>
                <Button type="button" onClick={() => setColor("pink")}>pink</Button>
            </div> <br />
            <div>

                <Stack >
                    {/* <div className="bg-light border">First item</div> */}
                    {/* <div className="bg-light border">Second item</div>
                    <div className="bg-light border">Third item</div> */}
                    <Form>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label >Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div >
                            <div>
                                <input type="radio" value="Male" name="gender" /> Male
                                <input type="radio" value="Female" name="gender" /> Female

                            </div>
                            {/* <Form.Check
                                inline
                                value="Male"
                                type="radio"
                                aria-label="radio 1"
                                label="Male"
                            />
                            <Form.Check
                                inline
                                value="Female"
                                type="radio"
                                aria-label="radio 1"
                                label="Female"

                            /> */}
                        </div>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>

                    </Form>
                    <Form>
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue="#0000"
                            title="Choose your color"
                        />
                    </Form>

                </Stack>
                <div>
                    <h1 className='text-center'>Frequently Asked Question</h1>
                    <Button variant="light">
                        FAQ's <Badge bg="success">6</Badge>
                        <span className="visually-hidden">unread messages</span>
                    </Button>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>About Enigmatix</Accordion.Header>
                            {/* <Accordion.Image src="https://pbs.twimg.com/media/EvZcEyeWgAYXP9W?format=jpg&name=large" /> */}
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Experts Effort</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>

            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} bg="warning" />
            </Placeholder>

            <ProgressBar>
                <ProgressBar striped variant="success" label="HTML" animated now={20} key={1} />
                <ProgressBar striped variant="warning" label="CSS" now={20} key={2} />
                <ProgressBar striped variant="secondary" label="JavaScript" animated now={20} key={3} />
                <ProgressBar striped variant="dark" label="React js" now={20} key={4} />
                <ProgressBar striped variant="danger" label="Python" animated now={20} key={5} />
            </ProgressBar>
            <br />
            <Table striped bordered hover variant="primary" size="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td align="center" colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

            <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="https://pbs.twimg.com/profile_images/1349694499497406467/21ofPu1U_400x400.jpg"
                                className="rounded me-2"
                                alt=""
                                width="32px"
                                height="32px"
                            />
                            <strong className="me-auto">Enigmatix</strong>
                            <small>2 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button onClick={() => setShow(true)}>Show Toast</Button>
                </Col>
            </Row>




        </div>
    )
}

export default Practice