function oshita() {
    youso=document.getElementById('text01');
    t=youso.value;

    hyouji='こんにちは' + t + 'さん';
    
    gamenyouso = document.getElementById('gamen');
    gamenyouso.innerHTML = hyouji;

}