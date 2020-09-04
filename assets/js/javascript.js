//javascript scrool top
var mybutton = document.getElementById("myBtnSc");
    
//Saat scroll kebawah 20px dari atas, tampilkan button scrolltop
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
    
//klik button
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value

if(weight > 0 && height > 0){ 
  var finalBmi = weight/(height/100*height/100)
  document.bmiForm.bmi.value = finalBmi
  if(finalBmi < 18.5){
    document.bmiForm.meaning.value = "Berat badan anda kurang."
    }
  if(finalBmi > 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "Anda sehat dengan berat badan ideal."
    }
  if(finalBmi > 25){
    document.bmiForm.meaning.value = "Berat badan anda berlebih."
    }
}
  else{
  alert("Isi form dengan benar!")
  }
}