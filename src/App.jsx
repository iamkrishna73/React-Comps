import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Black", value: "black" },
    { label: "Green", value: "green" },
  ];
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div>
      <DropDown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}
export default App;
