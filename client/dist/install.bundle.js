butInstall.addEventListener("click",(async()=>{const e=window.deferredPrompt;e&&(e.prompt(),await e.userChoice,window.deferredPrompt=null,butInstall.classList.toggle("hidden",!0))})),window.addEventListener("appinstalled",(e=>{window.deferredPrompt=null}));