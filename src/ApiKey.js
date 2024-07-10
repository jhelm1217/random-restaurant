import axios from 'axios';

function apiCall () {
<<<<<<< HEAD
    const apiUrl = '';

=======
    // const apiUrl = 'https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json';
    const apiUrl = 'http://127.0.0.1:8000/MenuItem/'
>>>>>>> ad8acb098037bc14c73158a9787d708afea29c32
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
