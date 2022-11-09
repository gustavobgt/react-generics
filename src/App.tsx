import "./App.css";
import { List } from "./components/generics/List";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";

function App() {
  return (
    <div className="App">
      <Private isLoggedIn component={Profile} />
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />

      {/**
 * <List
        items={[
          {
            first: "Bruce",
            last: "Wayne",
          },
          {
            first: "Clark",
            last: "Kent",
          },
          {
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
 * 
 */}
    </div>
  );
}

export default App;
