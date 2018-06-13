import axios from 'axios'

const domain = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api'

export function getAllCakes(self) {
  axios.get(`${domain}/cakes`)
  .then((response) => self.setState({ cakes: response.data }))
  .catch(function (error) {
    console.log(error);
  });
}
