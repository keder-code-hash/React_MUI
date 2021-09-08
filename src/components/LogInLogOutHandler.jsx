import React from "react";

class LogInOutHandle extends React.Component{
    constructor(props){
        super(props);
        this.LogInHandle=this.LogInHandle.bind(this);
        this.LogOutHandle=this.LogOutHandle.bind(this);
        this.state={IsLoggedIn:false};
    }
    LogInHandle(){
        this.setState({IsLoggedIn:true});
    }
    LogOutHandle(){
        this.setState({IsLoggedIn:false});
    }
    render(){
        let button;
        if(this.state.IsLoggedIn){
            button = <LogOutButton onClick={this.LogOutHandle}/>
        }
        else{
            button = <LogInButton onClick={this.LogInHandle}/>
        }
        return(
            <div>
            <GreetHandle IsLoggedIn={this.state.IsLoggedIn}/>
            {button}
            </div>
        );
    }
    
}

    function UserGreet(props){
        return <p>WelCome Back!</p>
    }

    function GuestGreet(props){
        return <p>PleaseLogIN</p>
    }

    function GreetHandle(props){
        if(props.IsLoggedIn){
            return <GuestGreet/>;
        }
        return <UserGreet/>;
    }

    function LogInButton(props){
        return(
            <button onClick={props.onClick}>
                LogIn
            </button>
        );
    }
    function LogOutButton(props){
        return(
            <button onClick={props.onClick}>
                LogOut
        </button>
        );
    }
export default LogInOutHandle