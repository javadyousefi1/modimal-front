import { useEffect, type ReactNode } from "react";
// redux
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
// antd
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

const ProtectedRouteWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();

  const { loggedIn, loading, userData } = useSelector(
    (state: RootState) => state.usersSlice
  );

  useEffect(() => {
    if (!loading && !loggedIn) {
      navigate("/");
    }
    if (!loading && !userData) {
      navigate("/");
    }
  }, [loggedIn, loading,userData]);

  if (loading || !userData) {
    return (
      <div className="container flex flex-col items-start min-h-screen px-6 mt-4 max-w-7xl md:px-0">
        <Spin spinning={loading} fullscreen />
      </div>
    );
  }

  return children;
};

export default ProtectedRouteWrapper;
