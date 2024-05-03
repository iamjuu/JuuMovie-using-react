import Kidsmovie from "../assets/categorymovies/Wish _ Official Trailer.mp4"
function Kidmovie() {
  return (
    <video
    autoPlay
    muted
    loop
    src={Kidsmovie}
    className='fixed inset-0 w-full h-full object-cover z-[-1]'
  ></video>
  );
}
export default Kidmovie;
