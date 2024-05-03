import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema with Yup
const movieValidationSchema = Yup.object({
  title: Yup.string().required('Movie title is required'),
  Subtitle:Yup.string().required('Subtitle name is required'),
  director: Yup.string().required('Director name is required'),
  releaseDate: Yup.date().required('Release date is required'),
  genre: Yup.string().required('Genre is required'),
  rating: Yup.number().min(0).max(10).required('Rating must be between 0 and 10'),
  description: Yup.string().required('Description is required'),
  poster: Yup.mixed()
    .required('Poster is required')
    .test(
      'fileType',
      'Unsupported file type. Only JPG and PNG are allowed.',
      (value) => value && ['image/jpeg', 'image/png'].includes(value.type) // Validates file type
    )
    .test(
      'fileSize',
      'File is too large. Maximum size is 2MB.',
      (value) => !value || (value.size <= 2 * 1024 * 1024) // Validates file size (maximum 2MB)
    ),
});

const AdminAddMovieForm = () => {
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
            poster: null,
          }}
          validationSchema={movieValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission logic here
            console.log('Form data:', values);
            setSubmitting(false); // Simulate async behavior
            alert('Movie added successfully!');
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
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
                <input
                  type="file"
                  name="poster"
                  onChange={(e) => setFieldValue('poster', e.currentTarget.files[0])}
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
                disabled={isSubmitting}
                className={`w/full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 focus:bg-blue-600'
                }`}
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
