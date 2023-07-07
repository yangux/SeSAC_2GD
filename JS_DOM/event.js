const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");

// btn1
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭하셨군요!");
});

btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "gray";
});

// btn2
const container = document.getElementById("container");
btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerText = "안녕";
  div.style.backgroundColor = "pink";
  container.append(div);
});

// btn3
function changeColor() {
  const divs = container.querySelectorAll("#container div");
  divs.forEach((div) => (div.style.backgroundColor = "skyblue"));
  // 맨 마지막 요소만 빨강색으로 변경
  divs[divs.length - 1].style.backgroundColor = "red";
}
btn3.addEventListener("click", changeColor);

// btn4
function changeBtnColor() {
  this.style.backgroundColor = "yellow";
  this.style.color = "black";
}
btn4.addEventListener("click", changeBtnColor);

/* click 외의 많은 동작들 */
console.log(window);
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 350) {
    document.querySelector(".pos").style.opacity = "1";
  } else {
    document.querySelector(".pos").style.opacity = "0";
  }
});

// 이벤트 객체 확인 & keydown
const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function (event) {
  console.log(event);
});

input.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);

  // 방향키 위 아래 왼쪽 오른쪽을 누르면
  // 각각 누를 때마다 up, down, left, right
  if (e.key === "ArrowUp") {
    console.log("up");
  } else if (e.key === "ArrowDown") {
    console.log("down");
  } else if (e.key === "ArrowRight") {
    console.log("right");
  } else if (e.key === "ArrowLeft") {
    console.log("left");
  } else {
    console.log("others");
  }
});

// 변경 이벤트
const chgInput = document.getElementById("change-input");
chgInput.addEventListener("input", () => {
  console.log("변경중!");
  let div = document.querySelector(".box");
  div.innerHTML = chgInput.value;
  /*
   input: 현재 input에 변경사항이 존재하는 순간을 계속 인식
   실시간으로 바로 반영할 수 있음
   (shift, ctrl 등 입력값이 변하지 않는다면 이벤트 발생x)
  */
});
chgInput.addEventListener("change", () => {
  // 'change': input에 변경이 일어나고
  // 다른 요소를 클릭해서 focus out 시키면 이벤트 발생됨
  console.log("변경되었어요!");
});

// 폼이 제출되는 이벤트
// 'submit': form에 적용하는 이벤트
const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // 폼이 실제로 제출되지 않도록 이벤트를 막는 것
  // 새로고침 방지
  const todoInput = document.querySelector('[name="todo"]');
  console.log(todoInput.value);

  if (todoInput.value.trim() !== "") {
    const li = document.createElement("li");
    // li.textContent=todo;
    li.append(todoInput.value); // 글자도 append로 추가 가능
    todos.append(li);
  }

  todoInput.value = "";

  // 만약에 제출할 때 공백이 들어왔을 때는 추가하고 싶지 않다면?
});
