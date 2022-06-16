import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './About.css';
const About = () => {
    const ClearFields = (e) => {
        e.preventDefault();
        alert('Your Contact From Submitted')
        const inputs = document.querySelectorAll('#input');
        inputs.forEach(input => {
            input.value = '';
        });
    }
    return (
        <div>
            <h2 className='text-info my-4'>CONTACT OUR BRANCH FOR AN SERVICE OR MORE DETAILS</h2>
            <div className='container mt-4' id="inputField">
                <div id="imageSection">
                    <img id="img" src="https://i.postimg.cc/WzrBWB89/2488304.jpg" alt="" width="500" />
                </div>
                <div className='inputField w-75 my-4'>
                    <form onSubmit={ClearFields}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">Name:</InputGroup.Text>
                            <FormControl
                                id='input'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">Address:</InputGroup.Text>
                            <FormControl
                                id='input'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">Phone:</InputGroup.Text>
                            <FormControl
                                id='input'
                                type="number"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br />
                        <InputGroup size="lg h-5">
                            <InputGroup.Text id="inputGroup-sizing-lg">Your Massage:</InputGroup.Text>
                            <FormControl as="textarea" rows={3} id='input' aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <Button type="submit" className="mt-4" varrinte="info">Send</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default About;