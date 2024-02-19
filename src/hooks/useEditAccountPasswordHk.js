import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../context/CurrentUserContext";

import { axiosRes } from "../api/axiosDefault";

const useEditAccountPasswordHook = (confirm_id) => {
  const history = useHistory();

  const currentUser = useCurrentUser();
  const id = currentUser?.pk;

  useEffect(() => {
    const controller = new AbortController();

    if (id !== confirm_id) {
      history.push("/");
    }

    return () => controller.abort();
  }, [currentUser, history, id]);

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
      history.goBack();
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
