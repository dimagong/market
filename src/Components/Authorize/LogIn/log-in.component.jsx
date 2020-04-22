import React, {useState} from 'react'

import { Button, Row, Col} from "antd";

import {Form} from './log-in.styles'
import {Input} from './log-in.styles'

import LayoutComponent from '../../../Lauout/layout.component'
import {TextBold} from '../../ProductList/Blocks/styles'



const LoginComponent = ({createLogin, nameStore, passwordStore, emailStore}) => {

    const[login, loginUppDate] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: ''
    })


    const inputLogIn = event => {
        //event.preventDefault();
        const {name, value} = event.target;
        loginUppDate( () => {
            return {...login, [name]: value}
        });
        
    }
    console.log('inputLogIn', login.name);
    
    const goToSubmit = () => {
        switch(true){
            case (!login.name): 
            alert("enter your name");
            break;
            case (!login.password): 
            alert("enter your password");
            break;
            case (!login.email): 
            alert("enter your email");
            break;
            case (login.password !== login.confirmPassword): 
            alert("passwords don't match");
            break;
            default:
                createLogin(login);
        }

        // if(login.password !== login.confirmPassword &&
        //     !login.name &&
        //     !login.email){
        //     alert("passwords don't match");
        //     return;
        // }
        //createLogin(login);
    }

    const turnReset = () => {
        
       loginUppDate({
            name: '',
            password: '',
            confirmPassword: '',
            email:  ''});   
    }


    const formContent = (
        <div style={{marginTop: '10%'}}>
             <Form  > 
                <TextBold style={{marginTop: 10}}>Fill up an application</TextBold>  
                <Input  type='text'
                         name='name'
                         placeholder='your name' 
                         value={login.name}
                         style={{marginTop: 20}}
                         onChange = {inputLogIn}
                         required
                />
                <Input type='password' 
                        name='password'
                        placeholder='password'
                        value={login.password}
                        onChange={inputLogIn}
                        required
                />
                <Input type='password' 
                        name='confirmPassword'
                        placeholder='confirm password' 
                        value={login.confirmPassword}
                        onChange={inputLogIn}
                        required
                />
                <Input type='email' 
                        name='email'
                        placeholder='email'  
                        value={login.email}
                        onChange={inputLogIn}
                        required
                />
                <Row style={{marginTop: 10, marginBottom: 20}} >
                    <Col style={{marginRight: 30}} >
                        <Button  danger onClick={goToSubmit}>
                            SUBMIT
                        </Button> 
                    </Col >
                    <Col>
                        <Button danger onClick={turnReset} >
                            RESET
                        </Button> 
                    </Col>
                </Row>
                
            </Form> 
        </div>
    )


    return(
        <LayoutComponent  content={formContent}/>
    )
}


export default LoginComponent;