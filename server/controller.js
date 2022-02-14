let globalId = 4;

let bands = [
    {
        id : 1,
        name : "Northlane",
        genre : 'Metalcore',
        imageURL : "https://lastfm.freetls.fastly.net/i/u/ar0/a44606eddcf52feed3664e5358448246.jpg"
    },
    {
        id : 2,
        name : "J. Cole",
        genre : "Rap/Hip-hop",
        imageURL : "https://i.scdn.co/image/ab6761610000e5ebadd503b411a712e277895c8a"
    },
    {
        id : 3,
        name : "Twenty-One Pilots",
        genre : "Alternative",
        imageURL : "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2016/05/31/Style/Images/twentyonepilots.promo4-JabariJacobs2.jpg?t=20170517"
    }
]



module.exports = {
    getCompliment : (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        },
    getTruth : (req,res) => {
        const truths = ['You may never become a Jedi, but you can get pretty close',
                        'When a friend pulls up in the Oscar Meyer wienermobile and says to get in. You get in.',
                        "Don't go looking for super powers. You'll probably end up dead.",
                        'When in doubt, moon walk it out.',
                        'When the opportunity to crack a  dad joke presents itself, it must be cracked. That is law.']

        let randomIndex = Math.floor(Math.random() * truths.length);
        let randomTruth = truths[randomIndex];

        res.status(200).send(randomTruth)
    },
    getAnimal :  (req,res) => {
        const animals = ['animal-muppet-gif.gif', 'cow-gif.gif', 'crab-gif.gif', 'hot-DOG-gif.gif', 'kangaroo-gif.gif']
        animals[0].src = 'animal-muppet-gif.gif'

        let randomIndex = Math.floor(Math.random() * animals.length);
        let randomAnimal = animals[randomIndex];

        res.status(200).send(randomAnimal)
    },
    getAllBands : (req, res) => {
        res.status(200).send(bands)
    },
    createBand : (req, res) => {
        let {name, genre, imageURL} = req.body
        let newBand = {
            id : globalId,
            name,
            genre,
            imageURL
        }
        bands.push(newBand);
        res.status(200).send(bands)
        globalId++
        console.log(bands)
    }
}