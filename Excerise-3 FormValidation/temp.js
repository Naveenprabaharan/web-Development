const string = 'my name is naveen';
const regex = /name/;
const isExsiting = regex.test(string);
console.log(isExsiting);

// * zero or more
//  + one or more
// ? may be is there
// w =words
// ()grouping

const mail = 'naveenpraba08@gmail.com'
const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{0,3}$/;
const isExsiting = regex.test(mail);
console.log(isExsiting);


// 
const regex = /[A-Za-z]{5,}/;
                const regex1 = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{0,3}$/;
                 
                
                if(name.value!="" && mail.value !=""){
                    const isName = regex.test(name);
                    if(isName ==true){
                        document.getElementById("namef").innerHTML="Enter atleast 5 letters &  It cannot have any numeric value or special characters";
                        name.focus();
                        name.style.border="solid 5px red";
                        return false;  
                    }else if(regex1.test(mail)){
                        document.getElementById("ef").innerHTML="Enter patteren as 'After . it can be maximum '3' characters'";
                        name.focus();
                        name.style.border="solid 5px red";
                        return false; 
                    }else{
                        alert("Submitted Details are:"+"\nName = " + name +"\nEmail = "+mail)
                        return true;
                    }
                }else{
                    document.getElementById("namef").innerHTML="Enter a Name";
                    name.focus();
                    name.style.border="solid 5px red";
                    document.getElementById("ef").innerHTML="Enter mail id";
                    name.focus();
                    name.style.border="solid 5px red";
                    return false;
                }


                Session was good!