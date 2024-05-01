import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import FontAwesome star icons
import Background from './Background';

const Details = () => {
  return (
    <div className="flex  justify-center items-center h-screen   ">
      <Background/>
      <div className="w-[800px] h-[400px] bg-transparent rounded-lg opacity-80   transition ease-in duration-300 hover:scale-105 hover:opacity-100 shadow-lg flex ">

        <div className="w-[380px] overflow-hidden bg-transparent">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"
            alt="Kill Bill Poster"
            className="w-full h-auto rounded-l-lg"
          />
        </div>
        <div className="w-3/5 h-full bg-black rounded-r-lg">
          <h1 className="text-white font-montserrat text-4xl m-8">KILL BILL: VOL. 1</h1>
          <div className="pl-10 pt-2">
            <ul className="list-none flex space-x-10 text-gray-300 font-montserrat text-sm">
              <li>2003</li>
              <li>111 min</li>
              <li>Action</li>
            </ul>
          </div>
          
          <div className="text-white font-montserrat text-xs px-10 leading-5 mt-4">
            <p>
              The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.' Upon realizing she was pregnant with Bill's child, 'The Bride' decided to escape her life as a killer. She fled to Texas, met a young man, who, on the day of their wedding rehearsal, was gunned down by....
            </p>
          
          </div>
          <div className="pl-10 mt-8">
            <a
              href="https://www.youtube.com/watch?v=ot6C1ZKyiME"
              target="_blank"
              className="text-yellow-500 border-2 border-yellow-500 font-montserrat bg-[url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/COMdoWZ.png)] bg-no-repeat bg-size-[12px] px-10 py-2 rounded transition-all duration-500 hover:text-black hover:bg-yellow-500"
            >
              WATCH TRAILER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
