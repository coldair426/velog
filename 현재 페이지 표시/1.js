// 현재 페이지 표시.
document.addEventListener('DOMContentLoaded', () => {
  if (document.title === '호사로운 Overview') {
    // 헤더의 네비게이션
    document.querySelector('.navigation__overview-mark').style.visibility =
      'visible';
    // 모바일 네비게이션 메뉴
    document.querySelector(
      '.header__mobile-navigation-overview-mark'
    ).style.visibility = 'visible';
    // 스티키헤더(PC용)
    document.querySelector('.sticky-header__overview-mark').style.visibility =
      'visible';
  }
  if (document.title === '호사로운 Rooms') {
    document.querySelector('.navigation__rooms-mark').style.visibility =
      'visible';
    document.querySelector(
      '.header__mobile-navigation-rooms-mark'
    ).style.visibility = 'visible';
    document.querySelector('.sticky-header__rooms-mark').style.visibility =
      'visible';
  }
  if (document.title === '호사로운 Location') {
    document.querySelector('.navigation__location-mark').style.visibility =
      'visible';
    document.querySelector(
      '.header__mobile-navigation-location-mark'
    ).style.visibility = 'visible';
    document.querySelector('.sticky-header__location-mark').style.visibility =
      'visible';
  }
  if (document.title === '호사로운 Book now') {
    document.querySelector('.navigation__booknow-mark').style.visibility =
      'visible';
    document.querySelector(
      '.header__mobile-navigation-booknow-mark'
    ).style.visibility = 'visible';
    document.querySelector('.sticky-header__booknow-mark').style.visibility =
      'visible';
  }
  if (document.title === '호사로운 Contact us') {
    document.querySelector('.navigation__contactus-mark').style.visibility =
      'visible';
    document.querySelector(
      '.header__mobile-navigation-contactus-mark'
    ).style.visibility = 'visible';
    document.querySelector('.sticky-header__contactus-mark').style.visibility =
      'visible';
  }
});
