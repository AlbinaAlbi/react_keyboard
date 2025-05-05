import React from 'react';

type State = {
  keyValue: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    keyValue: '',
  };

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ keyValue: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKeyUp(event);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKeyUp(event);
    });
  }

  render(): React.ReactNode {
    const { keyValue } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyValue
            ? `The last pressed key is [${keyValue}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
