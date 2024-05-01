  import BackgroundVideo from "../assets/Background.mp4"
function Background() {
  return (
      <video
        autoPlay
        muted
        loop
        src={BackgroundVideo}
        className='fixed inset-0 w-full h-full object-cover z-[-1]'
      ></video>
  );
}

export default Background;
