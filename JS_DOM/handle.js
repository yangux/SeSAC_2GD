const div1 = document.getElementById("div1");
/*
1. 태그 내부 내용
 - innerHTML: 요소 안의 '코드'를 가져오거나 수정
 - innerText: 요소 안의 텍스트를 가져오거나 수정
 - textContent: innerText처럼 텍스트 정보 표시
*/

console.log(div1.textContent);
console.log(div1.innerText);
console.log(div1.innerHTML);

div1.innerHTML = "여기는 <b>첫번째</b> div 태그입니다. &hearts;";
div1.innerText = "   여기는 <b>첫번째</b> div 태그입니다. &hearts;   ";
console.log(div1.innerText);
div1.textContent = "   여기는 <b>첫번째</b> div 태그입니다. &hearts;   ";
console.log(div1.textContent);

/* 2. 속성 
 - setAttribute(): 속성값 설정
 - getAttribute(): 속성값 가져오기
 - 점(.)으로 접근하고 속성값도 변경할 수 있음
*/
// 메소드롤 접근 후 속성 변경
const naver = document.getElementById("naver");
const pooh = document.querySelector("#pooh");

naver.setAttribute("href", "https://www.google.com");
naver.innerText = "Google";

console.log(pooh.getAttribute("src"));

// 점으로 속성에 접근 후 변경
console.log(pooh.src);
console.log(pooh.alt);
pooh.alt = "푸 사진입니다!";

/* CSS 지정 */
const h1 = document.querySelector("h1");
const list = document.querySelectorAll("li");

// 3-1. style 속성 사용
// for (let li of list) {
//   console.log(li);
//   li.style.backgroundColor = "pink";
//   li.style.color = "#fff";
//   li.style.fontSize = "1.3rem";
// }

// 3-2. classList 사용
console.log(h1.classList);
h1.classList.add("add-h1");
h1.classList.remove("add-h1");
h1.classList.toggle("add-h1");
console.log(h1.classList.contains("add-h1"));

// li 태그에 friends 클래스 추가해 보기
for (let li of list) {
  li.classList.add("friends");
}

/* 4. 요소 생성, 추가, 삭제, 접근 */
// 요소에 접근하기
const friends = document.getElementById("friends");
const tigger = document.getElementById("tigger");

// 자식 노드에 접근
console.log("----자식노드 접근----");
console.log(friends.children);
console.log(friends.children[0]);

// 부모 노드에 접근
console.log("----부모노드 접근----");
console.log(tigger.parentNode);

// 형제 노드에 접근
console.log("----형제 노드에 접근----");
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling.nextElementSibling);

// 4-1. 요소 생성
const container = document.querySelector(".container");
const p = document.createElement("p");
p.innerText = "추가한 p";
p.style.fontWeight = "bold";
p.style.backgroundColor = "yellow";

// 4-2. 요소 추가
container.append(p);

const p2 = document.createElement("p");
p2.innerText = "p2";
const p3 = document.createElement("p");
p3.innerText = "p3";
p2.classList.add("p-2");
p3.classList.add("p-3");

container.prepend(p2);
container.append(p3);

const h2 = document.createElement("h2");
h2.innerText = "추가된 h2";
h1.before(h2); // h1의 이전 형제 요소로 h2를 추가

const h3 = document.createElement("h3");
h3.innerText = "추가된 h3";
h1.after(h3); // h1의 다음 형제 요소로 h3를 추가

//  appendChild 사용
const p4 = document.createElement("p");
p4.innerText = "p4";
p4.classList.add("p-2");
const p5 = document.createElement("p");
p5.innerText = "p5";
p5.classList.add("p-3");

container.append(p4, p5, "안녕하세요"); // 여러개 가능
// container.appendChild(p4, p5); // 여러개 불가능

const div2 = document.createElement("div");
const img = document.createElement("img");
const span = document.createElement("span");

img.src = "../JS_DOM_Practice/img/piglet.png";
img.setAttribute("alt", "피글렛");
span.innerHTML = "안녕 나는 <b>피글렛</b>이야&hearts;";

div2.append(img, span);
container.append(div2);
console.log(container);

/* 4-3. 요소 삭제 */
// remove, removeChild
const firstLi = document.querySelector("li");
// firstLi.remove();

console.log(friends);
friends.removeChild(firstLi);
