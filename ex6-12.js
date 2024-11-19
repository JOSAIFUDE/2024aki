function hyoji(){//表示する文字 var str="一文字ずつ表示します。";
if(cnt<11){document.timer.moji.value=str.substr(0,cnt+1);}
else{document.timer.moji.value="";}}
function startnc(){setlnterval("hoyji()",1000;}
