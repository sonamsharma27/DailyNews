import React from 'react'
import loading from './spin-loading.png'
function Spinner() {
    return (
        <div  className='text-center'>
            <img src={loading} style={{size:"30px"}} alt="Loading spinner"></img>
        </div>
    )
}

export default Spinner
