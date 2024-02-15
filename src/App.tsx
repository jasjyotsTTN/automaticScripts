import { useState } from "react";
import { RecoilRoot } from "recoil";

import Form from "./components/form";
import TabView from "./components/tabView";

interface Color {
  color: string;
}

const Tabs = (val: Color) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <TabView
        openTabIndex={openTab}
        onSelectFunction={setOpenTab}
        selectedTextColor={val.color}
      />
    </>
  );
};

export default function App() {
  return (
    <RecoilRoot>
      <div className="sm:px-12 px-2.5">
        <Tabs color="rose" />
        <Form />
      </div>
    </RecoilRoot>
  );
}
