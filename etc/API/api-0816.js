// POST 요청 보내기
async function init() {
  const response = await fetch(
    "https://dummy.restapiexample.com/api/v1/create",
    {
      method: "POST",
      body: JSON.stringify({ name: "test", salary: "123" }), // 본문
    }
  );
  console.log(response);
  console.log(await response.json());
}
init();

// decoding 인증키
// const serviceKey =
//   "BJmP5aP7lITTQ7OMUb1ZqGrFxnSitSKSBLxMa2Di6WUOsCJVc5QrAw5vO376VSHddNN4bp0v/Ni4lG26kDIUdw==";

// // 오픈API url 끝에 ?를 붙여준다.
// const baseUrl = " http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0?";

// const params = new URLSearchParams({
//   serviceKey: serviceKey,
//   pageNo: 1,
// });

// fetch(baseUrl + params)
//   .then((response) => response.json())
//   .then((json) => {
//     json.response.body.items.item.map((entry) => {
//       console.log(entry);
//     });
//   });
