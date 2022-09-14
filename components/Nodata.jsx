import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Image from 'next/image';

const Nodata = () => {
  return (
    <Alert variant="danger">
      <div className='text-center align-items-center d-flex flex-column '>
        <img src='/image/empty.svg' className="w-25 h-25" style={{ cursor: "pointer" }} />
        <Alert.Heading >Không có dữ liệu</Alert.Heading>
      </div>
    </Alert>
  )
}

export default Nodata