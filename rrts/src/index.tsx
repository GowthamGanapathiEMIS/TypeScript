import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { App } from "./Component/App";
import reducers from "./Reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// interface AppDetails {
//   color: string;
// }
// interface AppState {
//   count: number;
// }

// class App extends React.Component<AppDetails, AppState> {
//   constructor(props: AppDetails) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   btnInc = (): void => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   btnDec = (): void => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.btnInc}>Inc</button>
//         <button onClick={this.btnDec}>Dec</button>
//         {this.state.count}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App color="red" />, document.getElementById("root"));
