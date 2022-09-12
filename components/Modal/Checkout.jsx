import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Checkout = ({ setCheck }) => {
  const router = useRouter()
  const handleCloseButton = () => {
    router.push('/')
  }
  return (
    <article className='checktout__article'>
      <h2>Bạn đã đặt hàng thành công!!!</h2>
      <button
        onClick={handleCloseButton} className='btn btn-outline-danger  d-flex align-items-center'><AiOutlineClose />Đóng</button>
    </article>
  )
}

export default Checkout