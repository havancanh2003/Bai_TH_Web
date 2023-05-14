data = {
    STT: Int32Array,
    Ten: String,
    Hang: String,
    NgaySX: Date,
    Gia: Int32Array
};

var dulieu = [{
        STT: 1,
        Ten: 'Core i3 7100',
        Hang: 'Intel',
        NgaySX: '22-7-2017',
        Gia: 11111111
    },
    {
        STT: 2,
        Ten: 'Core i5 4430',
        Hang: 'Intel',
        NgaySX: '11-4-2017',
        Gia: 2222222
    }
];

var table = document.getElementById('mytable');

function addData(element) {
    var row = table.insertRow();
    row.insertCell().innerHTML = element.STT;
    row.insertCell().innerHTML = element.Ten;
    row.insertCell().innerHTML = element.Hang;
    row.insertCell().innerHTML = element.NgaySX;
    row.insertCell().innerHTML = formatMoneyVND(element.Gia);
}

function myFunction() {
    dulieu.forEach(function(element) {
        addData(element);
    }, this);
}

function them() {
    if (document.getElementById('Ten').value == "") {
        alert("Nhập tên.");
        document.getElementById('Ten').focus();
    } else if (document.getElementById('Hang').value == "") {
        alert("Nhập hãng sản xuất.");
        document.getElementById('Hang').focus();
    } else if (document.getElementById('NgaySX').value == "") {
        alert("Nhập ngày sản xuất.");
        document.getElementById('NgaySX').focus();
    } else if (document.getElementById('Gia').value == "") {
        alert("Nhập giá.");
        document.getElementById('Gia').focus();
    } else if (parseInt(document.getElementById('Gia').value) == "NaN") {
        alert("Nhập sai định dạng giá.");
        document.getElementById('Gia').focus();
    } else if (Date.parse(document.getElementById('NgaySX').value) > Date.now()) {
        alert("Ngày sản xuất không được lớn hơn ngày hiện tại.");
        document.getElementById('NgaySX').focus();
    } else {
        var check = false;
        dulieu.forEach(function(e) {
            if (e.Ten == document.getElementById('Ten').value) {
                check = true;
                alert("Trùng tên.");
                document.getElementById('Ten').focus();
            }
        }, this);
        if (check == false) {
            var vxl = {
                STT: dulieu.length + 1,
                Ten: document.getElementById('Ten').value,
                Hang: document.getElementById('Hang').value,
                NgaySX: document.getElementById('NgaySX').value,
                Gia: parseInt(document.getElementById('Gia').value)
            };
            dulieu.push(vxl);
            addData(vxl);
            huy();
        }
    }
}

function huy() {
    document.getElementById('Ten').value = null;
    document.getElementById('Hang').value = null;
    document.getElementById('NgaySX').value = null;
    document.getElementById('Gia').value = null;
}

function formatMoneyVND(money) {
    if (money == 0) {
        return 0;
    }
    var tmp = money.toString().split('').reverse().join('');
    var a = [];
    var len = tmp.length;
    var b = true;
    while (b) {
        if (tmp.indexOf(",") > 0) {
            tmp = tmp.replace(",", "");
            b = true;
        } else {
            b = false;
        }
    }
    b = true;
    while (b) {
        len = tmp.length;
        if (len % 3 != 0) {
            tmp = tmp.toString() + '0';
            b = true;
        } else {
            b = false;
        }
    }
    for (var i = 0; i < tmp.length; i += 3) {
        a.push(tmp[i] + tmp[i + 1] + tmp[i + 2]);
    }
    tmp = a.toString().split('').reverse().join('');
    b = true;
    while (b) {
        if (tmp[0] == 0 || tmp[0] == ',') {
            tmp = tmp.substr(1);
            b = true;
        } else {
            b = false;
        }
    }
    for (var index = 0; index < tmp.length; index++) {
        if (tmp[index] == ',')
            tmp = tmp.replace(',', '.');
    }
    return tmp;
}