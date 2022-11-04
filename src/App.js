import "./App.css";
import { useGetAllPostQuery } from "./services/Posts";

function App() {
  const res = useGetAllPostQuery();
  console.log(res);
  console.log(res.data);

  if (res.isLoading) return <div>Loading Please Wait.......</div>;
  if (res.isError) return <div>An error occured : {res.error.error}</div>;

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
