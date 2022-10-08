import React from 'react'
import Layout from "../../components/Layout";
import parse from "html-react-parser";
import { DieuKhoanDichVu } from '../../db';
import Image from "next/image";

const DieuKhoanDv = () => {
    return (
        <div className="container">
            <a href="https://www.facebook.com/groups/tasteepos/" target='_blank'>
                <Image className="rounded" src={'/image/Tastee-POS.jpg'} alt="First slide" width={2000} height={1000} />
            </a>
            {parse(DieuKhoanDichVu)}
        </div>
    )
}
DieuKhoanDv.getLayout = function getLayout(Page) {
    return <Layout>{Page}</Layout>;
};
export default DieuKhoanDv