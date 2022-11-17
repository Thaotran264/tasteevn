import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { DateRange } from 'react-date-range';
import * as rdrLocales from 'react-date-range/dist/locale';

function HandleSort({ isOpen, setOpen }) {
  const [isShowRangeDate, setIsShowRangeDate] = useState(false);
  const [stateDateRange, setStateDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const currentTime = new Date().toISOString().split('T')[0]
  const [startDate, setStartDate] = useState(currentTime)
  const [endDate, setEndDate] = useState(currentTime)

  const handleChangeStartDate = (e) => {
    console.log('date', new Date(e.target.value).getTime())
    setStartDate(e.target.value)
  }
  const handleChangeEndDate = (e) => {
    console.log('date', new Date(e.target.value).getTime())

    setEndDate(e.target.value)
  }
  const handleSearch = async () => {
    const param = {
      fromDate: startDate,
      toDate: endDate,
      length: '5'
    }

    try {
      const res = await orderApi.loadData(param)
      console.log('first', res)
      setOrderData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const [stateDefined, setStateDefined] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const changeSelectDate = (e) => {
    let value = e.target.value;
    console.log(e.target.value);
    if (value == "range") {
      setIsShowRangeDate(true);
    } else {
      setIsShowRangeDate(false);
    }
  };
  return (
    <>
      <Collapse in={isOpen}>
        <div id="example-collapse-text" className="">
          <div className="d-flex gap-2 justify-content-center m-2">
            <div className="w-50">
          
            </div>

            <div className="w-50">
              <select
                name="status"
                id=""
                className="border-0 border-bottom w-100 rounded p-1"
                style={{ height: "5vh", outline: "none", background: "#dee2e6" }}
              >
                <option value="">Trạng thái </option>
                <option value="1">Hoàn thành</option>
                <option value="1">Đang giao</option>
                <option value="1">Đang xử lý</option>
                <option value="1">Huỷ</option>
              </select>
            </div>
          </div>
          {isShowRangeDate && (
            <DateRange
              className="w-100 p-3 mb-2"
              editableDateInputs={true}
              onChange={(item) => setStateDateRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={stateDateRange}
              locale={rdrLocales.vi}
            />
          )}
        </div>
      </Collapse>
    </>
  );
}

export default HandleSort;
