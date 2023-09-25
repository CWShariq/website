var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
// var scjs = document.getElementById('pjs');


// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            // scjs.setAttribute("src", './js/particle2.js');
            // script.remove();
            const script = document.querySelector('#pjs');
            const newScript = document.createElement('script');
            newScript.src = './js/particle1.js';
            newScript.id = 'pjs';
            script.parentNode.replaceChild(newScript, script);
            // console.log();
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            // scjs.setAttribute("src", './js/particle1.js');
             // script.remove();
            const script = document.querySelector('#pjs');
            const newScript = document.createElement('script');
            newScript.src = './js/particle2.js';
            newScript.id = 'pjs';
            script.parentNode.replaceChild(newScript, script);
            // console.log();
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            // scjs.setAttribute("src", './js/particle1.js');
             // script.remove();
            const script = document.querySelector('#pjs');
            const newScript = document.createElement('script');
            newScript.src = './js/particle2.js';
            newScript.id = 'pjs';
            script.parentNode.replaceChild(newScript, script);
            // console.log();
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            // scjs.setAttribute("src", './js/particle2.js');
             // script.remove();
            const script = document.querySelector('#pjs');
            const newScript = document.createElement('script');
            newScript.src = './js/particle1.js';
            newScript.id = 'pjs';
            script.parentNode.replaceChild(newScript, script);
            // console.log();
        }
    }
    // console.log(scjs.src)
});