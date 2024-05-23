import axios from 'axios';

function apiCall () {
    // const apiUrl = 'https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json';
    const apiUrl = 'http://127.0.0.1:8000/MenuItem/'
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
