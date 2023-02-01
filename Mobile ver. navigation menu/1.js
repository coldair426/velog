// 모바일 네비게이션 메뉴.
document
  .querySelector('.header__mobile-navigation-icon')
  .addEventListener('click', () => {
    document.querySelector(
      '.header__mobile-navigation-slide'
    ).style.visibility = 'visible';
    document.querySelector('.header__mobile-navigation-slide').style.width =
      '60%';
  });
document
  .querySelector('.header__mobile-navigation-close')
  .addEventListener('click', () => {
    document.querySelector(
      '.header__mobile-navigation-slide'
    ).style.visibility = 'hidden';
    document.querySelector('.header__mobile-navigation-slide').style.width =
      '0px';
  });

// 모바일 네비게이션 메뉴가 펼쳐져 있을 때, 메인을 클릭하면 메뉴 닫힘.
document.querySelector('main').addEventListener('click', () => {
  if (
    (document.querySelector(
      '.header__mobile-navigation-slide'
    ).style.visibility = 'visible')
  ) {
    document.querySelector(
      '.header__mobile-navigation-slide'
    ).style.visibility = 'hidden';
    document.querySelector('.header__mobile-navigation-slide').style.width =
      '0px';
  }
});
