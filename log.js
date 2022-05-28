function adduser()
{
    lc=document.getElementById("lc").value;
    localStorage.setItem("user" , lc);
    window.location="2ndpage.html";
}