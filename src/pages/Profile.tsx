import { useEffect } from "react";
// redux
import {  useSelector } from "react-redux";
// store
import { RootState } from "../store/store";
// rrd
import { useNavigate } from "react-router-dom";
// antd
import {  Spin,  } from "antd";
// components
import ProfileSidebar from "@/components/user/profile/ProfileSidebar";

const Profile = () => {
  const { loggedIn, loading, userData } = useSelector(
    (state: RootState) => state.usersSlice
  );

  const navigate = useNavigate();


  useEffect(() => {
    if (!loading && !userData) {
      navigate("/");
    }
  }, [userData, loading, loggedIn]);

  if (!loading && !loggedIn) {
    navigate("/");
    return;
  }

  if (loading) {
    return (
      <div className="container flex flex-col items-start min-h-screen px-6 mt-4 max-w-7xl md:px-0">
        <Spin spinning={loading} fullscreen />
      </div>
    );
  }

  return (
    <div className="container flex flex-col items-start min-h-screen px-6 mt-4 max-w-7xl md:px-0">
      <ProfileSidebar />
    </div>
  );
};

export default Profile;
