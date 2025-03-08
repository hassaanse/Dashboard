// // "use client";

// // import react from "react";

// // import { useRouter } from "next/navigation";

// // export default function signup(){
// //     const router = useRouter();
// //     return (
// //         <>
// //         <div className="flex justify-center mt-10">
// //       <div style={{minWidth:"30%"}}>

                
// //         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white shadow-lg">
// //           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
// //             <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
// //             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a new Account</h2>
// //           </div>

// //           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
// //             <form className="space-y-6" action="#" method="POST">
// //               <div>
// //                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
// //                 <div className="mt-2">
// //                   <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
// //                 </div>
// //               </div>

// //               <div>
// //                 <div className="flex items-center justify-between">
// //                   <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  
// //                 </div>
// //                 <div className="mt-2">
// //                   <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
// //                 </div>
// //               </div>

// //               <div>
// //                 <div className="flex items-center justify-between">
// //                   <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                  
// //                 </div>
// //                 <div className="mt-2">
// //                   <input id="cpassword" name="cpassword" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
// //                 </div>
// //               </div>

// //               <div>
// //                 <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
// //               </div>
// //             </form>

// //             <p className="mt-10 text-center text-sm text-gray-500">
// //               Already have  a account?
// //               <span onClick={()=>{router.push("/")}} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">Sign in here</span>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //         </>
// //     )
// // }


// "use client";

// import react from "react";
// import { SnackbarProvider, useSnackbar, enqueueSnackbar } from 'notistack';
// import { useRouter } from "next/navigation";
// import axios from "axios";

// export default function signup(){
//     const router = useRouter();
//     const [name, setName] = react.useState("");
//     const [email, setEmail] = react.useState("");
//     const [password, setPassword] = react.useState("");
//     const [cpassword, setCpassword] = react.useState("");
//     const [role, setRole] = react.useState("admin");

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (password !== cpassword) {
//             // alert("Passwords do not match");
//             enqueueSnackbar('Passwords do not match',  {
//               variant: 'fail',
//               anchorOrigin: {
//                 vertical: 'top', // Customize the vertical position
//                 horizontal: 'right', // Customize the horizontal position
//               },
//               style: {
//                 backgroundColor: '#00ff00', // Customize the background color
//                 color: '#ffffff', // Customize the text color
//                 fontWeight: 'bold', // Customize the font weight
//               },
//             }) 
//             return;
//         }

//         try {
//             const response = await axios.post("http://localhost:8000/admin/signup", {
//                 name,
//                 email,
//                 password,
//                 role,
//             });
//             if (response && !response.error) { // Check if result exists before accessing its properties

//               enqueueSnackbar('Please Verify On your email',  {
//                 variant: 'success',
//                 anchorOrigin: {
//                   vertical: 'top', // Customize the vertical position
//                   horizontal: 'right', // Customize the horizontal position
//                 },
//                 style: {
//                   backgroundColor: '#00ff00', // Customize the background color
//                   color: '#ffffff', // Customize the text color
//                   fontWeight: 'bold', // Customize the font weight
//                 },
//               })  
      
//               router.push("/");
//             // console.log("API response:", response.data);
//             // alert("Please verify the through email");
//             router.push("/");


//         }
//         else {
//           // Check if result contains an error message
//           if (result?.error) {
            
  
  
//             enqueueSnackbar('User Already Registered',  {
//               variant: 'success',
//               anchorOrigin: {
//                 vertical: 'top', // Customize the vertical position
//                 horizontal: 'right', // Customize the horizontal position
//               },
//               style: {
//                 backgroundColor: '#ff0000', // Customize the background color
//                 color: '#ffffff', // Customize the text color
//                 fontWeight: 'bold', // Customize the font weight
//               },
//             })
//               // toast.error('Incorrect Username or Password', {
  
//               //   position: "top-right",
//               //   autoClose: 5000,
//               //   hideProgressBar: false,
//               //   closeOnClick: true,
//               //   pauseOnHover: true,
//               //   draggable: true,
//               //   progress: undefined,
//               //   theme: "colored",
//               //   transition: Bounce,
//               //   });
            
//             // Display error message to the user using React Toast
//             // addToast(result.error, { appearance: 'error' });
  
//           } else {
//             console.error("Login failed: Unknown error");
//           }}

      
//       } catch (error) {
//             console.error("API error:", error.response?.data || error.message);
//             // alert("Failed to create account");
//         }
//     };

//     return (
//         <>
//         <SnackbarProvider maxSnack={3}>
      
//       </SnackbarProvider>
//         <div className="flex justify-center mt-10">
//       <div style={{minWidth:"30%"}}>

                
//         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white shadow-lg">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a new Account</h2>
//           </div>

//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
//                 <div className="mt-2">
//                   <input id="name" name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
//                 <div className="mt-2">
//                   <input id="email" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  
//                 </div>
//                 <div className="mt-2">
//                   <input id="password" name="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                  
//                 </div>
//                 <div className="mt-2">
//                   <input id="cpassword" name="cpassword" type="password" value={cpassword} onChange={(event) => setCpassword(event.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
//                 </div>
//               </div>

//               <div>
//                 <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
//               </div>
//             </form>

//             <p className="mt-10 text-center text-sm text-gray-500">
//               Already have  a account?
//               <span onClick={()=>{router.push("/")}} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">Sign in here</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//         </>
//     )
// }

"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { SnackbarProvider, useSnackbar } from 'notistack';
// import { setTimeout } from 'node:timers';
// import { setTimeout } from 'timers-browserify';
const { setTimeout, clearTimeout } = require('timers');


const SignUpForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCpassword] = React.useState("");
  const [role, setRole] = React.useState("admin");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== cpassword) {
      enqueueSnackbar('Passwords do not match', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
      return;
    }

    try {
      const response = await axios.post("https://thekoi.ca/backened/admin/signup", {
        name,
        email,
        password,
        role,
      });

      if (response.status === 201) {
        enqueueSnackbar('Please Verify On your email', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });

        setTimeout(() => {
          console.log('Executed after 10 second');
        }, 10000);

      } else {
        enqueueSnackbar('User  Already Registered', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      }
    } catch (error) {
      console.error("API error:", error.response?.data || error.message);
      enqueueSnackbar('There is some un usual error!', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div style={{ minWidth: "30%" }}>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create a new Account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="cpassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    value={cpassword}
                    onChange={(event) => setCpassword(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have a account?
              <span
                onClick={() => {
                  router.push("/");
                }}
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Sign in here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignUpPage = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <SignUpForm />
    </SnackbarProvider>
  );
};

export default SignUpPage;