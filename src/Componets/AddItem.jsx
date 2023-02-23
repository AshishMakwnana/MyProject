import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
const AddItem = (props) => {
    const[line,setLine] = useState(false);
    const lineThro = () =>{
        setLine(true);
    }
    return (
        <>
            <div className="item-box">
                <span onClick={lineThro}>
                    <DeleteIcon className="DeleteIcon" />
                </span>
                <li style={{ textDecoration: line ? "line-through" : " " }} className="list-item">{props.text}</li>
            </div>
        </>
    );
}

export default AddItem;