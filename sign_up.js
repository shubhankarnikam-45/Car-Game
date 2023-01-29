//varaibles that the the information of singup page
let name=document.querySelector(".name");
let username=document.querySelector(".username");
let password=document.querySelector(".password");
let form=document.querySelector(".signUp")
let login=document.querySelector("#login");
let arr=[];


//login button.
login.addEventListener("click",loginPage)

function loginPage()
{
    //using this we redirect to the login page.
    window.location.href="login.html"
}


//the paragraph to display the output
output=document.querySelector('#output')
form.addEventListener("submit",validation);

function validation(e)
{
    e.preventDefault();
    
    //here we cheak all conditions of name
    let personName=name.value
    if(cheakName(personName)==false)
    {
        output.innerHTML="Enter valid name";
    }
    else if(cheakUsername(username.value)==false)
    {
        output.innerHTML="Username already exits.";
    }
    else if(validPasswordOrNot(password.value)==false)
    {
        output.innerHTML="Please Enter Valid Password";
    }
    else
    {
        let obj={}
        obj["name"]=name.value;
        obj["username"]=username.value;
        obj["password"]=password.value;
        arr.push(obj)
        console.log(arr)
    
    }
    
    //using this we send data to another page.
    localStorage.setItem("data",JSON.stringify(arr));

    

    
}


//function to cheak the name is valid or not.

function cheakName(name)
{

    name=name.trim();
    let arr=name.split(" ");
    if(arr.length>=2)
    {
        return true;
    }

    return false;
}


//function to cheak the username is already exits or not.

function cheakUsername(username)
{
    let flag=true;
    for(let i of arr)
    {
        if(i.username==username)
        flag=false;
    }

    return flag;
}


//function to cheak the password is valid or not.

function validPasswordOrNot(password)
{
    let cl=0,sl=0,sc=0,n=0;

    for(let i of password)
    {
        if(i>="A" && i<="Z")
        {
            cl++;
        }
        else if(i>="a" && i<="z")
        {
            sl++;
        }
        else if(i>="0" && i<="9")
        {
            n++;
        }
        else
        {
            sc++;
        }
    }
    if(cl==0 || sc==0 || sl==0 ||n==0)
    {
        return false;
    }
    return true;
}

