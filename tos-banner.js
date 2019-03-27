setTimeout(function(){
  var policyVersion = 1;
  if (window.localStorage && localStorage.getItem("AgreedToPolicyVersion")==policyVersion) return;
  window.policy_banner_accept = function(){
    localStorage.setItem("AgreedToPolicyVersion",policyVersion);
    var e = document.getElementById('PolicyBanner');
    e.parentNode.removeChild(e);
  };
  var e=document.createElement('div');
  e.innerHTML = "<style>#PolicyBanner {position:fixed;top:0;z-index:9999999999;left:0;right:0;} #PolicyBanner > * {background-color:#0060df;font-size:20px;padding:16px;text-align:center;border-bottom: 1px solid #ccc; color: white;} #PolicyBanner a {text-decoration: underline; color: white;} #PolicyBanner button { margin-left: 20px; }</style><div id=PolicyBanner><div>This site uses cookies to enhance your browsing experience. By continuing to use this site, you agree to the use of cookies, in accordance with the <a target=_blank href=https://www.usnh.edu/about/privacy-policy>USNH website privacy policy</a>.<button type=button onclick='policy_banner_accept();'>ok</button></div></div>";
  document.body.appendChild(e);
},1000);
