import { useState } from 'react';
import Background from '../../Components/Login/Background/Background';
import Container from '../../Components/Login/Container/Container';
import Content from '../../Components/Login/Content/Content';
import LoginForm from '../../Components/Login/LoginForm/LoginForm';

//Try to use common btn for register and login

const Login=()=>{
  const [client,setclient]=useState("user");
  const changeLoginPage=(client)=>{
     if(client==="user")
       setclient("theatre"); 
     else
       setclient("user");  
  }

  return(<>
  <Background/>
   <Container>
    <Content/>
    <LoginForm type={client} changeLoginPage={changeLoginPage}/>
   </Container>
  </>);
}
export default Login;