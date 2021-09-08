import React from "react";

const numList=[1,2,3,4,5,6,7,8];
class ListView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ListValue numbers={numList}/>
        );
    }
}

function ListValue(props) {
    const numbers=props.numbers;
    const list=numbers.map((num)=>
        <ListItem key={num.toString()} value={num} />
    );
    return(
        <ul>
            {list}
        </ul>
    );
}
function ListItem(props) {
    return <li>{props.value}</li>
}


export default ListView


/*
Keys

Keys help React identify which items have changed,
 are added, or are removed. Keys should be given to 
 the elements inside the array to give the elements
  a stable identity:

Keys Must Only Be Unique Among Siblings 








*/