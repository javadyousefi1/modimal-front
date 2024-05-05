// redux
import { useSelector } from "react-redux";
// store
import { RootState } from "../store/store";
// rrd
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { loggedIn, loading, userData } = useSelector(
    (state: RootState) => state.usersSlice
  );
  
  const navigate = useNavigate();

  if (!loading && !loggedIn) {
    navigate("/");
    return;
  }

  if (loading) {
    return (
      <div className="flex justify-center mt-4">
        <h4 className="text-lg">loading</h4>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center mt-4">
        <h4 className="text-lg">please login</h4>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-4">
      {/* profile */}
      <div className="flex items-center justify-center w-10 h-10 bg-primary">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C7.56 3.99 9.54 2 12 2a4.435 4.435 0 0 1 .16 8.87ZM7.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0Z"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </div>
      {/* detail */}
      <div className="flex flex-col items-center mt-3">
        <span className="text-xs">
          {userData?.firstName + " " + userData?.lastName}
        </span>
        <span className="text-sm text-primary-600">{userData?.email}</span>
      </div>
    </div>
  );
};

export default Profile;
