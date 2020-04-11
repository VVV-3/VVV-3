function cmain()
{
    if('counter' in localStorage) {
        var newcount = parseInt(localStorage.getItem('counter')) + 1;
    } else {
        var newcount = 1;
    }
    localStorage.setItem('counter', newcount);
}
function cmain1()
{
        var newcount = parseInt(localStorage.getItem('counter'));
    if(newcount == 69)
    document.getElementById('ctans').innerHTML = 'visits : ' + newcount + ' time(s)' + '  HEHE';
    else
    document.getElementById('ctans').innerHTML = 'visits : ' + newcount + ' time(s)';
}