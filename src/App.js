import "./App.css";
import { useForm } from "react-hook-form";
import React from "react";
import wifiImage from "./wifi.jpeg";
import phoneSignal from "./phone_signal.png";
import battery from "./battery.webp";
import leftArrow from "./leftArrow.png";
import search from "./search.jpeg";
import doubleCheck from './doubleCheck.png';


// 2688 x 1242
// 3.105 

const Input = ({ label, register, require }) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { require })} />
    </>
  );
};

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => {
  return (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value={"20"}>20</option>
        <option value={"30"}>30</option>
      </select>
    </>
  );
});


function App() {
  const data1 = [
    {
      date: "08/07/2022",
      time: "09:15",
      data: "Số dư TK VCB 0251002758551 +73,014,500 VND lúc 08-07-2022 09:15:29. Số dư 246,278,613 VND. Ref SHGD:100332338.DD:243229.BO:CONG TY TNHH GLINTS VIET NAM.Remark:Glints Luong thang 6 2022",
    },
    {
      date: null,
      time: "07:21",
      data: "Số dư TK VCB 0251002758551 -3,492,000 VND lúc 08-07-2022 07:21:12. Số dư 119,937,442 VND. Ref Ecom.EW2203042423454324587.MOMO.CashIn",
    },
    {
      date: "07/07/2022",
      time: "16:21",
      data: "Số dư TK VCB 0251002758551 -40,000 VND lúc 07-07-2022 16:21:32. Số dư 258,334,949 VND. Ref POS.79900023.237045.20220627.160328.97043668R65d7000000000004e2012. .987995.0.000000.GD:ZALOPAY",
    },
    {
      date: "05/07/2022",
      time: "11:40",
      data: "Số dư TK VCB 0251002758551 -218,300 VND lúc 05-07-2022 11:40:54. Số dư 258,116,649 VND. Ref Ecom.EW22065252358537.VED.0982503643.CashIn",
    },
    {
      date: "03/07/2022",
      time: "19:42",
      data: "Số dư TK VCB 0251002758551 -5,001,100 VND lúc 03-07-2022 19:42:43. Số dư 253,095,549 VND. Ref ATM_CWD.10546403.243309.202332709.134243.970545353414355140000004e2012.GD:Q.12 TPHCM HCM VN",
    },
    {
      date: "01/07/2022",
      time: "15:32",
      data: "Số dư TK VCB 0251002758551 -73,265 VND lúc 01-07-2022 15:32:45. Số dư 248,021,184 VND. Ref Ecom.EW2207154353623237.MOMO.CashIn",
    },
  ];

  const data2 = [
    {
      date: "04/06/2022",
      time: "14:46",
      data: "Số dư TK VCB 0251002758551 +73,014,500 VND lúc 04-06-2022 14:46:28. Số dư 219,561,035 VND. Ref SHGD:100343243.DD:2213452.BO:CONG TY TNHH GLINTS VIET NAM.Remark:Glints Luong thang 5 2022",
    },
    {
      date: "03/06/2022",
      time: "15:12",
      data: "Số dư TK VCB 0251002758551 -3,492,000 VND lúc 03-06-2022 15:12:29. Số dư 119,937,442 VND. Ref Ecom.EW220305395959347.MOMO.CashIn",
    },
    {
      date: "01/06/2022",
      time: "16:21",
      data: "Số dư TK VCB 0251002758551 -40,000 VND lúc 01-06-2022 16:21:13. Số dư 258,334,949 VND. Ref POS.79900023.321321.15462326.160328.970435676887000000000004e2012. .987995.0.000000.GD:ZALOPAY",
    },
    {
      date: "30/05/2022",
      time: "16:13",
      data: "Số dư TK VCB 0251002758551 -50,000 VND lúc 30-05-2022 16:13:36. Số dư 247,971,184 VND. Ref POS.79900020.066591.20220713.161635.97043668R65d7000000000004e2012. .803202.0.000000.GD:ZALOPAY",
    },
    {
      date: "29/05/2022",
      time: "15:47",
      data: "Số dư TK VCB 0251002758551 -30,000 VND lúc 29-05-2022 15:47:26. Số dư 166,546,535 VND. Ref Ecom.EW220403544343063.MOMO.CashIn",
    },
    {
      date: "08/05/2022",
      time: "11:21",
      data: "Số dư TK VCB 0251002758551 +53,014,500 VND lúc 07-03-2022 12:30:28. Số dư 172,951,942 VND. Ref SHGD:10006175.DD:220307.BO:CONG TY TNHH GLINTS VIET NAM.Remark:Glints Luong thang 2 2022",
    },
  ];

  const data3 = [
    {
      date: "08/05/2022",
      time: "16:11",
      data: "Số dư TK VCB 0251002758551 +73,014,500 VND lúc 08-05-2022 16:11:28. Số dư 172,951,942 VND. Ref SHGD:10042342.DD:121532.BO:CONG TY TNHH GLINTS VIET NAM.Remark:Glints Luong thang 4 2022",
    },
    {
      date: "05/05/2022",
      time: "15:32",
      data: "Số dư TK VCB 0251002758551 -68,000 VND lúc 05-05-2022 15:32:46. Số dư 156,556,535 VND. Ref Ecom.EW22040231232313.MOMO.004958568424.CashIn",
    },
    {
      date: "02/05/2022",
      time: "12:31",
      data: "Số dư TK VCB 0251002758551 -670,000 VND lúc 02-05-2022 12:31:03. Số dư 156,624,535 VND. Ref Ecom.EW22032951654323.MOMO.15183541940.CashIn",
    },
    {
      date: "01/05/2022",
      time: "13:56",
      data: "Số dư TK VCB 0251002758551 -3,001,100 VND lúc 01-05-2022 13:56:16. Số dư 156,894,535 VND. Ref ATM_CWD.10600406.063037.20220326.165215.97043668R65d7000000000004e2012.GD:Q.12 TPHCM HCM VN",
    },
    {
      date: "30/04/2022",
      time: "15:32",
      data: "Số dư TK VCB 0251002758551 -590,000 VND lúc 30-04-2022 15:32:23. Số dư 159,889,274 VND. Ref Ecom.EW22032448855155.MOMO.15843311998.CashIn",
    },
    {
      date: null,
      time: "09:21",
      data: "Số dư TK VCB 0251002758551 -30,000 VND lúc 03-04-2022 13:41:26. Số dư 166,546,535 VND. Ref Ecom.EW220403545258585445.MOMO.9369491258.CashIn",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div className="content_box">
          <div className="header_row">
            <div className="top_info">
              <div className="time">10:11</div>
              <div className="image_row">
                <img
                  src={phoneSignal}
                  alt=""
                  className="image"
                  id="phoneSignal"
                />
                <img src={wifiImage} alt="" className="image" />
                <img src={battery} alt="" className="image" />
              </div>
            </div>
            <div className="navigate_info">
              <div className="leftArrow">
                <img src={leftArrow} alt="" className="leftArrowImg" />
              </div>
              <div className="middleLable">Thông tin Vietcombank</div>
            </div>
          </div>
          <div className="body">
            <div className="tabs">
              <div className="tab-item tab-active">Biến động</div>
              <div className="tab-item">Thông báo</div>
              <div className="tab-item">Ưu đãi</div>
            </div>
            <div className="searchBox">
              <div className="searchIcon">
                <img src={search} alt="" className="searchIconImg" />
              </div>
              <div className="label">Tìm kiếm</div>
            </div>
            <div className="messageBox">
              {data3.map((itemData, index) => {
                return (
                  <div className="message_holder">
                    <div className="header_data">
                      {itemData.date && <div className="date">{itemData.date}</div>}
                      {!itemData.date && <div className="date_null">&nbsp;</div>}
                      <div className="time_">
                        <div className="timeCheck"><img src={doubleCheck} alt='' className="imageDoubleCheck"/></div>
                        <div className="time_text">{itemData.time}</div>
                      </div>
                    </div>
                    <div className="message_content">{itemData.data}</div>
                  </div>
                );
              })}
            </div>
            <div className="thumbNav"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
