function submithere() {
    var name = document.getElementById('username').value;
    var password = document.getElementById('psd').value;
    console.log('name');
    console.log('password');


    //var cmtbox = documnet.getElementById('bottom-box').cloneNode(true);

    var commentbox = document.getElementById('userdetails').innerHTML;



    document.getElementById('userdetails').children[0].children[0].children[1].innerHTML = name;
    document.getElementById('userdetails').children[0].children[1].children[1].innerHTML = password;
    var name = document.getElementById('username').value = "";
    var password = document.getElementById('psd').value = "";

}