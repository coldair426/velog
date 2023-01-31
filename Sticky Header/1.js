window.addEventListener('scroll', () => {
  if (
    window.pageYOffset >
    document.querySelector('.navigation').offsetHeight +
      document.querySelector('.navigation').offsetTop
  ) {
    document.querySelector('.sticky-header').style.visibility = 'visible';
    document.querySelector('.sticky-header').style.height = '60px';
  } else {
    document.querySelector('.sticky-header').style.visibility = 'hidden';
    document.querySelector('.sticky-header').style.height = '0px';
  }
});
