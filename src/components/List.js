import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

const List = ({id,text,dltitems}) => { //yaha pr id and tetx ke jagah pr direct props bhi send kr sakte the tb props.text likhna padta
    return (
        <>
            <div className='items' >
                <li>{text}</li>

                <Tooltip title="Delete">
                    <Button className='dltbtn' onClick={()=>dltitems(id)} >
                        <DeleteIcon />
                    </Button>
                </Tooltip>
            </div>
        </>
    )
}

export default List