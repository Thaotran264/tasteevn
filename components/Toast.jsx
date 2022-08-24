import { useContext, useEffect } from "react";
import { DataContext } from "../store/globalState";

const Toast = ({ msg, handleShow, bgColor }) => {
  const { state, dispatch } = useContext(DataContext);
  useEffect(() => {
    let idTime = setTimeout(() => {
      dispatch({ type: "NOTIFY", payload: {} });
    }, 2500);

    return () => {
      clearTimeout(idTime);
    };
  }, []);

  return (
    <div
      className={`toast show position-fixed text-light`}
      style={{ top: "55px", right: "5px", zIndex: 9, minWidth: "280px" }}
    >
      <div className={`toast-header ${bgColor} text-light d-flex justify-content-between`}>
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
      </div>

      <div className="toast-body">{msg.msg}</div>
    </div>
  );
};

export default Toast;
