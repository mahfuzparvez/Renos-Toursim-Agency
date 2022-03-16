import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const [service, setService] = useState([]);
    const [clinet, setClinet] = useState([]);
    useEffect(() => {
        fetch("https://afternoon-ocean-04032.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    useEffect(() => {
        fetch("https://mocki.io/v1/63d05815-c96c-4d9c-a5c8-48ed6a3b9d83")
            .then(res => res.json())
            .then(data => setClinet(data))
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
                        <Link to={`/booking/${service.id}`}><Button className="btn btn-warning mb-2 fw-bold">Details</Button></Link>
                    </Card>))
                }
            </div>
            {/*------------------- 
                Clinet Service
            ----------------------*/}
            <h2 className='text-center my-4 fw-bold text-info'>HAPPY CLINET</h2>
            <h4 className='text-center my-2 fw-bold'>REVIEW</h4>
            <div className='reviewCard container py-2'>
                {
                    clinet.map(clinet => (<CardGroup style={{ width: '26rem' }}>
                        <Card className="my-2 singleReview">
                            <Card.Img variant="top" src={clinet.img} />
                            <Card.Body>
                                <Card.Title>I'm: {clinet.ClinetName}</Card.Title>
                                <Card.Text>{clinet.Review}</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>))
                }
            </div>
            {/*---------------------
               Clinet tour photo 
            ---------------------*/}
            <h2 className='text-center my-4 fw-bold'>WE HAVE MORE <span className='text-danger'>SUCCESS</span> CLIENT</h2>
            <div className="clinetPhoto">
                <img src="https://i.postimg.cc/sgQsc8p3/pexels-artem-beliaikin-2106776.jpg" alt="" />
                <img src="https://i.postimg.cc/SNHwyKMp/pexels-guillaume-meurice-2529185.jpg" alt="" />
                <img src="https://i.postimg.cc/Hnv104nJ/pexels-maria-orlova-4947851.jpg" alt="" />
                <img src="https://i.postimg.cc/bYC7BgYr/pexels-pixabay-208246.jpg" alt="" />
                <img src="https://i.postimg.cc/s2rqh0m6/pexels-roberto-vivancos-4796517.jpg" alt="" />
                <img src="https://i.postimg.cc/hvjHGzsK/pexels-samson-katt-5225084.jpg" alt="" />
                <img src="https://i.postimg.cc/4ySjHf2V/pexels-samson-katt-5226476.jpg" alt="" />
                <img src="https://i.postimg.cc/hjKkH37z/pexels-trung-nguyen-2747049.jpg" alt="" />
                <img src="https://i.postimg.cc/gJ4CdqvM/pexels-vanessa-garcia-6324265.jpg" alt="" />
                <img src="https://i.postimg.cc/sghCSWrX/pexels-vanessa-garcia-6324292.jpg" alt="" />
                <img src="https://i.postimg.cc/tC7jqfvF/pexels-yaroslav-shuraev-4510992.jpg" alt="" />
                <img src="https://i.postimg.cc/d1PTjrpV/brandi-redd-fyh2-Fbjcnp-Q-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};
export default Header;