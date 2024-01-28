import "./App.css";
import MyComponentF from "./MyComponentF";
//import MyComponentC from "./MyComponentC";
// 1. 함수형 컴포넌트
// function App() {
//   const name = "리액트";
//   const flag = "N";
//   const und = undefined;
//   const style = {
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: "48px",
//     fontWeight: "bold",
//     padding: 16,
//   };
//   return (
//     <>
//       <h1 style={style}>리액트야</h1>
//       <h2 className="react">잘작동하니</h2>
//       <h3>내 이름은 {name}이야</h3>
//       {flag === "Y" ? <h1> flag : Y! </h1> : <h1>flag : not Y!</h1>}
//       <h1>{und || "값이 undefined"}</h1>
//     </>
//   );
// }

// 2. 클래스형 컴포넌트
// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

const App = () => {
  return <MyComponentF favoriteNumber={3333}>사잇값!!</MyComponentF>;
};

export default App;
