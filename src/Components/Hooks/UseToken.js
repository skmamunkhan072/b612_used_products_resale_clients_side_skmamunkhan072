import { serverUrl } from "./AllUrl/AllUrl";

const { useState, useEffect } = require("react");

export const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`${serverUrl}/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.accessToken) {
            localStorage.setItem("access_Token", data?.accessToken);
            setToken(data?.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};
