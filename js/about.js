var myvideo = document.getElementById('ad');

function playPause()
{
    if(myvideo.paused)
    {
        myvideo.play();    
    }
    else
    {
        myvideo.pause();
    }
}
function makeBig()
{
    myvideo.width=560;
}
function makeSmall()
{
    myvideo.width=320;
}
function makeNormal()
{
    myvideo.width=420;
}