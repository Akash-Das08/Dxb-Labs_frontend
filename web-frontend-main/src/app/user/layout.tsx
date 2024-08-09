import { getPageMetadata } from "@/helpers/getPageMetadata";
export const metadata = getPageMetadata("Users | Sign in");

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
