import ProfileSidebar from "@/components/user/profile/ProfileSidebar";
import ProtectedRouteWrapper from "@/components/shared/ProtectedRouteWrapper";

const Profile = () => {
  return (
    <ProtectedRouteWrapper>
      <div className="container flex flex-col items-start min-h-screen px-6 mt-4 max-w-7xl md:px-0">
        <ProfileSidebar />
      </div>
    </ProtectedRouteWrapper>
  );
};

export default Profile;
