function kurikaeshi() {
    text01 = document.getElementById('text01');
    atai = parseInt(text01.value);
    keta = 0;
    do{
        atai /= 10;
        atai = Math.floor(atai);
        keta++;
    }while(atai != 0);

    alert(text01.value + 'は' + keta + '桁です');
}