/* exports 키워드를  
내보내고 싶은(다른 파일에서 사용할) 요소의 앞에
붙여줍니다.*/

exports.sayhi2 = function () {
  console.log("hi2");
};

exports.sayName2 = function (name) {
  console.log("my name is " + name);
};
