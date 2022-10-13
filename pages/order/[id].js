import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { orderApi } from '../../api-client'
import MerchantLayout from '../../components/MerchantLayout'

const Detail = () => {
    const router = useRouter()
    const {query} = router
    console.log(query.id)

    useEffect(()=>{
        const getData = async () => {
            try {
                const res = orderApi.detail(query.id)
                if(res.successful && res.data) {
    
                }

            } catch (err) {
                console.log(err)
            }
        }
        getData()
    },[])
  return (
    <MerchantLayout>
        <section className='container px-0'>
<div className='d-flex gap-2' >
    <div style={{flex: 1}}>Thong tin don hang</div>
    <div className='rounded bg-dark bg-opacity-10 px-2' style={{flex: 1}}>Thong tin nguoi mua</div>
</div>
        </section>
    </MerchantLayout>
  )
}

export default Detail