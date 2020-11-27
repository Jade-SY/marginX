var gnb_M_Btn = document.querySelector(".gnb-M-btn")
var gnb_M_container = document.querySelector(".gnb-M-container")
var gnb_M_item = document.querySelectorAll(".gnb-M-item")


gnb_M_Btn.addEventListener('mouseenter', function(){
  gnb_M_Btn.classList.add('hover')
})
gnb_M_Btn.addEventListener('mouseleave', function (){
  gnb_M_Btn.classList.remove('hover')
})
gnb_M_Btn.addEventListener('click', function(){
  if(gnb_M_Btn.classList.contains('click')){
    gnb_M_Btn.classList.remove('click', 'hover') 
    gnb_M_container.style = 'display : none;' 
  }else{
    gnb_M_Btn.classList.add('click')
    gnb_M_container.style = 'display: block;'
  }
})
gnb_M_item.forEach( item => item.addEventListener('click', function(){
  gnb_M_container.style = 'display : none;' 
}))

