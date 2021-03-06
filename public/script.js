const socket = io("");

const askForVideoPremmision = async () => {
  const myVideo = document.createElement("video");
  myVideo.muted = true;
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  addVideoStream(myVideo, stream);
};

const connectToNewUser = () => {
  console.log("new_user");
};

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });

  const videoGrid = document.getElementById("videoId");
  videoGrid.append(video);
  socket.emit("join-room", ROOM_ID);
  socket.on("user-connected", () => {
    connectToNewUser();
  });
};
askForVideoPremmision();
