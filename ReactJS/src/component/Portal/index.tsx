import React,{useState} from 'react'
import Portal from './Portal';
import ERRORS from '../../service/Error'
import './style.scss'

const Modal = () => {
  const [hide, setHide] = useState(false);

  const handleHide = () =>{
    setHide(true);
  }

  return (
    !hide &&
    <Portal>
      <div>
        <h1>{ERRORS.ERRORS_API}</h1>
        <button onClick={handleHide} className="btn btn-hide">OK</button>
      </div>
    </Portal>
  )
}
export default Modal;
