function submitNewsletter(form)
{
    if('localStorage' in window && window['localStorage'] !== null)
    {
        localStorage.setItem('username',form.username.value);
        localStorage.setItem('email',form.email.value);
        window.location.reload();
    }
    else
    {
        alert('Browser doesn\'t support HTML5 local storage');
    }
}
function displayName()
{
    if(localStorage.getItem('username') !== null)
    {
        document.write('Welcome back, ' + localStorage.getItem('username'));
    }
}
function showText()
{
    if(localStorage.getItem('email') !== null)
    {
        document.write('<span><strong>Subscribed email:</strong><br /> '+localStorage.getItem('email')+' <a href="#" onclick="clearAll();">(X)</a></span>');
    }
    else
    {
        document.write('<span>Please enter your email address</span>');
    }
}
function clearAll()
{
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    window.location.reload();
}