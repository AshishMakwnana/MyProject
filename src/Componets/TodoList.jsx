import React, { useState } from "react";

import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import AddItem from "./AddItem";



const TodoList = () => {
    const [inputValue, setValue] = useState("");
    const [listValue, setList] = useState([]);

    const AddValue = () => {

        setList((oldValue) => {
            if(inputValue !== ""){

                return [...oldValue, inputValue]
            }else{
                return[...oldValue]
            }
        })
        setValue("");
    };

    const InputNewValue = (event) => {
        setValue(event.target.value)
    }
    return (
        <>
            <div className="container">
                <div className="heading__style">
                    <h1>ToDo List</h1>
                </div>
                <div className="input-box-btn">
                    <input type="text" placeholder="Add Item" name="Item" onChange={InputNewValue} value={inputValue} />
                    <Button variant="contained" color="primary" onClick={AddValue}><AddIcon /></Button>
                </div>
                <div className="list-box">
                    <ul className="list">
                        {
                            listValue.map((item, index) => {
                                return (
                                    <AddItem text={item}  key={index}/>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </>
    );
};

export default TodoList;