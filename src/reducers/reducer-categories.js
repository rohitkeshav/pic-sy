// category images
import all from '../assets/categories/all.png';
import funny from '../assets/categories/funny.jpg';
import fail from '../assets/categories/fail.jpeg';
import anime from '../assets/categories/anime.jpg';
import staffPick from '../assets/categories/staff.jpeg';
import memes from '../assets/categories/meme.jpg';


export default function(){
    return [
        {
            id: 1,
            category_name: 'All',
            img_src: all,
            desc: "All : Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 2,
            category_name: 'Funny',
            img_src: funny,
            desc: "Funny : Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 3,
            category_name: 'Fail',
            img_src: fail,
            desc: "Fail : Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 4,
            category_name: 'Anime',
            img_src: anime,
            desc: "Anime : Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 5,
            category_name: 'Staff picks',
            img_src: staffPick,
            desc: "Staff picks : Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 6,
            category_name: 'Memes',
            img_src: memes ,
            desc: "Memes : Some quick example text to build on the card title and make up the bulk of the card's content."
        }
    ]
}
