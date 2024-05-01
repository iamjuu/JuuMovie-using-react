import React from 'react'
import {Form,Formik,ErrorMessage,Field}from 'formik'
import yup from 'yup'
import {Link}  from 'react-router-dom'

function login(){


    const loginvalidation =yup.object({
        email:yup.string()
        .email('Invalid email adddress')
        .required('email is required'),

        password:yup.string()
        .min(5,'Password must be at least 6 characters')
        .required('password is reqiured')
    })
return(
    <div  className="max-w-md mx-auto mt-10">
<Formik initialValues={{email:'',password:''}}
validationSchema={loginvalidation}
onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false)
    }, 400);
  }}
>
{({ isSubmitting }) => (
<Form  className="bg-white p-8 rounded-lg shadow-md space-y-6">
    <div>
        <label className="bg-white p-8 rounded-lg shadow-md space-y-6">
            Email
        </label>
        <Field  type="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              >

<ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              </Field>
    </div>

    <div>
        <label  className="bg-white p-8 rounded-lg shadow-md space-y-6">
            Password
        </label>

        <Field  type="password"
                name="password"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
             ></Field>
    </div>
    <button   type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}> submit</button>
              <div>
              <span>  Don't have an account?</span> <span> <Link to='/signup'>Signup</Link> </span>
              </div>
</Form>
)}


</Formik>
    </div>
)
}
export default login 