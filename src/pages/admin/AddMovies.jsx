import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMovies } from '../../Context/movieContext';


// Define the validation schema with Yup
const movieValidationSchema = Yup.object({
  title: Yup.string().required('Movie title is required'),
  Subtitle:Yup.string().required('Subtitle name is required'),
  director: Yup.string().required('Director name is required'),
  releaseDate: Yup.date().required('Release date is required'),
  genre: Yup.string().required('Genre is required'),
  rating: Yup.number().min(0).max(10).required('Rating must be between 0 and 10'),
  description: Yup.string().required('Description is required'),
  poster: Yup.string().url('invalid url').required('Description is required'),
});

const AdminAddMovieForm = () => {
  const { addMovie } = useMovies();
  const handleSubmit =(values)=>{
   
    addMovie(values)
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <Formik
          initialValues={{
            title: '',
            Subtitle:'',
            director: '',
            releaseDate: '',
            genre: '',
            rating: '',
            description: '',
            poster: '',
          }}
          // validationSchema={movieValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-gray-700 font-semibold">
                  Movie Title
                </label>
                <Field
                  type="text"
                  name="title"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="Subtitle" className="block text-gray-700 font-semibold">
                  sub Title
                </label>
                <Field
                  type="text"
                  name="Subtitle"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
                />
                <ErrorMessage
                  name="Subtitle"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="director" className="block text-gray-700 font-semibold">
                  Director
                </label>
                <Field
                  type="text"
                  name="director"
                  className="mt-1 block w/full border border-gray-300 rounded-md py-2 px-3"
                />
                <ErrorMessage
                  name="director"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="releaseDate" className="block text-gray-700 font-semibold">
                  Release Date
                </label>
                <Field
                  type="date"
                  name="releaseDate"
                  className="mt-1 block w/full border border-gray-300 rounded-md py-2 px-3"
                />
                <ErrorMessage
                  name="releaseDate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="genre" className="block text-gray-700 font-semibold">
                Cetegory                </label>
                <Field
                  as="select"
                  name="genre"
                  className="mt-1 block w/full border border-gray-300 rounded-md py-2 px-3"
                >
                  <option value="" disabled>
                    Cetegory
                  </option>
                  <option value="thriller">Series</option>
                  <option value="action">Kids</option>
                  <option value="comedy">Comedies</option>
                  <option value="action">Action</option>
                  <option value="sci-fi">Documnetary</option>

                </Field>
                <ErrorMessage
                  name="genre"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              

              <div>
                <label htmlFor="description" className="block text-gray-700 font-semibold">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className="mt-1 block w/full border border-gray-300 rounded-md py-2 px-3"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="poster" className="block text-gray-700 font-semibold">
                  Movie Poster
                </label>
                <Field
                  type="text"
                  name="poster"
                  className="mt-1 block w/full border border-gray-300 rounded-md py-2 px-3"
                />
                <ErrorMessage
                  name="poster"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className={`w/full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md `}
              >
                Add Movie
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminAddMovieForm;
