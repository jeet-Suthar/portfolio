import { useState } from 'react';
import './Card.css'
function Card(props){

    const [bgColor, setBgColor] = useState()

    function cardClicked(){
        setBgColor
    }
    return (
       
<>            <div className="card">
                <img src="https://picsum.photos/200" alt="my image" />
                <h2> {props.name}</h2>
                <p>lorem ipsum</p>
                <button onClick={cardClicked}>Click me</button>
            </div>
            </>
    );
}

export default Card