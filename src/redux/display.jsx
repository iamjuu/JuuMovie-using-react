import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayFormData = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const savedState = localStorage.getItem('reduxState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      console.log(parsedState);
      setFormData(parsedState.formData);
    }
  }, []);

  if (!formData) {
    return (
      <div>
        No form data found. <Link to="/">Back to Signup</Link>
      </div>
    );
  }

  return (
    <div  className='flex justify-center '>
    <div className=" flex flex-col w-3/6 items-center text-white p-4">
      <h1 className=" text-red-600 text-lg mb-4">Saved Form Data</h1>
      
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white text-gray-900">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b">Field</th>
              <th className="px-4 py-2 text-left border-b">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(formData).map((key) => (
              <tr key={key}>
                <td className="px-4 py-2 border-b">{key}</td>
                <td className="px-4 py-2 border-b">{formData[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4">
        <Link to="/" className="text-blue-500 underline"> <button  className=' '>Back to Signup</button> </Link>
      </div>
    </div>
    </div>
  );
};

export default DisplayFormData;
