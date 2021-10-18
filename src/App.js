import { useState } from "react";
import Item from "./components/Item";

function App() {
  const [newItem, setnewItem] = useState("");
  const [allItems, setAllItems] = useState([]);

  return (
    <main>
      <p className="flash"></p>
      <h1>Grocery Bud</h1>
      <form>
        <input
          type="text"
          name="newItem"
          placeholder="e.g eggs"
          onChange={(e) => {
            setnewItem(e.target.value);
          }}
        />
        <input type="submit" value="Submit" name="submit" />
      </form>
      <div className="all-items">
        {allItems.map(() => {
          return <Item />;
        })}
      </div>
      <button className="clr-btn">Clear Items</button>
    </main>
  );
}

export default App;
