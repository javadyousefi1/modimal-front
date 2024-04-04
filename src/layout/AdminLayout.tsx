import { ReactNode } from "react";

type AdminLayoutPropType = {
  children: ReactNode;
};

const AdminLayout: React.FC<AdminLayoutPropType> = ({ children }) => {
  return (
    <div>
      AdminLayout
      {children}
    </div>
  );
};

export default AdminLayout;
