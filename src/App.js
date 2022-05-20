import './App.css';
import { useForm } from "react-hook-form"


function App() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data, errors);
  const isEmpty = Object.keys(errors).length === 0;

  return (
    <div className="App">
      <div className='background-page'>
        <img
        src="logo-art-you.png"
        alt="Logo"
        id='logo-one-blue'/>
        <div className='content-text'>
            <h1>Every day we help artists, galleries and museums thrive in a new digital world</h1>
            <h2>Get started today with our specialized help</h2>
        </div>
      </div>
      <form className='sign-in' onSubmit={handleSubmit(onSubmit)}>
        <div className='input-login'>
          <h1>Login</h1>
          <input
          type="text"
          id='input-login'
          placeholder='Username'
          {...register("username", {required:true})}/>
          <input
          type="password"
          id='input-login'
          placeholder='Password'
          {...register("password", {required:true})}/>
          {(errors.password || errors.username)  && <span>Digit your username and password!</span>}
        </div>
        <div className='action'>
          <button type='submit' disabled={!isEmpty} id="button-login">Log In</button>
          <button type='button'>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default App;
