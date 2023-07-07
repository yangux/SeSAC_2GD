// $('선택자')
// document.querySelector('선택자')

console.log($("button"));
$("button").css("color", "red");

// 글자와 속성 변경
function submitjs() {
  // 안녕하세요 -> 반갑습니다
  // border: 2px solid red;
  const div1 = document.querySelector(".div1");
  div1.innerText = "반갑습니다.";
  div1.setAttribute("style", "border: 2px solid red;");
}
function submitjq() {
  // 안녕하세요 -> 잘 지내세요 여러분
  // border: 3px dotted blue;
  $(".div1").html("잘 지내세요 여러분").css("border", "3px dotted blue");
}
