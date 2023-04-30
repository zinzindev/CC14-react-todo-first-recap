function App() {
  const Cards = ({ title }) => (
    <div
      role="button"
      className="w-[300px] h-[100px] shadow-md hover:shadow-white text-white flex justify-center rounded-lg select-none cursor-pointer active:shadow-inner"
      children={title}
    />
  );
  const topic = [
    "components",
    "props",
    "Import & Export",
    "Function & Trigger",
    "Event Target",
    "useState",
    "rerender effect",
    "Promise object",
    "Resolve Reject",
    "then catch",
    "async await",
    "try catch",
    "error object",
    "fetch",
    "axios",
    "useEffect",
    "useContext",
  ];
  return (
    <div className="w-screen h-screen flex flex-col item-center items-center gap-4 bg-slate-700 py-20 ">
      {topic.map((i, d) => (
        <Cards key={d} title={i} />
      ))}
    </div>
  );
}

export default App;
