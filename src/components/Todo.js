import React, { useState } from 'react';
import './style.css';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import List from './List';

const Todo = () => {
    const [Todo, setTodo] = useState("");
    const [add, setAdd] = useState([]);
    // console.log(Todo);
    // console.log(add);

    const [validate, setValidate] = useState("");

    const setData = (e) => {
        // console.log(e.target.value);
        setTodo(e.target.value);
    }
    const addItem = () => {
        if (Todo == "") {
            setValidate('Enter Todo Item');
        }
        else {
            setAdd(() => {
                return [...add, Todo];
            })
            setTodo("")
            setValidate('');
        }

    }

    const dltitems = (id) => {
        // console.log(id);
        const dltdata = add.filter((ele, ind) => {
            return ind !== id
        })
        // console.log(dltdata);
        setAdd(dltdata);
    }
    return (
        <>
            <div className='main-container'>
                <div className='todo-box'>
                    <img src="photo.svg" alt="todoimg" className='todoimg' />
                    <h2 className='heading'>Write Your Todo List Here</h2>
                    <h3 className='validation'>{validate}</h3>

                    <div className="input-container">
                        <input type="text" name="todo" onChange={setData} placeholder='Enter Your Task' value={Todo} id="" />
                        <Tooltip title="Add">
                            <Button className='addbtn' onClick={addItem}>
                                <AddIcon />
                            </Button>
                        </Tooltip>


                    </div>
                    <div className='store-container'>
                        <ul>
                            {
                                add.map((element, index) => {
                                    return (

                                        <List id={index} text={element} dltitems={dltitems} key={index} />
                                    )

                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo