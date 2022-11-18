//console.log("hi");
const root = document.getElementById('root');
console.log(root);
const btn = document.createElement('button');
btn.type = "text";
btn.id = "btn";
btn.innerText = "이것은 버튼";
root.appendChild(btn);

const crudBtn = document.getElementById('crudBtn');
console.log(crudBtn);
//돼지//

// const clickDiv = document.createElement('div');
// clickDiv.style.width = "100px";
// clickDiv.style.height = "100px";
// clickDiv.style.backgroundColor = "black";
// clickDiv.style.innerText = "클릭";


// root.appendChild(clickDiv);

btn.addEventListener('click', function () {
  location.href = "/updatescript";  
});

crudBtn.addEventListener('click', function () {
  location.href = "/combine";  
});