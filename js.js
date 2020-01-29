const progress = document.querySelector('.loading');

setTimeout(() => {
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;
}, 300)


