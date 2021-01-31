// メールが一致しているかを確認する関数
function CheckEmail() {
    //IE対応の為変更
    var mail = document.getElementById("email").value; //メールフォームの値を取得
    var mailConfirm = document.getElementById("emailConfirm").value; //メール確認用フォームの値を取得
    // パスワードの一致確認
    if (mail !== mailConfirm){
        return false;
    }else{
        return true;
    }
};

// 名前のから判定
function CheckName() {
    var name = document.getElementById("customerName").value; //名前の値の取得
    // パスワードの一致確認
    if (name == null || name == ''){
        return false;
    }else{
        return true;
    }
};

function CheckTel() {
    var box = document.getElementById("tel").value;
    if (box == null || box == ''){
        alert('入力が空です')
    }else{}
    if(box.match(/[^0-9]/)){
        alert('半角数字以外が入力されています');
    }else{
    }
};

function CheckMail() {
    var mail = document.getElementById("mail").value;
    // パスワードの一致確認
    if (mail == null || mail == ''){
        return false;
    }else{
        return true;
    }
};

function CheckBox() {
    var box = document.getElementById("box").value;
    // パスワードの一致確認
    if (box == null || box == ''){
        alert('入力が空です')
    }else{}
    if(box.match(/[^0-9]/)){
        alert('半角数字以外が入力されています');
    }else{
    }
};

function CheckBed() {
    var box = document.getElementById("bed").value;
    // パスワードの一致確認
    if (box == null || box == ''){
        alert('入力が空です')
    }else{}
    if(box.match(/[^0-9]/)){
        alert('半角数字以外が入力されています');
    }else{
    }
};

function CheckBicycle() {
    var box = document.getElementById("bicycle").value;
    if (box == null || box == ''){
        alert('入力が空です')
    }else{}
    if(box.match(/[^0-9]/)){
        alert('半角数字以外が入力されています');
    }else{
    }
};

function CheckWash() {
    var box = document.getElementById("washingMachine").value;
    if (box == null || box == ''){
        alert('入力が空です')
    }else{}
    if(box.match(/[^0-9]/)){
        alert('半角数字以外が入力されています');
    }else{
    }
};

// function CheckDigit(x) {
//     // var w = document.getElementById(x).value;
//     if(document.getElementById(x).value ==null || document.getElementById(x).value ==''){
//         alert('入力が空です');
//     }
//     if(document.getElementById(x).value.match(/[^0-9]/)){
//         // return false;
//     }else{
//         alert('半角数字以外が入力されています');
//         // return true;
//     }
// };