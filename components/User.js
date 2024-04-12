import { useState } from "react";
import { useState } from "react";


const User = (props)=>{
    const [count,setCount] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="about-user-func-component">
            <h1>count: {count} setCount(2)</h1>
            
            <h2>count2: {count2}</h2>
            <h1>Name: {props.name}</h1>
            <h2>Location: {props.location} </h2>
            <h2>Contact: @sanjana_k</h2>
        </div>
        
    )
}
export default User;