import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { lowerCase, numbers, symbols, upperCase } from "./data/Password";

function App() {

  let [lowerCaseStatus, setLowerCaseStatus] = useState(true);
  let [UpperCaseStatus, setUpperCaseStatus] = useState(true);
  let [symbolStatus, setsymbolStatus] = useState(true);
  let [numberStatus, setnumberStatus] = useState(true);
  let [passwordLen, setPasswordLen] = useState(8);
  let [finalPass, setfinalPass] = useState('')

  let createPassword = () => {
    let passwordChar = ''
    if (lowerCaseStatus || UpperCaseStatus || symbolStatus || numberStatus) {

      if (lowerCaseStatus) {
        passwordChar += lowerCase
      }
      if (UpperCaseStatus) {
        passwordChar += upperCase
      }
      if (symbolStatus) {
        passwordChar += symbols
      }
      if (numberStatus) {
        passwordChar += numbers
      }

      let passwordCharLen = passwordChar.length;
      console.log(passwordChar)

      let randomChar = '';
      for (let n = 1; n < passwordLen; n++) {
        randomChar += passwordChar.charAt(Math.floor(Math.random() * passwordCharLen))
        console.log(randomChar)
      }
      setfinalPass(randomChar)
    }
    else {
      toast.error('Please select one Check-Box.')
    }
  }


  return (

    <div className="App">
      <div className=" max-w-[450px] rounded-lg flex min-h-full flex-col justify-center content-center mx-auto px-6 pt-2 lg:px-8 bg-[#26225b] mt-28 ">
        <div className=" text-white">
          <h1 className=" text-[27px] font-semibold py-4 text-center ">
            Password Generator
          </h1>
          <div className=" py-8 ">
            <div class="relative mb-4" data-te-input-wrapper-init>
              <input
                type="text"
                id="npm-install"
                value={finalPass}
                class="peer block min-h-[auto]  text-white w-full rounded border-0 bg-[#171539] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                placeholder="password"
              />
            </div>

            <div className=" flex justify-between pb-4">
              <label
                for="first_name"
                class="block mb-2 text-[18px] text-sm font-medium text-gray-900 dark:text-white"
              >
                Password Length
              </label>
              <input
                type="number"
                id="first_name"
                value={passwordLen}
                onChange={(e) => setPasswordLen(e.target.value)}
                class="bg-gray-50 border w-20 h-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div class="flex items-center justify-between mb-4">
              <label
                for="default-checkbox"
                class="ms-1 font-semibold text-[18px] text-sm  dark:text-gray-300"
              >
                Include uppercase letters
              </label>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                checked={UpperCaseStatus}
                onChange={() => setUpperCaseStatus(!UpperCaseStatus)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>


            <div class="flex items-center justify-between mb-4">
              <label
                for="default-checkbox"
                class="ms-1 font-semibold text-[18px] text-sm  dark:text-gray-300"
              >
                Include lowercase letters
              </label>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                checked={lowerCaseStatus}
                onChange={() => setLowerCaseStatus(!lowerCaseStatus)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div class="flex items-center justify-between mb-4">
              <label
                for="default-checkbox"
                class="ms-1 font-semibold text-[18px] text-sm  dark:text-gray-300"
              >
                Include numbers
              </label>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                checked={numberStatus}
                onChange={() => setnumberStatus(!numberStatus)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div class="flex items-center justify-between mb-4">
              <label
                for="default-checkbox"
                class="ms-1 font-semibold text-[18px] text-sm  dark:text-gray-300"
              >
                Include Symbols
              </label>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                checked={symbolStatus}
                onChange={() => setsymbolStatus(!symbolStatus)}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <button onClick={createPassword} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500" >Generate Password </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
