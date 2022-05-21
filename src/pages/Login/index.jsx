import './index.css';
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useState } from 'react';


function Login() {
  const [isError, setIsError] = useState(false)

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = async data => {
    setIsError(false)
    const response = await api.post("/login", data).catch((e) => {setIsError(!e.response.data.ok)})
    console.log(response.data.ok);

  };
  const isEmpty = Object.keys(errors).length === 0;

  return (
    <form className='sign-in' onSubmit={handleSubmit(onSubmit)}>
      <div className='input-login'>
        <h1>Login</h1>
        <input
        type="text"
        id='input-name'
        placeholder='Username'
        {...register("name", {required:true})}
        onChange={() => setIsError(false)}/>
        <input
        type="password"
        id='input-password'
        placeholder='Password'
        {...register("password", {required:true})}
        onChange={() => setIsError(false)}/>
        {(errors.password || errors.username)  && <span>Digit your username and password!</span>}
        { isError && <span>The username you entered doesn't belong to an account. Please check your username and try again.</span>}
      </div>
      <div className='action'>
        <button type='submit' disabled={!isEmpty} id="button-login" >Log In</button>
        <button type='button'>Sign up</button>
      </div>
    </form>
  );
}

export default Login;
