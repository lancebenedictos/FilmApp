import Footer from "@/components/Footer";

import CursorFollower from "@/components/CursorFollower";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div
      className="flex flex-col min-h-screen relative has-scroll-smooth smooth-scroll"
      id="container"
      data-scroll-container
    >
      <CursorFollower />

      {/* <NavBar /> */}
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
