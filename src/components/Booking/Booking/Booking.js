import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css';
const Booking = () => {
    const { serviceId } = useParams();
    const [singleService, setsingleService] = useState([]);
    useEffect(() => {
        fetch("https://afternoon-ocean-04032.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setsingleService(data))
    }, [])
    const find = singleService.find((singleService) => singleService.id === serviceId);
    const { Name, Price, img1, img2, Description } = find || {};
    return (
        <div>
            <h2 className='text-center my-4 fw-bold'>THIS IS<span className='text-danger'> BOOKED </span>FOR YOU</h2>
            <Card id="Booking" className='my-4'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 CardImage"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 CardImage"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>${Price}</Card.Text>
                    <Card.Text>{Description}</Card.Text>
                </Card.Body>
                <span><Link to="/home"><Button className="btn btn-warning mb-2 me-5 fw-bold">Go Home</Button></Link><Link to="/order"><Button className="btn btn-warning mb-2 fw-bold">Booking</Button></Link></span>
            </Card>
        </div>
    );
};

export default Booking;