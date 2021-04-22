function changePlus(i){
    var name = 'plus';
    name+=i;
    var img = document.getElementById(name);
 
    if(img.classList.contains('fa-plus')){

      
        img.classList.remove('fa-plus');
        img.classList.add('fa-minus');
    }
    else{
        img.classList.remove('fa-minus');
        img.classList.add('fa-plus');
    }

}