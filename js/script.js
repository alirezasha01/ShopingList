"use strict";
function shopList() {
  let valueInp = document.getElementById("input").value;
  if (valueInp != "") {
    let divMain = document.createElement("div");
    divMain.classList.add("inline");
    let divP = document.createElement("div");
    divP.classList.add("m-auto");
    let divBtn = document.createElement("div");
    divBtn.classList.add("button");
    divMain.appendChild(divP);
    divMain.appendChild(divBtn);
    let paragraph = document.createElement("p");
    paragraph.classList.add("mt-2", "p");
    divP.appendChild(paragraph);
    let textShop = document.createTextNode(valueInp);
    paragraph.appendChild(textShop);
    let btnDel = document.createElement("button");
    let btnSuc = document.createElement("button");
    let textDel = document.createTextNode("حذف");
    let textSuc = document.createTextNode("خرید انجام شد");
    btnDel.appendChild(textDel);
    btnSuc.appendChild(textSuc);
    btnDel.classList.add("btn", "btn-danger", "btn-sm");
    btnSuc.classList.add("btn", "btn-success", "btn-sm");
    divBtn.appendChild(btnDel);
    divBtn.appendChild(btnSuc);
    let element = document.getElementById("new");
    element.appendChild(divMain);
    document.getElementById("input").value = "";
  }
}
{
  /* <div class='inline'>
  <div class='m-auto'>
    <p class='mt-2 p'>
      خیار
    </p>
  </div>
  <div class='button'>
    <button class='btn btn-danger btn-sm'>حذف</button>
    <button class='btn btn-success btn-sm'>خرید انجام شد</button>
  </div>
</div>; */
}
