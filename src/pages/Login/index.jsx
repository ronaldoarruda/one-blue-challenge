import './index.css';
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



function Login() {

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required('Username is mendatory'),
    password: Yup.string()
      .required('Password is mendatory'),
  })

  const formOptions = { resolver: yupResolver(formSchema) }

  const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
  const onSubmit = async data => {
    const response = await api.post("/login", data)
      .then(() => { toast.success('Login successfully') })
      .catch((e) => { toast.error(e.response.data.why) })

    console.log(response.data);

  };

  return (
    <form className='sign-in' onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className='input-login'>
        <h1>Login</h1>
        <input
          type="text"
          id='input-name'
          placeholder='Username'
          {...register("name")}
          className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">{errors.name?.message}</div>
        <input
          type="password"
          id='input-password'
          placeholder='Password'
          {...register("password")}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <div className='action'>
        <button type='submit' id="button-login" >Log In</button>
        <Link to="/sign-up" ><button className='sign-up-btn'>Sign up</button></Link>
      </div>
    </form>
  );
}

export default Login;
