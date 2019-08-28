

function klik(arument){
    // var argument=arguments[0];
    if(arguments[0]=="WA"){
        var win = window.open("https://wa.me/085723850567");
        win.focus();
    }
    if(arguments[0]=="IG"){
        var win = window.open("https://www.instagram.com/ravialgifari/");
        win.focus();
    }
    if(arguments[0]=="Outlook"){
        var win = window.open("mailto:dinda.ravi.algifari@outlook.com");
        win.focus();
    }
    if(arguments[0]=="Sms"){
        var win = window.open("sms:+6285723850567","sms",width="");
        win.document.write("<p>No SMS : +6285723850567</p>");
        win.focus();
    }
}
