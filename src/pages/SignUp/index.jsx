import './index.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import api from '../../services/api';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"


function SignUp() {
  const navigate = useNavigate();

  // verificar igualdade das senhas
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required('Username is mendatory')
      .min(6, 'Username must be at 4 char long'),
    password: Yup.string()
      .required('Password is mendatory')
      .min(4, 'Password must be at 4 char long'),
    confirmPassword: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match')
  })
  const formOptions = { resolver: yupResolver(formSchema) }

  const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

  const onSubmit = async data => {
    const response = await api.post("/user/cadaster", data)
      .then(() => {
        navigate("/login");
        toast.success('Registration successful');
      })
      .catch((e) => { toast.error(e.response.data.why) })

    console.log(response.data.ok)
  }

  return (
    <form className='sign-up' onSubmit={handleSubmit(onSubmit)}>

      <div className='input-sign-up'>
        <h1>Sign Up</h1>
        <input
          type='text'
          id='input-name'
          placeholder='Username'
          {...register("name")}
          className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
        <div className='invalid-feedback'>{errors.name?.message}</div>
        <input
          type='password'
          id='input-password'
          placeholder='Password'
          {...register("password")}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
        <div className='invalid-feedback'>{errors.password?.message}</div>
        <input
          type='password'
          id='input-new-password'
          placeholder='Repeat your password'
          {...register("confirmPassword")}
          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
        <div className='invalid-feedback'>{errors.confirmPassword?.message}</div>
      </div>
      <div className='action'>
        <button type='submit'>Sign Up</button>
      </div>
    </form>
  );
}

export default SignUp;