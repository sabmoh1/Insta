function resetPassword() {
    let emailOrUsername = document.getElementById("emailOrUsername").value;
    let message = document.getElementById("message");

    if (emailOrUsername.trim() === "") {
        message.style.color = "red";
        message.innerText = "يرجى إدخال كلمة السر القديمة الصحيحة .";
    } else {
        message.style.color = "green";
        message.innerText = "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.";
    }
}
