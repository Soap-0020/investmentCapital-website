import { useNavigate } from "react-router-dom";

const LoginMenu = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Please login</p>
      <button onClick={() => navigate("/auth/login")}>Login</button>
    </div>
  );
};

export default LoginMenu;