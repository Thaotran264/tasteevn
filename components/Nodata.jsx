import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Nodata = () => {
  return (
    <Alert variant="danger" className='text-center'>
      <Alert.Heading >Không có dữ liệu</Alert.Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus quae dolore id. 
        Voluptatum consequuntur asperiores commodi eum, aspernatur nihil atque aut delectus sequi quis, maiores dolores provident tenetur officiis?
      </p>
      <hr />
      <p className="mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus quae dolore id. 
      </p>
    </Alert>
  )
}

export default Nodata