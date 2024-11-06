const data = {
  title: "Sign Up",
  subtitle: "Enter your name, email and password to create account",
  inputs: [
    { name: "eFirstname"      , label: "Firstname"       , type: "text"    , placeholder: "Please enter firstname..."         },
    { name: "eLastname"       , label: "Lastname"        , type: "text"    , placeholder: "Please enter lastname..."          },
    { name: "eEmail"          , label: "Email"           , type: "email"   , placeholder: "Please enter email..."             },
    { name: "eMobile"         , label: "Mobile"          , type: "text"    , placeholder: "Please enter mobile..."            },
    { name: "ePassword"       , label: "Password"        , type: "password", placeholder: "Please enter password..."          },
    { name: "eConfirmPassword", label: "Confirm Password", type: "password", placeholder: "Please enter confirm password..."  },
  ],
  button: {
    label: "Sign Up",
  }
}

export default data;
