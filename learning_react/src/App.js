function Nav(){
  return <h1>hey bruh</h1>
}
function func(){
  return <p>hell nah</p>
}

function App() {
  return (
    <div className="App">
      <Nav/>
      {func()}
      {func()}
      {func()}
      <h1>hi</h1>
    </div>
  );
}

export default App;
