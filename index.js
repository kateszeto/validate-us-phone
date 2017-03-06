function telephoneCheck(str) {
  // Good luck!
 // var re = new RegExp('\\(([^)]+)\)');
  var rx1 = /^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;
  var rx2 = /^\(([0-9]{3})\)[0-9]{3}-?[0-9]{4}$/;
  
  function rxCheck(rxstr){
    if(rx1.test(rxstr)||rx2.test(rxstr)){
      return true;
    }else{
      return false;
    }
  }
  
  var fstr = str.replace(/\D/g,'');
  var nstr = str.replace(/\s/g,'');
  var len = nstr.length;
  if(fstr.length===11){
    if(fstr.charAt(0)==="1"){
      return rxCheck(nstr.substring(1,len));
    }
    else{
      return false;
    }
    
  }else if(fstr.length===10){
    return rxCheck(nstr);
    
  }else{
    return false;
  }
    
}



console.log(telephoneCheck("27576227382"));