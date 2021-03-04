const askForVideoPremmision = async () => {
  const myVideo = document.createElement("video");
  myVideo.muted = true;
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  addVideoStream(myVideo, stream);
};

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  const videoGrid = document.getElementById("videoId");
  videoGrid.append(video);
};
askForVideoPremmision();
