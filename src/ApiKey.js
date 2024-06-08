import axios from 'axios';

function apiCall () {
    const apiUrl = '';

    console.log('HERE: >>>>>>>>>>>')
    axios.get(apiUrl)
    .then(response => {
        console.log(response.data);
    })
    .catch(error =>{
        console.log(error)
    })
}

export default apiCall 

  // this api call can go inside a function
  // we can that function from another file
