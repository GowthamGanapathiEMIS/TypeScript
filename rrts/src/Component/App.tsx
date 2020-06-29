import React from "react";
import { connect } from "react-redux";
import { ToDo, FetchAction, DeleteAction } from "../Actions";
import { StoreState } from "../Reducers";

interface AppProps {
  todo: ToDo[];
  FetchAction: Function;
  DeleteAction: typeof DeleteAction;
}
interface AppState {
  fetched: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetched: false };
  }
  onBtnClick = (): void => {
    this.props.FetchAction();
    this.setState({ fetched: true });
  };
  componentDidUpdate = (prevProps: AppProps): void => {
    if (!prevProps.todo.length && this.props.todo.length) {
      this.setState({ fetched: false });
    }
  };
  helper = (): JSX.Element[] => {
    return this.props.todo.map((todo: ToDo) => {
      return (
        <div key={todo.id} onClick={() => this.onDel(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };
  onDel = (id: number): void => {
    this.props.DeleteAction(id);
  };

  render() {
    return (
      <div>
        <button onClick={this.onBtnClick}>Fetch</button>
        {this.state.fetched ? "Loading..." : null}
        {this.helper()}
      </div>
    );
  }
}
const mapStateToProps = (state: StoreState): { todo: ToDo[] } => {
  return { todo: state.todo };
};

export const App = connect(mapStateToProps, { FetchAction, DeleteAction })(
  _App
);
