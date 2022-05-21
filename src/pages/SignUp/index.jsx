import './index.css';

function SignUp() { 
  return (
    <form className='sign-up'>
      <div className='input-sign-up'>
        <h1>Sign-Up</h1>
        <input
        type='text'
        id='input-name'
        placeholder='Username'/>
        <input
        type='password'
        id='input-password'
        placeholder='Password'/>
        <input
        type='password'
        id='input-new-password'
        placeholder='Repeat your password'/>
      </div>
      <div className='action'>
        <button>Sign-Up</button>
      </div>
    </form>
  );
}

export default SignUp;