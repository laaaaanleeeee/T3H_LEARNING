let fulltask = JSON.parse(localStorage.getItem("fulltask")) || [];
let currentPage = "all";
let currentPagePagi = 1;
let taskPerPage = 5;

function ShowTask() {
    const showTask = document.getElementById("formtask");

    let filteredTasks = fulltask.filter((task) => {
        return (
            currentPage === "all" ||
            (currentPage === "active" && task.status === "active") ||
            (currentPage === "completed" && task.status === "completed")
        );
    });

    const totalPage = Math.ceil(filteredTasks.length / taskPerPage);

    if(currentPagePagi > totalPage) {
        currentPagePagi = totalPage || 1;
    }

    let start = (currentPagePagi - 1) * taskPerPage;
    let end = start + taskPerPage;
    let paginated = filteredTasks.slice(start, end);

    let result = "";
    paginated.forEach((task) => {
            result += `
                <tr>
                    <td>
                        <input type="checkbox" onchange="ChangeStatus(${task.id}, this.checked)" ${task.status === "completed" ? "checked" : ""}>
                    </td>
                    <td>
                        <p class="fw-bold ${task.status === "completed" ? "text-decoration-line-through text-muted" : ""}">${task.task}</p>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" onclick="DeleteTask(${task.id})">Delete</button>
                    </td>
                </tr>
            `;
        });
    showTask.innerHTML = result;
    createPagi(filteredTasks);
    document.getElementById("addtask").value = "";
    document.getElementById("headTable").style.display = paginated.length > 0 ? "table-header-group" : "none";
}


function saveTasks() {
    const newId = fulltask.length > 0 ? fulltask[fulltask.length - 1].id + 1 : 1;
    const getTask = document.getElementById("addtask").value.trim();

    if(!getTask) {
        alert("Hãy nhập đủ nội dung");
        return;
    }

    let tasks = {
        id: newId,
        task: getTask,
        status: "active",
    }

    fulltask.push(tasks);
    localStorage.setItem("fulltask", JSON.stringify(fulltask));
    currentPagePagi = Math.ceil(fulltask.length / taskPerPage);
    ShowTask();
}


function ChangeStatus(id, isChecked) {
    const indexTask = fulltask.findIndex((task) => task.id === id);
    if(indexTask !== -1) {
        fulltask[indexTask].status = isChecked ? "completed" : "active";
        localStorage.setItem("fulltask", JSON.stringify(fulltask));
        ShowTask();
    }
}


function ChangePage(page) {
    currentPage = page;

    const buttons = document.querySelectorAll(".btn-group .btn");
    buttons.forEach((btn) => {
        btn.classList.remove("active", "btn-primary");
        btn.classList.add("btn-outline-primary");
    });

    const activeBtn = Array.from(buttons).find(btn => btn.innerText.toLowerCase() === page);
    if (activeBtn) {
        activeBtn.classList.add("active", "btn-primary");
        activeBtn.classList.remove("btn-outline-primary");
    }

    document.getElementById("formadd").style.display = (page === "completed") ? "none" : "flex";

    ShowTask();
}


function DeleteTask(id) {
    if(confirm("Bạn có chắc muốn xóa task này không?")) {
        fulltask = fulltask.filter((task) => task.id !== parseInt(id));
        localStorage.setItem("fulltask", JSON.stringify(fulltask));
        const totalPage = Math.ceil(fulltask.length / taskPerPage);

        if(currentPagePagi > totalPage) {
            currentPagePagi = totalPage;
        }
        ShowTask();
    }
}

function DeleteAllTask() {
    if(confirm("Bạn có chắc muốn xóa hết các task?")) {
        fulltask = [];
        localStorage.setItem("fulltask", JSON.stringify(fulltask));
        const totalPage = Math.ceil(fulltask.length / taskPerPage);

        if(currentPagePagi > totalPage) {
            currentPagePagi = totalPage;
        }
        ShowTask();
    }
}


function ChangeTaskPerPage() {
    taskPerPage = parseInt(document.getElementById("chooseop").value)
    currentPagePagi = 1;
    ShowTask();
}

function createPagi(filteredTasks) {
    const pagination = document.getElementById("pagination");
    const totalPage = Math.ceil(filteredTasks.length / taskPerPage);

    if(currentPagePagi > totalPage && totalPage > 0) {
        currentPagePagi = totalPage;
    }
    else if (totalPage === 0) {
        currentPagePagi = 1;
    }

    let pagi = "";
    if(currentPagePagi > 1) {
        pagi += `<button type="button" id="prev" class="btn btn-outline-primary m-3" href="#" onclick="currentPagePagi = ${currentPagePagi - 1}; ShowTask()">Previous</button>`;
    }

    for(let i =1; i<= totalPage; i++) {
        if (i === currentPagePagi) {
            pagi += `<button type="button" id="paginow" class="btn btn-outline-primary m-3 active" href="#" onclick="currentPagePagi = ${i}; ShowTask()">${i}</button>`;
        } else {
            pagi += `<button type="button" id="paginow" class="btn btn-outline-primary m-3" href="#" onclick="currentPagePagi = ${i}; ShowTask()">${i}</button>`;
        }
    }

    if(currentPagePagi < totalPage) {
        pagi += `<button type="button" id="nex" class="btn btn-outline-primary m-3" href="#" onclick="currentPagePagi = ${currentPagePagi + 1}; ShowTask()">Next</button>`;
    }

    pagination.innerHTML = pagi;
    pagination.style.display = filteredTasks.length > 0 ? "flex" : "none";
}



window.onload = function () {
    ChangePage("all");
}
