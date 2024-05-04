import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayFormData = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const savedState = localStorage.getItem('reduxState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
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
    <div  className=' flex justify-center text-white'>
      <h1  className=' text-red-600'>Saved Form Data:</h1>
      <ul>
        {Object.keys(formData).map((key) => (
          <li key={key}>
            {key}: {formData[key]}
          </li>
        ))}
      </ul>
      <Link to="/">Back to Signup</Link>
    </div>
  );
};

export default DisplayFormData;
