import { useContext } from "react";
import { DataContext } from "../context/cartContext";
import Loading from "./Loading";
import Toast from "./Toast";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;

  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{ msg: notify.error }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="#E94560"
        />
      )}

      {notify.success && (
        <Toast
          msg={{ msg: notify.success }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="#90B77D"
        />
      )}
    </>
  );
};

export default Notify;
