const phone = prompt("Enter phone");
const message = prompt("Enter your message");
const web = `https://web.whatsapp.com/send/?phone=+2${phone}&text=${message}&source&data&app_absent`;
if(phone.length!=0&&message.length!=0)
{

    window.open(web);
}




