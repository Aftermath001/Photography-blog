import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // "success" or "error"
  const router = useRouter();

  const validCredentials = {
    email: "admin@example.com",
    password: "123456",
  };

  const login = async () => {
    setIsLoading(true);

    if (email === validCredentials.email && password === validCredentials.password) {
      setAlertMessage("Login successful! Redirecting to home...");
      setAlertType("success");

      // Store a session-like state in localStorage
      localStorage.setItem("isLoggedIn", "true");

      setTimeout(async () => {
        await router.push("/"); // Redirect to home on successful login
      }, 1500); 
    } else {
      setAlertMessage("Invalid email or password. Please try again.");
      setAlertType("error");
    }

    setIsLoading(false);

    // Clear alert after 3 seconds
    setTimeout(() => {
      setAlertMessage("");
      setAlertType("");
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="loadingdata flex flex-col flex-center wh_100">
        <Loading />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="loginfront flex flex-center flex-col full-w">
      <Image src="/img/coder.png" width={250} height={250} alt="Coder Logo" />
      <h1>Welcome Admin 🤞</h1>
      <p>
        Visit Our Main Website <a href="">Ranjiv.Photography</a>
      </p>

      {/* Alert Message */}
      {alertMessage && (
        <div className={`alert ${alertType === "success" ? "alert-success" : "alert-error"}`}>
          {alertMessage}
        </div>
      )}

      <div className="login-fields">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={login} className="login-button mt-2">
          Log In
        </button>
        <button
          onClick={() => {
            setEmail(validCredentials.email);
            setPassword(validCredentials.password);
          }}
          className="credential-button mt-2"
        >
          Get Admin Credentials
        </button>
      </div>

      {/* Styling */}
      <style jsx>{`
        .loginfront {
          text-align: center;
        }

        .alert {
          margin-top: 1rem;
          padding: 0.8rem;
          width: 100%;
          max-width: 400px;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
        }

        .alert-success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .alert-error {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .login-fields {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          width: 100%;
          max-width: 400px;
          padding: 2rem;
          background-color: #f7f7f7;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-top: 1.5rem;
        }

        .input-field {
          width: 100%;
          padding: 0.8rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
          transition: border-color 0.3s;
        }

        .input-field:focus {
          border-color: #0070f3;
        }

        .login-button {
          width: 100%;
          padding: 0.8rem;
          font-size: 1rem;
          color: #fff;
          background-color: #0070f3;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .login-button:hover {
          background-color: #005bb5;
        }

        .credential-button {
          background: transparent;
          border: none;
          color: #0070f3;
          font-size: 0.9rem;
          cursor: pointer;
          text-decoration: underline;
          transition: color 0.3s;
        }

        .credential-button:hover {
          color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Login;
