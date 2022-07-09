 
  
function Check() 
{
  var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
  if (document.dataForm.username.value == "") {
    window.alert('请输入账号');
    return false;
  }
  if (!uPattern.test(document.dataForm.username.value)) {
    window.alert('请输入5-20为字母和数字账号');
    return false;
  }

  if (document.dataForm.password.value == "") {
    window.alert('请输入密码');

    return false;
  }
  if (document.dataForm.cpassword.value !== document.dataForm.password.value) {
    window.alert('两次密码不一致');

    return false;
  }
  if (document.dataForm.email.value == "") {
    window.alert('请输入邮箱');

    return false;
  }

  var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (!ePattern.test(document.dataForm.email.value)) {
    window.alert('请输入正确的邮箱');
    return false;
  }
  if (document.dataForm.phone.value == "") {
    window.alert('请输入手机号');

    return false;
  }

  mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;

  if (!mPattern.test(document.dataForm.phone.value)) {
    window.alert('请输入正确的手机号');
    return false;
  }

  return true;
}
 