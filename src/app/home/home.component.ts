import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameSearch:string='';
  toppings = new FormControl();
  toppingList: string[] = ['All','2020', '2019', '2018', '2017'];
  selectedYear:any=null;
  closeResult = '';
  selectedMovie:any = null;
  mySong:any=[
    {
      title:"Dil Bechara",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/dil-bechara-et00098454-26-06-2020-12-09-09.jpg",
      releaseYear:"2020",
      DirectedBy:"Mukesh Chhabra",
      Starring:"Sushant Singh Rajput,Sanjana Sanghi,Saif Ali Khan",
      songList:[{
       "songTitle": "Dil Bechara",
        "singer": "A.R.Rahman",
        "length": "2:43"
      }, {
       "songTitle": "Taare Ginn",
        "singer": "Shreya Ghoshal, Mohit Chauhan",
        "length": "4:17"
      }, {
       "songTitle": "Khulke Jeene Ka",
        "singer": "Arijit Singh, Shashaa Tirupati",
        "length": "4:06"
      }, {
       "songTitle": "Main Tumhara",
        "singer": "Jonita Gandhi, Hriday Gattani",
        "length": "4:18"
      }, {
       "songTitle": "Maskhari",
        "singer": "Sunidhi Chauhan, Hriday Gattani",
        "length": "3:15"
      }, {
       "songTitle": "Afreeda",
        "singer": "Sanaa Moussa, Raja Kumari",
        "length": "3:21"
      }, {
       "songTitle": "Mera Naam Kizzie",
        "singer": "Aditya Narayan, Poorvi Koutish",
        "length": "4:04"
      }, {
       "songTitle": "Friendzone",
        "singer": "A.R.Rahman",
        "length": "3:06"
      }, {
       "songTitle": "The Horizone of Saudade",
        "singer": "A.R.Rahman",
        "length": "2:46"
      }]
    },
    {
      title:"Lootcase",
      imgUrl:"https://static.toiimg.com/thumb/msid-69875221,width-219,height-317,imgsize-53721/69875221.jpg",
      releaseYear:"2020",
      DirectedBy:"Rajesh Krishnan",
      Starring:"Kunal Khemu,Gajraj Rao,Vijay Raaz,Ranvir Shorey,Rasika Dugal",
    },
    {
      title:"Virgin Bhanupriya",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/virgin-bhanupriya-et00129228-10-07-2020-07-29-43.jpg",
      releaseYear:"2020",
      DirectedBy:"Ajay Lohan",
      Starring:"Urvashi Rautela,Gautam Gulati",
      songList:[{
       "songTitle": "Dil Apni Haddon Se",
        "singer": "Jyotica Tangri",
        "length": "4:09"
      },
      {
       "songTitle": "Kangna Vilayati",
        "singer": "Jyotica Tangri",
        "length": "3:00"
      },
      {
       "songTitle": "Beat Pe Thumka",
        "singer": "Jyotica Tangri",
        "length": "3:21"
      },
      {
       "songTitle": "Virgin Bhanupriya - Title Track",
        "singer": "Devi Nagi",
        "length": "2:42"
      }
    ]
    },
    {
      title:"Shikara",
      imgUrl:"https://i0.wp.com/www.wholedope.com/wp-content/uploads/2020/02/Shikara_film_poster-1.jpg?fit=240%2C320&ssl=1",
      releaseYear:"2020",
      DirectedBy:"Vidhu Vinod Chopra",
      Starring:"Aadil Khan,Sadia Khateeb",
      songList:[{
       "songTitle": "Mar Jaayein Hum",
        "singer": "Papon, Shradha Mishra",
        "length": "3:58"
      }, {
       "songTitle": "Ghar Bhara Sa Lage",
        "singer": "Papon, Shreya Ghoshal",
        "length": "3:47"
      }, {
       "songTitle": "Shukrana Gul Khile",
        "singer": "Ahmad Mir",
        "length": "2:36"
      }, {
       "songTitle": "Chattar Pattar",
        "singer": "Mika Singh",
        "length": "3:38"
      }, {
       "songTitle": "Teri Arzoo Mein",
        "singer": "Papon, Kaushiki Chakraborty",
        "length": "4:07"
      }, {
       "songTitle": "Ae Wadi Shehzadi",
        "singer": "Papon",
        "length": "3:35"
      }, {
       "songTitle": "Umr Guzri",
        "singer": "Aadil Khan",
        "length": "2:26"
      }]
    },
    {
      title:"Baaghi 3",
      imgUrl:"https://timesofindia.indiatimes.com/photo/67156843.cms",
      releaseYear:"2020",
      DirectedBy:"Ahmed Khan",
      Starring:"Tiger Shroff,Ritesh Deshmukh,Shraddha Kapoor",
      songList:[{
       "songTitle": "Dus Bahane 2.0",
        "singer": "Vishal Dadlani, Shekhar Ravjiani, KK, Shaan, Tulsi Kumar",
        "length": "3:21"
      },
      {
       "songTitle": "Bhankas",
        "singer": "Bappi Lahiri, Dev Negi, Jonita Gandhi",
        "length": "2:38"
      },
      {
       "songTitle": "Do You Love Me",
        "singer": "Nikhita Gandhi",
        "length": "2:42"
      },
      {
       "songTitle": "Get Ready To Fight -Reloaded",
        "singer": "Pranaay Rijia Pranaay Rijia, Siddharth Basrur",
        "length": "2:51"
      },
      {
       "songTitle": "Faaslon Mein",
        "singer": "Sachet Tandon",
        "length": "4:41"
      },
      {
       "songTitle": "Tujhe Rab Mana",
        "singer": ":Shaan",
        "length": "4:59"
      }
    ]
    },
    {
      title:"Tanhaji",
      imgUrl:"https://i.pinimg.com/474x/78/c6/45/78c645d6d772693abba9beb1062c8040.jpg",
      releaseYear:"2020",
      DirectedBy:"Om Raut",
      Starring:"Ajay Devgn,Saif Ali Khan,Kajol",
      songList:[{
       "songTitle": "Shankara Re Shankara",
        "singer": "Mehul Vyas",
        "length": "3:31"
      },
      {
       "songTitle": "Maay Bhavani",
        "singer": "Sukhwinder Singh & Shreya Ghoshal",
        "length": "4:18"
      },
      {
       "songTitle": "Ghamand Kar",
        "singer": "Sachet Tandon & Parampara Thakur",
        "length": "4:42"
      },
      {
       "songTitle": "Tinak Tinak",
        "singer": "Harshdeep Kaur",
        "length": "3:54"
      }
    ]
    },
    {
      title:"Angrezi Medium",
      imgUrl:"https://static.sacnilk.com/movie/2020/5403.jpg",
      releaseYear:"2020",
      DirectedBy:"Homi Adajania",
      Starring:"Irrfan Khan,Radhika Madan,Deepak Dobriyal,Kareena Kapoor Khan",
      songList:[{
       "songTitle": "Ek Zindagi",
        "singer": "Tanishkaa Sanghvi, Sachin-Jigar",
        "length": "2:50"
      },
      {
       "songTitle": "Nachan Nu Jee Karda",
        "singer": "Romy, Nikhita Gandhi",
        "length": "2:48"
      },
      {
       "songTitle": "Kudi Nu Nachne De",
        "singer": "Vishal Dadlani, Sachin-Jigar",
        "length": "2:52"
      },
      {
       "songTitle": "Laadki",
        "singer": "Rekha Bhardwaj, Sachin-Jigar",
        "length": "3:12"
      }

    ]
    },
    {
      title:"Shubh Mangal Zyada Saavdhan",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/shubh-mangal-zyada-saavdhan-et00111934-13-09-2019-05-26-20.jpg",
      releaseYear:"2020",
      DirectedBy:"Hitesh Kewalya",
      Starring:"Ayushmann Khurrana,Jitendra Kumar,Neena Gupta,Gajraj Rao",
      songList:[{
       "songTitle": "Gabru",
		"singer": "Romy",
		"length": "2:45"
	},
	{
		"title": "Mere Liye Tum Kaafi Ho",
		"singer": "Ayushmann Khurrana",
		"length": "2:12"
	},
	{
		"title": "Arey Pyaar Kar Le",
		"singer": "Bappi Lahiri, Ayushmann Khurrana Rap: Ikka",
		"length": "2:44"
	},
	{
		"title": "Ooh La La",
		"singer": "Sonu Kakkar, Neha Kakkar, Tony Kakkar",
		"length": "3:19"
	},
	{
		"title": "Aisi Taisi",
		"singer": "Mika Singh",
		"length": "2:42"
	},
	{
		"title": "Raakh",
		"singer": "Arijit Singh",
		"length": "3:04"
	},
	{
		"title": "Kya Karte Thay",
		"singer": "Zara Khan",
		"length": "2:48"
	}
]
    },
    {
      title:"Street Dancer 3D",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/street-dancer-3-et00124186-18-01-2020-02-53-18.jpg",
      releaseYear:"2020",
      DirectedBy:"Remo D'Souza",
      Starring:"Varun Dhawan,Shraddha Kapoor,Prabhu Deva,Nora Fatehi",
      songList:[{
       "songTitle": "Muqabla",
        "singer": "Yash Narvekar, Parampara Thakur",
        "length": "2:56"
      },
      {
       "songTitle": "Garmi",
        "singer": "Badshah, Neha Kakkar",
        "length": "3:02"
      },
      {
       "songTitle": "Illegal Weapon 2.0",
        "singer": "Jasmine Sandlas, Garry Sandhu",
        "length": "3:08"
      },
      {
       "songTitle": "Dua Karo",
        "singer": "Arijit Singh, Bohemia, Sachin-Jigar",
        "length": "4:29"
      },
      {
       "songTitle": "Lagdi Lahore Di",
        "singer": "Guru Randhawa Guru Randhawa, Tulsi Kumar",
        "length": "3:35"
      }, {
       "songTitle": "Hindustani",
        "singer": "Shankar Mahadevan, Udit Narayan",
        "length": "2:26"
      }, {
       "songTitle": "Bezubaan Kab Se",
        "singer": "Siddharth Basrur, Jubin Nautiyal, Sachin-Jigar",
        "length": "4:31"
      }, {
       "songTitle": "Pind",
        "singer": "Gurinder Seagal",
        "length": "5:36"
      }, {
       "songTitle": "Nachi Nachi",
        "singer": "Neeti Mohan, Dhvani Bhanushali, Millind Gaba",
        "length": "3:19"
      }, {
       "songTitle": "Gann Deva",
        "singer": "Divya Kumar, Sachin-Jigar",
        "length": "4:01"
      }, {
       "songTitle": "Sip Sip 2.0",
        "singer": "Garry Sandhu, Jasmine Sandlas",
        "length": "3:39"
      }, {
       "songTitle": "Mile Sur",
        "singer": "Navraj Hans, Shalmali Kholgade, Divya Kumar, Vayu, Shashwat Singh, IP Singh, Rakesh Maini",
        "length": "5:53"
      }
    ]
    },
    {
      title:"Malang",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/malang-et00097830-04-03-2019-09-40-11.jpg",
      releaseYear:"2020",
      DirectedBy:"Mohit Suri",
      Starring:"Anil Kapoor,Aditya Roy Kapur,Disha Patani,Kunal Khemu,Amruta Khanvilkar",
      songList:[{
       "songTitle": "Chal Ghar Chalen",
        "singer": "Arijit Singh",
        "length": "5:40"
      },
      {
       "songTitle": "Malang - Title Track",
        "singer": "Ved Sharma",
        "length": "4:47"
      },
      {
       "songTitle": "Humraah",
        "singer": "Sachet Tandon",
        "length": "4:59"
      },
      {
       "songTitle": "Phir Na Milen Kabhi",
        "singer": "Ankit Tiwari",
        "length": "4:59"
      },
      {
       "songTitle": "Hui Malang",
        "singer": "Asees Kaur",
        "length": "3:12"
      },
      {
       "songTitle": "Ho Ja Mast Malang Tu",
        "singer": "Adnan Dhool, Rabi Ahmed Adnan Dhool, Hadiya Hashmi",
        "length": "6:29"
      }
    ]
    },
    {
      title:"Panga",
      imgUrl:"https://timesofindia.indiatimes.com/photo/65485254.cms",
      releaseYear:"2020",
      DirectedBy:"Ashwiny Iyer Tiwari",
      Starring:"Kangana Ranaut,Jassi Gill,Richa Chadda,Neena Gupta",
      songList:[{
       "songTitle": "Panga - Title Track",
        "singer": "Harshdeep Kaur, Divya Kumar, Siddharth Mahadevan",
        "length": "3:19"
      },
      {
       "songTitle": "Dil Ne Kaha",
        "singer": "Shahid Mallya, Asees Kaur",
        "length": "4:46"
      },
      {
       "songTitle": "Jugnu",
        "singer": "Sunny Hindustani, Shankar Mahadevan",
        "length": "4:40"
      },
      {
       "songTitle": "Bibby Song",
        "singer": "Annu Kapoor, Sherry",
        "length": "2:50"
      },
      {
       "songTitle": "Wahi Hai Raste",
        "singer": "Mohan Kannan, Asees Kaur",
        "length": "4:28"
      },
      {
       "songTitle": "Dil Ne Kaha(Reprise)",
        "singer": "Jassi Gill, Asees Kaur",
        "length": "3:52"
      }
    ]
    },
    {
      title:"Gulabo Sitabo",
      imgUrl:"https://images-na.ssl-images-amazon.com/images/I/91KkctHTZjL._AC_UL320_SR240,320_.jpg",
      releaseYear:"2020",
      DirectedBy:"Shoojit Sircar",
      Starring:"Amitabh Bachchan,Ayushmann Khurrana",
      songList:[{
       "songTitle": "Madari Ka Bandar",
        "singer": "Tochi Raina, Anuj Garg",
        "length": "4:10"
      },
      {
       "songTitle": "Jootam Phenk",
        "singer": "Piyush Mishra",
        "length": "2:07"
      },
      {
       "songTitle": "Kanjoos",
        "singer": "Mika Singh",
        "length": "2:50"
      },
      {
       "songTitle": "Kya Leke Aayo Jagme",
        "singer": "Vinod Dubey",
        "length": "3:01"
      },
      {
       "songTitle": "Do Din Ka Ye Mela - Reprise",
        "singer": "Tochi Raina",
        "length": "3:33"
      },
      {
       "songTitle": "Budhau - Reprise",
        "singer": "Bhanwari Devi",
        "length": "3:15"
      },
      {
       "songTitle": "Do Din Ka Ye Mela",
        "singer": "Rahul Ram",
        "length": "3:33"
      },
      {
       "songTitle": "Budhau",
        "singer": "Bobby Cash",
        "length": "3:38"
      },
      {
       "songTitle": "Gulabo Sitabo Theme",
        "singer": "Bobby Cash",
        "length": "3:41"
      },
      {
       "songTitle": "Gulabo Sitabo Clarinet Theme",
        "singer": "Bobby Cash",
        "length": "0:56"
      }
    ]
    },
    {
      title:"Chhapaak",
      imgUrl:"https://static.toiimg.com/thumb/msid-67156981,width-219,height-317,imgsize-37436/67156981.jpg",
      releaseYear:"2020",
      DirectedBy:"Meghna Gulzar",
      Starring:"Deepika Padukone",
      songList:[{
       "songTitle": "Nok Jhok",
        "singer": "Siddharth Mahadevan",
        "length": "3:58"
      },
      {
       "songTitle": "Chhapaak – Title Track",
        "singer": "Arijit Singh",
        "length": "4:39"
      },
      {
       "songTitle": "Khulne Do",
        "singer": "Arijit Singh",
        "length": "2:40"
      },
      {
       "songTitle": "Sab Jhulas Gaya",
        "singer": "Arijit Singh",
        "length": "1:24"
      }
    ]
    },
    {
      title:"Love Aaj Kal",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/love-aaj-kal-2-et00099651-26-03-2019-05-59-03.jpg",
      releaseYear:"2020",
      DirectedBy:"Imtiaz Ali",
      Starring:"Kartik Aaryan,Sara Ali Khan,Randeep Hooda,Arushi Sharma",
      songList:[{
       "songTitle": "Twist",
        "singer": "Neeraj Shridhar, Suzanne D'Mello, Saif Ali Khan (Additional Vocals",
        "length": "5:01"
      },
      {
       "songTitle": "Chor Bazaari",
        "singer": "Neeraj Shridhar, Sunidhi Chauhan",
        "length": "4:19"
      },
      {
       "songTitle": "Aahun Aahun",
        "singer": "Master Saleem, Neeraj Shridhar, Suzanne D'Mello",
        "length": "4:45"
      },
      {
       "songTitle": "Yeh Dooriyaan",
        "singer": "Mohit Chauhan",
        "length": "5:36"
      },
      {
       "songTitle": "Aaj Din Chadheya",
        "singer": "Rahat Fateh Ali Khan",
        "length": "5:17"
      },
      {
       "songTitle": "Thoda Thoda Pyaar",
        "singer": "Sunidhi Chauhan",
        "length": "4:04"
      },
      {
       "songTitle": "Main Kya Hoon",
        "singer": "KK",
        "length": "5:48"
      },
      {
       "songTitle": "Twist(Remix)",
        "singer": "Neeraj Shridhar",
        "length": "4:04"
      },
      {
       "songTitle": "Chor Bazaari(Remix)",
        "singer": "Neeraj Shridhar, Sunidhi Chauhan",
        "length": "3:50"
      },
      {
       "songTitle": "Aahun Aahun(Remix)",
        "singer": "Master Saleem, Neeraj Shridhar, Suzanne D'Mello",
        "length": "4:36"
      }
    ]
    },
    {
      
      title:"Jawaani Jaaneman",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/jawaani-jaaneman-exclusively-for-women-et00125428-31-01-2020-09-07-19.jpg",
      releaseYear:"2020",
      DirectedBy:"Nitin Kakkar",
      Starring:"Saif Ali Khan,Tabu,Alaya Furniturewala",
      songList:[{
       "songTitle": "Gallan Kardi",
        "singer": "Jazzy B, Jyotica Tangri",
        "length": "3:14"
      },
      {
       "songTitle": "Ole Ole 2.0",
        "singer": "Amit Mishra",
        "length": "2:25"
      },
      {
       "songTitle": "Bandhu Tu Mera",
        "singer": "Yaser Desai",
        "length": "3:01"
      },
      {
       "songTitle": "Mere Baabula (Madhaniyaa)",
        "singer": "Harshdeep Kaur, Akhil Sachdeva",
        "length": "6:02"
      }
    ]
    },
    {
      title:"Bhoot Part One: The Haunted Ship",
      imgUrl:"https://static.sacnilk.com/movie/2020/5333.jpg",
      releaseYear:"2020",
      DirectedBy:"Bhanu Pratap Singh",
      Starring:"Vicky Kaushal",
      songList:[{
       "songTitle": "Channa Ve",
        "singer": "Akhil Sachdeva, Mansheel Gujral",
        "length": "3:31"
      }]
    },

    {
      title:"Thappad",
      imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Thappad_film_poster.jpg/220px-Thappad_film_poster.jpg",
      releaseYear:"2020",
      DirectedBy:"Anubhav Sinha",
      Starring:"Taapsee Pannu",
      songList:[{
       "songTitle": "Ek Tukda Dhoop",
        "singer": "Raghav Chaitanya",
        "length": "5:25"
      },
      {
       "songTitle": "Dancing In The Sun",
        "singer": "Sharvi Yadav",
        "length": "3:49"
      },
      {
       "songTitle": "Hayo Rabba",
        "singer": "Suvarna Tiwari",
        "length": "5:02"
      }
    ]
    },
    {
      title:"Kabir Singh",
      imgUrl:"data:image/jpeg;base64,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",
      releaseYear:"2019",
      DirectedBy:"Sandeep Vanga",
      Starring:"Shahid Kapoor,Kiara Advani",
      songList:[{
       "songTitle": "Bekhayali",
        "singer": "Sachet Tandon",
        "length": "6:11"
      },
      {
       "songTitle": "Kaise Hua",
        "singer": "Vishal Mishra",
        "length": "3:54"
      },
      {
       "songTitle": "Tujhe Kitna Chahne Lage",
        "singer": "Arijit Singh",
        "length": "4:44"
      },
      {
       "songTitle": "Mere Sohneya",
        "singer": "Sachet Tandon, Parampara Thakur",
        "length": "3:13"
      },
      {
       "songTitle": "Tera Ban Jaunga",
        "singer": "Akhil Sachdeva, Tulsi Kumar",
        "length": "3:56"
      },
      {
       "songTitle": "Yeh Aaina",
        "singer": "Shreya Ghoshal",
        "length": "5:11"
      },
      {
       "songTitle": "Pehla Pyaar",
        "singer": "Armaan Malik",
        "length": "4:32"
      },
      {
       "songTitle": "Bekhayali",
        "singer": "Arijit Singh",
        "length": "6:10"
      },
      {
       "songTitle": "Tujhe Kitna Chahein Aur",
        "singer": "Jubin Nautiyal",
        "length": "4:36"
      }
    ]
    },
    {
      title:"Bypass Road",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/bypass-road-et00105122-18-06-2019-12-07-49.jpg",
      releaseYear:"2019",
      DirectedBy:"Naman Nitin Mukesh",
      Starring:"Neil Nitin Mukesh,Adah Sharma,Shama Sikander",
      songList:[{
       "songTitle": "So Gaya Yeh Jahan",
        "singer": "Jubin Nautiyal, Saloni Thakkar",
        "length": "2:32"
      },
      {
       "songTitle": "Tanha Mera Pyaar",
        "singer": "Mohit Chauhan",
        "length": "5:17"
      },
      {
       "songTitle": "Ishq Maine Paaya",
        "singer": "Sharib Sabri",
        "length": "3:32"
      }
    ]
    },
    {
      title:"Super 30",
      imgUrl:"https://upload.wikimedia.org/wikipedia/en/2/29/Super_30_The_Film.jpg",
      releaseYear:"2019",
      DirectedBy:"Vikas Bahl",
      Starring:"Hrithik Roshan,Mrunal Thakur,Virendra Saxena, Pankaj Tripathi,Aditya Srivastava,Amit Sadh",
      songList:[{
       "songTitle": "Jugraafiya",
        "singer": "Udit Narayan, Shreya Ghoshal",
        "length": "4:34"
      },
      {
       "songTitle": "Paisa",
        "singer": "Vishal Dadlani",
        "length": "3:52"
      },
      {
       "songTitle": "Basanti No Dance",
        "singer": "Prem Areni, Janardan Dhatrak, Divya Kumar, Chaitally Parmar",
        "length": "5:04"
      },
      {
       "songTitle": "Question Mark",
        "singer": "Hrithik Roshan",
        "length": "2:49"
      },
      {
       "songTitle": "Niyam Ho",
        "singer": "Arohi Mhatre, Aditi Prabhudesai, Pragati Joshi, Maithili Panse, Sonal Naik, Rucha Soman, Deepti Rege, Deepanshi Nagar, Ann Fernandes, Dr. Pallavi Shyam Sundar, Shivika Rajesh, Riddhi Sampat, Kinjal Shah, Umesh Joshi, Vijay Dhuri, Mandar Pilvalkar, Vivek Naik, Rahul Chitnis, Saurabh Wakhare, Janardan Dhatrak, Gaurav Medatwal, Chaitanya Shinde, Abhishek Jhawar, Nimish Shah, Yash Kapoor, Mayukh Pareek",
        "length": "4:00"
      }
    ]
    },
    {
      title:"Bala",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/balah0n-et00102272-06-05-2019-04-10-50.jpg",
      releaseYear:"2019",
      DirectedBy:"Amar Kaushik",
      Starring:"Ayushmann Khurrana,Bhumi Pednekar,Yami Gautam",
      songList:[{
       "songTitle": "Don’t Be Shy Again",
        "singer": "Badshah, Shalmali Kholgade, Gurdeep Mehendi",
        "length": "2:43"
      },
      {
       "songTitle": "Naah Goriye",
        "singer": "Harrdy Sandhu, Swasti Mehul",
        "length": "3:04"
      },
      {
       "songTitle": "Pyaar Toh Tha",
        "singer": "Jubin Nautiyal, Asees Kaur",
        "length": "3:50"
      },
      {
       "songTitle": "Tequila",
        "singer": "Divya Kumar, Jigar Saraiya",
        "length": "2:41"
      },
      {
       "songTitle": "Zindagi",
        "singer": "Papon",
        "length": "3:14"
      }
    ]
    },
    {
      title:"India's Most Wanted",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/india-s-most-wanted-et00075580-11-05-2018-11-35-33.jpg",
      releaseYear:"2019",
      DirectedBy:"Raj Kumar Gupta",
      Starring:"Arjun Kapoor,Sudev Nair,Rajesh Sharma,Prashanth Alexander,Shantilal Mukherjee,Aasif khan",
      songList:[{
       "songTitle": "Akela",
        "singer": "Abhijeet Srivastava",
        "length": "4:01"
      },
      {
       "songTitle": "Vande Mataram",
        "singer": "Papon, Altamash Faridi",
        "length": "3:42"
      },
      {
       "songTitle": "Dilbar Jani",
        "singer": "Dev Negi, Nikhita Gandhi",
        "length": "3:10"
      },
      {
       "songTitle": "Matvaare",
        "singer": "Jubin Nautiyal, Sanah Moidutty",
        "length": "4:14"
      }
    ]
    },
    {
      title:"Chhichhore ",
      imgUrl:"https://i.pinimg.com/236x/1f/11/85/1f11851e031c5277fcf560e177854671.jpg",
      releaseYear:"2019",
      DirectedBy:"Nitesh Tiwari",
      Starring:"Sushant Singh Rajput,Shraddha Kapoor,Varun Sharma,Tahir Raj Bhasin,Naveen Polishetty,Tushar Pandey,Prateik Babbar,Saharsh Kumar Shukla,Saanand Verma,Mohammad Samad",
      songList:[{
       "songTitle": "Woh Din",
        "singer": "Arijit Singh",
        "length": "4:18"
      },
      {
       "songTitle": "Khairiyat",
        "singer": "Arijit Singh",
        "length": "4:40"
      },
      {
       "songTitle": "Kal Ki Hi Baat Hai",
        "singer": "KK",
        "length": "4:00"
      },
      {
       "songTitle": "Fikar Not",
        "singer": "Nakash Aziz, Dev Negi, Antara Mitra, Amit Mishra, Sreerama Chandra, Amitabh Bhattacharya",
        "length": "3:09"
      },
      {
       "songTitle": "Control",
        "singer": "Nakash Aziz, Manish J. Tipu, Geet Sagar, Sreerama Chandra, Amitabh Bhattacharya",
        "length": "3:36"
      },
      {
       "songTitle": "Woh Din",
        "singer": "Tushar Joshi",
        "length": "5:12"
      },
      {
       "songTitle": "Khairiyat",
        "singer": "Arijit Singh",
        "length": "4:30"
      }
    ]
    },
    {
      title:"Badla",
      imgUrl:"https://static.toiimg.com/thumb/msid-61979505,width-219,height-317,imgsize-68427/61979505.jpg",
      releaseYear:"2019",
      DirectedBy:"Sujoy Ghosh",
      Starring:"Amitabh Bachchan,Taapsee Pannu,Amrita Singh",
      songList:[{
       "songTitle": "Kyun Rabba",
        "singer": "Armaan Malik",
        "length": "4:52"
      },
      {
       "songTitle": "Aukaat",
        "singer": "Amitabh Bachchan, Amit Mishra, Clinton Cerejo",
        "length": "2:32"
      },

      {
       "songTitle": "Tum Na Aaye",
        "singer": "K. K.",
        "length": "2:59"
      },
      {
       "songTitle": "Badla",
        "singer": "Anupam Roy",
        "length": "4:08"
      },
      {
       "songTitle": "Kyun Rabba(Acoustic)",
        "singer": "Armaan Malik",
        "length": "3:34"
      }
    ]
    },
    {
      title:"Mission Mangal",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/mission-mangal-et00089473-28-11-2018-05-17-55.jpg",
      releaseYear:"2019",
      DirectedBy:"Jagan Shakti",
      Starring:"Akshay Kumar,Vidya Balan,Sonakshi Sinha,Taapsee Pannu,Nithya Menen,Kirti Kulhari,Sharman Joshi,H. G. Dattatreya,Vikram Gokhale",
      songList:[{
       "songTitle": "Dil Mein Mars Hai",
        "singer": "Benny Dayal, Vibha Saraf",
        "length": "3:05"
      },
      {
       "songTitle": "Shaabaashiyaan",
        "singer": "Shilpa Rao, Anand Bhaskar, Abhijeet Srivastava",
        "length": "4:40"
      },
      {
       "songTitle": "Tota Udd (Music and Lyrics : Tanishk Bagchi)",
        "singer": "Raja Hasan, Romi",
        "length": "2:47"
      }
    ]
    },
    {
      title:"The Sky Is Pink",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/the-sky-is-pink-et00082248-22-08-2018-01-02-12.jpg",
      releaseYear:"2019",
      DirectedBy:"Shonali Bose",
      Starring:"Priyanka Chopra Jonas,Farhan Akhtar,Zaira Wasim,Rohit Suresh Saraf",
      songList:[{
       "songTitle": "Dil Hi Toh Hai",
        "singer": "Arijit Singh, Antara Mitra",
        "length": "4:40"
      },
      {
       "songTitle": "Nadaaniyaan",
        "singer": "Arjun Kanungo, Lisa Mishra",
        "length": "4:18"
      },
      {
       "songTitle": "Zindagi",
        "singer": "Arijit Singh",
        "length": "4:09"
      },
      {
       "songTitle": "Pink Gulaabi Sky",
        "singer": "Shashwat Singh, Jonita Gandhi",
        "length": "3:20"
      },
      {
       "songTitle": "Dil Hi Toh Hai",
        "singer": "Sreerama Chandra, Antara Mitra",
        "length": "4:41"
      }
    ]
    },
    {
      title:"Badhaai Ho",
      imgUrl:"https://static.sacnilk.com/movie/2018/1977.jpg",
      releaseYear:"2018",
      DirectedBy:"Amit Ravindrenath Sharma",
      Starring:"Ayushmann Khurrana,Neena Gupta,Gajraj Rao,Surekha Sikri,Sanya Malhotra",
      songList:[{
       "songTitle": "Badhaaiyan Tenu",
        "singer": "Brijesh Shandilya, Romy, Jordan",
        "length": "2:19"
      },
      {
       "songTitle": "Morni Banke",
        "singer": "Guru Randhawa, Neha Kakkar",
        "length": "3:18"
      },
      {
       "songTitle": "Nain Na Jodeen",
        "singer": "Ayushmann Khurrana, Neha Kakkar",
        "length": "4:34"
      },
      {
       "songTitle": "Sajan Bade Senti",
        "singer": "Dev Negi, Harjot Kaur",
        "length": "2:32"
      },
      {
       "songTitle": "Jug Jug Jeeve",
        "singer": "Shubha Mudgal",
        "length": "4:46"
      }
    ]
    },
    {
      title:"Gold 2018",
      imgUrl:"https://i.pinimg.com/474x/91/21/4a/91214a96629cfd3b1341df96e0f70ebd.jpg",
      releaseYear:"2018",
      DirectedBy:"Reema Kagti",
      Starring:"Akshay Kumar,Mouni Roy,Kunal Kapoor,Amit Sadh,Vineet Kumar Singh,Sunny Kaushal",
      songList:[{
       "songTitle": "Naino Ne Baandhi",
        "singer": "Yasser Desai",
        "length": "4:01"
      },
      {
       "songTitle": "Chad Gayi Hai",
        "singer": "Vishal Dadlani, Sachin-Jigar",
        "length": "3:05"
      },
      {
       "songTitle": "Ghar Layenge Gold",
        "singer": "Daler Mehndi, Sachin-Jigar",
        "length": "3:23"
      },
      {
       "songTitle": "Monobina",
        "singer": "Yasser Desai, Monali Thakur, Shashaa Tirupati, Farhad Bhiwandiwala",
        "length": "3:36"
      },
      {
       "songTitle": "Khel Khel Mein",
        "singer": "K. K., Sachin-Jigar",
        "length": "3:12"
      },
      {
       "songTitle": "Rasta Rasta",
        "singer": "Sukhwinder Singh, Sachin-Jigar",
        "length": "3:03"
      },
      {
       "songTitle": "Jaaga Hindustan",
        "singer": "Divya Kumar, Sachin-Jigar",
        "length": "5:07"
      }
    ]
    },
    {
      title:"Stree",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/stree-hindi-et00069127-12-01-2018-01-37-29.jpg",
      releaseYear:"2018",
      DirectedBy:"Amar Kaushik",
      Starring:"Rajkummar Rao,Shraddha Kapoor,Pankaj Tripathi,Aparshakti Khurana,Abhishek Banerjee",
      songList:[{
       "songTitle": "Milegi Milegi",
        "singer": "Mika Singh, Sachin-Jigar",
        "length": "2:33"
      },
      {
       "songTitle": "Kamariya",
        "singer": "Aastha Gill, Divya Kumar, Sachin-Jigar",
        "length": "3:08"
      },
      {
       "songTitle": "Nazar Na Lag Jaaye",
        "singer": "Ash King, Sachin-Jigar",
        "length": "3:26"
      },
      {
       "songTitle": "Aao Kabhi Haveli Pe",
        "singer": "Badshah, Nikhita Gandhi, Sachin-Jigar",
        "length": "2:53"
      }
    ]
    },
    {
      title:"Andhadhun",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/andhadhun-et00077959-19-06-2018-12-49-25.jpg",
      releaseYear:"2018",
      DirectedBy:"Sriram Raghavan",
      Starring:"Tabu,Ayushmann Khurrana,Radhika Apte",
      songList:[{
       "songTitle": "Naina Da Kya Kasoor",
        "singer": "Amit Trivedi",
        "length": "3:30"
      },
      {
       "songTitle": "Aap Se Milkar",
        "singer": "Abhijeet Srivastava, Aakanksha Sharma",
        "length": "3:56"
      },
      {
       "songTitle": "Wo Ladki",
        "singer": "Arijit Singh",
        "length": "4:12"
      },
      {
       "songTitle": "Laila Laila",
        "singer": "Amit Trivedi",
        "length": "3:23"
      },
      {
       "songTitle": "Oh Bhai Re",
        "singer": "Shadab Faridi, Altamash Faridi",
        "length": "3:25"
      },
      {
       "songTitle": "Andhadhun Title Track",
        "singer": "Raftaar",
        "length": "2:54"
      },
      {
       "songTitle": "Andhadun",
        "singer": "Amit Trivedi",
        "length": "4:15"
      },
      {
       "songTitle": "Aap Se Milkar",
        "singer": "Ayushmann Khurrana",
        "length": "2:26"
      }
    ]
    },
    {
      title:"Hichki",
      imgUrl:"https://images-na.ssl-images-amazon.com/images/I/91fcbuSo13L._AC_UL320_SR240,320_.jpg",
      releaseYear:"2018",
      DirectedBy:"Siddharth P. Malhotra",
      Starring:"Rani Mukerji",
      songList:[{
       "songTitle": "Oye Hichki",
        "singer": "Harshdeep Kaur",
        "length": "2:34"
      },
      {
       "songTitle": "Madamji Go Easy",
        "singer": "Benny Dayal & David Klyton",
        "length": "2:48"
      },
      {
       "songTitle": "Khol De Par",
        "singer": "Arijit Singh",
        "length": "3:13"
      },
      {
       "songTitle": "Teri Dastaan",
        "singer": "Jasleen Royal",
        "length": "3:43"
      },
      {
       "songTitle": "Phir Kya Hai Gham",
        "singer": "Shilpa Rao",
        "length": "2:59"
      },
      {
       "songTitle": "Soul of Hichki",
        "singer": "Harshdeep Kaur",
        "length": "2:00"
      },
      {
       "songTitle": "Naina's Theme (Instrumental)",
        "singer": "Jasleen Royal",
        "length": "3:15"
      }
    ]
    },
    {
      title:"Padman",
      imgUrl:"https://i1.behindwoods.com/hindi-movies/padman/stills-photos-pictures/thumbnails/padman-stills-photos-pictures-12.jpg",
      releaseYear:"2018",
      DirectedBy:"R. Balki",
      Starring:"Akshay Kumar,Sonam Kapoor,Radhika Apte",
      songList:[{
       "songTitle": "Aaj Se Teri",
        "singer": "Arijit Singh",
        "length": "5:12"
      },
      {
       "songTitle": "The Pad Man Song",
        "singer": "Mika Singh",
        "length": "3:23"
      },
      {
       "songTitle": "Hu Ba Hu",
        "singer": "Amit Trivedi",
        "length": "3:36"
      },
      {
       "songTitle": "Saale Sapne",
        "singer": "Mohit Chauhan",
        "length": "4:42"
      },
      {
       "songTitle": "Sayaani",
        "singer": "Yashita Sharma, Jonita Gandhi, Yashika Sikka, Rani Kaur",
        "length": "4:10"
      }
    ]
    },
    {
      title:"Sanju",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/sanju-et00063643-13-10-2017-04-12-29.jpg",
      releaseYear:"2018",
      DirectedBy:"Rajkumar Hirani",
      Starring:"Ranbir Kapoor,Paresh Rawal,Vicky Kaushal,Manisha Koirala,Dia Mirza,Sonam Kapoor,Anushka Sharma,Jim Sarbh",
      songList:[{
       "songTitle": "Main Badhiya Tu Bhi Badhiya",
        "singer": "Sonu Nigam, Sunidhi Chauhan",
        "length": "4:34"
      },
      {
       "songTitle": "Kar Har Maidaan Fateh",
        "singer": "Shreya Ghoshal, Sukhwinder Singh",
        "length": "5:11"
      },
      {
       "songTitle": "Ruby Ruby",
        "singer": "Shashwat Singh, Poorvi Koutish",
        "length": "4:45"
      },
      {
       "songTitle": "Baba Bolta Hain Bas Ho Gaya",
        "singer": "Papon, Ranbir Kapoor, Supriya Pathak",
        "length": "4:45"
      },
      {
       "songTitle": "Bhopu Baj Raha Hain",
        "singer": "Nakash Aziz",
        "length": "4:03"
      },
      {
       "songTitle": "Mujhe Chaand Pe Le Chalo",
        "singer": "Nikhita Gandhi",
        "length": "3:07"
      }
    ]
    },
    {
      title:"Bareilly Ki Barfi",
      imgUrl:"https://upload.wikimedia.org/wikipedia/en/9/97/Bareilly_Ki_Barfi_Poster.jpg",
      releaseYear:"2017",
      DirectedBy:"Ashwiny Iyer Tiwari",
      Starring:"Ayushmann Khurrana,Rajkumar Rao,Kriti Sanon",
      songList:[{
       "songTitle": "Sweety Tera Drama",
        "singer": "Dev Negi, Pawni Pandey, Shraddha Pandit",
        "length": "2:27"
      },
      {
       "songTitle": "Nazm Nazm",
        "singer": "Arko Pravo Mukherjee",
        "length": "3:47"
      },
      {
       "songTitle": "Twist Kamariya",
        "singer": "Harshdeep Kaur, Yasser Desai, Altamash Faridi",
        "length": "2:28"
      },
      {
       "songTitle": "Bairaagi",
        "singer": "Arijit Singh, Samira Koppikar",
        "length": "4:12"
      },
      {
       "songTitle": "Badass Babuaa",
        "singer": "Abhishek Nailwal, Neha Bhasin, Sameer Uddin",
        "length": "2:47"
      },
      {
       "songTitle": "Nazm Nazm(Ayushmann Khurrana Version)",
        "singer": "Ayushmann Khurrana",
        "length": "3:14"
      },
      {
       "songTitle": "Bairaagi(Samira Koppikar Version)",
        "singer": "Samira Koppikar ",
        "length": "3: 44 "
      },
      {
       "songTitle": "Nazm Nazm(Sumedha Karmahe Version)",
        "singer": "Sumedha Karmahe",
        "length": "4:01"
      }
    ]
    },
    {
      title:"Mom 2017",
      imgUrl:"https://i.pinimg.com/474x/4f/4c/b7/4f4cb76b83927aa0c22a5261e2462712.jpg",
      releaseYear:"2017",
      DirectedBy:"Ravi Udyawar",
      Starring:"Sridevi,Nawazuddin Siddiqui,Akshaye Khanna,Sajal Ali,Adnan Siddiqui",
      songList:[{
       "songTitle": "O Sona Tere Liye",
        "singer": "A. R. Rahman, Shashaa Tirupati",
        "length": "5:20"
      },
      {
       "songTitle": "Kooke Kawn (Traditional)",
        "singer": "Sukhwinder Singh, Blaaze, Sameera Bharadwaj, Altamash Faridi",
        "length": "3:33"
      },
      {
       "songTitle": "Raakh Baaki",
        "singer": "Jonita Gandhi, Rianjali",
        "length": "5:43"
      },
      {
       "songTitle": "Freaking Life",
        "singer": "Rianjali, Raja Kumari, Suzanne D'Mello",
        "length": "4:05"
      },
      {
       "songTitle": "Chal Kahin Door",
        "singer": "Shashaa Tirupati",
        "length": "6:28"
      },
      {
       "songTitle": "Muafi Mushkil",
        "singer": "Darshana",
        "length": "4:48"
      },
      {
       "songTitle": "Be Nazaara(Traditional)",
        "singer": "Sudeep Jaipurwale",
        "length": "7:36"
      }
    ]
    },
    {
      title:"Ok Jaanu",
      imgUrl:"https://static.toiimg.com/thumb/msid-61288070,width-219,height-317,imgsize-84916/61288070.jpg",
      releaseYear:"2017",
      DirectedBy:"Shaad Ali",
      Starring:"Aditya Roy Kapur,Shraddha Kapoor,Naseeruddin Shah,Leela Samson,Prahlad Kakkar",
      songList:[{
       "songTitle": "OK Jaanu",
        "singer": "A. R. Rahman & Srinidhi Venkatesh",
        "length": "3:26"
      },
      {
       "songTitle": "The Humma Song",
        "singer": "Jubin Nautiyal, Shashaa, Badshah,Tanishk Bagchi",
        "length": "2:59"
      },
      {
       "songTitle": "Enna Sona",
        "singer": "Arijit Singh",
        "length": "3:33"
      },
      {
       "songTitle": "Jee Lein",
        "singer": "Neeti Mohan, Arjun Chandy & Savithri R Prithvi",
        "length": "4:46"
      },
      {
       "songTitle": "Kaara Fankaara",
        "singer": "Kaly, Hard Kaur, ADK, Shashaa Tirupati, Ashima Mahajan, Paroma Das Gupta & Sameera Bharadwaj",
        "length": "5:44"
      },
      {
       "songTitle": "Saajan Aayo Re",
        "singer": "Jonita Gandhi & Nakash Aziz",
        "length": "6:09"
      },
      {
       "songTitle": "Maula Wa Sallim",
        "singer": "A. R. Ameen",
        "length": "3:06"
      },
      {
       "songTitle": "Sunn Bhavara",
        "singer": "Shashaa Tirupati",
        "length": "4:23"
      }
    ]
    },
    {
      title:"Toilet: Ek Prem Katha",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/toilet-ek-prem-katha-et00048876-07-11-2016-10-55-56.jpg",
      releaseYear:"2017",
      DirectedBy:"Shree Narayan Singh",
      Starring:"Akshay Kumar,Bhumi Pednekar,Sudhir Pandey",
      songList:[{
       "songTitle": "Hans Mat Pagli",
        "singer": "Sonu Nigam, Shreya Ghoshal",
        "length": "5:18"
      },
      {
       "songTitle": "Bakheda",
        "singer": "Sukhwinder Singh, Sunidhi Chauhan",
        "length": "3:27"
      },
      {
       "songTitle": "Gori Tu Latth Maar",
        "singer": "Sonu Nigam, Palak Muchhal",
        "length": "3:58"
      },
      {
       "songTitle": "Subah Ki Train",
        "singer": "Sachet-Parampara",
        "length": "3:45"
      },
      {
       "songTitle": "Toilet Ka Jugaad",
        "singer": "Akshay Kumar, Vickey Prasad",
        "length": "4:32"
      }
    ]
    },
    {
      title:"Secret Superstar",
      imgUrl:"https://deepbasublog.files.wordpress.com/2017/10/secret_superstar_-_poster_3.jpg?w=274&h=365&crop=1",
      releaseYear:"2017",
      DirectedBy:"Advait Chandan",
      Starring:"Zaira Wasim,Meher Vij,Raj Arjun,Aamir Khan",
      songList:[{
       "songTitle": "Meri Pyaari Ammi",
        "singer": "Meghna Mishra",
        "length": "05:28"
      },
      {
       "songTitle": "Sapne Re",
        "singer": "Meghna Mishra",
        "length": "04:10"
      },
      {
       "songTitle": "I'll Miss You",
        "singer": "Kushal Chokshi",
        "length": "05:12"
      },
      {
       "songTitle": "Nachdi Phira",
        "singer": "Meghna Mishra",
        "length": "04:15"
      },
      {
       "songTitle": "Sexy Baliye",
        "singer": "Mika Singh",
        "length": "03:13"
      },
      {
       "songTitle": "Gudgudi",
        "singer": "Sunidhi Chauhan",
        "length": "04:12"
      },
      {
       "songTitle": "O Re Manwa",
        "singer": "Meghna Mishra",
        "length": "03:40"
      }
    ]
    },
    {
      title:"Shub Mangal Sahavdhan",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/shubh-mangal-saavdhan-et00052319-17-01-2017-12-38-22.jpg",
      releaseYear:"2017",
      DirectedBy:"R.S. Prasanna",
      Starring:"Ayushmann Khurrana,Bhumi Pednekar",
      songList:[{
       "songTitle": "Rocket Saiyyan",
        "singer": "Ritu Pathak, Brijesh Shandilya, Tanishk Bagchi",
        "length": "2:42"
      },
      {
       "songTitle": "Laddoo",
        "singer": "Mika Singh",
        "length": "3:38"
      },
      {
       "songTitle": "Kankad",
        "singer": "Raja Hasan, Shashaa Tirupati, Rajnigandha Shekhawat, Arman Hasan",
        "length": "3:16"
      },
      {
       "songTitle": "Kanha",
        "singer": "Ayushmann Khurrana",
        "length": "3:03"
      }
    ]
    },
    {
      title:"Naam Shabana",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/nathaan-shabana-et00055205-26-03-2017-07-21-25.jpg",
      releaseYear:"2017",
      DirectedBy:"Shivam Nair",
      Starring:"Taapsee Pannu,Akshay Kumar,Prithviraj Sukumaran,Manoj Bajpayee,Anupam Kher",
      songList:[{
       "songTitle": "Rozana",
        "singer": "Rochak Kohli,Shreya Ghoshal",
        "length": "4:34"
      },
      {
       "songTitle": "Zinda",
        "singer": "Manoj Muntashir,Rochak Kohli,Sunidhi Chauhan",
        "length": "4:00"
      },
      {
       "songTitle": "Zubi Zubi",
        "singer": "Manoj Muntashir,Rochak Kohli,Sukriti Kakar, Rochak Kohli",
        "length": "4:10"
      },
      {
       "songTitle": "Dil Hua Besharam",
        "singer": "Kumaar,Meet Bros,Aditi Singh Sharma",
        "length": "3:46"
      }
    ]
    },
    {
      title:"Jagga Jasoos",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/jagga-jasoos-et00020375-04-10-2016-03-41-31.jpg",
      releaseYear:"2017",
      DirectedBy:"Anurag Basu",
      Starring:"Ranbir Kapoor,Katrina Kaif,Saswata Chatterjee,Saurabh Shukla,Sayani Gupta,Ivan Sylvester Rodrigues",
      songList:[{
       "songTitle": "Ullu Ka Pattha",
        "singer": "Arijit Singh, Nikhita Gandhi & Vivianne Pocha",
        "length": "3:31"
      },
      {
       "songTitle": "Galti Se Mistake",
        "singer": "Amit Mishra , Arijit Singh , Shubhanshu Kesharwani",
        "length": "3:23"
      },
      {
       "songTitle": "Jhumritalaiyya",
        "singer": "Arijit Singh & Mohan Kanan",
        "length": "3:59"
      },
      {
       "songTitle": "Phir Wahi",
        "singer": "Arijit Singh",
        "length": "4:13"
      },
      {
       "songTitle": "Musafir",
        "singer": "Tushar Joshi",
        "length": "4:42"
      },
      {
       "songTitle": "Khaana Khaake",
        "singer": "Tushar Joshi, Geet Sagar, June Banerjee, Antara Mitra, Amit Mishra, Ashwin M. Prabhu, Aroh Mehta, Ananya Wadkar, Pritam Chakraborty, Amitabh Bhattacharya & Sunny M.R.",
        "length": "3:19"
      }
    ]
    },
    {
      title:"Qarib Qarib Singlle",
      imgUrl:"https://static.sacnilk.com/movie/2017/78.jpg",
      releaseYear:"2017",
      DirectedBy:	"Tanuja Chandra",
      Starring:"Irrfan Khan,Parvathy Thiruvothu",
      songList:[{
       "songTitle": "Khatam Kahani",
        "singer": "Nooran Sisters, Vishal Mishra",
        "length": "3:35"
      },
      {
       "songTitle": "Tu Chale Toh",
        "singer": "Papon",
        "length": "3:34"
      },
      {
       "songTitle": "Jaane De",
        "singer": "Atif Aslam",
        "length": "4:59"
      },
      {
       "songTitle": "Tanha Begum",
        "singer": "Antara Mitra, Neeti Mohan, Rochak Kohli",
        "length": "3:33"
      }
    ]
    },
    {
      title:"Lust Stories",
      imgUrl:"https://i.pinimg.com/474x/a5/7c/f0/a57cf010707359569d1fb251fb464925.jpg",
      releaseYear:"2018",
      DirectedBy:"Anurag Kashya,Zoya Akhtar,Dibakar Banerjee,Karan Johar",
      Starring:"Manisha Koirala,Radhika Apte,Bhumi Pednekar,Kiara Advani,Vicky Kaushal,Neil Bhoopalam,Neha Dhupia,Sanjay Kapoor,Akash Thosar",
      songList:[]
    },
    {
      title:"Helicopter Eela",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/helicopter-eela-exclusively-for-women-et00086165-12-10-2018-12-58-45.jpg",
      releaseYear:"2018",
      DirectedBy:"Pradeep Sarkar",
      Starring:"Kajol,Riddhi Sen",
      songList:[{
       "songTitle": "Mumma Ki Parchai",
        "singer": "Ronit Sarkar",
        "length": "4:06"
      },
      {
       "songTitle": "Yaadon Ki Almari",
        "singer": "Palomi Ghosh",
        "length": "3:49"
      },
      {
       "songTitle": "Dooba Dooba",
        "singer": "Arijit Singh, Sunidhi Chauhan",
        "length": "4:03"
      },
      {
       "songTitle": "Chand Lamhe (Lyrics by Asma)",
        "singer": "Shilpa Rao",
        "length": "4:04"
      },
      {
       "songTitle": "Khoya Ujaala",
        "singer": "Palomi Ghosh",
        "length": "4:13"
      },
      {
       "songTitle": "Ruk Ruk Ruk (Lyrics by Shyam Anuragi)",
        "singer": "Palomi Ghosh",
        "length": "4:09"
      }
    ]
    },
    {
      title:"Baaghi 2",
      imgUrl:"https://i.pinimg.com/736x/3b/ad/01/3bad0147fc03e04bb88d50b16223faa2.jpg",
      releaseYear:"2018",
      DirectedBy:"Ahmed Khan",
      Starring:"Tiger Shroff,Disha Patani",
      songList:[]
    },
    {
      title:"Zero",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/zero-exclusively-for-women-et00092054-20-12-2018-01-23-19.jpg",
      releaseYear:"2018",
      DirectedBy:"Aanand L. Rai",
      Starring:"Shah Rukh Khan,Anushka Sharma,Katrina Kaif",
      songList:[{
       "songTitle": "Mere Naam Tu",
        "singer": "Abhay Jodhpurkar",
        "length": "5:38"
      },
      {
       "songTitle": "Issaqbaazi",
        "singer": "Sukhwinder Singh, Divya Kumar, Swagat Rathod",
        "length": "5:20"
      },
      {
       "songTitle": "Husn Parcham",
        "singer": "Bhoomi Trivedi, Raja Kumari",
        "length": "3:07"
      },
      {
       "songTitle": "Ann Bann",
        "singer": "Kunal Ganjawala",
        "length": "4:34"
      },
      {
       "songTitle": "Tanha Hua",
        "singer": "Jyoti Nooran, Rahat Fateh Ali Khan",
        "length": "4:02"
      },
      {
       "songTitle": "Heer Badnaam",
        "singer": "Romy",
        "length": "2: 21"
      },
      {
       "songTitle": "Duma Dam Mast Kalandar",
        "singer": "Altamash Faridi, Jubin Nautiyal, Payal Dev",
        "length": "2:13"
      }
    ]
    },
    {
      title:"Raid",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/raid-et00062208-16-09-2017-02-38-15.jpg",
      releaseYear:"2018",
      DirectedBy:"Raj Kumar Gupta",
      Starring:"Ajay Devgn,Ileana D'Cruz,Saurabh Shukla",
      songList:[{
       "songTitle": "Sanu Ek Pal Chain",
        "singer": "Rahat Fateh Ali Khan",
        "length": "3:30"
      },
      {
       "songTitle": "Nit Khair Manga",
        "singer": "Rahat Fateh Ali Khan",
        "length": "3:48"
      },
      {
       "songTitle": "Black",
        "singer": "Sukhwinder Singh",
        "length": "3:40"
      },
      {
       "songTitle": "Jhuk Na Paunga",
        "singer": "Papon",
        "length": "4:24"
      }
    ]
    },
    {
      title:"Kaamyab",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/kaamyaab-et00067543-18-12-2017-04-38-47.jpg",
      releaseYear:"2020",
      DirectedBy:"Hardik Mehta",
      Starring:"Sanjay Mishra,Deepak Dobriyal,Isha Talwar,Nasirr Khan",
      songList:[{
       "songTitle": "Tim Tim Tim",
        "singer": "Bappi Lahiri",
        "length": "4:32"
      },
      {
       "songTitle": "Paaon Bhaari",
        "singer": "Ash King",
        "length": "4:29"
      },
      {
       "songTitle": "Sikandar",
        "singer": "Hariharan",
        "length": "2:53"
      }
    ]
    },

    {
      title:"Sui Dhaaga",
      imgUrl:"https://static.sacnilk.com/movie/2018/84.jpg",
      releaseYear:"2018",
      DirectedBy:"Sharat Katariya",
      Starring:"Varun Dhawan,Anushka Sharma",
      songList:[{
       "songTitle": "Chaav Laaga",
        "singer": "Papon, Ronkini Gupta",
        "length": "5:48"
      },
      {
       "songTitle": "Khatar Patar",
        "singer": "Papon",
        "length": "5:35"
      },
      {
       "songTitle": "Tu Hi Aham",
        "singer": "Ronkini Gupta",
        "length": "5:15"
      },
      {
       "songTitle": "Sui Dhaaga",
        "singer": "Divya Kumar",
        "length": "5:25"
      },
      {
       "songTitle": "Sab Badhiya Hai",
        "singer": "Sukhwinder Singh, Salman Ali",
        "length": "3:56"
      }
    ]
    },
    {
      title:"Mard Ko Dard Nahi Hota",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/mard-ko-dard-nahi-hota-et00087144-25-10-2018-12-02-19.jpg",
      releaseYear:"2018",
      DirectedBy:"Vasan Bala",
      Starring:"Abhimanyu Dassani,Radhika Madan,Gulshan Devaiah,Mahesh Manjrekar,Jimit Trivedi,Satyajit Ganu",
      songList:[{
       "songTitle": "Rappan Rappi Rap",
        "singer": "Benny Dayal",
        "length": "3:54"
      },
      {
       "songTitle": "Kitthon Da Tu Superstar",
        "singer": "Sanj V, Karan Kulkarni",
        "length": "2:44"
      },
      {
       "songTitle": "Tere Liye",
        "singer": "Kamakshi Rai, Vishal Mishra, Karan Kulkarni",
        "length": "3:49"
      },
      {
       "songTitle": "Nakhrewaali",
        "singer": "Karan Kulkarni, Saba Azad",
        "length": "3:37"
      },
      {
       "songTitle": "Life Mein Fair Chance Kiska",
        "singer": "Suresh Triveni, Surya Ragunaathan, Veera Fauzia Saxena",
        "length": "3:25"
      },
      {
       "songTitle": "Dreamtime",
        "singer": "Kamakshi Rai",
        "length": "2:24"
      },
      {
       "songTitle": "Shaolin Sky",
        "singer": "Karan Kulkarni",
        "length": "2:35"
      },
      {
       "songTitle": "Kitthon Da Tu Superstar",
        "singer": "Sanj V",
        "length": "2:29"
      }
    ]
    },
    {
      title:"Parmanu: The Story of Pokhran",
      imgUrl:"https://upload.wikimedia.org/wikipedia/en/d/da/Parmanu_film_poster.jpeg",
      releaseYear:"2018",
      DirectedBy:"Abhishek Sharma",
      Starring:"John Abraham,Diana Penty,Boman Irani",
      songList:[{
       "songTitle": "Shubh Din",
        "singer": "Keerthi Sagathia, Jyotica Tangri",
        "length": "4:42"
      },
      {
       "songTitle": "Jitni Dafa",
        "singer": "Yasser Desai",
        "length": "3:42"
      },
      {
       "songTitle": "Thare Vaaste",
        "singer": "Divya Kumar",
        "length": "3:28"
      },
      {
       "songTitle": "Kasumbi",
        "singer": "Divya Kumar",
        "length": "4:13"
      },
      {
       "songTitle": "Sapna",
        "singer": "Arijit Singh",
        "length": "2:49"
      },
      {
       "songTitle": "De De Jagah",
        "singer": "Yasser Desai",
        "length": "3:55"
      }
    ]
    },
    {
      title:"Love Per Square Foot",
      imgUrl:"https://iv1.lisimg.com/image/16906980/284full-love-per-square-foot-poster.jpg",
      releaseYear:"2018",
      DirectedBy:"Anand Tiwari",
      Starring:"Vicky Kaushal,Angira Dhar,Alankrita Sahai,Ratna Pathak Shah,Supriya Pathak",
      songList:[{
       "songTitle": "Yatri Kripaya Dhyaan De",
        "singer": "Abhishek Dhusia, Sahir Nawab, Sumeet Suvarna",
        "length": "3:21"
      },
      {
       "songTitle": "Chicken Dance",
        "singer": "Benny Dayal, Shivangi Bhayana",
        "length": "4:01"
      },
      {
       "songTitle": "Ishq Mein Bajti Hai Ghanti",
        "singer": "Udit Narayan",
        "length": "2:42"
      },
      {
       "songTitle": "Aashiyana",
        "singer": "Altamash Faridi, Tarannum Malik",
        "length": "4:30"
      },
      {
       "songTitle": "Maqbool Hai",
        "singer": "Altamas Faridi",
        "length": "5:10"
      },
      {
       "songTitle": "Raaz Apne Dil Ke (Indian)",
        "singer": "Rekha Bhardwaj",
        "length": "4:09"
      }
    ]
    },
    {
      title:"Soorma",
      imgUrl:"https://static.sacnilk.com/movie/2018/1989.jpg",
      releaseYear:"2018",
      DirectedBy:"Shaad Ali",
      Starring:"Diljit Dosanjh,Taapsee Pannu,Angad Bedi",
      songList:[{
       "songTitle": "Ishq Di Baajiyaan",
        "singer": "Diljit Dosanjh",
        "length": "4:47"
      },
      {
       "songTitle": "Soorma Anthem",
        "singer": "Shankar Mahadevan",
        "length": "4:12"
      },
      {
       "songTitle": "Good Man Di Laaltain",
        "singer": "Sukhwinder Singh, Sunidhi Chauhan",
        "length": "3:25"
      },
      {
       "songTitle": "Pardesiya",
        "singer": "Ehsaan Noorani, Shankar Mahadevan, Shehnaz Akhtar, Hemant Brijwasi, Sahil Akhtar",
        "length": "4:57"
      },
      {
       "songTitle": "Flicker Singh",
        "singer": "Ehsaan Noorani, Shankar Mahadevan, Shehnaz Akhtar, Hemant Brijwasi, Sahil Akhtar",
        "length": "6:06"
      }
    ]
    },

    {
      title:"Manmarziyaan",
      imgUrl:"https://static.sacnilk.com/movie/2018/1993.jpg",
      releaseYear:"2018",
      DirectedBy:"Anurag Kashyap",
      Starring:"Abhishek Bachchan,Taapsee Pannu,Vicky Kaushal",
      songList:[{
       "songTitle": "F for Fyaar(Rap lyrics: Sikander Kahlon)",
        "singer": "Vicky Kaushal, Mast Ali, Rap by: Sikander Kahlon",
        "length": "3:52"
      },
      {
       "songTitle": "Daryaa",
        "singer": "Vijay Yamla, Nikhita Gandhi, Amit Trivedi, Suhas Sawant",
        "length ": "4: 21"
      },
      {
       "songTitle": "Grey Walaa Shade",
        "singer": "Harshdeep Kaur, Jazim Sharma",
        "length": "4:43"
      },
      {
       "songTitle": "Dhyaanchand",
        "singer": "Vijay Yamla, Nikhita Gandhi, Amit Trivedi, Suhas Sawant",
        "length": "4:10"
      },
      {
       "songTitle": "Chonch Ladhiyaan",
        "singer": "Harshdeep Kaur, Jazim Sharma",
        "length": "4:55"
      },
      {
       "songTitle": "Hallaa",
        "singer": "Jyoti Nooran, Romi",
        "length": "4:49"
      },
      {
       "songTitle": "Sacchi Mohabbat",
        "singer": "Shahid Mallya, Jonita Gandhi",
        "length": "4:15"
      },
      {
       "songTitle": "Jaisi Teri Marzi",
        "singer": "Harshdeep Kaur, Bhanu Pratap Singh",
        "length": "3:50"
      },
      {
       "songTitle": "Bijlee Giregi",
        "singer": "Devender Pal Singh, Babu Haabi, Sikander Kahlon, Vaishali Sardana",
        "length": "3:41"
      },
      {
       "songTitle": "Kundali",
        "singer": "Meenal Jain, Yashita Sharma, Yashika Sikka, Rani Kaur, Anita Gandharva, Meghna Mishra Vaishnavi Mishra",
        "length": "3:47"
      },
      {
       "songTitle": "Daryaa",
        "singer": "Deveshi Sahgal",
        "length": "3:29"
      },
      {
       "songTitle": "Jala Di",
        "singer": "Romy, Jatinder Singh",
        "length": "3:49"
      },
      {
       "songTitle": "Fyaar Pe Duniya",
        "singer": "Alamgir Khan",
        "length": "2:43"
      },
      {
       "songTitle": "Sherni",
        "singer": "Prabh Deep",
        "length": "1:30"
      }
    ]
    },

    {
      title:"Baazaar",
      imgUrl:"https://i.pinimg.com/564x/3f/ac/bd/3facbd92a3f982817e47c23eeff7b453.jpg",
      releaseYear:"2018",
      DirectedBy:"Gauravv K. Chawla",
      Starring:"Saif Ali Khan,Rohan Vinod Mehra,Radhika Apte,Chitrangada Singh,Denzil Smith",
      songList:[{
       "songTitle": "Kem Cho",
        "singer": "Ikka, Jyotica Tangri",
        "length": "2:13"
      },
      {
       "songTitle": "Billionaire",
        "singer": "Yo Yo Honey Singh, Simar Kaur, Singhsta",
        "length": "3:35"
      },
      {
       "songTitle": "Adhura Lafz",
        "singer": "Rahat Fateh Ali Khan, Pratibha Singh",
        "length": "4:20"
      },
      {
       "songTitle": "La La La",
        "singer": "Bilal Saeed, Neha Kakkar",
        "length": "3:07"
      },
      {
       "songTitle": "Chhod Diya",
        "singer": "Arijit Singh",
        "length": "5:20"
      },
      {
       "songTitle": "Chhod Diya",
        "singer": "Kanika Kapoor",
        "length": "3:12"
      }
    ]
    },
    {
      title:"Mere Pyare Prime Minister",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/mere-pyare-prime-minister-et00096366-11-02-2019-03-36-54.jpg",
      releaseYear:"2019",
      DirectedBy:"Rakeysh Omprakash Mehra",
      Starring:"Anjali Patil,Om Kanojiya,Atul Kulkarni,Makrand Deshpande",
      songList:[{
       "songTitle": "Mere Pyare Prime Minister - Title Track",
        "singer": "Arijit Singh",
        "length": "3:42"
      },
      {
       "songTitle": "Rezgaariyaan",
        "singer": "Shivam Mahadevan,Shankar Mahadevan",
        "length": "4:11"
      },
      {
       "songTitle": "Kanha Re",
        "singer": "Rekha Bhardwaj",
        "length": "5:00"
      },
      {
       "songTitle": "Bajaa Bajaa Dhol Bajaa",
        "singer": "Shankar Mahadevan, Divya Kumar, Asha Bhosle, Rekha Bhardwaj, Shrinidhi Ghatate, Neela Mulhekar",
        "length": "5:25"
      }
    ]
    },
    {
      title:"Bhavesh Joshi Superhero",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/bhavesh-joshi-et00043575-04-10-2016-03-46-01.jpg",
      releaseYear:"2018",
      DirectedBy:"Vikramaditya Motwane",
      Starring:"Harshvardhan Kapoor,Nishikant Kamat,Priyanshu Painyuli,Ashish Verma",
      songList:[{
       "songTitle": "Hum Hain Insaaf",
        "singer": "Babu Haabi, Naezy",
        "length": "3:04"
      },
      {
       "songTitle": "Chavanprash",
        "singer": "Divya Kumar, Pragati Joshi, Arohi Mhatre",
        "length": "4:21"
      },
      {
       "songTitle": "Tafreeh",
        "singer": "Amit Trivedi",
        "length": "4:30"
      },
      {
       "songTitle": "Qasam Kha Li",
        "singer": "Papon",
        "length": "4:27"
      }
    ]
    },
    {
      title:"Manto",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/manto-et00057539-22-05-2017-07-09-53.jpg",
      releaseYear:"2018",
      DirectedBy:"Nandita Das",
      Starring:"Nawazuddin Siddiqui,Tahir Raj Bhasin,Rasika Dugal,Rajshri Deshpande",
      songList:[{
       "songTitle": "Ban Titli (Gratis)",
        "singer": "Rekha Bhardwaj",
        "length": "2:18"
      },
      {
       "songTitle": "Ab Kya Bataun",
        "singer": "Shubha Joshi",
        "length": "4:35"
      },
      {
       "songTitle": "Nagri Nagri",
        "singer": "Shankar Mahadevan",
        "length": "3:27"
      },
      {
       "songTitle": "Bol Ke Lab Azaad Hain",
        "singer": "Rashid Khan, Vidhya Shah",
        "length": "4:56"
      },
      {
       "songTitle": "Mantoiyat",
        "singer": "Raftaar, Nawazuddin Siddiqui",
        "length": "2:56"
      }
    ]
    },
    {
      title:"My Birthday Song",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/my-birthday-song-et00067369-15-12-2017-05-48-26.jpg",
      releaseYear:"2018",
      DirectedBy:"Samir Soni",
      Starring:"Sanjay Suri,Nora Fatehi,Zenia Starr,Ayaz Khan,Suparna Krishna,Sameer Sharma,Elena Kazan",
      songList:[{
       "songTitle": "My Birthday Song",
        "singer": "Raajeev V Bhalla",
        "length": "4:11"
      },
      {
       "songTitle": "Ajnabi",
        "singer": "Mohan Kannan",
        "length": "5:54"
      },
      {
       "songTitle": "Ghayal",
        "singer": "Mohan Kannan",
        "length": "5:41"
      },
      {
       "songTitle": "Bhaag",
        "singer": "Joi Barua",
        "length": "4:06"
      },
      {
       "songTitle": "Rain",
        "singer": "Joi Barua",
        "length": "2:11"
      }
    ]
    },
    {
      title:"Happy Phirr Bhag Jayegi",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/happy-phirr-bhag-jayegi-exclusively-for-women-et00082453-25-08-2018-02-57-37.jpg",
      releaseYear:"2018",
      DirectedBy:"Mudassar Aziz",
      Starring:"Sonakshi Sinha,Diana Penty,Jimmy Sheirgill,Ali Fazal,Piyush Mishra,Jassi Gill",
      songList:[{
       "songTitle": "Swag Saha Nahi Jaye",
        "singer": "Sohail Sen, Shadab Faridi, Neha Bhasin, Shivangi Bhayana",
        "length": "4:23"
      },
      {
       "songTitle": "Happy Bhag Jayegi",
        "singer": "Daler Mehndi, Harshdeep Kaur, Suvarna Tiwari",
        "length": "3:44"
      },
      {
       "songTitle": "Chin Chin Chu (Lyrics by Qamar Jalalabadi)",
        "singer": "Jassi Gill, Sonakshi Sinha, Mudassar Aziz",
        "length": "3:45"
      },
      {
       "songTitle": "Koi Gal Nai",
        "singer": "Shahid Mallya, Piyush Mishra, Rap by: Mudassar Aziz",
        "length": "4:58"
      },
      {
       "songTitle": "Kudiye Ni Tere",
        "singer": "Udit Narayan, Shivangi Bhayana",
        "length": "4:33"
      }
    ]
    },
    {
      title:"Pari",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/pari-et00058504-15-06-2017-03-25-55.jpg",
      releaseYear:"2018",
      DirectedBy:"Prosit Roy",
      Starring:"Anushka Sharma,Parambrata Chatterjee,Rajat Kapoor,Ritabhari Chakraborty,Mansi Multani",
      songList:[{
       "songTitle": "Meri Khamoshi Hai",
        "singer": "Ishan Mitra",
        "length": "5:18"
      },
      {
       "songTitle": "So Ja So Ja",
        "singer": "Rekha Bhardwaj",
        "length": "4:40"
      }
    ]
    },
    {
      title:"Teefa in Trouble",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/teefa-in-trouble-et00077343-09-06-2018-04-58-44.jpg",
      releaseYear:"2018",
      DirectedBy:"Ahsan Rahim",
      Starring:"Ali Zafar,Manha Tariq,Danyal Zafar",
      songList:[{
       "songTitle": "Chan Ve",
        "singer": "Ali Zafar, Aima Baig",
        "length": "3:48"
      },
      {
       "songTitle": "Item Number",
        "singer": "Ali Zafar, Aima Baig",
        "length": "2:47"
      },
      {
       "songTitle": "Butt Sahab",
        "singer": "Ali Zafar",
        "length": "2:25"
      },
      {
       "songTitle": "Sajna Door",
        "singer": "Ali Zafar, Aima Baig",
        "length": "4:19"
      },
      {
       "songTitle": "Ishq Nachaunda",
        "singer": "Ali Zafar",
        "length": "4:56"
      },
      {
       "songTitle": "Nahin Jaana",
        "singer": "Asma Abbas",
        "length": "3:29"
      }
    ]
    },
    {
      title:"Vodka Diaries",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/vodka-diaries-exclusively-for-women-et00069708-23-01-2018-06-24-09.jpg",
      releaseYear:"2018",
      DirectedBy:"Kushal Srivastava",
      Starring:"Kay Kay Menon,Raima Sen,Mandira Bedi",
      songList:[{
       "songTitle": "Beparwah",
        "singer": "Khalid Ahamed",
        "length": "5:44"
      },
      {
       "songTitle": "Sakhi Ri",
        "singer": "Ustad Rashid Khan & Rekha Bhardwaj",
        "length": "3:59"
      },
      {
       "songTitle": "Heeriye",
        "singer": "Labh Janjua & Shalmali Kholgade",
        "length": "3:06"
      },
      {
       "songTitle": "Angoor",
        "singer": "Harry Anand",
        "length": "3:25"
      }
    ]
    },

    {
      title:"Fukrey Returns",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/fukrey-returns-et00054966-20-03-2017-03-40-57.jpg",
      releaseYear:"2017",
      DirectedBy:"Mrighdeep Singh Lamba",
      Starring:"Pulkit Samrat,Manjot Singh,Ali Fazal,Priya Anand,Vishakha Singh,Pankaj Tripathi,Richa Chadda",
      songList:[{
       "songTitle": "Mehbooba",
        "singer": "Mohammed Rafi,Neha Kakkar, Yasser Desai, Raftaar",
        "length": "2:59"
      },
      {
       "songTitle": "Peh Gaya Khalara",
        "singer": "Divya Kumar, Jasleen Royal, Akasa Singh, Akanksha Bhandari",
        "length": "3:00"
      },
      {
       "songTitle": "Tu Mera Bhai Nahi Hai",
        "singer": "Gandharv Sachdev, Raftaar",
        "length": "2:37"
      },
      {
       "songTitle": "Ishq De Fanniyar",
        "singer": "iddharth Mahadevan, Shannon Donald, Gulraj Singh",
        "length": "2:57"
      },
      {
       "songTitle": "Raina",
        "singer": "Shree D",
        "length": "4:36"
      },
      {
       "songTitle": "Bura Na Mano Bholi Hai",
        "singer": "Gandharv Sachdev, Shahid Mallya",
        "length": "3:20"
      }
    ]
    },
    {
      title:"Raees",
      imgUrl:"https://images-na.ssl-images-amazon.com/images/I/41BTQDxIxpL._AC_UL320_SR240,320_.jpg",
      releaseYear:"2016",
      DirectedBy:"Rahul Dholakia",
      Starring:"Shah Rukh Khan,Nawazuddin Siddiqui,Mahira Khan",
      songList:[{
       "songTitle": "Laila Main Laila",
        "singer": "Pawni Pandey",
        "length": "5:06"
      },

      {
       "songTitle": "Zaalima",
        "singer": "Arijit Singh,Harshdeep Kaur",
        "length": "4:59"
      },

      {
       "songTitle": "Udi Udi Jaye",
        "singer": "Sukhwinder Singh,Bhoomi Trivedi,Karsan Das Sagathia",
        "length": "4:20"
      },


      {
       "songTitle": "Dhingana",
        "singer": "Mika Singh",
        "length": "2:46"
      },

      {
       "songTitle": "Enu Naam Che Raees",
        "singer": "Ram Sampath,Tarannum Malik",
        "length": "3:01"
      },

      {
       "songTitle": "Saanson Ke",
        "singer": "KK",
        "length": "4:03"
      },
      {
       "songTitle": "Ghammar Ghammar",
        "singer": "Roshan Rathod",
        "length": "2:39"
      },
      {
       "songTitle": "Halka Halka",
        "singer": "Shreya Ghoshal,Sonu Nigam,Ram Sampath",
        "length": "3:58"
      }
    ]
    },
    {
      title:"Beyond the Clouds",
      imgUrl:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/beyond-the-clouds-et00052585-24-01-2017-01-08-05.jpg",
      releaseYear:"2018",
      DirectedBy:"Majid Majidi",
      Starring:"Ishaan Khatter,Malavika Mohanan",
      songList:[]
    },
    {
      title:"Half Girlfriend",
      imgUrl:"https://static.sacnilk.com/movie/2017/13.jpg",
      releaseYear:"2017",
      DirectedBy:"Mohit Suri",
      Starring:"Arjun Kapoor,Shraddha Kapoor ",
      songList:[{
       "songTitle": "Baarish",
        "singer": "Ash King, Shashaa Tirupati",
        "length": "4:36"
      },
      {
       "songTitle": "Thodi Der",
        "singer": "Farhan Saeed, Shreya Ghoshal",
        "length": "4:56"
      },
      {
       "songTitle": "Tu Hi Hai",
        "singer": "Rahul Mishra",
        "length": "5:22"
      },
      {
       "songTitle": "Phir Bhi Tumko Chaahunga",
        "singer": "Arijit Singh, Shashaa Tirupati",
        "length": "5:51"
      },
      {
       "songTitle": "Pal Bhar",
        "singer": "Arijit Singh",
        "length": "4:34"
      },
      {
       "songTitle": "Lost Without You",
        "singer": "Ami Mishra, Anushka Shahaney",
        "length": "5:36"
      },
      {
       "songTitle": "Stay a Little Longer",
        "singer": "Anushka Shahaney",
        "length": "5:02"
      },
      {
       "songTitle": "Mere Dil Mein",
        "singer": "Veronica Mehta, Yash Narvekar",
        "length": "3:08"
      },
      {
       "songTitle": "Mere Dil Mein",
        "singer": "Veronica Mehta, Yash Narvekar",
        "length": "2:44"
      },
      {
       "songTitle": "Phir Bhi Tumko Chaahungi T SERIES",
        "singer": "Shraddha Kapoor",
        "length": "3:50"
      },
      {
       "songTitle": "Manzoor Hai",
        "singer": "Ami Mishra",
        "length": "5:00"
      },
      {
       "songTitle": "Baarish",
        "singer": "Atif Aslam",
        "length": "5:36"
      }
    ]
    },

    {
      title:"Ittefaq",
      imgUrl:"https://i.pinimg.com/originals/df/7d/0e/df7d0ebda99112bcf66aec5f64f567e3.jpg",
      releaseYear:"2017",
      DirectedBy:"Abhay Chopra",
      Starring:"Sidharth Malhotra,Akshaye Khanna,Sonakshi Sinha",
      songList:[{
       "songTitle": "Ittefaq Se (Raat Baaki)",
        "singer": "Jubin Nautiyal, Nikhita Gandhi",
        "length": "03:20"
      }]
    },
    {
      title:"Mukkabaaz",
      imgUrl:"https://cdn.pagalworld.icu/60220px-Mukkabaazposter.jpg",
      releaseYear:"2017",
      DirectedBy:"Anurag Kashyap",
      Starring:"Vineet Kumar Singh,Zoya Hussain,Jimmy Sheirgill,Ravi Kishan",
      songList:[{
       "songTitle": "Paintra",
        "singer": "Divine",
        "length": "3:52"
      },
      {
       "songTitle": "Mushkil Hai Apna Meil Priye",
        "singer": "Brijesh Shandilya",
        "length": "5:54"
      },
      {
       "songTitle": "Paintra(Extended Version)",
        "singer": "Divine",
        "length": "3:52"
      },
      {
       "songTitle": "Bahut Hua Samman",
        "singer": "Swaroop Khan",
        "length": "4:33"
      },
      {
       "songTitle": "Bahut Dukha Mann",
        "singer": "Rachita Arora & Dev Arijit",
        "length": "4:40"
      },
      {
       "songTitle": "Chhipkali",
        "singer": "Vijay Arora",
        "length": "3:28"
      },
      {
       "songTitle": "Saade Teen Baje",
        "singer": "Khushboo Raj",
        "length": "3:28"
      },
      {
       "songTitle": "Adhura Main",
        "singer": "Deepak Thakur",
        "length": "2:57"
      },
      {
       "songTitle": "Bahut Hua Samman(EDM Version)",
        "singer": "Swaroop Khan, Rap: Jaspreet Jasz",
        "length": "5:18"
      },
      {
       "songTitle": "Haathapai",
        "singer": "Sukhwinder Singh",
        "length": "4:13"
      }
    ]
    },
    {
      title:"Judwaa 2",
      imgUrl:"https://static.sacnilk.com/movie/2017/27.jpg",
      releaseYear:"2017",
      DirectedBy:"David Dhawan",
      Starring:"Varun Dhawan,Jacqueline Fernandez,Taapsee Pannu",
      songList:[{
       "songTitle": "Chalti Hai Kya 9 Se 12",
        "singer": "Dev Negi, Neha Kakkar",
        "length": "4:21"
      },
      {
       "songTitle": "Suno Ganpati Bappa Morya",
        "singer": "Amit Mishra",
        "length": "4:39"
      },
      {
       "songTitle": "Oonchi Hai Building 2.0",
        "singer": "Anu Malik, Neha Kakkar",
        "length": "3:24"
      },
      {
       "songTitle": "Aa To Sahi",
        "singer": "Meet Bros, Neha Kakkar, Rap by: Roach Killa",
        "length": "3:4"
      }
    ]
    },
    // {
    //   title:"Soorma",
    //   imgUrl:"",
    //   releaseYear:"2017",
    //   songList:[]
    // },

  ]
  filteredArray:any = this.mySong;
  constructor(private modalService: NgbModal) { }


  ngOnInit(): void {
  }
  openSongList(movie,content){

    this.selectedMovie = movie;
    // document.getElementById('#myModal').modal('show');
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  selectMovieYear(year){
if(year==='All'){
this.filteredArray=this.mySong;
}else{
    this.filteredArray = this.mySong.filter(function(itm){
      return itm.releaseYear== year;
    });
  }
}

}

