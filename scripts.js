var csk=[];
var dd=[];
var csk1=[];
var dd1=[];
var id=1;
var kaka=1;
var tos=0;
var totalp=0;
var totalc=0;
var count=0;
var turn=0;
var cou=0;
var totalcount=0;
var wkp=0;
var wkc=0;
var kanchan=0;
var pp=0;
var pc=0;
var sp=[];
var sc=[];
var you=[];
var dev=[];
var bp=[];
var bc=[];
var index=0;
var pl='';
var co='';
var nbp=[];
var nbc=[];
var tnbp=[];
var tnbc=[];
var toggle=1;
var cls1=document.getElementById("cls1");
var cls=document.querySelector("#cls");
var pls1=document.getElementById("pls1");
var pls=document.querySelector("#pls");
var plimage=document.getElementById("player-image");
var plname=document.getElementById("player-name");
var pldetails=document.getElementById("player-details");
var seplname=document.getElementById("select-player-name");
var baplname=document.getElementById("back-player-name");
var tcsk1=document.getElementById('tcsk1');
var tkkr1=document.getElementById('tkkr1');
var tdd1=document.getElementById('tdd1');
var tkxip1=document.getElementById('tkxip1');
var tmi1=document.getElementById('tmi1');
var trcb1=document.getElementById('trcb1');
var tsrh1=document.getElementById('tsrh1');
var trr1=document.getElementById('trr1');
var tpwi1=document.getElementById('tpwi1');
var view=document.getElementById('view');
var tkkr=document.getElementById('tkkr');
var tpwi=document.getElementById('tpwi');
var tsrh=document.getElementById('tsrh');
var trr=document.getElementById('trr');
var trcb=document.getElementById('trcb');
var tmi=document.getElementById('tmi');
var tkxip=document.getElementById('tkxip');
var tdd=document.getElementById('tdd');
var tcsk=document.getElementById('tcsk');
var pk=document.getElementById('pk');
var pk1=document.getElementById('pk1');
var pkk1=document.getElementById('pkk1');
var byu=document.getElementById('byu');
var byus=document.getElementById('byus');
var cars=document.getElementById('overs');
var deci=document.getElementById('deci');
var container=document.getElementById('container');
var buttons=document.getElementById('buttons');
var player=document.getElementById('Player');
var computer=document.getElementById('Computer');
var demo1=document.getElementById('demo1');
var coin=document.getElementById('toss');
var result=document.getElementById('result');
var overns=document.getElementById('overns');
var reload=document.getElementById('newgame');
var teams=document.getElementById('teams');
var logo=document.getElementById('logo');
var presult=document.getElementById('presult');
var cresult=document.getElementById('cresult');
var presult1=document.getElementById('presult1');
var cresult1=document.getElementById('cresult1');
var pscore=document.getElementById('pscore');
var cscore=document.getElementById('cscore');
var pback=document.getElementById('pback');
var cback=document.getElementById('cback');
var pic=document.getElementById('pic');
var open=document.getElementById('open');
var details=document.getElementById('details');
var back=document.getElementById('back');
var open1=document.getElementById('open1');
var tcsk=document.getElementById('tcsk');
var card=document.getElementById('card');
var mode=document.getElementById('mode');
var bo1=document.getElementById('bo1');
var bo2=document.getElementById('bo2');
var bo3=document.getElementById('bo3');


bo1.addEventListener("click",
  function()
  { window.location.href="file:///storage/emulated/0/Music/gapoa.html";
  });
bo2.addEventListener("click",
  function()
  { window.location.href="file:///storage/emulated/0/2012/index.html";
  });

function mod()
{ window.location.href="file:///storage/emulated/0/Music/gapoa.html";
}

function dis()
{ logo.style.display="none";
//bo1.style.display="block";  
//bo2.style.display="block";  
//bo3.style.display="block";  
  varate1();
  
}
setTimeout(dis,2000);
function restart()
{ window.location.reload();
}
var indp=0;
var lofra=0;
var indc=0;
var au=0;
function varate1()
{ var imp1=document.getElementById('imp1');
  var yes1=document.getElementById('yes1');
var no1=document.getElementById('no1');
  
imp1.style.display="block";
 yes1.style.display='block';
  no1.style.display='block';
  yes1.addEventListener("click",
  function()
  { id=1;
    teams.style.display='block';
    imp1.style.display="none";
 yes1.style.display='none';
  no1.style.display='none';
    au=1;
  });
  no1.addEventListener("click",
  function()
  { id=0;
    teams.style.display='block';
    imp1.style.display="none";
 yes1.style.display='none';
  no1.style.display='none';
    au=0;
  });
}
function varate()
{ var imp=document.getElementById('imp');
  var yes=document.getElementById('yes');
var no=document.getElementById('no');
  
imp.style.display="block";
 yes.style.display='block';
  no.style.display='block';
  yes.addEventListener("click",
  function()
  { id=2;
    teams.style.display='block';
    imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
  });
  no.addEventListener("click",
  function()
  { id=3;
    teams.style.display='block';
    imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
  });
}

function karol()
{ 

  if(id==2)
  { lofra++;
    pk1.innerHTML="Select "+(10-lofra)+" players-: "+co;
  if(lofra==10)
  {    
    view.style.display='none'; 
    teams.style.display='none';
   overns.style.display='block';
    
  }
  }
if(id==1)
  {
  lofra++;
    pk.innerHTML="Select "+(10-lofra)+" players-: "+pl;
  if(lofra==10)
  {  
    view.style.display='none';
    lofra=0;
   trcb.style.display='none';
  tcsk.style.display='none';
 tpwi.style.display='none';
 tkkr.style.display='none';
  trr.style.display='none';
    tdd.style.display='none';
  tsrh.style.display='none';
    tkxip.style.display='none';
    tmi.style.display='none';
    id=2;
    var imp=document.getElementById('imp');
    imp.innerHTML="Change Computer Players";
    varate();
  }
  }
}

 function lofik(item,team)
{ var title=item.getAttribute("title");
  if(id==1)
  {  seplname.onclick=()=>{ 
 //alert('Player number '+(indp+1)+' is-: '+title);
  csk[indp]=title;
    var head=document.createElement("button");
    head.innerHTML=title;
    head.setAttribute("id","xx");
    pls.appendChild(head);
    var head1=document.createElement("button");
    head1.innerHTML=title;
    head1.setAttribute("id","xx1");
    cls.appendChild(head1);
    csk1=[...csk];
  indp++;
    if(indp!=10)
    {
  team.style.display="flex";
    }
    if(indp==10)
    { team.style.display="none";
    }
  item.style.display="none";
 pldetails.style.display="none";
    karol();
  };
    
  }
    
  if(id==2)
  { seplname.onclick=()=>{ 
 //alert('Player number '+(indp+1)+' is-: '+title);
  dd[indc]=title;
    dd1=[...dd];
  indc++;
      if(indc!=10)
    {
  team.style.display="flex";
    }
    if(indc==10)
    { team.style.display="none";
    }
  item.style.display="none";
 pldetails.style.display="none";
    karol();
  };
    
  }
  
  
}
function team6()
{ 
  if(id==1)
  { csk=["Kohli","Dilshan","Kaif","ABD","Vettori","Syed","Zaheer","Pujara","Aravind","Nannes"];
    csk1=[...csk];
document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
 teams.style.display="none";
  trcb.style.display="flex";
  pk.style.display="block";
    
  byu.addEventListener('click',function(){ teams.style.display="block";
    trcb.style.display="none";
  byu.style.display="none";
  pk.style.display="none";
  });
   document.getElementById('t6').disabled=true;
    player.innerHTML="RCB(You)";
    pl="RCB(You)";
     pk.innerHTML="Select 10 players-: "+pl;
   t6.style.display='none';
    let prcb=document.querySelectorAll('#prcb');
 prcb.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  trcb.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  trcb.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,trcb);
  
  
  });    
 }
  }
  if(id==2)
  { 
    dd=["Kohli","Dilshan","Kaif","ABD","Vettori","Syed","Zaheer","Pujara","Aravind","Nannes"];
    dd1=[...dd];
document.getElementById('t6').disabled=true;
document.getElementById('teams').style.display="none";
    teams.style.display="none";
  trcb.style.display="flex";
  pk1.style.display="block";
  pk.style.display="none";
  view.style.display="block";
    byu.addEventListener('click',function(){ 
      teams.style.display="none";
    trcb.style.display="none";
  byu.style.display="none";
  pk1.style.display="none";
  overns.style.display="block";
    });
    computer.innerHTML="RCB(Com)";
    co="RCB(Com)";
     pk1.innerHTML="Select 10 players-: "+co;
    let prcb=document.querySelectorAll('#prcb');
 prcb.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  trcb.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  trcb.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,trcb);
  
  
  });    
 }
  }
 if(id==3)
  { 
    dd=["Kohli","Dilshan","Kaif","ABD","Vettori","Syed","Zaheer","Pujara","Aravind","Nannes"];
    dd1=[...dd];
    teams.style.display="none";
    byus.addEventListener('click',function(){
overns.style.display="block";
trcb1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
      imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
 });
   computer.innerHTML="RCB(Com)";
    co="RCB(Com)";
  trcb1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Computer team-: "+co;
    let prcb1=document.querySelectorAll('#prcb1');
 prcb1.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  trcb1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  trcb1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
  if(id==0)
  { 
    csk=["Kohli","Dilshan","Kaif","ABD","Vettori","Syed","Zaheer","Pujara","Aravind","Nannes"];
    csk1=[...csk];
    teams.style.display="none";
    document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    byus.addEventListener('click',function(){
trcb1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";     
varate();
 });
  player.innerHTML="RCB(You)";
    pl="RCB(You)";
  trcb1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Player team-: "+pl;
    t6.style.display="none";
   let prcb1=document.querySelectorAll('#prcb1');
 prcb1.forEach(gh);
   function gh(item,index)
    { 
  var head=document.createElement("button");
    head.innerHTML=csk[index];
    head.setAttribute("id","xx");
    pls.appendChild(head);
      var head1=document.createElement("button");
    head1.innerHTML=csk1[index];
    head1.setAttribute("id","xx1");
    cls.appendChild(head1);
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  trcb1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  trcb1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
   
  }
  
}
function team7()
{ 
  if(id==1)
  { csk=["Ross","Doshi","Ashok","Pankaj","Tait","Dravid","Rahane","Botha","Yagnik","Trivedi"];
    csk1=[...csk];
    t7.style.display='none';
document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    teams.style.display="none";
  trr.style.display="flex";
  pk.style.display="block";
    
  byu.addEventListener('click',function(){ teams.style.display="block";
    trr.style.display="none";
  byu.style.display="none";
  pk.style.display="none";
  });
   document.getElementById('t7').disabled=true;
    player.innerHTML="RR(You)";
    pl="RR(You)";
    pk.innerHTML="Select 10 players-: "+pl;
    let prr=document.querySelectorAll('#prr');
 prr.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  trr.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  trr.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,trr);
  });    
 }
  }
  if(id==2)
  { dd=["Ross","Doshi","Ashok","Pankaj","Tait","Dravid","Rahane","Botha","Yagnik","Trivedi"];
    dd1=[...dd];
document.getElementById('t7').disabled=true;
document.getElementById('teams').style.display="none";
    teams.style.display="none";
  trr.style.display="flex";
  pk1.style.display="block";
    pk.style.display="none";
  view.style.display="block";
    byu.addEventListener('click',function(){ 
      teams.style.display="none";
    trr.style.display="none";
  byu.style.display="none";
  pk1.style.display="none";
  overns.style.display="block";
    });
    computer.innerHTML="RR(Com)";
    co="RR(Com)";
     pk1.innerHTML="Select 10 players-: "+co;
    let prr=document.querySelectorAll('#prr');
 prr.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  trr.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  trr.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,trr);
  
  
  });    
 }
  }
  if(id==3)
  { dd=["Ross","Doshi","Ashok","Pankaj","Tait","Dravid","Rahane","Botha","Yagnik","Trivedi"];
    dd1=[...dd];
    teams.style.display="none";
   trr1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   computer.innerHTML="RR(Com)";
    co="RR(Com)";
    pkk1.innerHTML="  Computer team-: "+co;
    byus.addEventListener('click',function(){
overns.style.display="block";
trr1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
    imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
 });
    let prr1=document.querySelectorAll('#prr1');
 prr1.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  trr1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  trr1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
  if(id==0)
  { csk=["Ross","Doshi","Ashok","Pankaj","Tait","Dravid","Rahane","Botha","Yagnik","Trivedi"];
    csk1=[...csk];
    teams.style.display="none";
   trr1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
    document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
   player.innerHTML="RR(You)";
    pl="RR(You)";
    pkk1.innerHTML="  Player team-: "+pl;
    t7.style.display="none";
    byus.addEventListener('click',function(){

trr1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";   
      varate();
 });
    let prr1=document.querySelectorAll('#prr1');
 prr1.forEach(gh);
   function gh(item,index)
    { var head=document.createElement("button");
    head.innerHTML=csk[index];
    head.setAttribute("id","xx");
    pls.appendChild(head);
      var head1=document.createElement("button");
    head1.innerHTML=csk1[index];
    head1.setAttribute("id","xx1");
    cls.appendChild(head1);
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  trr1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  trr1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
}
function team9()
{ 
  if(id==1)
  { csk=["Ganguly","Manish","Yuvraj","Ryder","Murali","Mohnish","Rahul","Thomas","Parnell","Jerome"];
    csk1=[...csk];
    t9.style.display='none';
document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    teams.style.display="none";
  tpwi.style.display="flex";
  pk.style.display="block";
    
  byu.addEventListener('click',function(){ teams.style.display="block";
    tpwi.style.display="none";
  byu.style.display="none";
  pk.style.display="none";
  });
   document.getElementById('t9').disabled=true;
    player.innerHTML="PWI(You)";
    pl="PWI(You)";
    pk.innerHTML="Select 10 players-: "+pl;
    let ppwi=document.querySelectorAll('#ppwi');
 ppwi.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tpwi.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tpwi.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tpwi);
  
  });    
 }
  }
  if(id==2)
  { dd=["Ganguly","Manish","Yuvraj","Ryder","Murali","Mohnish","Rahul","Thomas","Parnell","Jerome"];
    dd1=[...dd];
document.getElementById('t9').disabled=true;
document.getElementById('teams').style.display="none";
    teams.style.display="none";
  tpwi.style.display="flex";
  pk1.style.display="block";
    pk.style.display="none";
  view.style.display="block";
    byu.addEventListener('click',function(){ 
      teams.style.display="none";
    tpwi.style.display="none";
  byu.style.display="none";
  pk1.style.display="none";
  overns.style.display="block";
    });
    computer.innerHTML="PWI(Com)";
    co="PWI(Com)"; pk1.innerHTML="Select 10 players-: "+co;
    let ppwi=document.querySelectorAll('#ppwi');
 ppwi.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tpwi.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tpwi.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tpwi);
  
  
  });    
 }
  }
  if(id==3)
  { dd=["Ganguly","Manish","Yuvraj","Ryder","Murali","Mohnish","Rahul","Thomas","Parnell","Jerome"];
    dd1=[...dd];
    teams.style.display="none";  
computer.innerHTML="PWI(Com)";
    co="PWI(Com)"; 
    tpwi1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Computer team-: "+co;
    byus.addEventListener('click',function(){
overns.style.display="block";
tpwi1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
      imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
 });
    let ppwi1=document.querySelectorAll('#ppwi1');
 ppwi1.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tpwi1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tpwi1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
   if(id==0)
  { csk=["Ganguly","Manish","Yuvraj","Ryder","Murali","Mohnish","Rahul","Thomas","Parnell","Jerome"];
    csk1=[...csk];
    teams.style.display="none";  
player.innerHTML="PWI(You)";
    pl="PWI(You)"; 
    tpwi1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Player team-: "+pl;
    document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    byus.addEventListener('click',function(){
tpwi1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
      imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
      varate();
 });
    t9.style.display="none";
    let ppwi1=document.querySelectorAll('#ppwi1');
 ppwi1.forEach(gh);
   function gh(item,index)
    { var head=document.createElement("button");
    head.innerHTML=csk[index];
    head.setAttribute("id","xx");
    pls.appendChild(head);
      var head1=document.createElement("button");
    head1.innerHTML=csk1[index];
    head1.setAttribute("id","xx1");
    cls.appendChild(head1);
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tpwi1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tpwi1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
  
}
function team1()
{ if(id==1)
  { csk=["Vijay","Hussey","Raina","Dhoni","Styris","Albie","Srikanth","Nuwan","Randiv","Jakati"];
     csk1=[...csk];
    t1.style.display='none';
  teams.style.display="none";
  tcsk.style.display="flex";
  pk.style.display="block";
     byu.addEventListener('click',function(){ teams.style.display="block";
    tcsk.style.display="none";
  byu.style.display="none";
  pk.style.display="none";
  });
    
  
document.getElementById('t1').disabled=true;
document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
player.innerHTML="CSK(You)";
    pl="CSK(You)";
   pk.innerHTML="Select 10 players-: "+pl;
    let pcsk=document.querySelectorAll('#pcsk');
 pcsk.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tcsk.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tcsk.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tcsk);
  });    
 }
  }
  if(id==2)
  { dd=["Vijay","Hussey","Raina","Dhoni","Styris","Albie","Srikanth","Nuwan","Randiv","Jakati"];
    dd1=[...dd];
document.getElementById('t1').disabled=true;
document.getElementById('teams').style.display="none";
    teams.style.display="none";
  tcsk.style.display="flex";
  pk1.style.display="block";
  pk.style.display="none";
  view.style.display="block";
   
    byu.addEventListener('click',function(){ 
      teams.style.display="none";
    tcsk.style.display="none";
  byu.style.display="none";
  pk1.style.display="none";
  overns.style.display="block";
    });
   computer.innerHTML="CSK(Com)";
    co="CSK(Com)";
     pk1.innerHTML="Select 10 players-: "+co;
    let pcsk=document.querySelectorAll('#pcsk');
 pcsk.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tcsk.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tcsk.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tcsk);
  
 
  });    
 }
  }
 if(id==3)
  { dd=["Vijay","Hussey","Raina","Dhoni","Styris","Albie","Srikanth","Nuwan","Randiv","Jakati"];
    dd1=[...dd];
    teams.style.display="none";
 byus.addEventListener('click',function(){
overns.style.display="block";
tcsk1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
   imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
 });
   computer.innerHTML="CSK(Com)";
    co="CSK(Com)";
  tcsk1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Computer team-: "+co;
    let pcsk1=document.querySelectorAll('#pcsk1');
 pcsk1.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tcsk1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tcsk1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
   if(id==0)
  { csk=["Vijay","Hussey","Raina","Dhoni","Styris","Albie","Srikanth","Nuwan","Randiv","Jakati"];
    csk1=[...csk];
    teams.style.display="none";
    document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
 byus.addEventListener('click',function(){
tcsk1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
   imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
   varate();
 });
   player.innerHTML="CSK(You)";
    pl="CSK(You)";
  tcsk1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Player team-: "+pl;
    t1.style.display="none";
    let pcsk1=document.querySelectorAll('#pcsk1');
 pcsk1.forEach(gh);
   function gh(item,index)
    { 
  var head=document.createElement("button");
    head.innerHTML=csk[index];
    head.setAttribute("id","xx");
    pls.appendChild(head);
      var head1=document.createElement("button");
    head1.innerHTML=csk1[index];
    head1.setAttribute("id","xx1");
    cls.appendChild(head1);
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tcsk1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tcsk1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
  
  
}
function team4()
{ 
  if(id==1)
  { csk=["Sachin","Rohit","Pollard","Symonds","Murtaza","Surya","Blizzard","Harbhajan","Abu","Rayudu"];
    csk1=[...csk];
    t4.style.display='none';
document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    teams.style.display="none";
  tmi.style.display="flex";
  pk.style.display="block";
    
  byu.addEventListener('click',function(){ teams.style.display="block";
    tmi.style.display="none";
  byu.style.display="none";
  pk.style.display="none";
  });
   document.getElementById('t4').disabled=true;
    player.innerHTML="MI(You)";
    pl="MI(You)";
    pk.innerHTML="Select 10 players-: "+pl;
    let pmi=document.querySelectorAll('#pmi');
 pmi.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tmi.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tmi.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tmi);
  });    
 }
  }
  if(id==2)
  {dd=["Sachin","Rohit","Pollard","Symonds","Murtaza","Surya","Blizzard","Harbhajan","Abu","Rayudu"];
    dd1=[...dd];
document.getElementById('t4').disabled=true;
document.getElementById('teams').style.display="none";
    teams.style.display="none";
  tmi.style.display="flex";
  pk1.style.display="block";
    pk.style.display="none";
  view.style.display="block";
    byu.addEventListener('click',function(){ 
      teams.style.display="none";
    tmi.style.display="none";
  byu.style.display="none";
  pk1.style.display="none";
  overns.style.display="block";
    });
    computer.innerHTML="MI(Com)";
    co="MI(Com)";
     pk1.innerHTML="Select 10 players-: "+co;
    let pmi=document.querySelectorAll('#pmi');
 pmi.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tmi.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tmi.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tmi);
  
  
  });    
 }
  }
  if(id==3)
  { dd=["Sachin","Rohit","Pollard","Symonds","Murtaza","Surya","Blizzard","Harbhajan","Abu","Rayudu"];
    dd1=[...dd];
    teams.style.display="none";
   computer.innerHTML="MI(Com)";
    co="MI(Com)";
    tmi1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Computer team-: "+co;  byus.addEventListener('click',function(){
overns.style.display="block";
tmi1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
     imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
 });
    let pmi1=document.querySelectorAll('#pmi1');
 pmi1.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tmi1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tmi1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
  if(id==0)
  { csk=["Sachin","Rohit","Pollard","Symonds","Murtaza","Surya","Blizzard","Harbhajan","Abu","Rayudu"];
    csk1=[...csk];
    teams.style.display="none";
   player.innerHTML="MI(You)";
    pl="MI(You)";
    tmi1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Player team-: "+pl;  
    document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    byus.addEventListener('click',function(){
tmi1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
     imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
      varate();
 });
    t4.style.display='none';
    let pmi1=document.querySelectorAll('#pmi1');
 pmi1.forEach(gh);
   function gh(item,index)
    { var head=document.createElement("button");
    head.innerHTML=csk[index];
    head.setAttribute("id","xx");
    pls.appendChild(head);
      var head1=document.createElement("button");
    head1.innerHTML=csk1[index];
    head1.setAttribute("id","xx1");
    cls.appendChild(head1);
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tmi1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tmi1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
  
}
function team5()
{ 
  if(id==1)
  { csk=["D.Hussey","Gilchrist","Chawla","Valthaty","Harris","DK","Mandeep","Bipul","Dimitri","Broad"];
    csk1=[...csk];
    t5.style.display='none';
document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    teams.style.display="none";
  tkxip.style.display="flex";
  pk.style.display="block";
    
  byu.addEventListener('click',function(){ teams.style.display="block";
    tkxip.style.display="none";
  byu.style.display="none";
  pk.style.display="none";
  });
   document.getElementById('t5').disabled=true;
    player.innerHTML="KXIP(You)";
    pl="KXIP(You)";
    pk.innerHTML="Select 10 players-: "+pl;
    let pkxip=document.querySelectorAll('#pkxip');
 pkxip.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tkxip.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tkxip.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tkxip);
  });    
 }
  }
  if(id==2)
  { dd=["D.Hussey","Gilchrist","Chawla","Valthaty","Harris","DK","Mandeep","Bipul","Dimitri","Broad"];
    dd1=[...dd];
document.getElementById('t5').disabled=true;
document.getElementById('teams').style.display="none";
    teams.style.display="none";
  tkxip.style.display="flex";
  pk1.style.display="block";
    pk.style.display="none";
  view.style.display="block";
    byu.addEventListener('click',function(){ 
      teams.style.display="none";
    tkxip.style.display="none";
  byu.style.display="none";
  pk1.style.display="none";
  overns.style.display="block";
    });
    computer.innerHTML="KXIP(Com)";
    co="KXIP(Com)";
     pk1.innerHTML="Select 10 players-: "+co;
    let pkxip=document.querySelectorAll('#pkxip');
 pkxip.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tkxip.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tkxip.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tkxip);
  
  
  });    
 }
  }
 if(id==3)
  { dd=["D.Hussey","Gilchrist","Chawla","Valthaty","Harris","DK","Mandeep","Bipul","Dimitri","Broad"];
    dd1=[...dd];
    teams.style.display="none";
 computer.innerHTML="KXIP(Com)";
    co="KXIP(Com)";
    tkxip1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Computer team-: "+co;
byus.addEventListener('click',function(){
overns.style.display="block";
tkxip1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
  imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
 });
    let pkxip1=document.querySelectorAll('#pkxip1');
 pkxip1.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tkxip1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tkxip1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
   if(id==0)
  { csk=["D.Hussey","Gilchrist","Chawla","Valthaty","Harris","DK","Mandeep","Bipul","Dimitri","Broad"];
    csk1=[...csk];
    teams.style.display="none";
 player.innerHTML="KXIP(You)";
    pl="KXIP(You)";
    tkxip1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Player team-: "+pl;
    document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
byus.addEventListener('click',function(){
tkxip1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
  varate();
 });
    t5.style.display="none";
    let pkxip1=document.querySelectorAll('#pkxip1');
 pkxip1.forEach(gh);
   function gh(item,index)
    { 
  var head=document.createElement("button");
    head.innerHTML=csk[index];
    head.setAttribute("id","xx");
    pls.appendChild(head);
      var head1=document.createElement("button");
    head1.innerHTML=csk1[index];
    head1.setAttribute("id","xx1");
    cls.appendChild(head1);
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tkxip1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tkxip1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
  
}
function team8()
{ 
  if(id==1)
  { csk=["White","Lumb","Sanga","Ishant","Amit Mishra","Dwaraka","Duminy","Steyn","Gony","Rajan"];
    csk1=[...csk];
    t8.style.display='none';
document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    teams.style.display="none";
  tsrh.style.display="flex";
  pk.style.display="block";
    
  byu.addEventListener('click',function(){ teams.style.display="block";
    tsrh.style.display="none";
  byu.style.display="none";
  pk.style.display="none";
  });
   document.getElementById('t8').disabled=true;
    player.innerHTML="DC(You)";
    pl="DC(You)";
    pk.innerHTML="Select 10 players-: "+pl;
    let psrh=document.querySelectorAll('#psrh');
 psrh.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tsrh.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tsrh.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tsrh);
  
  });    
 }
  }
  if(id==2)
  { dd=["White","Lumb","Sanga","Ishant","Amit Mishra","Dwaraka","Duminy","Steyn","Gony","Rajan"];
    dd1=[...dd];
document.getElementById('t8').disabled=true;
document.getElementById('teams').style.display="none";
    teams.style.display="none";
  tsrh.style.display="flex";
  pk1.style.display="block";
    pk.style.display="none";
  view.style.display="block";
    byu.addEventListener('click',function(){ 
      teams.style.display="none";
    tsrh.style.display="none";
  byu.style.display="none";
  pk1.style.display="none";
  overns.style.display="block";
    });
    computer.innerHTML="DC(Com)";
    co="DC(Com)";
     pk1.innerHTML="Select 10 players-: "+co;
    let psrh=document.querySelectorAll('#psrh');
 psrh.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tsrh.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tsrh.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tsrh);
  
  
  });    
 }
  }
 if(id==3)
  { dd=["White","Lumb","Sanga","Ishant","Amit Mishra","Dwaraka","Duminy","Steyn","Gony","Rajan"];
    dd1=[...dd];
    teams.style.display="none";    
  computer.innerHTML="DC(Com)";
    co="DC(Com)";
    tsrh1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Computer team-: "+co;  byus.addEventListener('click',function(){
overns.style.display="block";
tsrh1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
     imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
 });
    let psrh1=document.querySelectorAll('#psrh1');
 psrh1.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tsrh1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tsrh1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
  if(id==0)
  { csk=["White","Lumb","Sanga","Ishant","Amit Mishra","Dwaraka","Duminy","Steyn","Gony","Rajan"];
    csk1=[...csk];
    teams.style.display="none";    
  player.innerHTML="DC(You)";
    pl="DC(You)";
    tsrh1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Player team-: "+pl;  
    document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    byus.addEventListener('click',function(){
tsrh1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
     imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
     varate();
 });
    t8.style.display='none';
    let psrh1=document.querySelectorAll('#psrh1');
 psrh1.forEach(gh);
   function gh(item,index)
    { var head=document.createElement("button");
    head.innerHTML=csk[index];
    head.setAttribute("id","xx");
    pls.appendChild(head);
      var head1=document.createElement("button");
    head1.innerHTML=csk1[index];
    head1.setAttribute("id","xx1");
    cls.appendChild(head1);
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tsrh1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tsrh1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
 
  
}
function team2()
{ 
  if(id==1)
  { csk=["Gambhir","Manoj","Bhatia","Ladda","Lee","Morgan","Shakib","Bisla","Yusuf","Shukla"];
    csk1=[...csk];
    t2.style.display='none';
document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    teams.style.display="none";
  tkkr.style.display="flex";
  pk.style.display="block";
    
  byu.addEventListener('click',function(){ teams.style.display="block";
    tkkr.style.display="none";
  byu.style.display="none";
  pk.style.display="none";
  });
   document.getElementById('t2').disabled=true;
    player.innerHTML="KKR(You)";
    pl="KKR(You)";
    pk.innerHTML="Select 10 players-: "+pl;
    let pkkr=document.querySelectorAll('#pkkr');
 pkkr.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tkkr.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tkkr.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tkkr);
  
  });    
 }
  }
  if(id==2)
  { dd=["Gambhir","Manoj","Bhatia","Ladda","Lee","Morgan","Shakib","Bisla","Yusuf","Shukla"];
    dd1=[...dd];
document.getElementById('t2').disabled=true;
document.getElementById('teams').style.display="none";
     teams.style.display="none";
  tkkr.style.display="flex";
  pk1.style.display="block";
    pk.style.display="none";
  view.style.display="block";
    byu.addEventListener('click',function(){ 
      teams.style.display="none";
    tkkr.style.display="none";
  byu.style.display="none";
  pk1.style.display="none";
  overns.style.display="block";
    });
    
    computer.innerHTML="KKR(Com)";
    co="KKR(Com)";
     pk1.innerHTML="Select 10 players-: "+co;
    let pkkr=document.querySelectorAll('#pkkr');
 pkkr.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tkkr.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tkkr.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tkkr);
  
  
  });    
 }
  }
  if(id==3)
  { dd=["Gambhir","Manoj","Bhatia","Ladda","Lee","Morgan","Shakib","Bisla","Yusuf","Shukla"];
    dd1=[...dd];
    teams.style.display="none";
  computer.innerHTML="KKR(Com)";
    co="KKR(Com)";
    tkkr1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Computer team-: "+co;
byus.addEventListener('click',function(){
overns.style.display="block";
tkkr1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
  imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
 });
    let pkkr1=document.querySelectorAll('#pkkr1');
 pkkr1.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tkkr1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tkkr1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
  if(id==0)
  { csk=["Gambhir","Manoj","Bhatia","Ladda","Lee","Morgan","Shakib","Bisla","Yusuf","Shukla"];
    csk1=[...csk];
    teams.style.display="none";
  player.innerHTML="KKR(You)";
    pl="KKR(You)";
    tkkr1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Player team-: "+pl;
    document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
byus.addEventListener('click',function(){
tkkr1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
  varate();
 });
  t2.style.display='none';
    let pkkr1=document.querySelectorAll('#pkkr1');
 pkkr1.forEach(gh);
   function gh(item,index)
    { 
  var head=document.createElement("button");
    head.innerHTML=csk[index];
    head.setAttribute("id","xx");
    pls.appendChild(head);
      var head1=document.createElement("button");
    head1.innerHTML=csk1[index];
    head1.setAttribute("id","xx1");
    cls.appendChild(head1);
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tkkr1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tkkr1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
 
}
function team3()
{ 
  if(id==1)
  { csk=["Warner","Sehwag","Hopes","Ojha","Morkel","Roelof","Ingram","Agarkar","Nadeem","Aaron"];
    csk1=[...csk];
    t3.style.display='none';
document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    teams.style.display="none";
  tdd.style.display="flex";
  pk.style.display="block";
    
  byu.addEventListener('click',function(){ teams.style.display="block";
    tdd.style.display="none";
  byu.style.display="none";
  pk.style.display="none";
  });
   document.getElementById('t3').disabled=true;
    player.innerHTML="DD(You)";
    pl="DD(You)";
     pk.innerHTML="Select 10 players-: "+pl;
    let pdd=document.querySelectorAll('#pdd');
 pdd.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tdd.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tdd.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tdd);
  });    
 }
  }
  if(id==2)
  { dd=["Warner","Sehwag","Hopes","Ojha","Morkel","Roelof","Ingram","Agarkar","Nadeem","Aaron"];
    dd1=[...dd];
document.getElementById('t3').disabled=true;
document.getElementById('teams').style.display="none";
    teams.style.display="none";
  tdd.style.display="flex";
  pk1.style.display="block";
    pk.style.display="none";
  view.style.display="block";
    byu.addEventListener('click',function(){ 
      teams.style.display="none";
    tdd.style.display="none";
  byu.style.display="none";
  pk1.style.display="none";
  overns.style.display="block";
    });
    
    computer.innerHTML="DD(Com)";
    co="DD(Com)";
     pk1.innerHTML="Select 10 players-: "+co;
    let pdd=document.querySelectorAll('#pdd');
 pdd.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  pldetails.style.display="flex";
 plname.innerHTML=item.getAttribute("title");
  plimage.innerHTML="<img src='"+item.getAttribute("title")+".jpg'>";
  tdd.style.display="none";
seplname.style.display="block";
  baplname.onclick=()=>{ 
  tdd.style.display="flex";
 pldetails.style.display="none";
    
  };
  lofik(item,tdd);
  
  
  });    
 }
  }
 if(id==3)
  { dd=["Warner","Sehwag","Hopes","Ojha","Morkel","Roelof","Ingram","Agarkar","Nadeem","Aaron"];
    dd1=[...dd];
    teams.style.display="none";
  computer.innerHTML="DD(Com)";
    co="DD(Com)";
    tdd1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Computer team-: "+co;  byus.addEventListener('click',function(){
overns.style.display="block";
tdd1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
     imp.style.display="none";
 yes.style.display='none';
  no.style.display='none';
 });
    let pdd1=document.querySelectorAll('#pdd1');
 pdd1.forEach(gh);
   function gh(item)
    { 
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tdd1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tdd1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }
  if(id==0)
  { csk=["Warner","Sehwag","Hopes","Ojha","Morkel","Roelof","Ingram","Agarkar","Nadeem","Aaron"];
    csk1=[...csk];
    teams.style.display="none";
  player.innerHTML="DD(You)";
    pl="DD(You)";
    tdd1.style.display="flex";
  pkk1.style.display="block";
byus.style.display="block";
   pkk1.innerHTML="  Player team-: "+pl;      document.getElementById('tp').style.display="none";
document.getElementById('tc').style.display="block";
    byus.addEventListener('click',function(){
tdd1.style.display="none";
pkk1.style.display="none";
byus.style.display="none";
     varate();
 });
    t3.style.display='none';
    let pdd1=document.querySelectorAll('#pdd1');
 pdd1.forEach(gh);
   function gh(item,index)
    { var head=document.createElement("button");
    head.innerHTML=csk[index];
    head.setAttribute("id","xx");
    pls.appendChild(head);
      var head1=document.createElement("button");
    head1.innerHTML=csk1[index];
    head1.setAttribute("id","xx1");
    cls.appendChild(head1);
  
item.addEventListener('click',function(){ 
  
  pldetails.style.display="flex";
 let name=item.getAttribute("src");
  plname.innerHTML=name.substr(0,name.length-4);
  plimage.innerHTML="<img src='"+item.getAttribute("src")+"'>";
  tdd1.style.display="none";
 seplname.style.display="none";
 byus.style.display="none";
  baplname.onclick=()=>{ 
  tdd1.style.display="flex";
 pldetails.style.display="none";
 byus.style.display="block";
  };
  
});
 }
  }

}
function fav()
{ coin.style.display="block";
  overns.style.display="none";
  
}
function scop1()
{ results.style.display="none";
mode.style.display="none";
  pscore.style.display="flex";
  pback.style.display="block";
  card.style.display="block";
  card.innerHTML="Player Bowling Scorecard";
  card.style.left="100px";
  pscore.innerHTML=pl+"-: "+totalp+"/"+wkp+"<br>"+"<br>"+tnbp.join("<br>");
  presult.style.display="none";
  cresult.style.display="none";
  open.style.display="none";
  open1.style.display="none";
  reload.style.display="none";
  presult1.style.display="none";
 cresult1.style.display="block";
 bo3.style.display="none";
  pback.addEventListener('click',function(){
    presult.style.display="block";
cresult.style.display="none";
    open.style.display="block";
    open1.style.display="none";
   reload.style.display="block";
  results.style.display="flex";
// mode.style.display="block";
    pscore.style.display="none";
  pback.style.display="none";
    card.style.display="block";
    card.innerHTML="Scorecard";
  card.style.left="320px";
    presult1.style.display="block";
 // bo3.style.display="block";
  cresult1.style.display="none";
  });
cresult1.addEventListener('click',function(){
 results.style.display="none";
  bo3.style.display="none";
mode.style.display="none";
  cscore.style.display="flex";
  cback.style.display="block";
  cback.innerHTML="Prev";
  card.style.display="block";
  card.innerHTML="Computer Bowling Scorecard";
  card.style.left="70px";
  cscore.innerHTML=co+"-: "+totalc+"/"+wkc+"<br>"+"<br>"+tnbc.join("<br>");
  presult.style.display="none";
  cresult.style.display="none";
  open.style.display="none";
  open1.style.display="none";
  reload.style.display="none";
  presult1.style.display="none";
  cresult1.style.display="none";
});
  cback.addEventListener('click',function(){
    results.style.display="none";
    bo3.style.display="none";
 mode.style.display="none";
  pscore.style.display="flex";
  pback.style.display="block";
  card.style.display="block";
    card.innerHTML="Player Bowling Scorecard";
  card.style.left="100px";
  pscore.innerHTML=pl+"-: "+totalp+"/"+wkp+"<br>"+"<br>"+tnbp.join("<br>");
  presult.style.display="none";
  cresult.style.display="none";
  open.style.display="none";
  open1.style.display="none";
  reload.style.display="none";
  presult1.style.display="none";
 cresult1.style.display="block";
    cscore.style.display="none";
  cback.style.display="none";
    
  });
}



function anu()
{ results.style.display="none";
  bo3.style.display="none";
 mode.style.display="none";
  pscore.style.display="flex";
  pback.style.display="block";
  card.style.display="block";
  card.innerHTML="Player Squad";
  card.style.left="300px";
  pscore.innerHTML=pl+"<br>"+"<br>"+(csk1.join("<br>"));
  
   
  
    presult.style.display="none";
  cresult.style.display="none";
  open.style.display="none";
  open1.style.display="block";
  reload.style.display="none";
  presult1.style.display="none";
  cresult1.style.display="none";
  pback.addEventListener('click',function(){
    presult.style.display="block";
cresult.style.display="none";
    open.style.display="block";
    open1.style.display="none";
   reload.style.display="block";
  results.style.display="flex";
 //mode.style.display="block";
   pscore.style.display="none";
    card.style.display="block";
    card.innerHTML="Scorecard";
  card.style.left="320px";
    presult1.style.display="block";
  cresult1.style.display="none";
    pback.style.display="none";
   // bo3.style.display="block";
  });
open1.addEventListener('click',function(){
 results.style.display="none";
mode.style.display="none";
  cscore.style.display="flex";
  cback.style.display="block";
  cback.innerHTML="Prev";
  card.style.display="block";
  card.innerHTML="Computer Squad";
  card.style.left="250px";
  
  cscore.innerHTML=co+"<br>"+"<br>"+(dd.join("<br>"));
  
   
  
    
    
  presult.style.display="none";
  cresult.style.display="none";
  open.style.display="none";
  open1.style.display="none";
  reload.style.display="none";
  presult1.style.display="none";
  cresult1.style.display="none";
  bo3.style.display="none";
});
  cback.addEventListener('click',function(){
    results.style.display="none";
 mode.style.display="none";
  pscore.style.display="flex";
  pback.style.display="block";
  card.style.display="block";
    card.innerHTML="Player Squad";
  card.style.left="300px";
  pscore.innerHTML=pl+"<br>"+"<br>"+(csk1.join("<br>"));
  
   
  
    presult.style.display="none";
  cresult.style.display="none";
  open.style.display="none";
  open1.style.display="block";
  reload.style.display="none";
  presult1.style.display="none";
  cresult1.style.display="none";
    
   cscore.style.display="none";
  cback.style.display="none";
    bo3.style.display="none";
  });
}
function scop()
{ results.style.display="none";
  bo3.style.display="none";
mode.style.display="none";
  pscore.style.display="flex";
  pback.style.display="block";
  card.style.display="block";
  card.innerHTML="Player Batting Scorecard";
  card.style.left="120px";
  pscore.innerHTML=pl+"-: "+totalp+"/"+wkp+"<br>"+"<br>"+(you.join("<br>"));
  presult.style.display="none";
  cresult.style.display="block";
  open.style.display="none";
  open1.style.display="none";
  reload.style.display="none";
  presult1.style.display="none";
  cresult1.style.display="none";
  pback.addEventListener('click',function(){
     //bo3.style.display="block";
presult.style.display="block";
cresult.style.display="none";
    open.style.display="block";
    open1.style.display="none";
   reload.style.display="block";
  results.style.display="flex";
 //mode.style.display="block";
    pscore.style.display="none";
  pback.style.display="none";
    card.style.display="block";
    card.innerHTML="Scorecard";
  card.style.left="320px";
    presult1.style.display="block";
  cresult1.style.display="none";
  });
  cresult.addEventListener('click',function(){
 results.style.display="none";
    bo3.style.display="none";
  mode.style.display="none";
  cscore.style.display="flex";
  cback.style.display="block";
    cback.innerHTML="Prev";
  card.style.display="block";
    card.innerHTML="Computer Batting Scorecard";
  card.style.left="80px";
  cscore.innerHTML=co+"-: "+totalc+"/"+wkc+"<br>"+"<br>"+(dev.join("<br>"));
  presult.style.display="none";
  cresult.style.display="none";
  open.style.display="none";
  open1.style.display="none";
  reload.style.display="none";
  presult1.style.display="none";
  cresult1.style.display="none";
  });
  cback.addEventListener('click',function(){
    cscore.style.display="none";
  cback.style.display="none";
    results.style.display="none";
    bo3.style.display="none";
 mode.style.display="none";
  pscore.style.display="flex";
  pback.style.display="block";
  card.style.display="block";
    card.innerHTML="Player Batting Scorecard";
  card.style.left="120px";
  pscore.innerHTML=pl+"-: "+totalp+"/"+wkp+"<br>"+"<br>"+(you.join("<br>"));
  presult.style.display="none";
  cresult.style.display="block";
  open.style.display="none";
  open1.style.display="none";
  reload.style.display="none";
  presult1.style.display="none";
  cresult1.style.display="none";
  });
}
  
function dof()
{ var spns=document.getElementById('spns');
  spns.disabled=true;
}
function res()
{ let laura=document.getElementById('laura');
  reload.style.display="block";
  results.style.display="flex";
  container.style.display="none";
  laura.style.display="none";
  presult.style.display="block";
 open.style.display="block";
  
card.style.display="block";
  card.style.left="320px";
  presult1.style.display="block";
 //mode.style.display="block";
bo1.style.display="none";
  bo2.style.display="none";
  pls.style.display="none";
  cls.style.display="none";
  
   
    
 if(toss==1)
  { 
    
 
  if(totalp>totalc)
  {  
      results.innerHTML=pl+" win by "+(totalp-totalc)+" runs <br>"+pl+"-: "+totalp+"/"+wkp+koya+"<br>"+co+"-: "+totalc+"/"+wkc+moya;

  }
  if(totalp< totalc)
  {
    
    results.innerHTML=co+" win by "+(10-wkc)+" wickets <br>"+pl+"-: "+totalp+"/"+wkp+koya+"<br>"+co+"-: "+totalc+"/"+wkc+moya;
    
  }
  }
  if(toss==0)
  { 
 
  if(totalp>totalc)
  {  
   
      results.innerHTML=pl+" win by "+(10-wkp)+" wickets <br>"+pl+"-: "+totalp+"/"+wkp+koya+"<br>"+co+"-: "+totalc+"/"+wkc+moya;

  }
  if(totalp< totalc)
  { 
    
    results.innerHTML=co+" win by "+(totalc-totalp)+" runs <br>"+pl+"-: "+totalp+"/"+wkp+koya+"<br>"+co+"-: "+totalc+"/"+wkc+moya;
    
  }
  }
  
    if(totalp==totalc)
  { results.innerHTML="Match Draw <br>"+pl+"-: "+totalp+"/"+wkp+koya+"<br>"+co+"-: "+totalc+"/"+wkc+moya;
    
  }
}
var runp=[];
var runc=[];
var koya='';
var moya='';
function change()
{ var Bat=document.getElementById('bat');
  var Ball=document.getElementById('ball');
  tos=Math.floor(Math.random()*2);
  if(tos==1)
  {document.getElementById('f').innerHTML="You won Toss";
  document.getElementById('f').style.fontWeight="bold";
    document.getElementById('f').style.fontSize="65px";
    
    koya="(Won Toss)";
    coin.style.display="none";
    Bat.style.display="block";
    Ball.style.display="block";    Bat.addEventListener('click',function(){
    toss=1;
    player.style.display="block";
  computer.style.display="block";
    buttons.style.display="flex";
    demo1.style.display="flex";
    deci.style.display="none";
    demo1.innerHTML=pl+" Bat";
        xp();
         
  });
    Ball.addEventListener('click',function(){
    toss=0;
  player.style.display="block";
  computer.style.display="block";
    buttons.style.display="flex";
      demo1.style.display="flex";
    deci.style.display="none";
    demo1.innerHTML=pl+" Ball";
      xp1();
     
  });
  }
  if(tos==0)
  { toss=Math.floor(Math.random()*2);
    moya="(Won Toss)";
    if(toss==1)
    { 
     
      demo1.innerHTML=co+" Ball";
      player.style.display="block";
  computer.style.display="block";
      buttons.style.display="flex";
      demo1.style.display="flex";
    deci.style.display="none";
        xp();
    }
    if(toss==0)
    { buttons.style.display="flex";
      player.style.display="block";
  computer.style.display="block";
      demo1.style.display="flex";
    deci.style.display="none";
      demo1.innerHTML=co+" Bat";
      xp1();
    }
      
}
}
var toc=0;
var toc1=0;
function xp()
{ pls.style.display="flex";
  cls.style.display="none";
  pls1.innerHTML=pl+" Bat";
var xx=document.querySelectorAll("#xx");
  if(toss==1){
    deci.style.display="none";
  xx.forEach(gh);
  function gh(item,index)
  { if(wkp==10)
    { pls.style.display="none";
    }item.addEventListener("click",
    function()
    { item.style.display="none";
      pls.style.display="none";
      toc=index;
    });
  }
    
  }
   if(toss==0){
  xx.forEach(gh);
  function gh(item,index)
{ if(totalcount==6*(cars.options[cars.selectedIndex].text) || wkp==10 || totalp>totalc)
     { pls.style.display="none";
     }
    item.addEventListener("click",
    function()
    { item.style.display="none";
      pls.style.display="none";
      toc=index;
    });
  }
    
  }
}
var bt=0;
function xp1()
{ cls.style.display="flex";
  pls.style.display="none";
  cls1.innerHTML=pl+" Ball";
var xx1=document.querySelectorAll("#xx1");
  if(toss==0){
    deci.style.display="none";
  xx1.forEach(gh);
  function gh(item,index,array)
  { if(wkc==10)
    { cls.style.display="none";
    }
      if(index!=toc1)
    { item.style.display="block";
    }
      
    item.onclick=function()
    { 
      cls.style.display="none";
      toc1=index;
     item.style.display="none";
      };
  }
  }
   if(toss==1){
  xx1.forEach(gh);
  function gh(item,index)
{ if(totalcount==6*(cars.options[cars.selectedIndex].text) || wkc==10 || totalc>totalp)
     { cls.style.display="none";
     }
  if(index!=toc1)
    { item.style.display="block";
    }
    item.addEventListener("click",
    function()
    { 
      cls.style.display="none";
      toc1=index;
      item.style.display="none";
    });
  }
    
  }
}
var rit=0;
var chandra=0;
var taka=0;

  
var pt=0;
var a1=0;
var a2=0;
var a3=0;
var a4=0;
var a5=0;
var a6=0;
var a7=0;
var a8=0;
var a9=0;
var a10=0;
var b1=0;
var b2=0;
var b3=0;
var b4=0;
var b5=0;
var b6=0;
var b7=0;
var b8=0;
var b9=0;
var b10=0;


var rbc=[];
var wbc=[];


function boc(val,j,p,c,io)
{  let box=document.getElementById('box');
  let box1=document.getElementById('box1');
  let demo=document.getElementById('demo');
  let demo1=document.getElementById('demo1');
  var cars=document.getElementById('overs');
  var
p1=document.getElementById('p1');
 var p2=document.getElementById('p2')
  demo.style.display="flex";
  demo1.style.display="flex";
  count++;
  totalcount++;
  var qp=totalcount;
  sp[index]=csk[j];
  bp[index]=count;
   
  if(p==c)
  { wkp++;
    toc++;
    chandra=1;
    pic.style.display="flex";
   result.style.display="flex";
 container.style.display="none";
    runp[index]=pp;
    result.innerHTML=csk[j]+"-: "+pp+"("+count+")";
   let op=csk[j]+"-:"+pp+"("+count+")";
    you[index]=op;
    
       
    pic.innerHTML="<img src='"+csk[j]+".jpg'>";
    pscore.style.display="none";
    pback.style.display="none";
  function go()
    {    
      container.style.display="block";
     result.style.display="none"; 
      pic.style.display="none";
      if(qp!=6*(cars.options[cars.selectedIndex].text))
      {
        xp();
      }
    }
    
     setTimeout(go,1000); 
    
    
    demo.innerHTML=pl+" score is-: "+totalp+"/"+wkp+"<br>"+csk[j]+"-: "+pp+"("+count+")";
    pp=0;
    count=0;
    index++;
    kanchan=1;
  }
  else
  { totalp+=val;
    pt=j;
    pp+=val;
    chandra=0;
    runp[index]=pp;
    let op=csk[j]+"-:"+pp+"*"+"("+count+")";
    you[index]=op;
    kanchan=0;
    demo.innerHTML=pl+" score is-: "+totalp+"/"+wkp+"<br>"+csk[j]+"-: "+pp+"*"+"("+count+")";
  }
  if(io==0)
  { nbc[io]=dd[io];
    if(p==c)
    { b1=b1+1;
      wbc[io]=b1;
    }
    if(p!=c)
    { a1+=p;
      rbc[io]=a1;
    }
  }
  if(io==1)
  { nbc[io]=dd[io];
    if(p==c)
    { b2=b2+1;
      wbc[io]=b2;
    }
    if(p!=c)
    { a2+=p;
      rbc[io]=a2;
    }
  }
  if(io==2)
  { nbc[io]=dd[io];
    if(p==c)
    { b3=b3+1;
      wbc[io]=b3;
    }
    if(p!=c)
    { a3+=p;
      rbc[io]=a3;
    }
  }
  if(io==3)
  { nbc[io]=dd[io];
    if(p==c)
    { b4=b4+1;
      wbc[io]=b4;
    }
    if(p!=c)
    { a4+=p;
      rbc[io]=a4;
    }
  }
  if(io==4)
  { nbc[io]=dd[io];
    if(p==c)
    { b5=b5+1;
      wbc[io]=b5;
    }
    if(p!=c)
    { a5+=p;
      rbc[io]=a5;
    }
  }
  if(io==5)
  { nbc[io]=dd[io];
    if(p==c)
    { b6=b6+1;
      wbc[io]=b6;
    }
    if(p!=c)
    { a6+=p;
      rbc[io]=a6;
    }
  }
  if(io==6)
  { nbc[io]=dd[io];
    if(p==c)
    { b7=b7+1;
      wbc[io]=b7;
    }
    if(p!=c)
    { a7+=p;
      rbc[io]=a7;
    }
  }
  if(io==7)
  { nbc[io]=dd[io];
    if(p==c)
    { b8=b8+1;
      wbc[io]=b8;
    }
    if(p!=c)
    { a8+=p;
      rbc[io]=a8;
    }
  }
  if(io==8)
  { nbc[io]=dd[io];
    if(p==c)
    { b9=b9+1;
      wbc[io]=b9;
    }
    if(p!=c)
    { a9+=p;
      rbc[io]=a9;
    }
  }
  if(io==9)
  { nbc[io]=dd[io];
    if(p==c)
    { b10=b10+1;
      wbc[io]=b10;
    }
    if(p!=c)
    { a10+=p;
      rbc[io]=a10;
    }
  }
  
   
  rit=io;
  
  
  
  if((totalcount==6*(cars.options[cars.selectedIndex].text) || wkp==10 ) && turn==0)
  { let kays=0;
 for(let i=0;i<nbc.length;i++){
   if(wbc[i]==undefined)
   { wbc[i]=0;
   }
     if(rbc[i]==undefined)
   { rbc[i]=0;
   }
    if(nbc[i]==undefined)
   { continue;
   }
   
     tnbc[kays]=nbc[i]+"-:"+wbc[i]+"/"+rbc[i];

   
    kays++;

   
   }
    demo.innerHTML='Computer Bat';
    
   demo.style.display="none";
   demo1.style.display="none";
   laura.style.display="none";
   
    buttons.style.display="none";
    turn=1;
    count=0;
   demo1.innerHTML=pl+" score is-: "+totalp+"/"+wkp+"<br>"+"Target for "+co+" -: "+(totalp+1);
    count=0;
    kanchan=3;
    index=0;
    kaka=0;
    totalcount=0;
     toc=0;
     taka=0;
   if(chandra==1){
 setTimeout(()=>{xp1();},2000);
   }
   if(chandra==0){
   setTimeout(()=>{xp1();},1000);
   }
   
  }
}
var pt1=0;
var rbp=[];
var wbp=[];
var c1=0;
var c2=0;
var c3=0;
var c4=0;
var c5=0;
var c6=0;
var c7=0;
var c8=0;
var c9=0;
var c10=0;
var d1=0;
var d2=0;
var d3=0;
var d4=0;
var d5=0;
var d6=0;
var d7=0;
var d8=0;
var d9=0;
var d10=0;

function cod(value,j,lp,lc,ry)
{  let box=document.getElementById('box');
  let box1=document.getElementById('box1');
  let demo=document.getElementById('demo');
  let demo1=document.getElementById('demo1');
  var cars=document.getElementById('overs');
  var
p1=document.getElementById('p1');
 var p2=document.getElementById('p2')
  
  demo.style.display="flex";
  demo1.style.display="flex";
   count++;
  totalcount++;
  var qw=totalcount;
  sc[index]=dd1[j];
   bc[index]=count;
  
  if(lc!=lp)
  { chandra=0;
  totalc+=value;
     pt1=j;
    pc+=value;
     runc[index]=pc;
    let op=dd1[j]+"-:"+pc+"*"+"("+count+")";
     dev[index]=op;
    kanchan=0;
    demo.innerHTML=co+" score is-: "+totalc+"/"+wkc+"<br>"+dd1[j]+"-: "+pc+"*"+"("+count+")";
  }
  if(lc==lp)
  { wkc++;
    toc++;
    chandra=1;
    pic.style.display="flex";
    result.style.display="flex";
     runc[index]=pc;
    result.innerHTML=dd1[j]+"-: "+pc+"("+count+")";
    let op=dd1[j]+"-:"+pc+"("+count+")";
     dev[index]=op;
 container.style.display="none";
    pic.innerHTML="<img src='"+dd1[j]+".jpg'>";
    
   function go()
    {
    
     result.style.display="none";
      container.style.display="block";
      
      pic.style.display="none";
      if( qw%6==0 && qw!=6*(cars.options[cars.selectedIndex].text))
  { xp1();
  }
    }
    setTimeout(go,1000);
   
    demo.innerHTML=co+" score is-: "+totalc+"/"+wkc+"<br>"+dd1[j]+"-: "+pc+"("+count+")";
    pc=0;
    count=0;
    index++;
    kanchan=1;
  }
  
 if(ry==0)
  { nbp[ry]=csk1[ry];
    if(lp==lc)
    { d1=d1+1;
      wbp[ry]=d1;
    }
    
    if(lp!=lc)
    { c1+=lc;
      rbp[ry]=c1;
    }
  }
  if(ry==1)
  { nbp[ry]=csk1[ry];
    if(lp==lc)
    { d2=d2+1;
      wbp[ry]=d2;
    }
    if(lp!=lc)
    { c2+=lc;
      rbp[ry]=c2;
    }
  }
  if(ry==2)
  {nbp[ry]=csk1[ry];
    if(lp==lc)
    { d3=d3+1;
      wbp[ry]=d3;
    }
    
    if(lp!=lc)
    { c3+=lc;
      rbp[ry]=c3;
    }
  }
  if(ry==3)
  { nbp[ry]=csk1[ry];
    if(lp==lc)
    { d4=d4+1;
      wbp[ry]=d4;
    }
    
    if(lp!=lc)
    { c4+=lc;
      rbp[ry]=c4;
    }
  }
  if(ry==4)
  { nbp[ry]=csk1[ry];
    if(lp==lc)
    { d5=d5+1;
      wbp[ry]=d5;
    }
    if(lp!=lc)
    { c5+=lc;
      rbp[ry]=c5;
    }
  }
  if(ry==5)
  { nbp[ry]=csk1[ry];
    if(lp==lc)
    { d6=d6+1;
      wbp[ry]=d6;
    }
    if(lp!=lc)
    { c6+=lc;
      rbp[ry]=c6;
    }
  }
  if(ry==6)
  { nbp[ry]=csk1[ry];
    if(lp==lc)
    { d7=d7+1;
      wbp[ry]=d7;
    }
    if(lp!=lc)
    { c7+=lc;
      rbp[ry]=c7;
    }
  }
  if(ry==7)
  { nbp[ry]=csk1[ry];
    if(lp==lc)
    { d8=d8+1;
      wbp[ry]=d8;
    }
    if(lp!=lc)
    { c8+=lc;
      rbp[ry]=c8;
    }
  }
  if(ry==8)
  { nbp[ry]=csk1[ry];
    if(lp==lc)
    { d9=d9+1;
      wbp[ry]=d9;
    }
    if(lp!=lc)
    { c9+=lc;
      rbp[ry]=c9;
    }
  }
  if(ry==9)
  { nbp[ry]=csk1[ry];
    if(lp==lc)
    { d10=d10+1;
      wbp[ry]=d10;
    }
    if(lp!=lc)
    { c10+=lc;
      rbp[ry]=c10;
    }
  }
  if(totalcount%6==0 && totalcount!=6*(cars.options[cars.selectedIndex].text) && chandra==0)
  { xp1();
  }
  if(totalcount%6!=0)
  {
   rit=ry;
  }

  

  
  
  
  if((totalcount==6*(cars.options[cars.selectedIndex].text) || wkc==10) && turn==0)
  { let kays=0;
 for(let i=0;i<nbp.length;i++){
   if(wbp[i]==undefined)
   { wbp[i]=0;
   }
     if(rbp[i]==undefined)
   { rbp[i]=0;
   }
   if(nbp[i]==undefined)
   { continue;
   }
   
     tnbp[kays]=nbp[i]+"-:"+wbp[i]+"/"+rbp[i];

   
    kays++;

   
   }
    
    
    demo.innerHTML='Player Bat';
    
       demo.style.display="none";
   demo1.style.display="none";
   laura.style.display="none";
   
    
    buttons.style.display="none";
    turn=1;
    count=0;
    demo1.innerHTML=co+" score is-: "+totalc+"/"+wkc+"<br>"+"Target for "+pl+" -: "+(totalc+1);
    kanchan=3;
    index=0;
    kaka=0;
    totalcount=0;
    toc=0;
    taka=0;
   if(chandra==1){
 setTimeout(()=>{xp();},2000);
   }
   if(chandra==0){
   setTimeout(()=>{xp();},1000);
   }
  
  }
}



function overcount()
{ if(totalcount==0)
  { taka=0
  }
  else
  {
  
  taka=taka+1;
  }
 
}


function aoc(val)
{ let box=document.getElementById('box');
 let laura=document.getElementById('laura');
  let box1=document.getElementById('box1');
  var
p1=document.getElementById('p1');
 var p2=document.getElementById('p2');
  let demo1=document.getElementById('demo1');
  let demo=document.getElementById('demo');
  let kadam=0;
   laura.style.display="flex";
   p1.style.display="flex";
      p2.style.display="flex";
  demo.style.display="flex";
  box.style.display="flex";
  box1.style.display="flex";
player.style.display="block";
computer.style.display="block";
  result.style.display="none";
  var rp=val;
  var rc=Math.floor(Math.random()*6)+1;
  var valcu=0;
 
  
 if(toss==1)
  {
    
 
    if(turn==0)
    { if(totalcount==0 || kanchan==1)
      {var k=toc;
       
      }
      else
      {var k=pt;
      }
     if(totalcount==0 || totalcount%6==0)
      {
      var j=Math.floor(Math.random()*dd.length);
         if(j==rit)
        { if(rit!=9)
          { j=j+1
          }
          if(rit==9)
          { j=j-1;
          }
        }
      }
     else
      { var j=rit;
      }
 
      box.innerHTML="<img src='"+csk[k]+".jpg' alt=' "+csk[k]+"'>";
box1.innerHTML="<img src='"+dd[j]+".jpg' alt=' "+dd[j]+"'>";
      p1.style.display="flex";
      p2.style.display="flex";
  p1.innerHTML="Bat-: "+rp;
 p2.innerHTML="Ball-: "+rc;
 boc(rp,k,rp,rc,j);
      valcu=1;
      kadam=1;
    }
    if(turn==1 && valcu==0)
    { if(totalcount==0 ||kanchan==1)
      {     var ji=toc;
      }
      else
      { var ji=pt1;
      }
     if(totalcount==0 || totalcount%6==0)
      {
      var ki=toc1;
      }
     else
      { var ki=rit;
      }
 
      box.innerHTML="<img src='"+csk1[ki]+".jpg' alt=' "+csk1[ki]+"'>";
box1.innerHTML="<img src='"+dd1[ji]+".jpg' alt=' "+dd1[ji]+"'>";
      let player1=rp;
    let computer1=rc;
         p1.style.display="flex";
      p2.style.display="flex";
p1.innerHTML="Ball-: "+rp;
 p2.innerHTML="Bat-: "+rc;
     cod(rc,ji,player1,computer1,ki); 
      kadam=0;
    }
    if((totalcount==6*(cars.options[cars.selectedIndex].text) || wkc==10 || totalc >totalp) && turn==1)
  { buttons.style.display="none";
    let kays=0;
  for(let i=0;i<nbp.length;i++){
   if(wbp[i]==undefined)
   { wbp[i]=0;
   }
     if(rbp[i]==undefined)
   { rbp[i]=0;
   }
    if(nbp[i]==undefined)
   { continue;
   }
   
     tnbp[kays]=nbp[i]+"-:"+wbp[i]+"/"+rbp[i];

   
    kays++;

   
   }
    if(chandra==0)
      {
   function arb()
    { 
      res();
    }
    setTimeout(arb,1000);
      }
      if(chandra==1)
      {
   function arb()
    { 
      res();
    }
    setTimeout(arb,2000);
      }
    
    
  }
   
    
  }
  if(toss==0){
    if(turn==0)
    {
      if(totalcount==0 || totalcount%6==0)
      {
      var ki=toc1;
      }
    else
      { var ki=rit;
      }
     if(totalcount==0 || kanchan==1)
      {
      var ji=toc;
      }
      else
      { var ji=pt1;
      }
      box.innerHTML="<img src='"+csk1[ki]+".jpg' alt=' "+csk1[ki]+"'>";
box1.innerHTML="<img src='"+dd1[ji]+".jpg' alt=' "+dd1[ji]+"'>";
      let player1=rp;
      let computer1=rc;
         p1.style.display="flex";
      p2.style.display="flex";
  p1.innerHTML="Ball-: "+rp;
 p2.innerHTML="Bat-: "+rc;
     cod(rc,ji,player1,computer1,ki); 
      valcu=1;
      kadam=0;
    }
    if(turn==1 && valcu==0)
    { if(totalcount==0 || kanchan==1)
      {
      var k=toc;
      }
      else
      { var k=pt;
      }
    if(totalcount==0 || totalcount%6==0)
      {
      var j=Math.floor(Math.random()*dd.length);
         if(j==rit)
        { if(rit!=9)
          { j=j+1
          }
          if(rit==9)
          { j=j-1;
          }
        }
      }
   else
      { var j=rit;
      }
      box.innerHTML="<img src='"+csk[k]+".jpg' alt=' "+csk[k]+"'>";
box1.innerHTML="<img src='"+dd[j]+".jpg' alt=' "+dd[j]+"'>";
let player=rp;
    let computer=rc;
      p1.style.display="flex";
      p2.style.display="flex";
   p1.innerHTML="Bat-: "+player;
 p2.innerHTML="Ball-: "+computer;
 boc(rp,k,player,computer,j);
      kadam=1;
    }
    if((totalcount==6*(cars.options[cars.selectedIndex].text) || wkp==10 || totalc <totalp) && turn==1)
  { buttons.style.display="none";
    let kays=0;
    for(let i=0;i<nbc.length;i++){
   if(wbc[i]==undefined)
   { wbc[i]=0;
   }
     if(rbc[i]==undefined)
   { rbc[i]=0;
   }
      if(nbc[i]==undefined)
   { continue;
   }
   
     tnbc[kays]=nbc[i]+"-:"+wbc[i]+"/"+rbc[i];

   
    kays++;

   
   }
   if(chandra==0)
      {
   function arb()
    { 
      res();
    }
    setTimeout(arb,1000);
      }
      if(chandra==1)
      {
   function arb()
    { 
      res();
    }
    setTimeout(arb,2000);
      }
  }
  }
  
if(totalcount%6==0)
  { overcount();
  }
    laura.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+taka+"."+(totalcount%6)+"<br>"+"Overs-: "+(cars.options[cars.selectedIndex].text);
  
 if(totalcount==0 && kanchan==3)
  { if(chandra==1)
    {
    function ledt()
    
    {
    
    
      buttons.style.display="flex";
      demo.style.display="flex";
   demo1.style.display="flex";
   laura.style.display="flex";
      p1.style.display="none";
     p2.style.display="none";
   box.style.display="none";
    box1.style.display="none";
      
      
    }
    setTimeout(ledt,2000);
    }
     if(chandra==0)
    {
    function ledt()
    
    {
    
    
      buttons.style.display="flex";
      demo.style.display="flex";
   demo1.style.display="flex";
   laura.style.display="flex";
      p1.style.display="none";
     p2.style.display="none";
   box.style.display="none";
    box1.style.display="none";
      
      
    }
    setTimeout(ledt,1000);
    }
   
  }


 



}

