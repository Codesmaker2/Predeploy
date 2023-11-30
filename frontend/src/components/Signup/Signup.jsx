import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { BiCamera } from "react-icons/bi";
import { IoPersonCircle } from "react-icons/io5";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setSelectedGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [facebooklink, setFacebooklink] = useState("");
  const [suggestedNumbers, setSuggestedNumbers] = useState([]);

  const [avatar, setAvatar] = useState(null);

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const input = phoneNumber;
    // Remove any non-numeric characters
    const numericInput = input.replace(/[^0-9]/g, "");

    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const isValidPassword = regex.test(password);
    setIsValid(isValidPassword);

    const smallLetters = /^(?=.*[a-z])(?=.*\d).{8,}$/;
    const isnotValidPassword = smallLetters.test(password);
    setIsValid(isnotValidPassword);

    // You can replace this with an API call to fetch suggested numbers based on user input
    // For this example, we'll simulate some suggested numbers.
    const suggested = ["ex.090****567", " 091****678", "092****789"].filter(
      (number) => number.startsWith("09" + phoneNumber)
    );
    setSuggestedNumbers(suggested);

    if (password === confirmpassword) {
      // Passwords match, you can submit the form or perform other actions here.
      console.log("Passwords match!");
      setPasswordMatch(true);
    } else {
      // Passwords do not match, display an error message.
      console.log("Passwords do not match!");
      setPasswordMatch(false);
    }

    if (password.length < 8) {
      setPassword(password);
      return;
    }

    if (password >= 8) {
      setPassword("");
      setConfirmPassword("");
      return;
    }

    //    if (regex !== password){
    //   setIsValid(isValidPassword)
    //    return;
    //  }

    // Continue with form submission logic here
    // If passwords match, you can submit the form data
    console.log("Form submitted");

    if (password !== confirmpassword) {
      setPasswordMatch(false);
      return;
    }

    // Continue with form submission logic here
    // If passwords match, you can submit the form data
    console.log("Form submitted");

    const nameParts = name.split(" ");

    if (nameParts.length >= 2) {
      // Ensure each part is a valid name (text characters only, capitalized first letters)
      const formattedName = nameParts
        .map((part) =>
          part
            .replace(/[^a-zA-Z\s]/g, "")
            .replace(/\b\w/g, (match) => match.toUpperCase())
        )
        .join(" ");

      setName(formattedName);
      setError("");
      setIsNameValid(true);
    } else {
      setName("");
      setError("Please provide your full name (first name and last name).");
      setIsNameValid(false);
    }

    if (isNameValid) {
      // The name is valid, you can proceed with form submission or any other action here
      console.log("Submitting the form with valid name:", name);
    } else {
      // The name is not valid, do not submit the form
      console.log("Name is not valid. Please correct the input.");
    }

    // if(isNameValid === !name.length){
    //  setIsNameValid(false)
    // }
    if (!isNameValid || !nameParts) {
      return "Please provide the all fields!";
    }

    // Limit the input to 11 digits
    if (numericInput.length <= 11) {
      setPhoneNumber(numericInput);
    }

    if (phoneNumber.length !== 11) {
      return setErrorMessage("Must be exactly 11 digits & start with (09)");
    } else {
      // Perform your submit logic here, e.g., send the phone number to the server.
      // If the input is valid, you can reset the error message and proceed with submission.
      setErrorMessage("");
      // Add your submission code here.
    }

    axios
      .post(`${server}/user/create-user`, {
        name,
        phoneNumber,
        gender,
        email,
        password,
        avatar,
        facebooklink,
      })
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setSelectedGender("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAvatar();
        setFacebooklink("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div
      className="min-h-screen bg-blue-700 flex flex-col justify-center  "
      //   style={{
      //     backgroundImage: "url(https://okcredit-blog-images-prod.storage.googleapis.com/2022/01/mineralwater2.jpg)",
      // }}
    >
   
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-blue-700 py-3 px-8 shadow shadow-white rounded-lg">
          <form className="" onSubmit={handleSubmit}>
            <h2 className="text-center text-[22px]  text-white ">
              Register as a New User
            </h2>

            <div className="flex items-center justify-center">
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              
              <div className="mt-2 flex items-center">
                <span className="inline-block h-[80px] w-[80px] rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full  border object-cover rounded-full"
                    />
                  ) : (
                    <IoPersonCircle color="white" size={80} />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className=" flex items-center justify-center px-1 py-1 border border-gray-300 rounded-full shadow-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>
                    <BiCamera />
                  </span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            
            <hr />
          

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
              
                {error && <div className="error text-[red]">{error}</div>}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Type Full Name..."
                  name="text"
                  id="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value.replace(/[^A-Za-z ]/g, ""))
                  }
                  className=" h-9 appearance-none block w-full px-3 py-2 border border-gray-500  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
               
              </label>
              <div className="mt-1">
                <select
                  required
                  value={gender}
                  onChange={handleGenderChange}
                  className="h-9 w-full px-2  border border-gray-500  shadow-sm placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                {suggestedNumbers.map((number) => (
                  <div className="text-[green] flex" key={number}>
                    <p>Follow as ex.</p>
                    {number}{" "}
                  </div>
                ))}
             
                {errorMessage && (
                  <div className="error-message text-red-500 max-400px:text-[12px]">
                    {errorMessage}
                  </div>
                )}
                <div></div>
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  placeholder="Type your Number..."
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="number"
                  maxLength={11}
                  required
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value.replace(/\D/g, ""))
                  }
                  className="h-9 appearance-none block w-full px-3 py-2 border border-gray-500  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
              
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  placeholder="Type Email Address..."
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 appearance-none block w-full px-3 py-2 border border-gray-500  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
              
                {/* {!password &&(
                    <p style={{ color: 'orange'}} className=" max-400px:text-[12px]">Password atleast 8 characters!.</p>
                )} */}
                {!isValid && (
                  <p style={{ color: "red" }} className="max-400px:text-[0.8em]">
                    Password must be at least 8 characters long and contain at
                    least one number and letters.
                  </p>
                )}
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  placeholder="Type Password..."
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  style={{ borderColor: isValid ? "initial" : "red" }}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-9 appearance-none block w-full px-3 py-2 border border-gray-500  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div>
              {!passwordMatch && (
                <p style={{ color: "red" }} className="max-400px:text-[0.8em]">
                  Passwords do not match!
                </p>
              )}

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
              
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  placeholder="Confirm Password..."
                  name="password"
                  autoComplete="current-password"
                  required
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-9 appearance-none block w-full px-3 py-2 border border-gray-500  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="facebook"
                className="block text-sm font-medium text-gray-700"
              >
             
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Copy your Facebook Profile link..."
                  name="facebook"
                  autoComplete="facebook"
                  required
                  value={facebooklink}
                  onChange={(e) => setFacebooklink(e.target.value)}
                  className="h-9 appearance-none block w-full px-3 py-2 border border-gray-500  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                //  disabled={!isNameValid}
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 rounded-md border border-transparent text-sm font-medium  text-blue-600 bg-white hover:bg-blue-700"
              >
                Register
              </button>
            </div>
            <div
              className={`${styles.noramlFlex} w-full items-start justify-center my-2`}
            >
              <h4 className="text-white text-sm font-Roboto">
                Customer
              </h4>
              <Link to="/login" className="text-white pl-2">
                <h4 className="font-Roboto text-sm">Sign in</h4>
              </Link>
            </div>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default Singup;
