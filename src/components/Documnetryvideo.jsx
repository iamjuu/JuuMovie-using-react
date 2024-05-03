import DocumentryVideo from "../assets/categorymovies/Life on Our Planet _ Official Teaser _ Netflix.mp4"
function Documnetryvideo() {
  return (
    <div>
           <video
    autoPlay
    muted
    loop
    src={DocumentryVideo}
    className='fixed inset-0 w-full h-full object-cover z-[-1]'
  ></video>
    </div>
  );
}

export default Documnetryvideo;
