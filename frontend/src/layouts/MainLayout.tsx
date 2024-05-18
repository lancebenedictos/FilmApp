import Footer from "@/components/Footer";

import CursorFollower from "@/components/CursorFollower";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div
      className="flex flex-col min-h-screen relative"
      data-scroll-container
      id="container"
    >
      <CursorFollower />

      {/* <NavBar /> */}

      <div className="flex-1">{children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
