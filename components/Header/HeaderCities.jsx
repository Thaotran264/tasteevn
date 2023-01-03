import React, { useEffect, useState } from 'react'
import { cityApi } from '../../api-client'

const HeaderCities = () => {
    const [cities, setCities] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await cityApi.getCity()
            setCities(res)
        }
        getData()
    }, [])
    return (
        <div className='header-cities'>
            <select className="form-select" aria-label="Default select example">
                <option selected>Chọn khu vực</option>
                {
                    cities?.map(city =>
                        <option value={city.name} key={city.id}>{city.name}</option>
                    )
                }
            </select>
        </div>
    )
}

export default HeaderCities