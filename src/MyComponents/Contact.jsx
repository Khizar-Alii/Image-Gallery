import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input {...register('name', { required: true })} />
          {errors.name && <span className="error">Name is required</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span className="error">Please enter a valid email address</span>}
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea {...register('message', { required: true })} />
          {errors.message && <span className="error">Message is required</span>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
