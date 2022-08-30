import { useContext, useEffect } from "react";
import { DataContext } from "../store/globalState";
import { AiOutlineClose } from 'react-icons/ai'
const Toast = ({ msg, handleShow, bgColor }) => {
  const { state, dispatch } = useContext(DataContext);
  useEffect(() => {
    let idTime = setTimeout(() => {
      dispatch({ type: "NOTIFY", payload: {} })
    }, 2500)

    return () => {
      clearTimeout(idTime)
    }
  }, [])

  return (
    <article
      className={`toast show position-fixed text-light rounded p-2`}
      style={{ bottom: "68px", right: 12, zIndex: 9, minWidth: "280px", backgroundColor: `${bgColor}` }}
    >
      <div className='d-flex align-items-center justify-content-between '>
        <p className="mb-0 text-light pl-2">{msg.msg}</p>
        <button className="border rounded p-2" style={{ backgroundColor: 'transparent' }}><AiOutlineClose style={{ color: '#fff' }} /></button>
      </div>
      {/* <div
        className={`toast-header ${bgColor} text-light d-flex justify-content-between`}
      >
        <strong className="mr-auto text-light">{msg.title}</strong>

        <button
          type="button"
          className="btn btn-outline-light close"
          data-dismiss="toast"
          style={{ outline: "none" }}
          onClick={handleShow}
        >
          x
        </button>
      </div> */}

      {/* <div className="toast-body">{msg.msg}</div> */}
    </article>
  );
};

export default Toast;
