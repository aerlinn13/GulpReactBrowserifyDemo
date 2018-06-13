import axios from 'axios'
import _ from 'lodash'
const domain = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api'

export function getAllCakes(self) {
  axios.get(`${domain}/cakes`)
  .then((response) => {
    localStorage.setItem('data', JSON.stringify(response.data));
    if (!_.isUndefined(self)) {
      self.props.history.push('/')
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function addNewCake(cake, self) {
  const id = Math.floor(Math.random() * 100000000);
  axios.post(`${domain}/cakes`, { id, name: cake.name, comment: cake.comment, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Wiki-cake_1.jpg/1024px-Wiki-cake_1.jpg', yumFactor: cake.yumFactor })
  .then(() =>
    getAllCakes(self)
  ).catch(function (error) {
    console.log(error);
  });
}

export function editCake(cake) {
  axios.put(`${domain}/cakes/${cake.id}`, { id: cake.id, name: cake.name, comment: cake.comment, imageUrl: cake.imageUrl, yumFactor: cake.yumFactor })
  .then(() => {
    getAllCakes()
  }).catch(function (error) {
    console.log(error);
  });
}
