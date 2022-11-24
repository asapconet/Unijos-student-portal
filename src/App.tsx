import React from "react";
import SidebarWithHeader from "./components/HomeLayout";
import StudentArea from "./components/studentArea";

const App = () => {
  return (
    <>
      <SidebarWithHeader>
        <StudentArea />
      </SidebarWithHeader>
    </>
  );
};

export default App;
