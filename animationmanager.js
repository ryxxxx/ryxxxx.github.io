document.addEventListener("DOMContentLoaded", (event) => {
    let animationTime = sessionStorage.getItem("animationTime");
    if(animationTime!=null)
    {
        document.getAnimations().forEach((animation) => {
            animation.currentTime=animationTime;    
        });
    }
});

window.onbeforeunload = function () {
    document.getAnimations().forEach((animation) => {
        sessionStorage.setItem("animationTime", animation.currentTime);
        return;
      });
};