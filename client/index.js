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

const form = document.querySelector('form')
/////////////////////////////////////////////////////////////////////



const bandContainer = document.querySelector('.band-container')

const getAllArtists = () => {
    axios
    .get("http://localhost:4000/api/bands")
    .then( (res) => {
        createArtistCards(res.data)
    })
}
const createArtist = body => axios.post("http://localhost:4000/api/bands", body).then(res => createArtistCards(res.data))




const createArtistCards = (arr) => {
    bandContainer.innerHTML = ''
    let acArray = []
    for (let i = 0; i < arr.length; i++) {
        const artistCard = document.createElement('div')
        artistCard.classList.add('band')
        artistCard.style.backgroundImage = `url('${arr[i].imageURL}')`
        artistCard.innerHTML =`<h3>${arr[i].name}</h3> <h2>${arr[i].genre}</h2>`
        if(i === 1){
            artistCard.classList.add('active')
        }
        artistCard.addEventListener('click', () => {
            bandContainer.innerHTML = ''
            acArray.forEach(artist => artist.classList.remove('active'))
            artistCard.classList.add('active')
            for (let i = 0; i < acArray.length; i++){
            document.querySelector('.band-container').appendChild(acArray[i])
            }
        })
        acArray.push(artistCard)
        document.querySelector('.band-container').appendChild(artistCard)
    }
}

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#title')
    let genre = document.querySelector('#genre')
    let imageURL = document.querySelector('#band-img')

    let bodyObj = {
        name: name.value,
        genre: genre.value, 
        imageURL: imageURL.value
    }

    createArtist(bodyObj)

    name.value = ''
    genre.value = ''
    imageURL.value = ''
}

form.addEventListener('submit', submitHandler)

getAllArtists();




