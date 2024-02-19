import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCurrentUser } from "../../context/CurrentUserContext";

import { axiosRes } from "../api/axiosDefault";

const useEditAccountPasswordHook = (confirm_id) => {
  const navigate = useNavigate();

  const currentUser = useCurrentUser();
  const { id } = currentUser;

  useEffect(() => {
    const controller = new AbortController();

    if (id !== confirm_id) {
      navigate("/");
    }

    return () => controller.abort();
  }, [currentUser, navigate, id]);

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      navigate(-1);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return {
    new_password1,
    new_password2,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useEditAccountPasswordHook;
