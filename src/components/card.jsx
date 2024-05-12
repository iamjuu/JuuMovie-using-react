import { Link } from "react-router-dom";
import { FaSmile } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import {useMovies} from "../Context/movieContext"

const Card = ({ children }) => {

  const {movies} = useMovies()
  console.log('here',movies);
  return (
    <>

<div className="flex gap-4 flex-wrap w-full h-full bg-fixed bg-cover bg-center mb-12">
  {movies.map((movie, index) => (
    <div className="mx-auto mt-16 w-[300px] h-auto bg-[#1e1b26] rounded-lg shadow-2xl relative" key={index}>
      <div className="absolute top-1 right-3 text-[#fe4141] text-4xl">
        <i className="material-icons" style={{ filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))" }}></i>
      </div>
      <Link to={`/Details/${movie.id}`}>
        <div className="h-[270px] bg-center bg-cover rounded-t-lg transition-all duration-300 hover:scale-100 hover:opacity-80">
          {/* image styling  */}
          <img src={movie.poster} alt=""  className="w-full" />
        </div>
        {children}
      </Link>
      <div className="p-3 text-justify text-[#e7e7e7]">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-3xl mt-40">{movie.title}</h2>
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
        <div className=" mt-5 my-4 text-sm italic text-black">
          <p className="text-xs text-gray-400  "> {movie.description} </p>
        </div>
        <div className=" items-center space-x-1 mt-4">
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
  ))}
</div>
    </>
  );
};

export default Card;
