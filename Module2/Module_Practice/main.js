let currentPage = 1;
let stuPerPage = 5;
let users = JSON.parse(localStorage.getItem("users")) || [];

function changeStuPerPage() {
    stuPerPage = parseInt(document.getElementById("chooseop").value)
    currentPage = 1;
    loadData();
}

function createPagi() {
    const pagination = document.getElementById("pagination");
    const totalPage = Math.ceil(users.length / stuPerPage);

    let pagi = "";
    if(currentPage > 1) {
        pagi += `<button type="button" id="prev" class="btn btn-outline-primary m-3" href="#" onclick="currentPage = ${currentPage - 1}; loadData()">Previous</button>`;
    }

    for(let i =1; i<= totalPage; i++) {
        if (i === currentPage) {
            pagi += `<button type="button" id="paginow" class="btn btn-outline-primary m-3 active" href="#" onclick="currentPage = ${i}; loadData()">${i}</button>`;
        } else {
            pagi += `<button type="button" id="paginow" class="btn btn-outline-primary m-3" href="#" onclick="currentPage = ${i}; loadData()">${i}</button>`;
        }
    }

    if(currentPage < totalPage) {
        pagi += `<button type="button" id="nex" class="btn btn-outline-primary m-3" href="#" onclick="currentPage = ${currentPage + 1}; loadData()">Next</button>`;
    }

    pagination.innerHTML = pagi;


}



function saveData() {
    const newId = users.length > 0 ? parseInt(users[users.length - 1].id) + 1 : 1;
    const getName = document.getElementById("name").value.trim();
    const getGender = document.getElementById("gender").value.trim();
    const getMath = parseFloat(document.getElementById("math").value.trim());
    const getEnglish = parseFloat(document.getElementById("english").value.trim());
    const getLiterature = parseFloat(document.getElementById("literature").value.trim());

    if(getMath < 0 || getMath > 10 || getEnglish < 0 || getEnglish > 10 || getLiterature < 0 || getLiterature > 10) {
        alert("Vui lòng nhập lại số điểm!");
    }

    const user = {
        id: newId,
        name: getName,
        gender: getGender,
        math_score: getMath,
        english_score: getEnglish,
        literature_score: getLiterature,
        average_score: (getMath + getEnglish + getLiterature) / 3,
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    currentPage = Math.ceil(users.length / stuPerPage);
    loadData();
}

function turnOffUpdate() {
    const change = document.getElementById("areachange");
    change.style.display = "none";
    change.innerHTML = "";
}

function confirmUpdate(id) {
    const indexCurrentUser = users.findIndex((u) => u.id === parseInt(id));

    const nName = document.getElementById("newName").value.trim();
    const nGender = document.getElementById("newGender").value.trim();
    const nMath = parseFloat(document.getElementById("newMath").value.trim());
    const nEnglish = parseFloat(document.getElementById("newEnglish").value.trim());
    const nLiterature = parseFloat(document.getElementById("newLiterature").value.trim());

    users[indexCurrentUser] = {
        id: id,
        name: nName,
        gender: nGender,
        math_score: nMath,
        english_score: nEnglish,
        literature_score: nLiterature,
        average_score: (nMath + nEnglish + nLiterature) / 3,
    };

    localStorage.setItem("users", JSON.stringify(users));
    loadData();
}

function deleteUser(id) {
    if(confirm("Bạn có chắc chắn muốn xóa?")) {
        users = users.filter((user) => user.id !== parseInt(id));

        localStorage.setItem("users", JSON.stringify(users));
        const totalPage = Math.ceil(users.length / stuPerPage);

        if(currentPage > totalPage) {
            currentPage = totalPage;
        }

        loadData();
    }
}

function showUpdate(id) {
    const change = document.getElementById("areachange");

    const user = users.find((u) => u.id === parseInt(id));

    change.style.display = "block";

    change.innerHTML = `
                <div class="d-flex flex-column justify-content-center align-content-center m-5">
                    <h1 class="d-flex justify-content-center align-content-center mt-5">Which info do u want to update ?</h1>
                    <div class="d-flex flex-column justify-content-center align-content-center">
                        <label for="oldId" class="form-label">ID</label>
                        <input type="text" class="oldId" id="oldId" value="${user.id}" disabled>
                    </div>
                    <div class="d-flex flex-column justify-content-center align-content-center">
                        <label for="newName" class="form-label">New Name</label>
                        <input type="text" class="newName" id="newName" placeholder="Enter your new name...">
                    </div>
                    <div class="d-flex flex-column justify-content-center align-content-center">
                        <label for="newGender" class="form-label">New Gender</label>
                        <input type="text" class="newGender" id="newGender" placeholder="Enter your new gender...">
                    </div>
                    <div class="d-flex flex-column justify-content-center align-content-center">
                        <label for="newMath" class="form-label">New Math Score</label>
                        <input type="number" class="newMath" id="newMath" placeholder="Enter your new math score...">
                    </div>
                    <div class="d-flex flex-column justify-content-center align-content-center">
                        <label for="newEnglish" class="form-label">New English Score</label>
                        <input type="number" class="newEnglish" id="newEnglish" placeholder="Enter your new english score...">
                    </div>
                    <div class="d-flex flex-column justify-content-center align-content-center">
                        <label for="newLiterature" class="form-label">New Literature Score</label>
                        <input type="number" class="newLiterature" id="newLiterature" placeholder="Enter your new literature score...">
                    </div>
                    <button type="button" class="btn btn-success mt-5" onclick="confirmUpdate('${user.id}')">Confirm Update</button>
                    <button type="button" class="btn btn-danger mt-2" onclick="turnOffUpdate()">Cancel Update</button>
                </div>
        `;
}

function loadData() {
    let getResult = document.getElementById("resultLoad");
    let start = (currentPage - 1) * stuPerPage;
    let end = start + stuPerPage;

    let paginated = users.slice(start, end);
    let result = "";
    paginated.forEach((user) => {
        result += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.gender}</td>
                    <td>${user.math_score}</td>
                    <td>${user.english_score}</td>
                    <td>${user.literature_score}</td>
                    <td>${user.average_score}</td>
                    <td>
                    <button type="button" class="btn btn-success" onclick="showUpdate('${user.id}')">Update</button>
                    <button type="button" class="btn btn-danger" onclick="deleteUser('${user.id}')">Delete</button>
                </td>
        `;
    });

    getResult.innerHTML = result;
    createPagi();

    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("math").value = "";
    document.getElementById("english").value = "";
    document.getElementById("literature").value = "";
}

function searchUsers() {
    const getSearchValue = document.getElementById("search_value").value.trim();
    const getResult = document.getElementById("resultLoad");
    const userFinded = users.filter((u) => u.name.toLowerCase().includes(getSearchValue) || u.gender.toLowerCase().includes(getSearchValue));

    if (userFinded.length == 0) {
        getResult.innerHTML = `<tr><td colspan="8" class="text-center">Không tìm thấy kết quả phù hợp.</td></tr>`;
        return;
    }

    let result = "";
        userFinded.forEach((user) => {
            result += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.gender}</td>
                    <td>${user.math_score}</td>
                    <td>${user.english_score}</td>
                    <td>${user.literature_score}</td>
                    <td>${user.average_score.toFixed(2)}</td>
                    <td>
                        <button type="button" class="btn btn-success" onclick="showUpdate('${user.id}')">Update</button>
                        <button type="button" class="btn btn-danger" onclick="deleteUser('${user.id}')">Delete</button>
                    </td>
                </tr>
            `;
        });
        getResult.innerHTML = result;
}


window.onload = function () {
    loadData();
}