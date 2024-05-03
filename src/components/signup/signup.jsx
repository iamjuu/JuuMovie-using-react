import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';


const validationSchema = Yup.object({
    Email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),

  });


  const Signupform =()=>{
    return (
        <div  className="flex justify-center items-center min-h-screen ">
<div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white bg-opacity-5  ">

<Formik  initialValues={{ email: '', password: '',phone:'',ConfirmPassword:'' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>

          
{({ isSubmitting }) => (
            <Form className="space-y-6">
              {" "}
              <div>
                <label
                  htmlFor="Username"
                  className="block text-white font-semibold"
                >
                  {" "}
                  {/* Email field */}
                  Username
                </label>
                <Field
                  type="text"
                  name="Username"
                  className="mt-1  block w-full   rounded-md py-2 px-3 text-white focus:outline-none focus:border-red-500  bg-white bg-opacity-20 backdrop-blur-lg"
                />
                <ErrorMessage
                  name="Username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>



              <div>
                <label
                  htmlFor="Username"
                  className="block text-white font-semibold"
                >
                  {" "}
                  {/* Email field */}
                  Email
                </label>
                <Field
                  type="Email"
                  name="Email"
                  className="mt-1  block w-full   rounded-md py-2 px-3 text-white focus:outline-none focus:border-red-500  bg-white bg-opacity-20 backdrop-blur-lg"
                />
                <ErrorMessage
                  name="Email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>


              <div>
                <label
                  htmlFor="password"
                  className="block text-white font-semibold"
                >
                  {" "}
                  {/* Password field */}
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700  focus:border-red-500  bg-white bg-opacity-20 backdrop-blur-lg"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>


              <div>
            <label htmlFor="confirmPassword" className="block text-white font-semibold">
              Confirm Password
            </label>
            <Field
              type="password"
              name="confirmPassword" // Field name must match the validation schema
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:border-red-500 bg-white bg-opacity-20 backdrop-blur-lg"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-sm mt-1" // Displaying the error message
            />
          </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 ${
                  isSubmitting
                    ? "bg-gray-300 cursor-not-allowed opacity-50" // Disabled state
                    : " hover:bg-blue-600 focus:outline-none focus:bg-blue-600    bg-[#475569] bg-opacity-20 backdrop-blur-lg " // Normal state with hover
                }`}
              >
                Submit
              </button>
              <div className="flex justify-center text-white">
                {" "}
                {/* Signup link */}
                <span>Don't have an account?</span>
                <span className="ml-1">
                  <Link to="/login" className="text-blue-500 underline">
                    Signup
                  </Link>
                </span>
              </div>
            </Form>
          )}

          </Formik>

</div>
        </div>
    )
  }

  export default Signupform