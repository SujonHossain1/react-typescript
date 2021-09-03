import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { BiChevronRight } from 'react-icons/bi';

const Banner = () => {
    return (
        <div>
            <Container>
                <Row className="g-2">
                    <Col lg={3}>
                        <div
                            className="dropdown-menu d-block"
                            style={{ position: 'static' }}
                        >
                            <a
                                href="/"
                                className="dropdown-item"
                            >
                                <span> Item </span>
                                <span>
                                    <BiChevronRight />
                                </span>
                            </a>
                        </div>
                    </Col>
                    <Col lg={9} className="mt-4">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;