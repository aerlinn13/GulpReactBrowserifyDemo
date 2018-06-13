
import React from 'react';
import _ from 'lodash';
import { getAllCakes } from './api';

const propTypes = {
};

class App extends React.Component {

  constructor(props) {
    super(props);
  }


  componentWillMount() {
    getAllCakes();
    window.onpopstate = getAllCakes()
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    if (_.isUndefined(localStorage.getItem('data'))) {
      return <div>Loading...</div>;
    } else {
    console.log(localStorage.getItem('data'))
    const cakesToShow = JSON.parse(localStorage.getItem('data')).map((cake, index) =>
    <div className="cakeCard" key={cake.id} onClick={() => this.props.history.push(`/edit/${cake.id}`)}>
      <img className="cakeImage" src={cake.imageUrl} />
      <div className="cakeName">{cake.name}</div>
    </div>);
    return (
      <div>
        <div className='newLinkWrapper'><a href="/new" className="newLink" >Add new cake!</a></div>
        {cakesToShow}
      </div>
    );
  }
}
}

App.propTypes = propTypes;

export default App;
