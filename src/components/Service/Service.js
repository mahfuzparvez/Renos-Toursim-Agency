import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("https://afternoon-ocean-04032.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            {/*--------------- 
              Service Section 
            ----------------*/}
            <h2 className='text-center my-4 fw-bold'>BEST OFFER FOR A <span className='text-danger'>TOUR</span> OF BELGIUM</h2>
            <div className='allCard px-2'>
                {
                    service.map(service => (<Card className='my-4 singleCard container' style={{ width: '20rem' }}>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 CardImage"
                                    src={service.img1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 CardImage"
                                    src={service.img2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title>{service.Name}</Card.Title>
                            <Card.Text>${service.Price}</Card.Text>
                        </Card.Body>
                        <Link to={`/booking/${service.id}`}><Button className="btn btn-warning mb-2 fw-bold">Booking</Button></Link>
                    </Card>))
                }
            </div>
        </div>
    );
};

export default Service;