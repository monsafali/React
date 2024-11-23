import Chat from "./components/Chat/Chat";
import Detail from "./components/detail.css/Detail";
import List from "./components/List/List";


const App = () => {
  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default App;
