import axios from "axios";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Loading from "./Loading";
import { Navigate } from "react-router";

const RequireProfileCompleted = ({ children }) => {
  const { user } = use(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) return;

    axios
      .get(`http://localhost:3000/users/${user.uid}`)
      .then((res) => setProfile(res.data.users));
  }, [user]);

  if (!profile) return <Loading />;

  if (!profile.profileCompleted) {
    return <Navigate to="/complete-profile" />;
  }

  return children;
};

export default RequireProfileCompleted;
