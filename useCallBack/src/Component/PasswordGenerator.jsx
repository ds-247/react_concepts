import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);
  const [incNumeric, setIncNumeric] = useState(false);
  const [incChars, setIncChars] = useState(false);

  const passwordRef = useRef();

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
  };

  const passGen = useCallback(() => {
    let hash = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (incNumeric) {
      hash += `1234567890`;
    }

    if (incChars) {
      hash +=  `()*&^%$#@!~{}|"\\;:',<.>/?`;
    }

    let temp_pass = "";

    for (let i = 0; i < length; i++) {
      const random_ind = Math.floor(Math.random() * hash.length);
      temp_pass += hash[random_ind];
    }

    setPassword(temp_pass);
  },[length, incNumeric, incChars])

  useEffect(() => {
    passGen();
  } , [length, incChars, incNumeric])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={4}
            max={30}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length : {length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={incNumeric}
            id="numberInput"
            onChange={() => {
              setIncNumeric((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={incChars}
            id="characterInput"
            onChange={() => {
              setIncChars((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
