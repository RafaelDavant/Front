var boxClick = document.querySelectorAll(".col-1");

for (const item of boxClick) {
  item.addEventListener('click',function(){
    var marker = item.textContent;
    if (marker === '') {
      item.textContent = 'X';
    }else if (marker === "X") {
      item.textContent = 'O';
    }else if (marker === "O") {
      item.textContent = '';
    }})
}
