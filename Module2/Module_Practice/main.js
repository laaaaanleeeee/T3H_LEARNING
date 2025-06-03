let currentPage = 1;
let stuPerPage = 5;
let users = JSON.parse(localStorage.getItem("users")) || [];


function createPagi() {
    const pagination = document.getElementById("pagination");
    const totalPage = Math.ceil(users.length / stuPerPage);

    let pagi = "";
    if(currentPage > 1) {
        pagi += `<a href="#" id="pagi" onclick="currentPage = ${currentPage - 1}; loadData()">Previous</a>`;
    }

    for(let i =1; i<= totalPage; i++) {
        pagi += `<a href="#" id="pagi" onclick="currentPage = ${i}; loadData()">${i}</a>`;
    }

    if(currentPage < totalPage) {
        pagi += `<a href="#" id="pagi" onclick="currentPage = ${currentPage + 1}; loadData()">Next</a>`;
    }

    pagination.innerHTML = pagi;
}


function saveData() {
    const getId = document.getElementById("idstu").value.trim();
    const getName = document.getElementById("name").value.trim();
    const getGender = document.getElementById("gender").value.trim();
    const getMath = parseFloat(document.getElementById("math").value.trim());
    const getEnglish = parseFloat(document.getElementById("english").value.trim());
    const getLiterature = parseFloat(document.getElementById("literature").value.trim());
    const averageScore = (getMath + getEnglish + getLiterature) / 3;

    const user = {
        id: getId,
        name: getName,
        gender: getGender,
        math_score: getMath,
        english_score: getEnglish,
        literature_score: getLiterature,
        average_score: averageScore,
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    loadData();
}

function turnOffUpdate() {
    const change = document.getElementById("areachange");
    change.style.display = "none";
    change.innerHTML = "";
}

function confirmUpdate(id) {
    const idCurrentUser = users.findIndex((u) => u.id === id);

    const nName = document.getElementById("newName").value.trim();
    const nGender = document.getElementById("newGender").value.trim();
    const nMath = parseFloat(document.getElementById("newMath").value.trim());
    const nEnglish = parseFloat(document.getElementById("newEnglish").value.trim());
    const nLiterature = parseFloat(document.getElementById("newLiterature").value.trim());
    const nAverageScore = (nMath + nEnglish + nLiterature) / 3;

    users[idCurrentUser] = {
        id: id,
        name: nName,
        gender: nGender,
        math_score: nMath,
        english_score: nEnglish,
        literature_score: nLiterature,
        average_score: nAverageScore,
    };

    localStorage.setItem("users", JSON.stringify(users));
    loadData();
}

function deleteUser(id) {
    const currentUser = users.filter((user) => user.id !== id);

    localStorage.setItem("users", JSON.stringify(currentUser));
    loadData();
}

function showUpdate(id) {
    const change = document.getElementById("areachange");

    const user = users.find((u) => u.id === id);

    if (change.style.display === "none") {
        change.style.display = "block";
    } else {
        change.style.display = "none";
    }

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
}

function searchUsers() {
    const getSearchValue = document.getElementById("search_value").value.trim();
    const getResult = document.getElementById("resultLoad");
    const userFinded = users.filter((u) => u.name === getSearchValue);

    if (userFinded) {
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
                                <button type="button" class="btn btn-success" onclick="showUpdate('${
                                user.id
                                }')">Update</button>
                                <button type="button" class="btn btn-danger" onclick="deleteUser('${
                                user.id
                                }')">Delete</button>
                            </td>
                        </tr>
                    `;
        });
        getResult.innerHTML = result;
    }
}


window.onload = function () {
    loadData();
}

