import React from "react";


class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={items:[],text:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    render(){
        return (
            <React.Fragment>
                <div>
                    <h3>TODO Lists:</h3>
                    <TodoList items={this.state.items}/>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="new-todo">
                            lists
                        </label>
                        <input id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}/>
                        <button>
                            Add Items:{this.state.items.length+1}
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
    handleChange(e){
    this.setState({text:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.text.length===0){
            return ;
        }
        const newItem={
            text:this.state.text,
            Id:Date.now()
        };
        this.setState(state=>({
            items:state.items.concat(newItem),
            text:''
        }));
    }
}

class TodoList extends React.Component{
    render(){
        return (
            <React.Fragment>
                <ul>
                    {this.props.items.map(item=>(
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default TodoApp;


// here e is used as a synthetic event in react
// e.preventdefault() prevents the page from reload()
// Super(): It is used to call the constructor of its parent class