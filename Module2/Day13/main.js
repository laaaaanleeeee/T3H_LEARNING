function confirmForm() {
    event.preventDefault();

    const users = localStorage.getItem('register');
    const getName = document.getElementById('name').value.trim();
    const getEmail = document.getElementById('ema').value.trim();
    const checkGender = document.querySelector('input[name="gender"]:checked');
    const getDate = document.getElementById('dborn').value.trim();
    const getUserName = document.getElementById('username').value.trim();
    const getPassword = document.getElementById('pass').value.trim();
    const Gender = checkGender.value;

    const user = {
        name: getName,
        email: getEmail,
        gender: Gender,
        date: getDate,
        username: getUserName,
        password: getPassword
    };

    localStorage.setItem('register', JSON.stringify(user));
}


function confirmLogin() {
    event.preventDefault();

    const getUserName = document.getElementById('unlogin').value.trim();
    const getPassword = document.getElementById('passlogin').value.trim();
    const getInfo = document.getElementById('result');
    const user = localStorage.getItem('register');
    const userInfo = JSON.parse(user);

    if (getUserName === userInfo.username && getPassword === userInfo.password) {
        const rs = `
            <h1>Dữ liệu người dùng</h1>
            <p>Họ tên: ${userInfo.name}</p>
            <p>Email: ${userInfo.email}</p>
            <p>Giới tính: ${userInfo.gender}</p>
            <p>Ngày sinh: ${userInfo.date}</p>
            <p>Tên đăng nhập: ${userInfo.username}</p>
        `;

        getInfo.innerHTML = rs;
    } else {
       alert("Sai thông tin đăng nhập");
    }
}