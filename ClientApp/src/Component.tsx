import * as React from 'react';


class Names {
  name?: string;
  callback?: any;
}

class HW extends React.PureComponent<Names> {

  constructor(props: Readonly<Names>) {
    super(props)
    this.state = { click: 0 }
    console.log(this.state);
  }
  UNSAFE_componentWillMount() {
    console.log('will_mount');
  }
  UNSAFE_componentWillUpdate() {
    console.log('will_update');
  }
  calll = () => {
    this.setState({ click: this.state['click'] + 1 });
    this.props.callback(Number(this.state['click']), c => console.log(c));
  }
  render() {
    return (
      <div>
        <div>
          Hello {this.props.name} {this.state['click']}
        </div>
        <div onClick={this.calll}>
          click
      </div>
      </div >
    );
  }
}

export { HW, Names };

