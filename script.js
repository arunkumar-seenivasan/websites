// Pause other videos when one is played
const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener('play', () => {
        videos.forEach(v => {
            if (v !== video) {
                v.pause();
            }
        });
    });
});

// Simulate video upload feedback
document.addEventListener("DOMContentLoaded", function () {
    const videoUploadForm = document.getElementById("videoUploadForm");
    const uploadStatus = document.getElementById("uploadStatus");

    videoUploadForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const videoFile = document.getElementById("videoFile").files[0];

        if (videoFile) {
            uploadStatus.innerHTML = "Uploading...";

            setTimeout(function () {
                uploadStatus.innerHTML = "✅ Video uploaded successfully!";
            }, 2000);
        } else {
            uploadStatus.innerHTML = "❌ Please select a video to upload.";
        }
    });
});
