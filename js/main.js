var gnb_Btn = document.querySelector(".gnb-btn")
var gnb_container = document.querySelector(".gnb-container")
var gnb_item = document.querySelectorAll(".gnb-item")


gnb_Btn.addEventListener('click', function(){
  if(gnb_Btn.classList.contains('on')){
    gnb_Btn.classList.remove('on') 
    gnb_container.style = 'visibility: hidden;' 
  }else{
    gnb_Btn.classList.add('on')
    gnb_container.style = 'visibility: visible; opacity: 1;'
  }
})
gnb_item.forEach( item => item.addEventListener('click', function(){
  gnb_Btn.classList.remove('on') 
  gnb_container.style = 'visibility: hidden;' 
}))

