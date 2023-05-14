function xem(){
    var ngay = new Date(document.getElementById('date_').value)
    if(ngay == null){
        alert('hay nhap ngay thang');
        document.getElementById('date_').focus();
    }
    var Day = ngay.getDay();
    var month= ngay.getMonth()+1;
    var cung = document.getElementById('cung');
    cung.value = set_cung(Day,month);
};
function set_cung(day, month) {
    switch (month) {
        case 1:
            // day <=19 ? 'Ma ket' : 'bao binh';
            if (day <= 19) return "Ma Kết";
            else return "Bảo Bình"; 
        case 2:
            if (day <= 18) return "Bảo Bình";
            else return "Song Ngư";
        case 3:
            if (day <= 20) return "Song Ngư";
            else return "Bạch Dương";
        case 4:
            if (day <= 20) return "Bạch Dương";
            else return "Kim Ngưu";
        case 5:
            if (day <= 20) return "Kim Ngưu";
            else return "Song Tử";
        case 6:
            if (day <= 22) return "Song Tử";
            else return "Cự Giải";
        case 7:
            if (day <= 22) return "Cự Giải";
            else return "Sư Tử";
        case 8:
            if (day <= 22) return "Sư Tử";
            else return "Xử Nữ";
        case 9:
            if (day <= 22) return "Xử Nữ";
            else return "Thiên Bình";
        case 10:
            if (day <= 23) return "Thiên Bình";
            else return "Bọ Cạp";
        case 11:
            if (day <= 22) return "Bọ Cạp";
            else return "Nhân Mã";
        case 12:
            if (day <= 21) return "Nhân Mã";
            else return "Ma Kết";
        default:
            alert('Hãy nhập ngày tháng năm');
            document.getElementById('ngaysinh').focus();
            return "Chưa nhập dữ liệu";
    }
}
function xoa(){
    document.getElementById('date_').value = "";
    document.getElementById('cung').value = "";
}
