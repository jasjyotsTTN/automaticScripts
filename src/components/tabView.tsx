interface Tabprops {
  openTabIndex: Number;
  onSelectFunction: any;
  selectedTextColor: string;
}

const TabView = (props: Tabprops) => {
  const { openTabIndex, onSelectFunction, selectedTextColor } = props;

  return (
    <div className="grid  grid-cols-3 py-8 ">
      <a
        className={
          "text-xs  font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-center " +
          (openTabIndex === 1
            ? "text-" + selectedTextColor + "-800 bg-slate-200"
            : "text-" + "green" + "-600 ")
        }
        onClick={(e) => {
          e.preventDefault();
          onSelectFunction(1);
        }}
        data-toggle="tab"
        href="#link1"
        role="tablist"
      >
        AWS
      </a>

      <a
        className={
          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-center " +
          (openTabIndex === 2
            ? "text-" + selectedTextColor + "-800 bg-slate-200"
            : "text-" + "black" + "-600 bg-white")
        }
        onClick={(e) => {
          e.preventDefault();
          onSelectFunction(2);
        }}
        data-toggle="tab"
        href="#link2"
        role="tablist"
      >
        AZURE
      </a>

      <a
        className={
          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-center " +
          (openTabIndex === 3
            ? "text-" + selectedTextColor + "-800 bg-slate-200"
            : "text-" + "black" + "-600 bg-white")
        }
        onClick={(e) => {
          e.preventDefault();
          onSelectFunction(3);
        }}
        data-toggle="tab"
        href="#link3"
        role="tablist"
      >
        GCP
      </a>
    </div>
  );
};

export default TabView;
