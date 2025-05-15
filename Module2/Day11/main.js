let getEle = document.getElementById('favorite_list');

getEle.innerHTML = `<ul>
            <li></li>
            <li></li>
            <li></li>
                    </ul>`;

let getli = getEle.getElementsByTagName('li');
getli[0].innerText = 'I love this thing';
getli[1].innerText = 'I love this thing';
getli[2].innerText = 'I love this thing';


getEle.style.color = 'red';

let getTN = document.getElementsByTagName('ul')[0];
let li = document.createElement("li");
let childli = prompt("Nhập vào text: ");
li.innerText = childli;
getTN.append(li);
