// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Delivery from "./components/Delivery";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Order_more from "./components/Order_more";
import Restaurants from "./components/Restaurants";
import Testimonials from "./components/Testimonials";
import Test_component from "./components/Test_components";

function App() {
  // const [name, setName] = useState("");
  // const [numCus, setNumCus] = useState("");
  // const [phone, setPhone] = useState("");
  // const [date, setDate] = useState("");
  // const [address, setAddress] = useState("");
  // const [typeEvent, setTypeEvent] = useState("");
  // const [isChecked, setIsChecked] = useState(false);


  // function checkInput() {
  //   if (name == "" || phone == "" || address == "" || numCus == "" || typeEvent == "") {
  //     alert("Vui lòng điền đầy đủ thông tin!");
  //   }
  //   else if(!isChecked) {
  //     alert("Cần tích vào ô checkbox!")
  //   }
  //   else {
  //     alert(JSON.stringify({
  //       "Tên người đặt": name,
  //       "Số lượng khách hàng": numCus,
  //       "Số điện thoại": phone,
  //       "Ngày": date,
  //       "Địa chỉ": address,
  //       "Loại sự kiện": typeEvent
  //     }));
  //   }
  // }


  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!check);
  }



  return (
    <>
      <div>
        <button onClick={handleCheck}>Check</button>
        <Test_component check={check} />
      </div>


      {/* <Header />
      <div className="content">
        <Home />
        <Restaurants />
        <Features />
        <Testimonials />
        <Download />
        <Delivery />
        <Order_more />
        <Footer />
      </div> */}

      {/* <div id="booking_table">
        <div className="form_booking">
            <h1><b>Liên Hệ Đặt Tiệc</b></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="enter_value">
            <div className="leftside_form">
                <label for="name">Họ và tên</label>
                <input type="text" id="name" placeholder="Nhập họ và tên" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label for="phone">Số điện thoại</label>
                <input type="text" id="phone" placeholder="Nhập số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                <label for="address">Địa chỉ</label>
                <input type="text" id="address" placeholder="Nhập địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)}></input>
            </div>

            <div className="rightside_form"> 
                <label for="number_cus">Số lượng khách</label>
                <input type="text" id="number_cus" placeholder="0" value={numCus} onChange={(e) => setNumCus(e.target.value)}></input>
                <label for="date_booking">Ngày tổ chức sự kiện</label>
                <input type="date" id="date_booking" value={date} onChange={(e) => setDate(e.target.value)}></input>
                <label for="type_event">Loại sự kiện</label>
                <input type="text" id="addtype_eventress" placeholder="Nhập loại sự kiện" value={typeEvent} onChange={(e) => setTypeEvent(e.target.value)}></input>
            </div>    
                
            </div>
            <div className="check">
                <input type="checkbox" className="checkBox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}></input> Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khẩu,...)
            </div>
            <button type="button" onClick={checkInput}>GỬI THÔNG TIN</button>
        </div>
      </div> */}


    </>
  );
}

export default App;
