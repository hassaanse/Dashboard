"use client";

import react from "react";

import { useRouter } from "next/navigation";

export default function signup(){
    const router = useRouter();
    return (
        <>
        <div className="flex justify-center mt-10">
      <div style={{minWidth:"30%"}}>

                
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a new Account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                  
                </div>
                <div className="mt-2">
                  <input id="cpassword" name="cpassword" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have  a account?
              <span onClick={()=>{router.push("/")}} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">Sign in here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}