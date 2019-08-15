import React from "react";

function SignupForm(props) {
  const formData = {
    firstname: "Priyanka",
    lastname: "Jalan",
    email: "priyankajalan@gmail.com",
    password: "Demo1234"
  };
  return (
    <button
      onClick={() => props.signupHandler(formData)}
      className="btn btn-primary"
    >
      Submit
    </button>
  );
}

export default SignupForm;
