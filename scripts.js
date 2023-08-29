var projectTypes = ['org', 'pm', 'prog', 'trainer'];

function showProjects(type) {
    if (type && !projectTypes.includes(type)) return;
    for (let a of document.getElementsByTagName('article')) {
        a.style.display = !type || a.classList.contains(type) ? 'block' : 'none';
    }
}


document.addEventListener("DOMContentLoaded", () => {
    window.matchMedia('print').onchange = (e) => { 
        let currentMedia = e.matches ? "print" : "screen";

        let links = document.querySelectorAll(`a[${currentMedia}]`);
        for (let link of links) {
            link.textContent = link.getAttribute(currentMedia);
        }
    }
});