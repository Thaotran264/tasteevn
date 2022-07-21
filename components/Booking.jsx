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
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Số người</label>
                    <input value={peoples} onChange={e => setPeoples(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" class="form-label">Thời gian</label>
                    <input value={times} onChange={e => setTimes(e.target.value)} type="time" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" class="form-label">Ngày</label>
                    <input value={dates} onChange={e => setDates(e.target.value)} type="date" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" class="form-label">Địa chỉ</label>
                    <input value={address} onChange={e => setAdrees(e.target.value)} type="text" class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary">Đặt chỗ</button>
            </form>
        </div>
    )
}

export default Booking