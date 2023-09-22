import classes from './LoginRegister.module.css';
const LoginRegister=(props)=>{   
    const name=props.type==="user"?"User":"Theatre";
    const changeloginfunc=()=>{
      props.changeLoginPage(props.type);
    }
    return (<div className={classes.loginregister}>
        <p className={classes.clientregister}>New {name}? <a href="/TSignup">Register</a></p>
        <p className={classes.userlogin} onClick={changeloginfunc}>{name==="User"?"Theatre":"User"} Login?</p>
        <p className={classes.login_success}>
         Login Success!!!
        </p>
      </div>);
}

export default LoginRegister;