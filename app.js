document.addEventListener("DOMContentLoaded", (e) => {
  let body = document.querySelector("body");
  let section = document.createElement("section");
  section.innerHTML = `
     <div id="1" class="div">
        <h3>List All</h3>
      </div>
      <div id="2" class="div">
        <h3>My List</h3>
      </div>
  `;
  section.classList = "body";
  body.appendChild(section);

  let objDiv = {
    text: "Select mouse drag dowun",
    img: false,
  };
  let block = document.getElementById("1");
  for (let i = 0; i < 6; i++) {
    let div = document.createElement("div");
    div.draggable = "true";
    div.classList = "btnL box";
    div.innerText = objDiv.text;
    block.appendChild(div);
  }
  let dargSrcEl = null;
  let divv = document.querySelectorAll(".div");
  function handleDragStart(e) {
    this.style.opacity = ".4";
    dargSrcEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
    return false;
  }
  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    let img = document.createElement("img");
    if (dargSrcEl != this) {
      let divBlock = document.querySelectorAll(".btnL .box");
      if (e.target.id == 1) {
        this.style.opacity = "1";
        for (let i = 0; i < divv.length; i++) {
          divv[0].appendChild(dargSrcEl);
        }
        dargSrcEl.innerText = objDiv.text;
      }
      if (e.target.id == 2) {
        this.style.opacity = "1";
        for (let i = 0; i < divv.length; i++) {
          divv[1].appendChild(dargSrcEl);
        }
        img.classList = "img";
        dargSrcEl.appendChild(img);
        img.src = "./images/user.jpg";
        console.log(divBlock);
      }
    }
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";
    this.style.transition = "0.3s cubic-bezier(0.2, 1, 0.1, 1)";
    items.forEach((item) => {
      item.classList.remove("over");
    });
  }

  let items = document.querySelectorAll(".body .div");
  items.forEach(function (item) {
    item.addEventListener("dragover", handleDragOver, false);
    item.addEventListener("drop", handleDrop, false);
    let itembtns = document.querySelectorAll(".body .div .box");
    itembtns.forEach((itembtn) => {
      itembtn.addEventListener("dragstart", handleDragStart, false);
      itembtn.addEventListener("dragend", handleDragEnd, false);
    });
  });
});

const url = "https://reqres.in/api/users?page=1";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data[1]);
  });
