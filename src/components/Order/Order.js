import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Order.css';
const Order = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your Booking Success. Have Fun With Renos.');
                    reset();
                }
            })
    };
    return (
        <div>
            <h2 className='text-center my-4 fw-bold'>PLEASE <span className='text-danger'>FILL UP</span> THE FORM</h2>
            <form className="order_form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} /><br />
                <input defaultValue={user.email} {...register("email", { register })} /><br />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} /><br />
                <input placeholder="City" defaultValue="" {...register("city")} /><br />
                <select className="form-select" aria-label="Default select example" {...register("destination")}>
                    <option selected>Confirm your travel city</option>
                    <option value="Antwerp">Antwerp</option>
                    <option value="Leuven">Leuven</option>
                    <option value="Ghent">Ghent</option>
                    <option value="Brussels">Brussels</option>
                    <option value="Liege">Liege</option>
                    <option value="Limburg">Limburg</option>
                    <option value="Namur">Namur</option>
                    <option value="Mons">Mons</option>
                </select>
                <input placeholder="Phone number" defaultValue="" {...register("phone")} /><br />
                <input className="bg-warning text-light p-2 fw-bold rounded border-0" type="submit" />
            </form>
        </div>
    );
};

export default Order;