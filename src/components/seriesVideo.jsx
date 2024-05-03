import seriesVideo from "../assets/categorymovies/Hogwarts Legacy - Official Cinematic Trailer 4K.mp4"
function seriesvideo() {
  return (
    <video
    autoPlay
    muted
    loop
    src={seriesVideo}
    className='fixed inset-0 w-full h-full object-cover z-[-1]'>
        
    </video>
  );
}

export default seriesvideo;
