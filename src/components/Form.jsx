import React from "react";
// https://reactjs.org/docs/forms.html


class FormExm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert("name is :"+this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button type="submit" value="submit">Submit</button>
            </form>
        )
    }

}


export default FormExm


/**
 * in html <input> <textarea> <select> typically change 
 * or aitaine their own state and update based upon the 
 * user input.
 * But in React mutable state is typically kept in the state property
 *  of components, and only updated with setState().
 * 
 * We can combine the two by making the React state
 *  be the “single source of truth”. Then the React 
 * component that renders a form also controls what 
 * happens in that form on subsequent user input.
 *  An input form element whose value is controlled
 *  by React in this way is called a 
 * “controlled component”.
 * 
 */