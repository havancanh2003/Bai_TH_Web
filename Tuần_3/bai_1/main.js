function huy(){
    document.getElementById('text_conten').value = ""
}
function thuc_hien(){
    var text = document.getElementById('text_conten').value;
    if(text == ""){
        alert('vui long nhap vao chuoi')
        document.getElementById('text_conten').focus();
    }
    var arr = text.split(",");
    for(var i=0;i<arr.length;i++)
    {
        arr[i].trim();
    }
    var list = document.getElementById("danhsach");
    var length = list.options.length;
    for (i = 0; i < length; i++) {
        list.remove(list.options[i]);
    }
    var array_temp = Array.from(new Set(arr));// loại bỏ các giá trị trùng nhau

    // lặp các gia trị cua mang vao add vao selection
    for(i<0;i<array_temp.length;i++){
            var option = document.createElement("option");
            option.text = array_temp[i];
            list.add(option);
    }

}
function change() {
    var selectBox = document.getElementById("danhsach");
    var giatri = selectBox.options[selectBox.selectedIndex].value;
    alert("Bạn đã chọn mục: " + giatri);
}
  // arr.forEach(function (op) {
    //     op = op.trim();
    //     if (op != "") {
    //         var option = document.createElement("option");
    //         option.text = op;
    //         list.add(option);
    //     }
    // }, this);



