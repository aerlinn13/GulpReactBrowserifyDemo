
import React from 'react';
import _ from 'lodash';
import { getAllCakes } from './api';

const propTypes = {
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cakes: getAllCakes(this)
    };
  }


  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    if (_.isUndefined(this.state.cakes)) {
      return <div>Loading...</div>;
    } else {
    const cakesToShow = this.state.cakes.map((cake, index) =>
    <div className="cakeCard" key={index}>
      <img className="cakeImage" src={cake.imageUrl} />
      <div className="cakeName">{cake.name}</div>
    </div>);
    return (
      <div>
        {cakesToShow}
      </div>
    );
  }
}
}

App.propTypes = propTypes;

export default App;
