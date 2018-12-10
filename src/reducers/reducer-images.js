// kriti
// image grid
// import all from '../assets/imageGrid/all';
// import funny from '../assets/imageGrid/funny';
// import fail from '../assets/imageGrid/fails';
// import anime from '../assets/imageGrid/anime';
// import staffPick from '../assets/imageGrid/staffPicks';
// import memes from '../assets/imageGrid/memes';
// import path from "path";
// // var all = '../assets/imageGrid/all/';
// var funny = '../assets/imageGrid/funny/';
// var fail = '../assets/imageGrid/fails/';
// var anime = '../assets/imageGrid/anime/';
// var staffPick = '../assets/imageGrid/staffPicks/';
// var memes = '../assets/imageGrid/memes/';

var all = [];
var fail =[];
var funny = [];
var anime = [];
var staffPick = [];
var memes = [];
var count = 1;
function helperFunction() {
    while(count <= 5) {
        all.push(require('../assets/imageGrid/all/'+ count + '.jpg'));
        funny.push(require('../assets/imageGrid/funny/'+ count + '.jpg'));
        fail.push(require('../assets/imageGrid/fails/'+ count + '.jpg'));
        anime.push(require('../assets/imageGrid/anime/'+ count + '.jpg'));
        staffPick.push(require('../assets/imageGrid/staffPicks/'+ count + '.jpg'));
        memes.push(require('../assets/imageGrid/memes/'+ count + '.jpg'));
        count++;
    }
    // console.log(all, funny, fail, anime, staffPick, memes);
}

export default function(){
    helperFunction();
    return {
        'All': [
            {
                id: 1,
                categoryName: 'All',
                img_src: all[0]
            },
            {
                id: 2,
                categoryName: 'All',
                img_src: all[1]
            },
            {
                id: 3,
                categoryName: 'All',
                img_src: all[2]
            },
            {
                id: 4,
                categoryName: 'All',
                img_src: all[3]
            },
            {
                id: 5,
                categoryName: 'All',
                img_src: all[4]
            }
        ],
        'Fail': [
            {
                id: 1,
                categoryName: 'Fail',
                img_src: fail[0]
            },
            {
                id: 2,
                categoryName: 'Fail',
                img_src: fail[1]
            },
            {
                id: 3,
                categoryName: 'Fail',
                img_src: fail[2]
            },
            {
                id: 4,
                categoryName: 'Fail',
                img_src: fail[3]
            },
            {
                id: 5,
                categoryName: 'Fail',
                img_src: fail[4]
            }
        ],
        'Funny': [
            {
                id: 1,
                categoryName: 'Funny',
                img_src: funny[0]
            },
            {
                id: 2,
                categoryName: 'Funny',
                img_src: funny[1]
            },
            {
                id: 3,
                categoryName: 'Funny',
                img_src: funny[2]
            },
            {
                id: 4,
                categoryName: 'Funny',
                img_src: funny[3]
            },
            {
                id: 5,
                categoryName: 'Funny',
                img_src: funny[4]
            }
        ],
        'Anime': [
            {
                id: 1,
                categoryName: 'Anime',
                img_src: anime[0]
            },
            {
                id: 2,
                categoryName: 'Anime',
                img_src: anime[1]
            },
            {
                id: 3,
                categoryName: 'Anime',
                img_src: anime[2]
            },
            {
                id: 4,
                categoryName: 'Anime',
                img_src: anime[3]
            },
            {
                id: 5,
                categoryName: 'Anime',
                img_src: anime[4]
            }
        ],
        'Staff picks': [
            {
                id: 1,
                categoryName: 'StaffPick',
                img_src: staffPick[0]
            },
            {
                id: 2,
                categoryName: 'StaffPick',
                img_src: staffPick[1]
            },
            {
                id: 3,
                categoryName: 'StaffPick',
                img_src: staffPick[2]
            },
            {
                id: 4,
                categoryName: 'StaffPick',
                img_src: staffPick[3]
            },
            {
                id: 5,
                categoryName: 'StaffPick',
                img_src: staffPick[4]
            }
        ],
        'Memes': [
            {
                id: 1,
                categoryName: 'Memes',
                img_src: memes[0]
            },
            {
                id: 2,
                categoryName: 'Memes',
                img_src: memes[1]
            },
            {
                id: 3,
                categoryName: 'Memes',
                img_src: memes[2]
            },
            {
                id: 4,
                categoryName: 'Memes',
                img_src: memes[3]
            },
            {
                id: 5,
                categoryName: 'Memes',
                img_src: memes[4]
            }
        ]
    }
}
