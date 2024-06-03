import { useState } from "react";

const Add = () => {
    const [count,setCount] = useState(0)
    
    return ( 
        <div className="trial">
            <h1>0</h1>
            <button onClick={() => {
                setCount(count -1)
            }}>Decreament</button>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increament</button>
        </div>
     );
}
 
export default Add;