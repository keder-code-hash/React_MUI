import React from "react";

class MultInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isGoing:true,
            numGuest:2
        }
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target=event.target;
        const val=target.type==='checkbox'? target.checked:target.value;
        const name=target.name;
        
        //update all state value by this/..
        this.setState({
            [name]:val
        });
        // alert(this.state.isGoing+" "+this.state.numGuest);
    }
    render(){
        return (
            <form>
                <label>
                <input
                    name="isGoing" type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                Number of guests:
                <input
                    name="numGuest" type="number"
                    value={this.state.numGuest}
                    onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}


export default MultInput