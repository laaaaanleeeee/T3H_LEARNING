function confirm_form() {    
    event.preventDefault();

    const getform = document.getElementById('confirm_form');
    const getname = document.getElementById('name').value.trim();
    const getdate = document.getElementById('date').value.trim();
    const getage = document.getElementById('age').value.trim();
    const getphone = document.getElementById('phonenum').value.trim();
    const checkgender = document.querySelector('input[name="gender"]:checked');
    getform.style.border = "1px solid black";
    getform.style.padding = "0 2%";

    if(getname === "") {
        alert("Vui lòng nhập tên!");
    }
    else if(getdate === "") {
        alert("Vui lòng nhập năm sinh!");
    }
    else if(getage === "") {
        alert("Vui lòng nhập tuổi!");
    }
    else if(getphone === "") {
        alert("Vui lòng nhập số điện thoại!");
    }
    else if(!checkgender) {
      alert("Vui lòng chọn giới tính!");
    }
    

    const gender = checkgender.value;

    const result = `
        <h1>Đây có phải thông tin bạn vừa nhập?</h1>
        <p>Họ tên: ${getname}</p>
        <p>Năm sinh: ${getdate}</p>
        <p>Tuổi: ${getage}</p>
        <p>Giới tính: ${gender}</p>
        <p>Số điện thoại: ${getphone}</p>
    `;
    getform.innerHTML = result;

    
}