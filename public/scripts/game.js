navigator.mediaDevices.getUserMedia({audio: true, video: false})
.then(function(stream) {
  var mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  mediaRecorder.ondataavailable = function(e) {
  	console.log(e.data);
  }
})
.catch(function(err) {
  /* handle the error */
});