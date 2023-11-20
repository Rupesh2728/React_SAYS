import { Link } from 'react-router-dom';
import classes from './LoginRegister.module.css';
const LoginRegister=(props)=>{   
    const name=props.type==="user"?"User":"Theatre";

    return (<div className={classes.loginregister}>
        
        <p className={classes.clientregister}>New {name}? 
           <Link to={props.type==="user"?"/Signup":"/TSignup"}>
              Register
           </Link>
        </p>

        <Link to={props.type==="user"?"/Tlogin":"/login"}>
        <p className={classes.userlogin}>{name==="User"?"Theatre":"User"} Login?</p>
        </Link>
        <p className={classes.login_success}>
         Login Success!!!
        </p>
      </div>);
}

export default LoginRegister;