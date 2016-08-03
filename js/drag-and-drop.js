if(featureSupport.draganddrop)
{
    function drag(ev)
    {
        ev.dataTransfer.setData("Text", ev.target.id);
    }
    function drop(ev)
    {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
    }
    function allowDrop(ev)
    {
        ev.preventDefault();
    }  
}
else
{
    document.write('This browser can NOT use drag and drop');
}