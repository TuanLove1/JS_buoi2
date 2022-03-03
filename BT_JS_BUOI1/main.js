document.getElementById('btnTich').onclick = function (){
    var number1 = document.getElementById('days').value;
    var number2 = document.getElementById('luong').value;
    var total = number1 * number2;
    var KQ = 'Số lương bạn nhận được là: ' + total + ' đồng';
    document.getElementById('thongbao').innerHTML = KQ;
    document.getElementById('thongbao').classList.add('thong-bao')
}
document.getElementById('btnTb').onclick = function(){
    var so1 = document.getElementById('number1').value;
    var so2 = document.getElementById('number2').value;
    var so3 = document.getElementById('number3').value;
    var so4 = document.getElementById('number4').value;
    var so5 = document.getElementById('number5').value;
    var totalTb = parseInt((so1 + so2 + so3 + so4 + so5)/5);
    var kqTb = 'Gía trị trung bình là: ' + totalTb;
    document.getElementById('giatritb').innerHTML = kqTb;
    document.getElementById('giatritb').classList.add('thong-bao')
}
document.getElementById('btndola').onclick = function(){
    var dola1 = document.getElementById('dola').value;
    var vietnam = document.getElementById('vietnamdong').value;
    var totalDola = dola1 * vietnam;
    var kqDola = totalDola + ' đồng';
    document.getElementById('kqdola').innerHTML = kqDola;
    document.getElementById('kqdola').classList.add('thong-bao');
}
document.getElementById('cv').onclick = function(){
    var chieudai = document.getElementById('cd').value;
    var chieurong = document.getElementById('cr').value;
    var chuvi = ((+chieudai + +chieurong) * 2);
    var dientich = chieudai * chieurong;
    var kqchuvi = 'chu vi hcn là : '+ chuvi + 'cm';
    var kqdientich ='diện tích hcn là: '+ dientich + 'cm^2';
    document.getElementById('kqhcn').innerHTML = kqchuvi + ' và ' + kqdientich; 
    document.getElementById('kqhcn').classList.add('thong-bao');
}
document.getElementById('totalhcs').onclick = function(){
    var haiso = document.getElementById('hs').value;
    var chuc = Math.floor(haiso / 10);
    console.log(chuc);
    var donvi = Math.floor(haiso % 10);
    console.log(donvi);
    var totalhaiso = chuc + donvi ;
    var kqhaiso = 'Cộng hai số lại được: ' + totalhaiso;
    document.getElementById('kqhcs').innerHTML = kqhaiso;
    document.getElementById('kqhcs').classList.add('thong-bao');

}
