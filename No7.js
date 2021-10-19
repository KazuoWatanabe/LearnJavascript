function keisan() {
    text01 = document.getElementById("atai1");
    text02 = document.getElementById("atai2");

    if(text01.value == '') {
        alert('1つ目の値が入力されていません。');
        return;
    }
    if(text02.value == '') {
        alert('2つ目の値が入力されていません。');
        return;
    }

    x = parseInt(text01.value);
    y = parseInt(text02.value);

    z = x + y;
    alert(z);

}