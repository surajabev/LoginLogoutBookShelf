import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { withRouter } from 'react-router';
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import TodoComponent from './TodoComponent.jsx'
class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
            <Router>
                    <>
                {/* //Above for 2 routes */}
                <HeaderComponent/>
                        <Switch>
                          {/*   <Route path="/" exact component={LoginComponent}/> */}
                          <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                          
                            <Route component={ErrorComponent}/>
                        </Switch>
                        
                        <FooterComponent/>
                    </>
                </Router>
{/* 
             <LoginComponent/>
             <WelcomeComponent/> */}
            </div>
                )
            }
    
        }

 




        
  
         
/* function ShowInvalidCredentials(props){
    if(props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }
    return null
}

function ShowLoginSuccessMessage(props) {
    if(props.showSuccessMessage) {
        return <div>Login Sucessful</div>
    }
    return null
} */

    export default TodoApp