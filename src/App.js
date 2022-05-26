import "./styles.css";
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
export default function App() {
  const items = [
    {
      title: "What is react?",
      content: "React is a frontend Javascript Library"
    },
    {
      title: "Why we use react?",
      content: "React is a favorite Javascript Library"
    },
    {
      title: "How do weuse  react?",
      content: "React is used by creating components"
    }
  ];

  const options = [
    {
      label: "The Color RED",
      value: "Red"
    },
    {
      label: "The Color GREEN",
      value: "Green"
    },
    {
      label: "A shade of BLUE",
      value: "Blue"
    }
  ];
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="App">
      <br />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
}
