function checklogin(){
  var cphone=checkphone();
  var concode=confimcode();
  return cphone && concode;
}

//验证手机号
function checkphone(){
  var acount=document.getElementById("acount")
  var phone=document.getElementById("phone");
  var pattern=/^\w{11}$/;
 if(acount.value.length==0){
   acount.className="acount-error";
   phone.style.visibility="visible";
   phone.innerHTML="请输入手机号"
   return false;
  }
  if(pattern.test(acount.value)){
    phone.style.visibility="hidden";
    acount.className="acount";
    return true;
  }else{
    acount.className="acount-error";
    phone.style.visibility="visible";
    phone.innerHTML="请输入正确的手机号码";
    return false;
  }
}


//确定验证码
function confimcode(){
    var vccode=document.getElementById("verfic-code")
    var yzcode=document.getElementById("yzcode")
    var pattern=/^\w{4,}$/
    if(vccode.value.length==0){
        vccode.className="verfic-error"
        yzcode.style.visibility="visible"
        yzcode.innerHTML="请输入验证码"
        return false
       }
    if (pattern.test(vccode.value)){
      yzcode.style.visibility="hidden"
      vccode.className="verfic-code"
      
    }else{
      vccode.className="verfic-error"
      yzcode.style.visibility="visible"
      yzcode.innerHTML="请输入正确的验证码"
    }
}

//获取验证码
window.onload=function(){
  var makecode=document.getElementById("make-code")
  var acount=document.getElementById("acount")
  var pattern=/^\w{11}$/;
  makecode.onclick=function(){
    if(pattern.test(acount.value)){
      makecode.innerHTML="已发送(cou)"
    }
    return confimcode()
  }
  
  var cou=26
  var timer=setInterval(function(){
    if(cou<0){
      cou=0
    }
    cou--
  },1000)

}