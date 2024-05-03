import comodyVideo from "../assets/categorymovies/CONSTANTINE 2 – First Trailer (2024) Keanu Reeves Movie _ Warner Bros.mp4"
function Comodyvideo() {
  return (
    <div>
        <video
    autoPlay
    muted
    loop
    src={comodyVideo}
    className='fixed inset-0 w-full h-full object-cover z-[-1]'
  ></video>
    </div>
  );
}
export default Comodyvideo;
