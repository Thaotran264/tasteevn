import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { DateRange } from "react-date-range";
import * as rdrLocales from "react-date-range/dist/locale";

function HandleSort({ isOpen, setOpen }) {
  const [isShowRangeDate, setIsShowRangeDate] = useState(false);
  const [stateDateRange, setStateDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
  console.log("%chandleSort.jsx line:16 stateDateRange", "color: #007acc;", stateDateRange);
  return (
    <>
      <Collapse in={isOpen}>
        <div id="example-collapse-text" className="">
          <div className="d-flex gap-2 justify-content-center m-2">
            <div className="w-50">
              <select
                onChange={(e) => changeSelectDate(e)}
                name="date"
                id=""
                className="border-0 border-bottom rounded p-1 w-100"
                style={{ height: "5vh", outline: "none", background: "#dee2e6" }}
              >
                <option value="">Thời gian </option>
                <option value="to-day">Hôm nay </option>
                <option value="in-week">Trong tuần này</option>
                <option value="in-month">Trong tháng này</option>
                <option value="range">Tuỳ chỉnh</option>
              </select>
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
