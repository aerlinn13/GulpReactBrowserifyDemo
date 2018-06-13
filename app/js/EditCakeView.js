import React from 'react';
import _ from 'lodash';
import { editCake } from './api';

const propTypes = {
};

class EditCakeView extends React.Component {

  constructor(props) {
    super(props);
    const cakes = JSON.parse(localStorage.getItem('data'))
    console.log(cakes)
    const cake = _.find(cakes, {'id': props.params.cakeId});
    this.state = {
      id: cake.id,
      name: cake.name,
      comment: cake.comment,
      imageUrl: cake.imageUrl,
      yumFactor: cake.yumFactor,
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
    editCake(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
      <div className="AddCakeHeader">
      Edit this cake!
      </div>
      <input className="AddCakeCommentInput" placeholder="Write your comment here..." value={this.state.comment} onChange={(event) => this.setState({ ...this.state, comment: event.target.value })}/>
      <div className="yumFactorHeader">How yummy is it?</div>
      <div className="yumFactorWrapper">{[0,1,2,3,4].map((item) => <div className={this.state.yumFactor >= item ? 'yumFactorActive' : 'yumFactorNotActive'} onClick={() => this.updateYum(item)}>{item + 1}</div>)}</div>
      <div className="submitButton" onClick={() => this.submitCake(this.state)}>Submit</div>
      <div className="submitButton" onClick={() => this.props.history.push('/')}>Go back</div>
      </div>
    );
  }
}

EditCakeView.propTypes = propTypes;

export default EditCakeView;
