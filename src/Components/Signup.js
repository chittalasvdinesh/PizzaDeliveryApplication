import React from 'react'
import { useNavigate, } from 'react-router-dom'
import Header from './Header'
import { useForm } from 'react-hook-form';
import { addUser } from './Myservices';

export default function Signup() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {

        addUser(data)
            .then(res => {
                if (res) {
                    alert("User Added");
                    navigate("/login");
                }
            })
    }
    return (
        <>
            <Header />
            <div className='container mt-3'>
                <h3 className='fw-bold'>Sign Up</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-3'>
                    <div className='form-floating mb-3'>
                        <input type="text"
                            className='form-control'
                            placeholder='name'
                            id="userInput1"
                            {...register('username', { required: "username is required" })}
                        />
                        <label htmlFor='userInput1'>Name</label>
                        <p className='text-danger'>{errors.username?.message}</p>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="email"
                            className='form-control'
                            placeholder='email'
                            id="userInput2"
                            {...register('email', { required: "Email is required", pattern: { value: `/^\S+@\S/+$/i`, message: 'Not a valid email' } })}
                        />
                        <label htmlFor='userInput2'>Email</label>
                        <p className='text-danger'>{errors.email?.message}</p>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="tel"
                            className='form-control'
                            placeholder='contact'
                            id="userInput3"
                            {...register('contact', {
                                required: "contact is required",
                                minLength: { value: 10, message: 'should have numbers' }
                            })}
                        />
                        <label htmlFor='userInput2'>Contact No.</label>
                        <p className='text-danger'>{errors.contact?.message}</p>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password"
                            className='form-control'
                            placeholder="password"
                            id="userInput4"
                            {...register('password', {
                                required: "Password is required",
                                minLength: { value: 4, message: 'should be more than 4 characters' },
                                maxLength: { value: 10, message: 'not exceeed more than 10 characters' }
                            })} />
                        <label htmlFor='userInput4'>Password.</label>
                        <p className='text-danger'>{errors.password?.message}</p>
                    </div>

                    <input type="submit" value="SignUp" className='btn btn-secondary' />

                </form>
            </div>

        </>
    )
}
