const btn = document.querySelector('button');

btn.onclick = function () {
  console.log('event!');
};

<button onclick="console.log('event!')">Event button</button>;

btn.addEventListener('click', function () {
  console.log('event!');
});
