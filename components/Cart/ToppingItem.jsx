import React from 'react'

const ToppingItem = ({ item }) => {
    return (
        <article className=''>
            <h6 className='bg-dark bg-opacity-25 p-2'>{item.name}</h6>
            {
                item.value.map(it =>
                    <div className='d-flex justify-content-between mx-2 py-1 border-bottom' key={it.id}>
                        <div>
                            <h6>{it.name}</h6>
                            <p className='mb-2'>{it.price}</p>
                        </div>
                        <input type='checkbox' />
                    </div>)
            }

        </article>
    )
}

export default ToppingItem