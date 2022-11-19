import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { userApi } from '../../api-client';
import TabInfor from '../../components/Infor'

export default function thongTinTaiKhoan() {
  const router = useRouter()
  const [user, setUser] = useState({});
  useEffect(() => {
    const getDetailUser = async () => {
      try {
        const res = await userApi.getUserInfor();
        console.log('data', res)
        if (res['successful']) {
          setUser(res['data'].userInfo);
        }
      } catch (error) {
        console.log(error)
      }
    };
    getDetailUser();
  }, []);
  return (
    <>
      <TabInfor userDetail={user}/>
    </>
  )
}
