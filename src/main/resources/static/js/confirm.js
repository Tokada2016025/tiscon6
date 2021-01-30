// メールが一致しているかの確認
// <script>
function CheckEmail() {
    //IE対応の為変更
    // var mail = email.value; //メールフォームの値を取得
    // var mailConfirm = emailConfirm.value; //メール確認用フォームの値を取得
    var mail = document.getElementById("email").value; //メールフォームの値を取得
    var mailConfirm = document.getElementById("emailConfirm").value; //メール確認用フォームの値を取得
    // パスワードの一致確認
    if (mail !== mailConfirm){
        // alert("パスワードと確認用パスワードが一致しません"); // 一致していなかったら、エラーメッセージを表示する
        return false;
    }else{
        return true;
    }
};
// </script>