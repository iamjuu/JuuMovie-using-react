import { Link } from "react-router-dom";
import { FaSmile } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const Card = ({ children }) => {
  return (
    <div className="flex gap-4 flex-wrap w-full h-full bg-fixed bg-cover bg-center mb-12">
      {/*card start from here  */}
      <div className="mx-auto mt-16 w-[300px] h-[520px] bg-[#1e1b26] rounded-lg shadow-2xl relative">
        <div className="absolute top-1 right-3 text-[#fe4141] text-4xl">
          <i
            className="material-icons"
            style={{ filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))" }}
          ></i>
        </div>
        <Link to="/Details">
          <div
            className="h-[240px] bg-center bg-cover rounded-t-lg transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg")',
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)",
            }}
          >
            {" "}
          </div>
          {children}
        </Link>

        <div className="p-3 text-justify text-[#e7e7e7]">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-3xl">Interstellar</h2>
          </div>

          <div className="flex justify-between items-center my-3">
            <h5 className="text-sm">SUMMARY</h5>
            <ul className="flex space-x-2 text-[#fe4141]">
              <li className="flex items-center gap-1">
                <FaSmile className="text-[#fe4141]" />2
              </li>
              <li className="flex items-center gap-1">
                <AiOutlineLike className="text-[#fe4141]" />3
              </li>
            </ul>
          </div>

          <p className="text-xs  text-gray-400 ">
            A group of elderly people are giving interviews about having lived
            in a climate of crop blight and constant dust reminiscent of the
            Great Depression of the 1930s.
          </p>

          <div className="flex  my-4 text-sm italic text-gray-400">
            Matthew McConaughey, Anne Hathaway, Jessica Chastain
          </div>

          <div className="flex items-center space-x-1 mt-4">
            <div className="flex items-center px-2 py-1 border border-[#fe4141] rounded">
              <i className="material-icons mr-2">&#xE037;</i>
              <button className="text-sm">WATCH TRAILER</button>
            </div>
            <div className="flex space-x-2 text-[#fe4141] text-3xl">
              <i className="material-icons">&#xE161;</i>
              <i className="material-icons">&#xE866;</i>
              <i className="material-icons">&#xE80D;</i>
            </div>
          </div>
        </div>
      </div>
      {/* card end here */}

      {/*card start from here  */}
      <div className="mx-auto mt-16 w-[300px] h-[520px] bg-[#1e1b26] rounded-lg shadow-2xl relative">
        <div className="absolute top-1 right-3 text-[#fe4141] text-4xl">
          <i
            className="material-icons"
            style={{ filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))" }}
          ></i>
        </div>
        <Link to="/Details">
          <div
            className="h-[240px] bg-center bg-cover rounded-t-lg transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg")',
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)",
            }}
          >
            {" "}
          </div>
          {children}
        </Link>

        <div className="p-3 text-justify text-[#e7e7e7]">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-3xl">Interstellar</h2>
          </div>

          <div className="flex justify-between items-center my-3">
            <h5 className="text-sm">SUMMARY</h5>
            <ul className="flex space-x-2 text-[#fe4141]">
              <li className="flex items-center gap-1">
                <FaSmile className="text-[#fe4141]" />2
              </li>
              <li className="flex items-center gap-1">
                <AiOutlineLike className="text-[#fe4141]" />3
              </li>
            </ul>
          </div>

          <p className="text-xs  text-gray-400 ">
            A group of elderly people are giving interviews about having lived
            in a climate of crop blight and constant dust reminiscent of the
            Great Depression of the 1930s.
          </p>

          <div className="flex  my-4 text-sm italic text-gray-400">
            Matthew McConaughey, Anne Hathaway, Jessica Chastain
          </div>

          <div className="flex items-center space-x-1 mt-4">
            <div className="flex items-center px-2 py-1 border border-[#fe4141] rounded">
              <i className="material-icons mr-2">&#xE037;</i>
              <button className="text-sm">WATCH TRAILER</button>
            </div>
            <div className="flex space-x-2 text-[#fe4141] text-3xl">
              <i className="material-icons">&#xE161;</i>
              <i className="material-icons">&#xE866;</i>
              <i className="material-icons">&#xE80D;</i>
            </div>
          </div>
        </div>
      </div>
      {/* card end here */}

      {/*card start from here  */}
      <div className="mx-auto mt-16 w-[300px] h-[520px] bg-[#1e1b26] rounded-lg shadow-2xl relative">
        <div className="absolute top-1 right-3 text-[#fe4141] text-4xl">
          <i
            className="material-icons"
            style={{ filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))" }}
          ></i>
        </div>
        <Link to="/Details">
          <div
            className="h-[240px] bg-center bg-cover rounded-t-lg transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg")',
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)",
            }}
          >
            {" "}
          </div>
          {children}
        </Link>

        <div className="p-3 text-justify text-[#e7e7e7]">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-3xl">Interstellar</h2>
          </div>

          <div className="flex justify-between items-center my-3">
            <h5 className="text-sm">SUMMARY</h5>
            <ul className="flex space-x-2 text-[#fe4141]">
              <li className="flex items-center gap-1">
                <FaSmile className="text-[#fe4141]" />2
              </li>
              <li className="flex items-center gap-1">
                <AiOutlineLike className="text-[#fe4141]" />3
              </li>
            </ul>
          </div>

          <p className="text-xs  text-gray-400 ">
            A group of elderly people are giving interviews about having lived
            in a climate of crop blight and constant dust reminiscent of the
            Great Depression of the 1930s.
          </p>

          <div className="flex  my-4 text-sm italic text-gray-400">
            Matthew McConaughey, Anne Hathaway, Jessica Chastain
          </div>

          <div className="flex items-center space-x-1 mt-4">
            <div className="flex items-center px-2 py-1 border border-[#fe4141] rounded">
              <i className="material-icons mr-2">&#xE037;</i>
              <button className="text-sm">WATCH TRAILER</button>
            </div>
            <div className="flex space-x-2 text-[#fe4141] text-3xl">
              <i className="material-icons">&#xE161;</i>
              <i className="material-icons">&#xE866;</i>
              <i className="material-icons">&#xE80D;</i>
            </div>
          </div>
        </div>
      </div>
      {/* card end here */}
      {/*card start from here  */}
      <div className="mx-auto mt-16 w-[300px] h-[520px] bg-[#1e1b26] rounded-lg shadow-2xl relative">
        <div className="absolute top-1 right-3 text-[#fe4141] text-4xl">
          <i
            className="material-icons"
            style={{ filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))" }}
          ></i>
        </div>
        <Link to="/Details">
          <div
            className="h-[240px] bg-center bg-cover rounded-t-lg transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg")',
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)",
            }}
          >
            {" "}
          </div>
          {children}
        </Link>

        <div className="p-3 text-justify text-[#e7e7e7]">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-3xl">Interstellar</h2>
          </div>

          <div className="flex justify-between items-center my-3">
            <h5 className="text-sm">SUMMARY</h5>
            <ul className="flex space-x-2 text-[#fe4141]">
              <li className="flex items-center gap-1">
                <FaSmile className="text-[#fe4141]" />2
              </li>
              <li className="flex items-center gap-1">
                <AiOutlineLike className="text-[#fe4141]" />3
              </li>
            </ul>
          </div>

          <p className="text-xs  text-gray-400 ">
            A group of elderly people are giving interviews about having lived
            in a climate of crop blight and constant dust reminiscent of the
            Great Depression of the 1930s.
          </p>

          <div className="flex  my-4 text-sm italic text-gray-400">
            Matthew McConaughey, Anne Hathaway, Jessica Chastain
          </div>

          <div className="flex items-center space-x-1 mt-4">
            <div className="flex items-center px-2 py-1 border border-[#fe4141] rounded">
              <i className="material-icons mr-2">&#xE037;</i>
              <button className="text-sm">WATCH TRAILER</button>
            </div>
            <div className="flex space-x-2 text-[#fe4141] text-3xl">
              <i className="material-icons">&#xE161;</i>
              <i className="material-icons">&#xE866;</i>
              <i className="material-icons">&#xE80D;</i>
            </div>
          </div>
        </div>
      </div>
      {/* card end here */}
    </div>
  );
};

export default Card;
