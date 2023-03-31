let menuBtn = document.querySelector('.menu-btn');
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
    menuBtnItem1.style.transform = 'translateY(15px) rotate(-225deg)';
    menuBtnItem3.style.transform = 'translateY(-15px) rotate(225deg)';
    menuBtnItem3.style.boxShadow = 'none';
    menuBtnItem1.style.boxShadow = 'none';
    
    menuList.style.transform = 'translateY(0)'
    menuList.style.boxShadow = '0 0 10px #1FFF96'
  }

  function close()
  {
    menuBtnItem2.style.opacity = '100%';
    menuBtnItem1.style.transform = 'translateY(0)';
    menuBtnItem3.style.transform = 'translateY(0) rotate(0)';
    
    menuList.style.boxShadow = 'none'
    menuList.style.transform = 'translateY(-100vh)'
    menuBtnItem3.style.boxShadow = 'rgba(0, 0, 0, 0.5)';
    menuBtnItem1.style.boxShadow = 'rgba(0, 0, 0, 0.5)';
  }
}