import Background from '../../Components/Login/Background/Background';
import Container from '../../Components/Login/Container/Container';
import Content from '../../Components/Login/Content/Content';
import LoginForm from '../../Components/Login/LoginForm/LoginForm';

//Try to use common btn for register and login

const Login=(props)=>{
  return(<>
  <Background/>
   <Container>
    <Content/>
    <LoginForm type={props.client}/>
   </Container>
  </>);
}
export default Login;