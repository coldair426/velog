function countdown() {
  console.log('Countdown');
  for (let i = 5; i >= 0; i--) {
    setTimeout(() => {
      console.log(i === 0 ? 'GO!' : i);
    }, (5 - i) * 1000);
  }
}
countdown();
/*
Countdown
5
4
3
2
1
GO!
*/
