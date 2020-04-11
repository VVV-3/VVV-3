function frm_add()
{
    if('form' in localStorage) {
        var newcount = parseInt(localStorage.getItem('form')) + 1;
    } else {
        var newcount = 1;
    }
    var nname = document.getElementsByName('my_name')[0].value;
    var nskill = document.getElementsByName('my_skill')[0].value;
    var nlevel = document.getElementsByName('my_level')[0].value;
    var ncomment = document.getElementsByName('my_comment')[0].value;
    localStorage.setItem(newcount, [nname, nskill, nlevel, ncomment]);
    localStorage.setItem('form', newcount);
    var target_table = document.getElementById('tble');
    target_table.innerHTML += '<tr><td>' + nname + '</td><td>' + nskill + '</td><td>' + nlevel + '</td><td>' + ncomment + '</td></tr>';
}

function frm_make() {
    if('form' in localStorage) {
        var newcount = parseInt(localStorage.getItem('form'));
        var target_table = document.getElementById('tble');
        for(var i = 1; i <= newcount; i++) {
            var listArr = Array.from(localStorage.getItem(i).split(','));
            target_table.innerHTML += '<tr><td>' + listArr[0] + '</td><td>' + listArr[1] + '</td><td>' + listArr[2] + '</td><td>' + listArr[3] + '</td></tr>';
        }
    }
}