var menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', openOrclose);
function openOrclose()
{
  let menuBtnItem1 = document.querySelector('.menu-btn span:nth-child(1)');
  let menuBtnItem2 = document.querySelector('.menu-btn span:nth-child(2)');
  let menuBtnItem3 = document.querySelector('.menu-btn span:nth-child(3)');
  let menuList = document.querySelector('nav ul')
  if (menuBtnItem2.style.opacity == '1') {
    open()
  } else {
    close()
  }
  function open()
  {
    menuBtnItem2.style.opacity = '0';
    menuBtnItem1.style.transform = 'translateY(13px) rotate(-45deg)';
    menuBtnItem3.style.transform = 'translateY(-13px) rotate(45deg)';
    menuList.style.display='block'
  }
  function close()
  {
    menuBtnItem2.style.opacity = '100%';
    menuBtnItem1.style.transform = 'translateY(0) rotate(0)';
    menuBtnItem3.style.transform = 'translateY(0) rotate(0)';
    menuList.style.display='none'
  }
}