const shortsVideos = document.querySelectorAll('.shorts-video');

shortsVideos.forEach((video, index) => {
  video.addEventListener('play', function() {
    // Pause all other videos
    shortsVideos.forEach((otherVideo, otherIndex) => {
      if (index !== otherIndex) otherVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  });
});
