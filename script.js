var count1 = 0;
var count2 = 0;
var countTotal = 0;


function btn1Click(){
    count1++;
    countTotal++;
    localStorage.setItem("counter1", cnt1);
    document.getElementById('count1').innerHTML = 'Counts on Button 1: ' + count1;
    document.getElementById('totalCount').innerHTML = 'Total Counts: ' + countTotal;
}
function btn2Click(){
    count2++;
    countTotal++;
    document.getElementById('count2').innerHTML = 'Counts on Button 2: ' + count2;
    document.getElementById('totalCount').innerHTML = 'Total Counts: ' + countTotal;
    
}