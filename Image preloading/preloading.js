// rooms images preload.
// 내부 imgs src 배열.
const roomsIndoorImgsArr = [];
for (i = 1; i < 20; i++) {
  roomsIndoorImgsArr.push(`./img_src/rooms/indoor/(${i}).jpg`);
}
// 외부 imgs src 배열.
const roomsOutdoorImgsArr = [];
for (i = 1; i < 11; i++) {
  roomsOutdoorImgsArr.push(`./img_src/rooms/outdoor/(${i}).jpg`);
}

// preload 함수.
function roomsImgsPreload(arr, index) {
  index = index || 0;
  if (index < arr.length) {
    const img = new Image();
    img.src = arr[index];
    img.addEventListener('load', () => {
      roomsImgsPreload(arr, index + 1);
    });
  }
}

// 내부, 외부 imgs 병렬 load.
window.addEventListener('load', roomsImgsPreload(roomsIndoorImgsArr));
window.addEventListener('load', roomsImgsPreload(roomsOutdoorImgsArr));
