var EnterAdressGroup = document.createElementsByClassName("EnterAdressGroup")
var boutonAddGroup = document.createElementsByClassName("boutonAddGroup")
  
boutonAddGroup[0].addEventListener('click',function(){
  console.log(EnterAdressGroup[0].getValue())
});