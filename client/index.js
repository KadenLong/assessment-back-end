document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

document.getElementById("truthButton").onclick = () => {
    axios
        .get("http://localhost:4000/api/truth")
        .then((res) => {
            alert(res.data)
        })
}

document.getElementById("animalButton").onclick = () => {
    axios
        .get("http://localhost:4000/api/animal")
        .then((res) => {
            document.getElementById('animalButton').style.backgroundImage = `url(${res.data})`
            document.getElementById('animalButton').style.backgroundSize = 'cover'
            document.getElementById('animalButton').style.color = 'white'
        })
}

const getAllArtists = () => {
    axios
        .get("http://localhost:4000/api/bands")
        .then( res => createArtistCards(res.data))
}

const createArtistCards = (arr) => {

}

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#title')
    let genre = document.querySelector('#genre')
    let imageURL = document.querySelector('#band-img')

    let bodyObj = {
        name: name.value,
        genre: genre.value, 
        imageURL: band-img.value
    }

    createArtist(bodyObj)

    name.value = ''
    genre.value = ''
    imageURL.value = ''
}