import { Link } from 'react-router-dom';

function liItem(){
    return(
        <>
<ul className='flex gap-10 m-3 hidden sm:flex z-10'>
  <li className='hover:text-yellow-500 transition-colors duration-300 cursor-pointer'> <Link to='/category/series'>series</Link> </li>
  <li className='hover:text-yellow-500 transition-colors duration-300 cursor-pointer'><Link to='/category/kids'>kids</Link> </li>
  <li className='hover:text-yellow-500 transition-colors duration-300 cursor-pointer'><Link to='/category/Comodies'>Comodies</Link> </li>
  <li className='hover:text-yellow-500 transition-colors duration-300 cursor-pointer'><Link to='/category/Actions'>Actions</Link> </li>
  <li className='hover:text-yellow-500 transition-colors duration-300 cursor-pointer'><Link to='/Category/Documentary'>Documentary</Link></li>
</ul>


        </>
    );
}

export default liItem;