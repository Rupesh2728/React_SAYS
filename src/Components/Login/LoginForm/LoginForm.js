import classes from './LoginForm.module.css';
import Inputbox from '../InputBox/InputBox';
import Button from '../../Common/Button/Button';
import LoginRegister from '../LoginRegister/LoginRegister';
import ForgotPassword from '../ForgotPassword/ForgotPassword'
const LoginForm=(props)=>{
      
   const Formheading=props.type==="user"?"Sign In":"TSign In";
   const inputs=props.type==="user"?["email","password"]:["email","theatre license","password"];
    return (
  <div className={classes.loginbox}>
     <div className={classes.formbox}>
         <form action="/login" method="post">
           <h2>{Formheading}</h2>
           {inputs.map(item=>{
            return <Inputbox type={item}/>
           })}
           <ForgotPassword/>
          <Button type="submit" name="Sign In" style={{color:"#e4e4e4",backgroundColor:"#c4103d",fontSize:"16px",fontWeight:400}}/>
          <LoginRegister type={props.type} changeLoginPage={props.changeLoginPage}/>
        </form>
     </div>
  </div>);
}

export default LoginForm;
