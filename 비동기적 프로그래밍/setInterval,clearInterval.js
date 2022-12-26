// 분이 넘어가거나 10회째가 될 때까지 5초마다 콜백
const start = new Date();
let i = 0;

const intervalId = setInterval(() => {
  let now = new Date();
  if (now.getMinutes() !== start.getMinutes() || ++i > 10) {
    return clearInterval(intervalId);
  }
  console.log(`${i}: ${now}`);
}, 5 * 1000);

/*
1: Mon Dec 26 2022 21:50:12 GMT+0900 (대한민국 표준시)
2: Mon Dec 26 2022 21:50:17 GMT+0900 (대한민국 표준시)
3: Mon Dec 26 2022 21:50:22 GMT+0900 (대한민국 표준시)
4: Mon Dec 26 2022 21:50:27 GMT+0900 (대한민국 표준시)
5: Mon Dec 26 2022 21:50:32 GMT+0900 (대한민국 표준시)
6: Mon Dec 26 2022 21:50:37 GMT+0900 (대한민국 표준시)
7: Mon Dec 26 2022 21:50:42 GMT+0900 (대한민국 표준시)
8: Mon Dec 26 2022 21:50:47 GMT+0900 (대한민국 표준시)
9: Mon Dec 26 2022 21:50:52 GMT+0900 (대한민국 표준시)
10: Mon Dec 26 2022 21:50:57 GMT+0900 (대한민국 표준시)
*/
