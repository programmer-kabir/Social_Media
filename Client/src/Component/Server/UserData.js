import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const SendUserData = (data) => {
    const navigate = useNavigate();
  console.log(data);
  const userData = {
    FirstName: data.FirstName,
    LastName: data.LastName,
    BirthDay: data.birthDay,
    Email: data.email,
    Password: data.password,
  };
  axios
    .post(`${import.meta.env.VITE_LOCALHOST_KEY}/users`, userData)
    .then((data) => {
      console.log(data.data);
      // if (data.data.insertedId) {
        // toast.success("user create successfully");
        // navigate("http://localhost:5173");
      // }
    });
};
