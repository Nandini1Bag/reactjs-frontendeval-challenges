import React from 'react'

function Modal({handleClose,handleAccept}) {

    const handleOutsideClick=(e)=>{
        if (e.target.className==='modal'){
            handleClose();
        }
    }
  return (
    <div className='modal' onClick={handleOutsideClick}>
        <div className='modal-content'>
        <button onClick={handleClose}className='close-btn'>x</button>
        <div className='content'>
            click the button below to accept our amazing offer!
        </div>
        <div>
            <button onClick={handleAccept} className='accept-btn'>Accept</button>
        </div>
        </div>
       
    </div>
  )
}

export default Modal