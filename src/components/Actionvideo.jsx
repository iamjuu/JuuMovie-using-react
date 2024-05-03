import ActionVideo from "../assets/categorymovies/DEADSHOT — Official AI Trailer (2024) _ Will Smith Action Movie.mp4"
function Actionvideo() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        src={ActionVideo}
        className='fixed inset-0 w-full h-full object-cover z-[-1]'
      ></video>
      </>
  );
}

export default Actionvideo;
