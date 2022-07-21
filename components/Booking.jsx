import React, { useState } from 'react'

const Booking = () => {
    const [peoples, setPeoples] = useState('')
    const [times, setTimes] = useState('')
    const [dates, setDates] = useState('')
    const [address, setAdrees] = useState('')

const currentTime = new Date()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newData ={peoples, times, dates, address}
        console.log('data', newData)
    }
    return (
        <div className='container'>
            <h4>Booking</h4>
            <hr />
            <form className='w-25' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Số người</label>
                    <input value={peoples} onChange={e => setPeoples(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Thời gian</label>
                    <input value={times} onChange={e => setTimes(e.target.value)} type="time" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ngày</label>
                    <input value={dates} onChange={e => setDates(e.target.value)} type="date" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Địa chỉ</label>
                    <input value={address} onChange={e => setAdrees(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Đặt chỗ</button>
            </form>
        </div>
    )
}

export default Booking