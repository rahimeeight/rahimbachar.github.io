function adjustHeroVideo() {
    const heroVideo = document.querySelector('.hero video');
    heroVideo.style.width = '100%';
    heroVideo.style.height = 'auto';
    heroVideo.style.objectFit = 'contain';
}

window.addEventListener('load', adjustHeroVideo);
window.addEventListener('resize', adjustHeroVideo);

document.querySelector('.video-card').addEventListener('click', function(e) {
    if (!e.target.classList.contains('youtube-link')) {
        window.open('https://www.youtube.com/watch?v=osW5Fa1WR7I', '_blank');
    }
});