import RegForm from '../../Components/Register/RegForm/RegForm';
import Container from '../../Components/Register/Container/Container';
import Header from '../../Components/Register/Header/Header';
import './Register.module.css';
const Register=(props)=>{
  return (<>
    <Container>
       <Header headervalue="Registration"/>
       <RegForm action={props.action} method={props.method} type={props.type}/>
    </Container>
    </>);
}

export default Register;