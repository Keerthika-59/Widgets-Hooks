import "./styles.css";
import Accordion from "./components/Accordion";
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
  return (
    <div className="App">
      <br />
      <Accordion items={items} />
    </div>
  );
}
