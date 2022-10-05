import React from 'react'
import Layout from "../../components/Layout";
import parse from "html-react-parser";
import { DieuKhoanDichVu } from '../../db';

const DieuKhoanDv = () => {
    return (
    <div className="container">
        {parse(DieuKhoanDichVu)}
    </div>
    )
}
DieuKhoanDv.getLayout = function getLayout(Page) {
    return <Layout>{Page}</Layout>;
  };
export default DieuKhoanDv