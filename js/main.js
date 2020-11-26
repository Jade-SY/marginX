var gnb_M_Btn = document.querySelector(".gnb-M-btn")
var container = document.querySelector(".gnb-M-wrap")

gnb_M_Btn.addEventListener('mouseenter', function(){
  console.log(gnb_M_Btn.children)
  gnb_M_Btn.classList.add('hover')
})
gnb_M_Btn.addEventListener('mouseleave', function (){
  gnb_M_Btn.classList.remove('hover')
})
gnb_M_Btn.addEventListener('click', function(){
  if(gnb_M_Btn.classList.contains('click')){
    gnb_M_Btn.classList.remove('click')
    gnb_M_wrap.style = 'bottom : auto;'

  }else{
    gnb_M_Btn.classList.add('click')
    gnb_M_wrap.style = 'bottom : 0;' 
  }
})