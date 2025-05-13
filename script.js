function validEmail(str) {
  if(!str) return false;
  let newstr = str.toLowerCase();
  let arr = [".com", ".co.in", ".edu"];
  let allyes = false;
  new data = str.split("@");
  arr.forEach((data) => {
    if (newstr.includes(data)) {
      allyes = true;
    }else{
      if(data.length>1){
        allyes = true;
      }
      else{
        allyes = false;
      }
    }
    
  });

  return allyes;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
