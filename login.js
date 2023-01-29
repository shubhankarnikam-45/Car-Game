
//this value of input field
let username=document.querySelector(".username");
let password=document.querySelector(".password");
let form=document.querySelector(".login");

let signUp=document.querySelector("#signUp");

//receiving data coming from sign_up page.
let data = JSON.parse(localStorage.getItem('data'));
console.log(data, typeof data)

//this addEventListener() for the 'submit' button of form
form.addEventListener("submit",cheakLoginInfo);

//function to cheak the information in login is valid or not.
function cheakLoginInfo(e)
{
    e.preventDefault();
    for(let i of data)
    {
       

        if(i.username==username.value)
        {

            //using this we send data to another page.
            localStorage.setItem("data",JSON.stringify(i));
            window.location.href="game_screen.html";
        }
    }

    let op=document.createElement("p");
    op.innerHTML="login faild";
    document.body.appendChild(op);
    op.style.color="red";
    

}

