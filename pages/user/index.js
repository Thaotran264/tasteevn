import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/cartContext'

const index = () => {
  const router = useRouter()
  console.log('router',router)
  const { state, dispatch } = useContext(CartContext)
  const { auth } = state
  useEffect(()=>{
    if (!auth.token) {
      router.push('/')
      return
    }
  },[])
  return (
    <div>index</div>
  )
}

export default index