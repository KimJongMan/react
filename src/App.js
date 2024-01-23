function App() {
  const name = "리액트";
  const flag = "N";

  return (
    <>
      <h1>리액트야</h1>
      <h2>잘작동하니</h2>
      <h3>내 이름은 {name}이야</h3>
      {flag === "Y" ? <h1> flag : Y! </h1> : <h1>flag : not Y!</h1>}
    </>
  );
}

export default App;
