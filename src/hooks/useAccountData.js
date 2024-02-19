import { useState, useEffect } from "react";
import { axiosReq } from "../api/axiosDefault";
import { CanceledError } from "axios";
import { useAccountData } from "../context/AccountDataContext";

const useAccountData = (id) => {
  const { accountData, setAccountData } = useAccountData();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const getAccount = async () => {
      try {
        const { data: accountData } = await axiosReq.get(`/accounts/${id}/`, {
          signal: controller.signal,
        });
        setAccountData(accountData);
        setLoaded(true);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoaded(true);
      }
    };

    setLoaded(false);
    getAccount();

    return () => controller.abort();
  }, [id, setAccountData]);

  return {
    accountData,
    error,
    loaded,
  };
};

export default useAccountData;
