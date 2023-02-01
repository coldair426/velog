const indoorImg = document.querySelector('.indoor__img');
const indoorButtonBefore = document.querySelector(
  '.indoor .img__before-button'
);
const indoorButtonAfter = document.querySelector('.indoor .img__after-button');

const indoorImgArr = [];
for (i = 1; i < 20; i++) {
  indoorImgArr.push(`./img_src/rooms/indoor/(${i}).jpg`);
}
let indoorImgIndex = 0;
indoorImg.src = indoorImgArr[indoorImgIndex];

indoorButtonBefore.addEventListener('click', () => {
  if (indoorImgIndex === 0) {
    indoorImgIndex = 18;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  } else {
    indoorImgIndex -= 1;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  }
});
indoorButtonAfter.addEventListener('click', () => {
  if (indoorImgIndex === 18) {
    indoorImgIndex = 0;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  } else {
    indoorImgIndex += 1;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  }
});

let indoorImgIndex = 0;
indoorImg.src = indoorImgArr[indoorImgIndex];

indoorButtonBefore.addEventListener('click', () => {
  if (indoorImgIndex === 0) {
    indoorImgIndex = 18;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  } else {
    indoorImgIndex -= 1;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  }
});
indoorButtonAfter.addEventListener('click', () => {
  if (indoorImgIndex === 18) {
    indoorImgIndex = 0;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  } else {
    indoorImgIndex += 1;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  }
});
