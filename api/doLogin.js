export async function doLogin(){
    try
    {
        var obj = {login:global.loginName.trim(),password:global.password.trim()};
        console.log("obj");
        var js = JSON.stringify(obj);
        
        console.log("js");
        const response = await fetch('http://localhost:5000/api/login', {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

        console.log("response");
        var res = JSON.parse(await response.text());

        console.log("res");
        console.log(res.id);
        if( res.id <= 0 || res.id == null)
        {
        console.log ("User/Password combination incorrect" );
        }
        else
        {
        global.firstName = res.firstName;
        global.lastName = res.lastName;
        global.loginName = res.email;
        
        global.userId = res.id;
        }
    }
    catch(e)
    {
    console.log({message: e.message });
    }
    
}