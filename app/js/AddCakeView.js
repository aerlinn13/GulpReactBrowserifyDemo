import React from 'react';
import _ from 'lodash';
import { addNewCake } from './api';

const propTypes = {
};

class AddCakeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      comment: '',
      yumFactor: 1,
    };
  }


  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  updateYum(value) {
    this.setState({ ...this.state, yumFactor: value });
  }

  submitCake(cake) {
    addNewCake(this.state, this)
  }

  render() {
    return (
      <div>
      <div className="AddCakeHeader">
      Add New Cake!
      </div>
      <input className="AddCakeNameInput" placeholder="How your cake is called..." value={this.state.name} onChange={(event) => this.setState({ ...this.state, name: event.target.value })}/>
      <input className="AddCakeCommentInput" placeholder="Write your comment here..." value={this.state.comment} onChange={(event) => this.setState({ ...this.state, comment: event.target.value })}/>
      <div className="yumFactorHeader">How yummy is it?</div>
      <div className="yumFactorWrapper">{[0,1,2,3,4].map((item) => <div className={this.state.yumFactor >= item ? 'yumFactorActive' : 'yumFactorNotActive'} onClick={() => this.updateYum(item)}>{item + 1}</div>)}</div>
      <div className="submitButton" onClick={() => this.submitCake(this.state)}>Submit</div>
      <div className="submitButton" onClick={() => this.props.history.push('/')}>Go back</div>
      </div>
    );
  }
}

AddCakeView.propTypes = propTypes;

export default AddCakeView;
