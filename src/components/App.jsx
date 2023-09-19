import Serie from "./Serie";
import ListeSeries from "./ListeSeries";
import Profil from "./Profil";
import { useState } from 'react';
import "./App.css";

const App = () => {
    const [listeSelectionnee, setListeSelectionnee] = useState("");
    const [mesFavoris, setFavoris] = useState([]);
    const series = {
        "614": {
            "title": "Futurama",
            "year": 1999,
            "id": 614,
            "slug": "futurama",
            "imdb": "https://www.imdb.com/title/tt0149460/",
            "tagline": "We're back again! Again!",
            "overview": "The adventures of a late-20th-century New York City pizza delivery boy, Philip J. Fry, who, after being unwittingly cryogenically frozen for one thousand years, finds employment at Planet Express, an interplanetary delivery company in the retro-futuristic 31st century.",
            "network": "Hulu",
            "country": "us",
            "trailer": "https://youtube.com/watch?v=dUHzt5md1x0",
            "status": "returning series",
            "rating": 8.68319,
            "votes": 18254,
            "language": "en",
            "genres": [
                "animation",
                "comedy",
                "science-fiction",
                "adventure"
            ],
            "aired_episodes": 132,
            "poster": "https://image.tmdb.org/t/p/w500/7RRHbCUtAsVmKI6FEMzZB6Re88P.jpg",
            "seasons": [
                {
                    "number": 0,
                    "ids": {
                        "trakt": 2082,
                        "tvdb": 21333,
                        "tmdb": 1874,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 0,
                            "number": 1,
                            "title": "Bender's Big Score",
                            "ids": {
                                "trakt": 38798,
                                "tvdb": 342888,
                                "imdb": "tt0471711",
                                "tmdb": 35101,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 2,
                            "title": "Everybody Loves Hypnotoad",
                            "ids": {
                                "trakt": 38799,
                                "tvdb": 389457,
                                "imdb": "tt1151330",
                                "tmdb": 35103,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 3,
                            "title": "The Beast with a Billion Backs",
                            "ids": {
                                "trakt": 38800,
                                "tvdb": 359477,
                                "imdb": "tt1054485",
                                "tmdb": 35102,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 4,
                            "title": "The Lost Adventure",
                            "ids": {
                                "trakt": 38797,
                                "tvdb": 372786,
                                "imdb": "tt1253575",
                                "tmdb": 35104,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 5,
                            "title": "Bender's Game",
                            "ids": {
                                "trakt": 38801,
                                "tvdb": 395236,
                                "imdb": "tt1054486",
                                "tmdb": 35105,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 6,
                            "title": "Into the Wild Green Yonder",
                            "ids": {
                                "trakt": 38802,
                                "tvdb": 427447,
                                "imdb": "tt1054487",
                                "tmdb": 35106,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 1,
                    "ids": {
                        "trakt": 2083,
                        "tvdb": 6588,
                        "tmdb": 1868,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 1,
                            "number": 1,
                            "title": "Space Pilot 3000",
                            "ids": {
                                "trakt": 38803,
                                "tvdb": 131174,
                                "imdb": "tt0584449",
                                "tmdb": 35006,
                                "tvrage": 65764
                            }
                        },
                        {
                            "season": 1,
                            "number": 2,
                            "title": "The Series Has Landed",
                            "ids": {
                                "trakt": 38804,
                                "tvdb": 131175,
                                "imdb": "tt0756891",
                                "tmdb": 35007,
                                "tvrage": 65765
                            }
                        },
                        {
                            "season": 1,
                            "number": 3,
                            "title": "I, Roommate",
                            "ids": {
                                "trakt": 38805,
                                "tvdb": 131176,
                                "imdb": "tt0756882",
                                "tmdb": 35008,
                                "tvrage": 65766
                            }
                        },
                        {
                            "season": 1,
                            "number": 4,
                            "title": "Love's Labours Lost in Space",
                            "ids": {
                                "trakt": 38806,
                                "tvdb": 131177,
                                "imdb": "tt0756885",
                                "tmdb": 35009,
                                "tvrage": 65767
                            }
                        },
                        {
                            "season": 1,
                            "number": 5,
                            "title": "Fear of a Bot Planet",
                            "ids": {
                                "trakt": 38807,
                                "tvdb": 131178,
                                "imdb": "tt0584438",
                                "tmdb": 35010,
                                "tvrage": 65768
                            }
                        },
                        {
                            "season": 1,
                            "number": 6,
                            "title": "A Fishful of Dollars",
                            "ids": {
                                "trakt": 38808,
                                "tvdb": 131179,
                                "imdb": "tt0584425",
                                "tmdb": 35011,
                                "tvrage": 65769
                            }
                        },
                        {
                            "season": 1,
                            "number": 7,
                            "title": "My Three Suns",
                            "ids": {
                                "trakt": 38809,
                                "tvdb": 131180,
                                "imdb": "tt0756887",
                                "tmdb": 35012,
                                "tvrage": 65770
                            }
                        },
                        {
                            "season": 1,
                            "number": 8,
                            "title": "A Big Piece of Garbage",
                            "ids": {
                                "trakt": 38810,
                                "tvdb": 131181,
                                "imdb": "tt0584423",
                                "tmdb": 35013,
                                "tvrage": 65771
                            }
                        },
                        {
                            "season": 1,
                            "number": 9,
                            "title": "Hell Is Other Robots",
                            "ids": {
                                "trakt": 38811,
                                "tvdb": 131182,
                                "imdb": "tt0584441",
                                "tmdb": 35014,
                                "tvrage": 65772
                            }
                        }
                    ]
                },
                {
                    "number": 2,
                    "ids": {
                        "trakt": 2084,
                        "tvdb": 6589,
                        "tmdb": 1869,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 2,
                            "number": 1,
                            "title": "A Flight to Remember",
                            "ids": {
                                "trakt": 38816,
                                "tvdb": 131183,
                                "imdb": "tt0584426",
                                "tmdb": 1285653,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 2,
                            "title": "Mars University",
                            "ids": {
                                "trakt": 38817,
                                "tvdb": 131184,
                                "imdb": "tt0756886",
                                "tmdb": 1285654,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 3,
                            "title": "When Aliens Attack",
                            "ids": {
                                "trakt": 38818,
                                "tvdb": 131185,
                                "imdb": "tt0756892",
                                "tmdb": 1285655,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 4,
                            "title": "Fry & the Slurm Factory",
                            "ids": {
                                "trakt": 38819,
                                "tvdb": 131186,
                                "imdb": "tt0584439",
                                "tmdb": 1285656,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 5,
                            "title": "I Second That Emotion",
                            "ids": {
                                "trakt": 38820,
                                "tvdb": 131187,
                                "imdb": "tt0756881",
                                "tmdb": 35019,
                                "tvrage": 65777
                            }
                        },
                        {
                            "season": 2,
                            "number": 6,
                            "title": "Brannigan, Begin Again",
                            "ids": {
                                "trakt": 38821,
                                "tvdb": 131188,
                                "imdb": "tt0766796",
                                "tmdb": 35020,
                                "tvrage": 65778
                            }
                        },
                        {
                            "season": 2,
                            "number": 7,
                            "title": "A Head in the Polls",
                            "ids": {
                                "trakt": 38822,
                                "tvdb": 131189,
                                "imdb": "tt0584427",
                                "tmdb": 35021,
                                "tvrage": 65779
                            }
                        },
                        {
                            "season": 2,
                            "number": 8,
                            "title": "Xmas Story",
                            "ids": {
                                "trakt": 38823,
                                "tvdb": 131190,
                                "imdb": "tt0584465",
                                "tmdb": 35022,
                                "tvrage": 65780
                            }
                        },
                        {
                            "season": 2,
                            "number": 9,
                            "title": "Why Must I Be a Crustacean in Love?",
                            "ids": {
                                "trakt": 38824,
                                "tvdb": 131191,
                                "imdb": "tt0766798",
                                "tmdb": 35023,
                                "tvrage": 65781
                            }
                        },
                        {
                            "season": 2,
                            "number": 10,
                            "title": "Put Your Head on My Shoulders",
                            "ids": {
                                "trakt": 38825,
                                "tvdb": 131192,
                                "imdb": "tt0772479",
                                "tmdb": 35024,
                                "tvrage": 65782
                            }
                        },
                        {
                            "season": 2,
                            "number": 11,
                            "title": "Lesser of Two Evils",
                            "ids": {
                                "trakt": 38826,
                                "tvdb": 131193,
                                "imdb": "tt0584445",
                                "tmdb": 35034,
                                "tvrage": 65783
                            }
                        },
                        {
                            "season": 2,
                            "number": 12,
                            "title": "Raging Bender",
                            "ids": {
                                "trakt": 38827,
                                "tvdb": 131194,
                                "imdb": "tt0584448",
                                "tmdb": 35025,
                                "tvrage": 65784
                            }
                        },
                        {
                            "season": 2,
                            "number": 13,
                            "title": "A Bicyclops Built For Two",
                            "ids": {
                                "trakt": 38828,
                                "tvdb": 131195,
                                "imdb": "tt0766129",
                                "tmdb": 35026,
                                "tvrage": 65785
                            }
                        },
                        {
                            "season": 2,
                            "number": 14,
                            "title": "How Hermes Requisitioned His Groove Back",
                            "ids": {
                                "trakt": 38829,
                                "tvdb": 131196,
                                "imdb": "tt0584442",
                                "tmdb": 35029,
                                "tvrage": 65786
                            }
                        },
                        {
                            "season": 2,
                            "number": 15,
                            "title": "A Clone of My Own",
                            "ids": {
                                "trakt": 38830,
                                "tvdb": 131197,
                                "imdb": "tt0584424",
                                "tmdb": 35027,
                                "tvrage": 65787
                            }
                        },
                        {
                            "season": 2,
                            "number": 16,
                            "title": "The Deep South",
                            "ids": {
                                "trakt": 38831,
                                "tvdb": 131198,
                                "imdb": "tt0584455",
                                "tmdb": 35028,
                                "tvrage": 65788
                            }
                        },
                        {
                            "season": 2,
                            "number": 17,
                            "title": "Bender Gets Made",
                            "ids": {
                                "trakt": 1394789,
                                "tvdb": 131199,
                                "imdb": "tt0766130",
                                "tmdb": 35030,
                                "tvrage": 65789
                            }
                        },
                        {
                            "season": 2,
                            "number": 18,
                            "title": "The Problem with Popplers",
                            "ids": {
                                "trakt": 1394791,
                                "tvdb": 131200,
                                "imdb": "tt0584457",
                                "tmdb": 35033,
                                "tvrage": 65790
                            }
                        },
                        {
                            "season": 2,
                            "number": 19,
                            "title": "Mother's Day",
                            "ids": {
                                "trakt": 1394792,
                                "tvdb": 131201,
                                "imdb": "tt0584447",
                                "tmdb": 35031,
                                "tvrage": 65791
                            }
                        },
                        {
                            "season": 2,
                            "number": 20,
                            "title": "Anthology of Interest I",
                            "ids": {
                                "trakt": 1685110,
                                "tvdb": 131202,
                                "imdb": "tt0584432",
                                "tmdb": 1089973,
                                "tvrage": 65792
                            }
                        }
                    ]
                },
                {
                    "number": 3,
                    "ids": {
                        "trakt": 2085,
                        "tvdb": 6590,
                        "tmdb": 1870,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 3,
                            "number": 1,
                            "title": "The Honking",
                            "ids": {
                                "trakt": 38836,
                                "tvdb": 131203,
                                "imdb": "tt0768399",
                                "tmdb": 1285650,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 2,
                            "title": "War Is the H-Word",
                            "ids": {
                                "trakt": 38837,
                                "tvdb": 131204,
                                "imdb": "tt0584463",
                                "tmdb": 1285651,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 3,
                            "title": "The Cryonic Woman",
                            "ids": {
                                "trakt": 38838,
                                "tvdb": 131205,
                                "imdb": "tt0584453",
                                "tmdb": 1285652,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 4,
                            "title": "Parasites Lost",
                            "ids": {
                                "trakt": 38839,
                                "tvdb": 131206,
                                "imdb": "tt0766131",
                                "tmdb": 35038,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 5,
                            "title": "Amazon Women in the Mood",
                            "ids": {
                                "trakt": 38840,
                                "tvdb": 131207,
                                "imdb": "tt0584431",
                                "tmdb": 35049,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 6,
                            "title": "Bendless Love",
                            "ids": {
                                "trakt": 38841,
                                "tvdb": 131208,
                                "imdb": "tt0584436",
                                "tmdb": 35039,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 7,
                            "title": "The Day the Earth Stood Stupid",
                            "ids": {
                                "trakt": 38842,
                                "tvdb": 131209,
                                "imdb": "tt0756890",
                                "tmdb": 35040,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 8,
                            "title": "That's Lobstertainment!",
                            "ids": {
                                "trakt": 38843,
                                "tvdb": 131210,
                                "imdb": "tt0584451",
                                "tmdb": 35041,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 9,
                            "title": "The Birdbot of Ice-Catraz",
                            "ids": {
                                "trakt": 38844,
                                "tvdb": 131211,
                                "imdb": "tt0584452",
                                "tmdb": 35042,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 10,
                            "title": "The Luck of the Fryrish",
                            "ids": {
                                "trakt": 38845,
                                "tvdb": 131212,
                                "imdb": "tt0768678",
                                "tmdb": 35043,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 11,
                            "title": "The Cyber House Rules",
                            "ids": {
                                "trakt": 38846,
                                "tvdb": 131213,
                                "imdb": "tt0584454",
                                "tmdb": 35044,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 12,
                            "title": "Insane in the Mainframe",
                            "ids": {
                                "trakt": 38847,
                                "tvdb": 131214,
                                "imdb": "tt0756883",
                                "tmdb": 35045,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 13,
                            "title": "Bendin' in the Wind",
                            "ids": {
                                "trakt": 38848,
                                "tvdb": 131215,
                                "imdb": "tt0584435",
                                "tmdb": 35046,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 14,
                            "title": "Time Keeps On Slippin'",
                            "ids": {
                                "trakt": 38849,
                                "tvdb": 131216,
                                "imdb": "tt0584462",
                                "tmdb": 35047,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 15,
                            "title": "I Dated a Robot",
                            "ids": {
                                "trakt": 38850,
                                "tvdb": 131217,
                                "imdb": "tt0584443",
                                "tmdb": 35048,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 4,
                    "ids": {
                        "trakt": 2086,
                        "tvdb": 6591,
                        "tmdb": 1871,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 4,
                            "number": 1,
                            "title": "Roswell That Ends Well",
                            "ids": {
                                "trakt": 38851,
                                "tvdb": 131218,
                                "imdb": "tt0756888",
                                "tmdb": 1285641,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 2,
                            "title": "A Tale of Two Santas",
                            "ids": {
                                "trakt": 38852,
                                "tvdb": 131219,
                                "imdb": "tt0584429",
                                "tmdb": 1285642,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 3,
                            "title": "Anthology of Interest II",
                            "ids": {
                                "trakt": 38853,
                                "tvdb": 131220,
                                "imdb": "tt0756879",
                                "tmdb": 1285643,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 4,
                            "title": "Love and Rocket",
                            "ids": {
                                "trakt": 38854,
                                "tvdb": 131221,
                                "imdb": "tt0584446",
                                "tmdb": 35052,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 5,
                            "title": "Leela's Homeworld",
                            "ids": {
                                "trakt": 38855,
                                "tvdb": 131222,
                                "imdb": "tt0756884",
                                "tmdb": 35053,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 6,
                            "title": "Where the Buggalo Roam",
                            "ids": {
                                "trakt": 38856,
                                "tvdb": 131223,
                                "imdb": "tt0756893",
                                "tmdb": 1285644,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 7,
                            "title": "A Pharaoh to Remember",
                            "ids": {
                                "trakt": 38857,
                                "tvdb": 131224,
                                "imdb": "tt0756878",
                                "tmdb": 1285645,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 8,
                            "title": "Godfellas",
                            "ids": {
                                "trakt": 38858,
                                "tvdb": 131225,
                                "imdb": "tt0756880",
                                "tmdb": 1285646,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 9,
                            "title": "Future Stock",
                            "ids": {
                                "trakt": 38859,
                                "tvdb": 131226,
                                "imdb": "tt0584440",
                                "tmdb": 1285647,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 10,
                            "title": "A Leela of Her Own",
                            "ids": {
                                "trakt": 38860,
                                "tvdb": 131227,
                                "imdb": "tt0584428",
                                "tmdb": 1285648,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 11,
                            "title": "30% Iron Chef",
                            "ids": {
                                "trakt": 38861,
                                "tvdb": 131228,
                                "imdb": "tt0756889",
                                "tmdb": 1285649,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 12,
                            "title": "Where No Fan Has Gone Before",
                            "ids": {
                                "trakt": 38862,
                                "tvdb": 131229,
                                "imdb": "tt0584464",
                                "tmdb": 35060,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 5,
                    "ids": {
                        "trakt": 2087,
                        "tvdb": 6592,
                        "tmdb": 1872,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 5,
                            "number": 1,
                            "title": "Crimes of the Hot",
                            "ids": {
                                "trakt": 38863,
                                "tvdb": 131230,
                                "imdb": "tt0584437",
                                "tmdb": 35076,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 2,
                            "title": "Jurassic Bark",
                            "ids": {
                                "trakt": 38864,
                                "tvdb": 131231,
                                "imdb": "tt0584444",
                                "tmdb": 1108227,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 3,
                            "title": "The Route of All Evil",
                            "ids": {
                                "trakt": 38865,
                                "tvdb": 131232,
                                "imdb": "tt0584458",
                                "tmdb": 1108228,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 4,
                            "title": "A Taste of Freedom",
                            "ids": {
                                "trakt": 38866,
                                "tvdb": 131233,
                                "imdb": "tt0584430",
                                "tmdb": 1108229,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 5,
                            "title": "Kif Gets Knocked Up A Notch",
                            "ids": {
                                "trakt": 38867,
                                "tvdb": 131234,
                                "imdb": "tt0757482",
                                "tmdb": 1232873,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 6,
                            "title": "Less Than Hero",
                            "ids": {
                                "trakt": 38868,
                                "tvdb": 131235,
                                "imdb": "tt0757483",
                                "tmdb": 1232874,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 7,
                            "title": "Teenage Mutant Leela's Hurdles",
                            "ids": {
                                "trakt": 38869,
                                "tvdb": 131236,
                                "imdb": "tt0584450",
                                "tmdb": 1232875,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 8,
                            "title": "The Why of Fry",
                            "ids": {
                                "trakt": 38870,
                                "tvdb": 131237,
                                "imdb": "tt0584460",
                                "tmdb": 1232876,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 9,
                            "title": "The Sting",
                            "ids": {
                                "trakt": 38871,
                                "tvdb": 131238,
                                "imdb": "tt0584459",
                                "tmdb": 1232877,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 10,
                            "title": "The Farnsworth Parabox",
                            "ids": {
                                "trakt": 38872,
                                "tvdb": 131239,
                                "imdb": "tt0757485",
                                "tmdb": 1232878,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 11,
                            "title": "Three Hundred Big Boys",
                            "ids": {
                                "trakt": 38873,
                                "tvdb": 131240,
                                "imdb": "tt0584461",
                                "tmdb": 1232879,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 12,
                            "title": "Spanish Fry",
                            "ids": {
                                "trakt": 38874,
                                "tvdb": 131241,
                                "imdb": "tt0584434",
                                "tmdb": 1232880,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 13,
                            "title": "Bend Her",
                            "ids": {
                                "trakt": 38875,
                                "tvdb": 131242,
                                "imdb": "tt0584433",
                                "tmdb": 1232881,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 14,
                            "title": "Obsoletely Fabulous",
                            "ids": {
                                "trakt": 38876,
                                "tvdb": 131243,
                                "imdb": "tt0757484",
                                "tmdb": 1232882,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 15,
                            "title": "Bender Should Not Be Allowed On TV",
                            "ids": {
                                "trakt": 38877,
                                "tvdb": 131244,
                                "imdb": "tt0779827",
                                "tmdb": 1232883,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 16,
                            "title": "The Devil's Hands Are Idle Playthings",
                            "ids": {
                                "trakt": 38878,
                                "tvdb": 131245,
                                "imdb": "tt0584456",
                                "tmdb": 1232884,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 6,
                    "ids": {
                        "trakt": 2088,
                        "tvdb": 103941,
                        "tmdb": 1873,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 6,
                            "number": 1,
                            "title": "Rebirth",
                            "ids": {
                                "trakt": 38879,
                                "tvdb": 1051911,
                                "imdb": "tt1620650",
                                "tmdb": 35077,
                                "tvrage": 1064852884
                            }
                        },
                        {
                            "season": 6,
                            "number": 2,
                            "title": "In-A-Gadda-Da-Leela",
                            "ids": {
                                "trakt": 38880,
                                "tvdb": 1349211,
                                "imdb": "tt1630891",
                                "tmdb": 35078,
                                "tvrage": 1064925738
                            }
                        },
                        {
                            "season": 6,
                            "number": 3,
                            "title": "Attack of the Killer App",
                            "ids": {
                                "trakt": 38881,
                                "tvdb": 2394061,
                                "imdb": "tt1630892",
                                "tmdb": 35079,
                                "tvrage": 1064927076
                            }
                        },
                        {
                            "season": 6,
                            "number": 4,
                            "title": "Proposition Infinity",
                            "ids": {
                                "trakt": 38882,
                                "tvdb": 2394071,
                                "imdb": "tt1630893",
                                "tmdb": 35080,
                                "tvrage": 1064938815
                            }
                        },
                        {
                            "season": 6,
                            "number": 5,
                            "title": "The Duh-Vinci Code",
                            "ids": {
                                "trakt": 38883,
                                "tvdb": 2394081,
                                "imdb": "tt1630894",
                                "tmdb": 35081,
                                "tvrage": 1064938816
                            }
                        },
                        {
                            "season": 6,
                            "number": 6,
                            "title": "Lethal Inspection",
                            "ids": {
                                "trakt": 38884,
                                "tvdb": 2394091,
                                "imdb": "tt1630895",
                                "tmdb": 35082,
                                "tvrage": 1064943024
                            }
                        },
                        {
                            "season": 6,
                            "number": 7,
                            "title": "The Late Philip J. Fry",
                            "ids": {
                                "trakt": 38885,
                                "tvdb": 2394101,
                                "imdb": "tt1630896",
                                "tmdb": 35083,
                                "tvrage": 1064943025
                            }
                        },
                        {
                            "season": 6,
                            "number": 8,
                            "title": "That Darn Katz!",
                            "ids": {
                                "trakt": 38886,
                                "tvdb": 2419591,
                                "imdb": "tt1630897",
                                "tmdb": 35084,
                                "tvrage": 1064943026
                            }
                        },
                        {
                            "season": 6,
                            "number": 9,
                            "title": "A Clockwork Origin",
                            "ids": {
                                "trakt": 38887,
                                "tvdb": 2419611,
                                "imdb": "tt1630898",
                                "tmdb": 35085,
                                "tvrage": 1064943027
                            }
                        },
                        {
                            "season": 6,
                            "number": 10,
                            "title": "The Prisoner of Benda",
                            "ids": {
                                "trakt": 38888,
                                "tvdb": 2419631,
                                "imdb": "tt1630882",
                                "tmdb": 35086,
                                "tvrage": 1064943028
                            }
                        },
                        {
                            "season": 6,
                            "number": 11,
                            "title": "Lrrreconcilable Ndndifferences",
                            "ids": {
                                "trakt": 38889,
                                "tvdb": 2419641,
                                "imdb": "tt1630883",
                                "tmdb": 35087,
                                "tvrage": 1064943029
                            }
                        },
                        {
                            "season": 6,
                            "number": 12,
                            "title": "The Mutants Are Revolting",
                            "ids": {
                                "trakt": 38890,
                                "tvdb": 2419651,
                                "imdb": "tt1630884",
                                "tmdb": 35088,
                                "tvrage": 1064943030
                            }
                        },
                        {
                            "season": 6,
                            "number": 13,
                            "title": "The Futurama Holiday Spectacular",
                            "ids": {
                                "trakt": 38891,
                                "tvdb": 2779401,
                                "imdb": "tt1630885",
                                "tmdb": 35089,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 14,
                            "title": "Neutopia",
                            "ids": {
                                "trakt": 38892,
                                "tvdb": 4095404,
                                "imdb": "tt1630886",
                                "tmdb": 35002,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 15,
                            "title": "Benderama",
                            "ids": {
                                "trakt": 38893,
                                "tvdb": 4095424,
                                "imdb": "tt1630887",
                                "tmdb": 35090,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 16,
                            "title": "Ghost in the Machines",
                            "ids": {
                                "trakt": 38894,
                                "tvdb": 4095425,
                                "imdb": "tt1630888",
                                "tmdb": 35091,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 17,
                            "title": "Law and Oracle",
                            "ids": {
                                "trakt": 38895,
                                "tvdb": 4105083,
                                "imdb": "tt1630889",
                                "tmdb": 35092,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 18,
                            "title": "The Silence of the Clamps",
                            "ids": {
                                "trakt": 38896,
                                "tvdb": 4105084,
                                "imdb": "tt1630890",
                                "tmdb": 35003,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 19,
                            "title": "Yo Leela Leela",
                            "ids": {
                                "trakt": 38897,
                                "tvdb": 4105085,
                                "imdb": "tt1642353",
                                "tmdb": 35094,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 20,
                            "title": "All the Presidents' Heads",
                            "ids": {
                                "trakt": 38898,
                                "tvdb": 4105086,
                                "imdb": "tt1642354",
                                "tmdb": 35093,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 21,
                            "title": "Mobius Dick",
                            "ids": {
                                "trakt": 38899,
                                "tvdb": 4105087,
                                "imdb": "tt1642355",
                                "tmdb": 35096,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 22,
                            "title": "Fry Am the Egg Man",
                            "ids": {
                                "trakt": 38900,
                                "tvdb": 4140531,
                                "imdb": "tt1642356",
                                "tmdb": 35095,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 23,
                            "title": "The Tip of the Zoidberg",
                            "ids": {
                                "trakt": 38901,
                                "tvdb": 4140532,
                                "imdb": "tt1642357",
                                "tmdb": 35098,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 24,
                            "title": "Cold Warriors",
                            "ids": {
                                "trakt": 38902,
                                "tvdb": 4140533,
                                "imdb": "tt1642358",
                                "tmdb": 35097,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 25,
                            "title": "Overclockwise",
                            "ids": {
                                "trakt": 38903,
                                "tvdb": 4140534,
                                "imdb": "tt1642359",
                                "tmdb": 35099,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 26,
                            "title": "Reincarnation",
                            "ids": {
                                "trakt": 38904,
                                "tvdb": 4140535,
                                "imdb": "tt1642360",
                                "tmdb": 35100,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 7,
                    "ids": {
                        "trakt": 2089,
                        "tvdb": 468993,
                        "tmdb": 1875,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 7,
                            "number": 1,
                            "title": "The Bots and the Bees",
                            "ids": {
                                "trakt": 38905,
                                "tvdb": 4319164,
                                "imdb": "tt1952190",
                                "tmdb": 35107,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 2,
                            "title": "A Farewell to Arms",
                            "ids": {
                                "trakt": 38906,
                                "tvdb": 4319163,
                                "imdb": "tt2005609",
                                "tmdb": 35108,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 3,
                            "title": "Decision 3012",
                            "ids": {
                                "trakt": 38907,
                                "tvdb": 4319165,
                                "imdb": "tt2005617",
                                "tmdb": 35109,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 4,
                            "title": "The Thief of Baghead",
                            "ids": {
                                "trakt": 38908,
                                "tvdb": 4319465,
                                "imdb": "tt2005618",
                                "tmdb": 35110,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 5,
                            "title": "Zapp Dingbat",
                            "ids": {
                                "trakt": 38909,
                                "tvdb": 4319466,
                                "imdb": "tt2005619",
                                "tmdb": 35112,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 6,
                            "title": "The Butterjunk Effect",
                            "ids": {
                                "trakt": 38910,
                                "tvdb": 4336564,
                                "imdb": "tt2005620",
                                "tmdb": 35113,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 7,
                            "title": "The Six Million Dollar Mon",
                            "ids": {
                                "trakt": 38911,
                                "tvdb": 4336565,
                                "imdb": "tt2005621",
                                "tmdb": 35111,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 8,
                            "title": "Fun on a Bun",
                            "ids": {
                                "trakt": 38912,
                                "tvdb": 4336566,
                                "imdb": "tt2005622",
                                "tmdb": 35115,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 9,
                            "title": "Free Will Hunting",
                            "ids": {
                                "trakt": 38913,
                                "tvdb": 4336567,
                                "imdb": "tt2005623",
                                "tmdb": 35116,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 10,
                            "title": "Near-Death Wish",
                            "ids": {
                                "trakt": 38914,
                                "tvdb": 4336568,
                                "imdb": "tt2005599",
                                "tmdb": 35114,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 11,
                            "title": "Viva Mars Vegas",
                            "ids": {
                                "trakt": 38915,
                                "tvdb": 4336569,
                                "imdb": "tt2005601",
                                "tmdb": 35118,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 12,
                            "title": "31st Century Fox",
                            "ids": {
                                "trakt": 38916,
                                "tvdb": 4336570,
                                "imdb": "tt2005600",
                                "tmdb": 35117,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 13,
                            "title": "Naturama",
                            "ids": {
                                "trakt": 38917,
                                "tvdb": 4336571,
                                "imdb": "tt2005602",
                                "tmdb": 35004,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 14,
                            "title": "2-D Blacktop",
                            "ids": {
                                "trakt": 38918,
                                "tvdb": 4515489,
                                "imdb": "tt2005603",
                                "tmdb": 35005,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 15,
                            "title": "Fry and Leela's Big Fling",
                            "ids": {
                                "trakt": 38919,
                                "tvdb": 4515490,
                                "imdb": "tt2005604",
                                "tmdb": 35119,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 16,
                            "title": "T.: The Terrestrial",
                            "ids": {
                                "trakt": 38920,
                                "tvdb": 4515493,
                                "imdb": "tt2005605",
                                "tmdb": 35120,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 17,
                            "title": "Forty Percent Leadbelly",
                            "ids": {
                                "trakt": 38921,
                                "tvdb": 4515495,
                                "imdb": "tt2005606",
                                "tmdb": 35121,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 18,
                            "title": "The Inhuman Torch",
                            "ids": {
                                "trakt": 38922,
                                "tvdb": 4515497,
                                "imdb": "tt2005607",
                                "tmdb": 35123,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 19,
                            "title": "Saturday Morning Fun Pit",
                            "ids": {
                                "trakt": 38923,
                                "tvdb": 4515500,
                                "imdb": "tt2005608",
                                "tmdb": 35122,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 20,
                            "title": "Calculon 2.0",
                            "ids": {
                                "trakt": 38924,
                                "tvdb": 4515502,
                                "imdb": "tt2005610",
                                "tmdb": 35126,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 21,
                            "title": "Assie Come Home",
                            "ids": {
                                "trakt": 38925,
                                "tvdb": 4515504,
                                "imdb": "tt2005611",
                                "tmdb": 35124,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 22,
                            "title": "Leela and the Genestalk",
                            "ids": {
                                "trakt": 38926,
                                "tvdb": 4515505,
                                "imdb": "tt2005612",
                                "tmdb": 35125,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 23,
                            "title": "Game of Tones",
                            "ids": {
                                "trakt": 38927,
                                "tvdb": 4515507,
                                "imdb": "tt2005613",
                                "tmdb": 35129,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 24,
                            "title": "Murder on the Planet Express",
                            "ids": {
                                "trakt": 38928,
                                "tvdb": 4515509,
                                "imdb": "tt2005614",
                                "tmdb": 35127,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 25,
                            "title": "Stench and Stenchibility",
                            "ids": {
                                "trakt": 38929,
                                "tvdb": 4515511,
                                "imdb": "tt2005615",
                                "tmdb": 35128,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 26,
                            "title": "Meanwhile",
                            "ids": {
                                "trakt": 38930,
                                "tvdb": 4515513,
                                "imdb": "tt2005616",
                                "tmdb": 35130,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 8,
                    "ids": {
                        "trakt": 323091,
                        "tvdb": 2016729,
                        "tmdb": 339563,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 8,
                            "number": 1,
                            "title": "The Impossible Stream",
                            "ids": {
                                "trakt": 7537557,
                                "tvdb": 9326352,
                                "imdb": "tt18114790",
                                "tmdb": 4413381,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 2,
                            "title": "Children of a Lesser Bog",
                            "ids": {
                                "trakt": 7537558,
                                "tvdb": 9326357,
                                "imdb": "tt21814884",
                                "tmdb": 4413386,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 3,
                            "title": "How the West Was 1010001",
                            "ids": {
                                "trakt": 7537559,
                                "tvdb": 9326358,
                                "imdb": "tt21814938",
                                "tmdb": 4413387,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 4,
                            "title": "Parasites Regained",
                            "ids": {
                                "trakt": 7537560,
                                "tvdb": 9326360,
                                "imdb": "tt21814942",
                                "tmdb": 4413389,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 5,
                            "title": "Related to Items You've Viewed",
                            "ids": {
                                "trakt": 7537561,
                                "tvdb": 9326356,
                                "imdb": "tt21814424",
                                "tmdb": 4413385,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 6,
                            "title": "I Know What You Did Next Xmas",
                            "ids": {
                                "trakt": 7537562,
                                "tvdb": 9326359,
                                "imdb": "tt21814940",
                                "tmdb": 4413388,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 7,
                            "title": "Rage Against the Vaccine",
                            "ids": {
                                "trakt": 7537563,
                                "tvdb": 9326353,
                                "imdb": "tt21813110",
                                "tmdb": 4413382,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 8,
                            "title": "Zapp Gets Canceled",
                            "ids": {
                                "trakt": 7537564,
                                "tvdb": 9326354,
                                "imdb": "tt21813570",
                                "tmdb": 4413383,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 9,
                            "title": "The Prince and the Product",
                            "ids": {
                                "trakt": 7537565,
                                "tvdb": 9326355,
                                "imdb": "tt21814106",
                                "tmdb": 4413384,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 10,
                            "title": "All the Way Down",
                            "ids": {
                                "trakt": 7537566,
                                "tvdb": 9326361,
                                "imdb": "tt21814946",
                                "tmdb": 4413390,
                                "tvrage": null
                            }
                        }
                    ]
                }
            ]
        },
        "1390": {
            "title": "Game of Thrones",
            "year": 2011,
            "id": 1390,
            "slug": "game-of-thrones",
            "imdb": "https://www.imdb.com/title/tt0944947/",
            "tagline": "Winter Is Coming",
            "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
            "network": "HBO",
            "country": "us",
            "trailer": "https://youtube.com/watch?v=KPLWWIOCOOQ",
            "status": "ended",
            "rating": 8.94891,
            "votes": 123244,
            "language": "en",
            "genres": [
                "fantasy",
                "drama",
                "action",
                "adventure"
            ],
            "aired_episodes": 73,
            "poster": "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
            "seasons": [
                {
                    "number": 0,
                    "ids": {
                        "trakt": 3962,
                        "tvdb": 137481,
                        "tmdb": 3627,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 0,
                            "number": 1,
                            "title": "Inside Game of Thrones",
                            "ids": {
                                "trakt": 73630,
                                "tvdb": 3226241,
                                "imdb": null,
                                "tmdb": 63087,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 2,
                            "title": "15-Minute Preview",
                            "ids": {
                                "trakt": 73631,
                                "tvdb": 4045941,
                                "imdb": null,
                                "tmdb": 63086,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 3,
                            "title": "Making Game of Thrones",
                            "ids": {
                                "trakt": 73632,
                                "tvdb": 4073401,
                                "imdb": "tt2653354",
                                "tmdb": 63088,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 4,
                            "title": "El Juego Comienza",
                            "ids": {
                                "trakt": 73633,
                                "tvdb": 4082317,
                                "imdb": null,
                                "tmdb": 2247123,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 5,
                            "title": "2011 Comic Con Panel",
                            "ids": {
                                "trakt": 73634,
                                "tvdb": 4138149,
                                "imdb": null,
                                "tmdb": 63090,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 6,
                            "title": "You Win or You Die",
                            "ids": {
                                "trakt": 73635,
                                "tvdb": 4292422,
                                "imdb": "tt2972984",
                                "tmdb": 63091,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 9,
                            "title": "Ice and Fire: A Foreshadowing",
                            "ids": {
                                "trakt": 73638,
                                "tvdb": 4779102,
                                "imdb": "tt3645808",
                                "tmdb": 974558,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 10,
                            "title": "The Politics of Power: A Look Back at Season 3",
                            "ids": {
                                "trakt": 73639,
                                "tvdb": 4824480,
                                "imdb": "tt3645842",
                                "tmdb": 974559,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 11,
                            "title": "A Day in the Life",
                            "ids": {
                                "trakt": 1748896,
                                "tvdb": 5124007,
                                "imdb": "tt4437700",
                                "tmdb": 1041057,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 12,
                            "title": "The Story So Far (2015)",
                            "ids": {
                                "trakt": 1798707,
                                "tvdb": 5161729,
                                "imdb": null,
                                "tmdb": 1188785,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 13,
                            "title": "World Premiere",
                            "ids": {
                                "trakt": 1798708,
                                "tvdb": 5161730,
                                "imdb": null,
                                "tmdb": 1203674,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 14,
                            "title": "Red Nose Day 'Game Of Thrones' Musical",
                            "ids": {
                                "trakt": 1889021,
                                "tvdb": 5244066,
                                "imdb": null,
                                "tmdb": 1347221,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 15,
                            "title": "The Story So Far (2016)",
                            "ids": {
                                "trakt": 2215935,
                                "tvdb": 5591415,
                                "imdb": "tt7136312",
                                "tmdb": 1631882,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 16,
                            "title": "The Game Revealed: Season 6 Episode 1 & 2",
                            "ids": {
                                "trakt": 2247121,
                                "tvdb": 5627967,
                                "imdb": null,
                                "tmdb": 1759666,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 17,
                            "title": "The Game Revealed: Season 6 Episode 3 & 4",
                            "ids": {
                                "trakt": 2247122,
                                "tvdb": 0,
                                "imdb": null,
                                "tmdb": 1799533,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 18,
                            "title": "The Game Revealed: Season 6 Episode 5 & 6",
                            "ids": {
                                "trakt": 2266510,
                                "tvdb": 5653905,
                                "imdb": null,
                                "tmdb": 1989799,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 19,
                            "title": "The Game Revealed: Season 6 Episode 7 & 8",
                            "ids": {
                                "trakt": 2266512,
                                "tvdb": 4082317,
                                "imdb": null,
                                "tmdb": 63089,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 20,
                            "title": "The Game Revealed: Season 6 Episode 9 & 10",
                            "ids": {
                                "trakt": 2267809,
                                "tvdb": 5672157,
                                "imdb": null,
                                "tmdb": 2022234,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 21,
                            "title": "Anatomy of A Scene: The Battle of Winterfell",
                            "ids": {
                                "trakt": 2280145,
                                "tvdb": 5655822,
                                "imdb": null,
                                "tmdb": 2022235,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 22,
                            "title": "2016 Comic Con Panel",
                            "ids": {
                                "trakt": 2293345,
                                "tvdb": 5687277,
                                "imdb": null,
                                "tmdb": 2022236,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 23,
                            "title": "18 Hours at the Paint Hall",
                            "ids": {
                                "trakt": 2334691,
                                "tvdb": 5741491,
                                "imdb": null,
                                "tmdb": 3458906,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 24,
                            "title": "The Story So Far (2017)",
                            "ids": {
                                "trakt": 2653546,
                                "tvdb": 6194081,
                                "imdb": "tt7136312",
                                "tmdb": 2022238,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 25,
                            "title": "2017 Comic Con Panel",
                            "ids": {
                                "trakt": 2675929,
                                "tvdb": 6233482,
                                "imdb": null,
                                "tmdb": 2022239,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 26,
                            "title": "Inside the Episode: Season 7 Episode 1",
                            "ids": {
                                "trakt": 2675930,
                                "tvdb": 6233412,
                                "imdb": null,
                                "tmdb": 2022240,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 27,
                            "title": "Inside the Episode: Season 7 Episode 2",
                            "ids": {
                                "trakt": 2675931,
                                "tvdb": 6233419,
                                "imdb": null,
                                "tmdb": 2022241,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 28,
                            "title": "Inside the Episode: Season 7 Episode 3",
                            "ids": {
                                "trakt": 2675932,
                                "tvdb": 6233421,
                                "imdb": null,
                                "tmdb": 2022242,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 29,
                            "title": "Inside the Episode: Season 7 Episode 4",
                            "ids": {
                                "trakt": 2684274,
                                "tvdb": 6247324,
                                "imdb": null,
                                "tmdb": 2022243,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 30,
                            "title": "Inside the Episode: Season 7 Episode 5",
                            "ids": {
                                "trakt": 2696748,
                                "tvdb": 6262566,
                                "imdb": null,
                                "tmdb": 2022244,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 31,
                            "title": "Inside the Episode: Season 7 Episode 6",
                            "ids": {
                                "trakt": 2701959,
                                "tvdb": 6270876,
                                "imdb": null,
                                "tmdb": 2247053,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 32,
                            "title": "Inside the Episode: Season 7 Episode 7",
                            "ids": {
                                "trakt": 2709751,
                                "tvdb": 6285361,
                                "imdb": null,
                                "tmdb": 2247055,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 33,
                            "title": "The Game Revealed: Season 7 Episode 1",
                            "ids": {
                                "trakt": 2709752,
                                "tvdb": 6285899,
                                "imdb": null,
                                "tmdb": 2247061,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 34,
                            "title": "The Game Revealed: Season 7 Episode 2",
                            "ids": {
                                "trakt": 2727592,
                                "tvdb": 6313071,
                                "imdb": null,
                                "tmdb": 2247062,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 35,
                            "title": "The Game Revealed: Season 7 Episode 3",
                            "ids": {
                                "trakt": 2727593,
                                "tvdb": 6313073,
                                "imdb": null,
                                "tmdb": 2247063,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 36,
                            "title": "Conquest & Rebellion: An Animated History of the Seven Kingdoms",
                            "ids": {
                                "trakt": 2729659,
                                "tvdb": 6316967,
                                "imdb": "tt7937220",
                                "tmdb": 2318447,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 37,
                            "title": "The Game Revealed: Season 7 Episode 4",
                            "ids": {
                                "trakt": 2743986,
                                "tvdb": 6336793,
                                "imdb": null,
                                "tmdb": 2247066,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 38,
                            "title": "The Game Revealed: Season 7 Episode 5",
                            "ids": {
                                "trakt": 2743987,
                                "tvdb": 6336794,
                                "imdb": null,
                                "tmdb": 2247067,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 39,
                            "title": "The Game Revealed: Season 7 Episode 6",
                            "ids": {
                                "trakt": 2770266,
                                "tvdb": 6376290,
                                "imdb": null,
                                "tmdb": 2247068,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 40,
                            "title": "The Game Revealed: Season 7 Episode 7",
                            "ids": {
                                "trakt": 2770267,
                                "tvdb": 6376291,
                                "imdb": null,
                                "tmdb": 2247070,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 42,
                            "title": "60 Minutes Profile",
                            "ids": {
                                "trakt": 3474744,
                                "tvdb": 7129495,
                                "imdb": null,
                                "tmdb": 2247071,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 43,
                            "title": "The Story So Far (2018)",
                            "ids": {
                                "trakt": 3480751,
                                "tvdb": 7135314,
                                "imdb": null,
                                "tmdb": 2247072,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 44,
                            "title": "The Cast Remembers",
                            "ids": {
                                "trakt": 3482244,
                                "tvdb": 7136659,
                                "imdb": null,
                                "tmdb": 2247074,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 45,
                            "title": "The Game Revealed: Season 8 Episode 1",
                            "ids": {
                                "trakt": 3482245,
                                "tvdb": 7136668,
                                "imdb": null,
                                "tmdb": 2247076,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 46,
                            "title": "Inside the Episode: Season 8 Episode 1",
                            "ids": {
                                "trakt": 3491539,
                                "tvdb": 7145517,
                                "imdb": null,
                                "tmdb": 2247077,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 47,
                            "title": "The Game Revealed: Season 8 Episode 2",
                            "ids": {
                                "trakt": 3495860,
                                "tvdb": 7149809,
                                "imdb": null,
                                "tmdb": 2247078,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 48,
                            "title": "Inside the Episode: Season 8 Episode 2",
                            "ids": {
                                "trakt": 3495861,
                                "tvdb": 7149834,
                                "imdb": null,
                                "tmdb": 2247079,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 49,
                            "title": "The Game Revealed: Season 8 Episode 3",
                            "ids": {
                                "trakt": 3504719,
                                "tvdb": 7159034,
                                "imdb": null,
                                "tmdb": 2247089,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 50,
                            "title": "Inside the Episode: Season 8 Episode 3",
                            "ids": {
                                "trakt": 3504720,
                                "tvdb": 7159039,
                                "imdb": null,
                                "tmdb": 2247094,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 51,
                            "title": "The Game Revealed: Season 8 Episode 4",
                            "ids": {
                                "trakt": 3515556,
                                "tvdb": 7169036,
                                "imdb": null,
                                "tmdb": 2247096,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 52,
                            "title": "Inside the Episode: Season 8 Episode 4",
                            "ids": {
                                "trakt": 3515557,
                                "tvdb": 7169047,
                                "imdb": null,
                                "tmdb": 2247097,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 53,
                            "title": "The Game Revealed: Season 8 Episode 5",
                            "ids": {
                                "trakt": 3526797,
                                "tvdb": 7180783,
                                "imdb": null,
                                "tmdb": 2247099,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 54,
                            "title": "Inside the Episode: Season 8 Episode 5",
                            "ids": {
                                "trakt": 3526798,
                                "tvdb": 7180786,
                                "imdb": null,
                                "tmdb": 2247100,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 55,
                            "title": "Game of Thrones: The Last Watch",
                            "ids": {
                                "trakt": 3821088,
                                "tvdb": 7107505,
                                "imdb": "tt10090796",
                                "tmdb": 3456288,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 56,
                            "title": "Histories & Lore: The Children of the Forest, the First Men, and the Andals",
                            "ids": {
                                "trakt": 4724442,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465258,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 57,
                            "title": "Histories & Lore: The Age of Heroes",
                            "ids": {
                                "trakt": 4724444,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465259,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 58,
                            "title": "Histories & Lore: The Old Gods and the New",
                            "ids": {
                                "trakt": 4724446,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465260,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 59,
                            "title": "Histories & Lore: The History of the Night's Watch (Jeor Mormont)",
                            "ids": {
                                "trakt": 4724448,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465261,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 60,
                            "title": "Histories & Lore: The History of the Night's Watch (Maester Luwin)",
                            "ids": {
                                "trakt": 4724450,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465262,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 61,
                            "title": "Histories & Lore: The History of the Night's Watch (Tywin Lannister)",
                            "ids": {
                                "trakt": 4724452,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465263,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 62,
                            "title": "Histories & Lore: The Order of the Maesters",
                            "ids": {
                                "trakt": 4724454,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465264,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 63,
                            "title": "Histories & Lore: Valyria and the Dragons",
                            "ids": {
                                "trakt": 4724456,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465265,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 64,
                            "title": "Histories & Lore: The Field of Fire (Viserys Targaryen)",
                            "ids": {
                                "trakt": 4724458,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465266,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 65,
                            "title": "Histories & Lore: The Field of Fire (Robb Stark)",
                            "ids": {
                                "trakt": 4724460,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465267,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 66,
                            "title": "Histories & Lore: Mad King Aerys (Robert Baratheon)",
                            "ids": {
                                "trakt": 4724462,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2465268,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 67,
                            "title": "Histories & Lore: Mad King Aerys (Maester Luwin)",
                            "ids": {
                                "trakt": 5129224,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882564,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 68,
                            "title": "Histories & Lore: Mad King Aerys (Tywin Lannister)",
                            "ids": {
                                "trakt": 5129225,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882566,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 69,
                            "title": "Histories & Lore: Robert's Rebellion (Robert Baratheon)",
                            "ids": {
                                "trakt": 5129226,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882568,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 70,
                            "title": "Histories & Lore: Robert's Rebellion (Viserys Targaryen)",
                            "ids": {
                                "trakt": 5129227,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882569,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 71,
                            "title": "Histories & Lore: The Sack of King's Landing (Viserys Targaryen)",
                            "ids": {
                                "trakt": 5129228,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882570,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 72,
                            "title": "Histories & Lore: The Sack of King's Landing (Robert Baratheon)",
                            "ids": {
                                "trakt": 5129229,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882572,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 73,
                            "title": "Histories & Lore: The Sack of King's Landing (Maester Luwin)",
                            "ids": {
                                "trakt": 5129230,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882573,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 74,
                            "title": "Histories & Lore: The Sack of King's Landing (Tywin Lannister)",
                            "ids": {
                                "trakt": 5129231,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882574,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 75,
                            "title": "Histories & Lore: House Stark",
                            "ids": {
                                "trakt": 5129232,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882575,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 76,
                            "title": "Histories & Lore: House Lannister",
                            "ids": {
                                "trakt": 5129233,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882576,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 77,
                            "title": "Histories & Lore: House Targaryen",
                            "ids": {
                                "trakt": 5129234,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882577,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 78,
                            "title": "Histories & Lore: House Baratheon",
                            "ids": {
                                "trakt": 5129235,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882578,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 79,
                            "title": "Histories & Lore: House Arryn",
                            "ids": {
                                "trakt": 5129236,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882579,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 80,
                            "title": "Histories & Lore: The Greyjoy Rebellion (Robb Stark)",
                            "ids": {
                                "trakt": 5129237,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882585,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 81,
                            "title": "Histories & Lore: The Greyjoy Rebellion (Theon Greyjoy)",
                            "ids": {
                                "trakt": 5129238,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882586,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 82,
                            "title": "Histories & Lore: The Greyjoy Rebellion (Stannis Baratheon)",
                            "ids": {
                                "trakt": 5129239,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882587,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 83,
                            "title": "Histories & Lore: Robert's Rebellion (Stannis Baratheon)",
                            "ids": {
                                "trakt": 5129240,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882588,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 84,
                            "title": "Histories & Lore: Robert's Rebellion (Davos Seaworth)",
                            "ids": {
                                "trakt": 5129241,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882589,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 85,
                            "title": "Histories & Lore: Robert's Rebellion (Margaery Tyrell)",
                            "ids": {
                                "trakt": 5129242,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882590,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 86,
                            "title": "Histories & Lore: Robert's Rebellion (Catelyn Stark)",
                            "ids": {
                                "trakt": 5129243,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882591,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 87,
                            "title": "Histories & Lore: House Tyrell",
                            "ids": {
                                "trakt": 5129244,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882592,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 88,
                            "title": "Histories & Lore: House Greyjoy",
                            "ids": {
                                "trakt": 5129245,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882593,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 89,
                            "title": "Histories & Lore: House Clegane",
                            "ids": {
                                "trakt": 5129246,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882594,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 90,
                            "title": "Histories & Lore: The Free Folk",
                            "ids": {
                                "trakt": 5129247,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882595,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 91,
                            "title": "Histories & Lore: The Night's Watch",
                            "ids": {
                                "trakt": 5129248,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882596,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 92,
                            "title": "Histories & Lore: Dragonstone",
                            "ids": {
                                "trakt": 5129249,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882597,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 93,
                            "title": "Histories & Lore: Harrenhal",
                            "ids": {
                                "trakt": 5129250,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882598,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 94,
                            "title": "Histories & Lore: The Free Cities",
                            "ids": {
                                "trakt": 5129251,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882599,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 95,
                            "title": "Histories & Lore: Qarth",
                            "ids": {
                                "trakt": 5129252,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882600,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 96,
                            "title": "Histories & Lore: The Drowned God",
                            "ids": {
                                "trakt": 5129253,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882601,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 97,
                            "title": "Histories & Lore: The Alchemists' Guild",
                            "ids": {
                                "trakt": 5129254,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882602,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 98,
                            "title": "Histories & Lore: The Warlocks",
                            "ids": {
                                "trakt": 5129255,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882603,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 99,
                            "title": "Histories & Lore: Old Ghis & Slaver's Bay",
                            "ids": {
                                "trakt": 5129256,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882604,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 100,
                            "title": "Histories & Lore: The Unsullied",
                            "ids": {
                                "trakt": 5129257,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882605,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 101,
                            "title": "Histories & Lore: House Reed",
                            "ids": {
                                "trakt": 5129258,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882606,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 102,
                            "title": "Histories & Lore: House Bolton",
                            "ids": {
                                "trakt": 5129259,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882607,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 103,
                            "title": "Histories & Lore: House Frey",
                            "ids": {
                                "trakt": 5129260,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882608,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 104,
                            "title": "Histories & Lore: House Tully",
                            "ids": {
                                "trakt": 5129261,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882609,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 105,
                            "title": "Histories & Lore: The Lord of Light",
                            "ids": {
                                "trakt": 5129262,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882610,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 106,
                            "title": "Histories & Lore: Wargs and the Sight",
                            "ids": {
                                "trakt": 5129263,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882611,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 107,
                            "title": "Histories & Lore: Robert's Rebellion (Petyr Baelish and Varys)",
                            "ids": {
                                "trakt": 5129264,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882614,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 108,
                            "title": "Histories & Lore: The Red Keep",
                            "ids": {
                                "trakt": 5129265,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882615,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 109,
                            "title": "Histories & Lore: The North",
                            "ids": {
                                "trakt": 5129266,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882619,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 110,
                            "title": "Histories & Lore: The Reach",
                            "ids": {
                                "trakt": 5129267,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882623,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 111,
                            "title": "Histories & Lore: The Riverlands",
                            "ids": {
                                "trakt": 5129268,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882624,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 112,
                            "title": "Histories & Lore: The Stormlands",
                            "ids": {
                                "trakt": 5129269,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882625,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 113,
                            "title": "Histories & Lore: The Westerlands",
                            "ids": {
                                "trakt": 5129270,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882627,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 114,
                            "title": "Histories & Lore: The Vale",
                            "ids": {
                                "trakt": 5129271,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882628,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 115,
                            "title": "Histories & Lore: House Martell",
                            "ids": {
                                "trakt": 5129272,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882629,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 116,
                            "title": "Histories & Lore: House Baelish",
                            "ids": {
                                "trakt": 5129273,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882634,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 117,
                            "title": "Histories & Lore: Dragons",
                            "ids": {
                                "trakt": 5129274,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882637,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 118,
                            "title": "Histories & Lore: Poisons",
                            "ids": {
                                "trakt": 5129275,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882642,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 119,
                            "title": "Histories & Lore: The Bastards of Westeros",
                            "ids": {
                                "trakt": 5129276,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882646,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 120,
                            "title": "Histories & Lore: The Iron Bank of Braavos",
                            "ids": {
                                "trakt": 5129277,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882649,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 121,
                            "title": "Histories & Lore: Sellswords & Hedge Knights",
                            "ids": {
                                "trakt": 5129278,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882651,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 122,
                            "title": "Histories & Lore: Robert's Rebellion (Oberyn Martell)",
                            "ids": {
                                "trakt": 5129279,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882656,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 123,
                            "title": "Histories & Lore: The Wall",
                            "ids": {
                                "trakt": 5129280,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882659,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 124,
                            "title": "Histories & Lore: The Nations of the North",
                            "ids": {
                                "trakt": 5129281,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882662,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 125,
                            "title": "Histories & Lore: The Kingsguard (Jaime Lannister)",
                            "ids": {
                                "trakt": 5129282,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882664,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 126,
                            "title": "Histories & Lore: The Kingsguard (Bronn)",
                            "ids": {
                                "trakt": 5129283,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882666,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 127,
                            "title": "Histories & Lore: The Maester's Chain",
                            "ids": {
                                "trakt": 5129284,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882667,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 128,
                            "title": "Histories & Lore: The Death of Kings",
                            "ids": {
                                "trakt": 5129285,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882668,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 129,
                            "title": "Histories & Lore: Valyrian Steel",
                            "ids": {
                                "trakt": 5129286,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882669,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 130,
                            "title": "Histories & Lore: Justice of the Seven Kingdoms",
                            "ids": {
                                "trakt": 5129287,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882670,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 131,
                            "title": "Histories & Lore: The Seven-Pointed Star",
                            "ids": {
                                "trakt": 5129288,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882673,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 132,
                            "title": "Histories & Lore: The Faith Militant",
                            "ids": {
                                "trakt": 5129289,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882674,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 133,
                            "title": "Histories & Lore: Volantis",
                            "ids": {
                                "trakt": 5129290,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882676,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 134,
                            "title": "Histories & Lore: Braavos",
                            "ids": {
                                "trakt": 5129291,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882677,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 135,
                            "title": "Histories & Lore: The Faceless Men",
                            "ids": {
                                "trakt": 5129292,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882678,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 136,
                            "title": "Histories & Lore: Winterfell",
                            "ids": {
                                "trakt": 5129293,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882679,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 137,
                            "title": "Histories & Lore: The Lord Commanders",
                            "ids": {
                                "trakt": 5129294,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882680,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 138,
                            "title": "Histories & Lore: Robert's Rebellion (Barristan Selmy)",
                            "ids": {
                                "trakt": 5129295,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882681,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 139,
                            "title": "Histories & Lore: Dorne",
                            "ids": {
                                "trakt": 5129296,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882682,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 140,
                            "title": "Histories & Lore: The Fighting Pits of Meereen",
                            "ids": {
                                "trakt": 5129297,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882686,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 141,
                            "title": "Histories & Lore: The River Rhoyne",
                            "ids": {
                                "trakt": 5129298,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882699,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 142,
                            "title": "Histories & Lore: The Many-Faced God",
                            "ids": {
                                "trakt": 5129299,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882700,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 143,
                            "title": "Histories & Lore: Greyscale and the Stone Men",
                            "ids": {
                                "trakt": 5129300,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882701,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 144,
                            "title": "Histories & Lore: The Great Masters of Meereen",
                            "ids": {
                                "trakt": 5129301,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882702,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 145,
                            "title": "Histories & Lore: The Dance of Dragons",
                            "ids": {
                                "trakt": 5129302,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882703,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 146,
                            "title": "Histories & Lore: The Old Way",
                            "ids": {
                                "trakt": 5129303,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882711,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 147,
                            "title": "Histories & Lore: The Kingsmoot",
                            "ids": {
                                "trakt": 5129304,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882725,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 148,
                            "title": "Histories & Lore: The Summer Sea",
                            "ids": {
                                "trakt": 5129305,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882748,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 149,
                            "title": "Histories & Lore: The War of the Ninepenny Kings",
                            "ids": {
                                "trakt": 5129306,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882750,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 150,
                            "title": "Histories & Lore: The Great Tourney at Harrenhal",
                            "ids": {
                                "trakt": 5129307,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882752,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 151,
                            "title": "Histories & Lore: Robert's Rebellion (Jaime Lannister)",
                            "ids": {
                                "trakt": 5129308,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882754,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 152,
                            "title": "Histories & Lore: Vaes Dothrak",
                            "ids": {
                                "trakt": 5129309,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882756,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 153,
                            "title": "Histories & Lore: The Dothraki",
                            "ids": {
                                "trakt": 5129310,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882758,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 154,
                            "title": "Histories & Lore: Northern Allegiances to House Stark",
                            "ids": {
                                "trakt": 5129311,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882761,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 155,
                            "title": "Histories & Lore: Children of the Forest vs. the First Men",
                            "ids": {
                                "trakt": 5129312,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882763,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 156,
                            "title": "Histories & Lore: The Brotherhood Without Banners",
                            "ids": {
                                "trakt": 5129313,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882765,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 157,
                            "title": "Histories & Lore: Oldtown",
                            "ids": {
                                "trakt": 5129314,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882767,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 158,
                            "title": "Histories & Lore: House Dayne",
                            "ids": {
                                "trakt": 5129315,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882768,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 159,
                            "title": "Histories & Lore: The Little Birds",
                            "ids": {
                                "trakt": 5129316,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882770,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 160,
                            "title": "Histories & Lore: The Knights of the Vale",
                            "ids": {
                                "trakt": 5129317,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882771,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 161,
                            "title": "Histories & Lore: House Tarly",
                            "ids": {
                                "trakt": 5129318,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882773,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 162,
                            "title": "Histories & Lore: Riverrun",
                            "ids": {
                                "trakt": 5129319,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882775,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 163,
                            "title": "Histories & Lore: The Great Sept of Baelor",
                            "ids": {
                                "trakt": 5129320,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882776,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 164,
                            "title": "Histories & Lore: The Dragonpit",
                            "ids": {
                                "trakt": 5129321,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882777,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 165,
                            "title": "Histories & Lore: The Citadel",
                            "ids": {
                                "trakt": 5129322,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882778,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 166,
                            "title": "Histories & Lore: Casterly Rock",
                            "ids": {
                                "trakt": 5129323,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882779,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 167,
                            "title": "Histories & Lore: Highgarden",
                            "ids": {
                                "trakt": 5129324,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882780,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 168,
                            "title": "Histories & Lore: The Golden Company",
                            "ids": {
                                "trakt": 5129325,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882781,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 169,
                            "title": "Histories & Lore: Prophecies of the Known World",
                            "ids": {
                                "trakt": 5129326,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882782,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 170,
                            "title": "Histories & Lore: The Hand of the King",
                            "ids": {
                                "trakt": 5129327,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882783,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 171,
                            "title": "Histories & Lore: The Rains of Castamere",
                            "ids": {
                                "trakt": 5129328,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882784,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 172,
                            "title": "Histories & Lore: King's Landing",
                            "ids": {
                                "trakt": 5129329,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882785,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 173,
                            "title": "Histories & Lore: The Greyjoy Rebellion (Jaime Lannister and Euron Greyjoy)",
                            "ids": {
                                "trakt": 5129330,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882786,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 174,
                            "title": "Histories & Lore: The Blackfyres",
                            "ids": {
                                "trakt": 5129331,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882787,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 175,
                            "title": "Histories & Lore: The South",
                            "ids": {
                                "trakt": 5129332,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882789,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 176,
                            "title": "Histories & Lore: The Defiance of Duskendale",
                            "ids": {
                                "trakt": 5129333,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882790,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 177,
                            "title": "Histories & Lore: Maegor the Cruel",
                            "ids": {
                                "trakt": 5129334,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2882791,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 178,
                            "title": "The Real History Behind Game of Thrones (Part 1)",
                            "ids": {
                                "trakt": 5729518,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3356755,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 179,
                            "title": "The Real History Behind Game of Thrones (Part 2)",
                            "ids": {
                                "trakt": 5729519,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3356757,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 180,
                            "title": "Creating the show open",
                            "ids": {
                                "trakt": 5805221,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413900,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 181,
                            "title": "From the book to the screen",
                            "ids": {
                                "trakt": 5805222,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413901,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 182,
                            "title": "Season 1 Character Profiles: Arya Stark",
                            "ids": {
                                "trakt": 5805229,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413950,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 183,
                            "title": "Season 1 Character Profiles: Bran Stark",
                            "ids": {
                                "trakt": 5805231,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413954,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 184,
                            "title": "Season 1 Character Profiles: Catelyn Stark",
                            "ids": {
                                "trakt": 5805232,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413957,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 185,
                            "title": "Season 1 Character Profiles: Cersei Lannister",
                            "ids": {
                                "trakt": 5805364,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413958,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 186,
                            "title": "Season 1 Character Profiles: Daenerys Targaryen",
                            "ids": {
                                "trakt": 5805412,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413959,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 187,
                            "title": "Season 1 Character Profiles: Jaime Lannister",
                            "ids": {
                                "trakt": 5805478,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413961,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 188,
                            "title": "Season 1 Character Profiles: Jon Snow",
                            "ids": {
                                "trakt": 5805520,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413962,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 189,
                            "title": "Season 1 Character Profiles: Khal Drogo",
                            "ids": {
                                "trakt": 5805544,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413963,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 190,
                            "title": "Season 1 Character Profiles: Ned Stark",
                            "ids": {
                                "trakt": 5805564,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413965,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 191,
                            "title": "Season 1 Character Profiles: Petyr Baelish",
                            "ids": {
                                "trakt": 5805586,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413966,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 192,
                            "title": "Season 1 Character Profiles: Robb Stark",
                            "ids": {
                                "trakt": 5805588,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413967,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 193,
                            "title": "Season 1 Character Profiles: Robert Baratheon",
                            "ids": {
                                "trakt": 5805594,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413968,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 194,
                            "title": "Season 1 Character Profiles: Sansa Stark",
                            "ids": {
                                "trakt": 5805595,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413969,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 195,
                            "title": "Season 1 Character Profiles: Tyrion Lannister",
                            "ids": {
                                "trakt": 5805598,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413970,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 196,
                            "title": "Season 1 Character Profiles: Viserys Targaryen",
                            "ids": {
                                "trakt": 5805599,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413971,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 197,
                            "title": "The night's watch",
                            "ids": {
                                "trakt": 5805601,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413921,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 198,
                            "title": "Creating the Dothraki language",
                            "ids": {
                                "trakt": 5805602,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3413913,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 199,
                            "title": "Season 2 Character Profiles: Jon Snow",
                            "ids": {
                                "trakt": 5805603,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414005,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 200,
                            "title": "Season 2 Character Profiles: Daenerys Targaryen",
                            "ids": {
                                "trakt": 5805606,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414006,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 201,
                            "title": "Season 2 Character Profiles: Robb Stark",
                            "ids": {
                                "trakt": 5805607,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414007,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 202,
                            "title": "Season 2 Character Profiles: Joffrey Baratheon",
                            "ids": {
                                "trakt": 5805608,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414008,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 203,
                            "title": "Season 2 Character Profiles: Renly Baratheon",
                            "ids": {
                                "trakt": 5805629,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414009,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 204,
                            "title": "Season 2 Character Profiles: Stannis Baratheon",
                            "ids": {
                                "trakt": 5805630,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414010,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 205,
                            "title": "Season 2 Character Profiles: Theon Greyjoy",
                            "ids": {
                                "trakt": 5805635,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414011,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 206,
                            "title": "Creating The Battle Of Blackwater Bay",
                            "ids": {
                                "trakt": 5805637,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414012,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 207,
                            "title": "Game of Thrones: The Inner Circle",
                            "ids": {
                                "trakt": 5805638,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414013,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 208,
                            "title": "Religions of Westeros",
                            "ids": {
                                "trakt": 5805639,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414026,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 209,
                            "title": "New Characters",
                            "ids": {
                                "trakt": 5805640,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414043,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 210,
                            "title": "A Gathering Storm",
                            "ids": {
                                "trakt": 5805641,
                                "tvdb": 4517457,
                                "imdb": null,
                                "tmdb": 63092,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 211,
                            "title": "The Politics of Marriage",
                            "ids": {
                                "trakt": 5805642,
                                "tvdb": 4576208,
                                "imdb": null,
                                "tmdb": 63093,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 212,
                            "title": "Inside the Wildlings",
                            "ids": {
                                "trakt": 5805643,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414076,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 213,
                            "title": "Unused / extended scenes from season 3",
                            "ids": {
                                "trakt": 5805655,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3414079,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 214,
                            "title": "The Fallen: A Roundtable",
                            "ids": {
                                "trakt": 5805656,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418388,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 215,
                            "title": "Behind the battle for the wall",
                            "ids": {
                                "trakt": 5805657,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418389,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 217,
                            "title": "Bastards of Westeros",
                            "ids": {
                                "trakt": 5805659,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418391,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 218,
                            "title": "New characters and locations",
                            "ids": {
                                "trakt": 5805661,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418392,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 219,
                            "title": "2 unused scenes from Season 4",
                            "ids": {
                                "trakt": 5805667,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418393,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 220,
                            "title": "Bloopers Season 4",
                            "ids": {
                                "trakt": 5805668,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418394,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 221,
                            "title": "Anatomy of an episode: Mother's Mercy",
                            "ids": {
                                "trakt": 5805673,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418404,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 223,
                            "title": "New characters and locations",
                            "ids": {
                                "trakt": 5805677,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418407,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 226,
                            "title": "4 unused scenes from Season 5",
                            "ids": {
                                "trakt": 5805695,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418420,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 227,
                            "title": "The battle of the bastards: An in-depth look",
                            "ids": {
                                "trakt": 5805696,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418448,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 228,
                            "title": "Recreating the Dothraki world",
                            "ids": {
                                "trakt": 5805697,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418449,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 229,
                            "title": "18 Hours at the Paint Hall",
                            "ids": {
                                "trakt": 5805698,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2022237,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 230,
                            "title": "3 deleted scenes from Season 6",
                            "ids": {
                                "trakt": 5805701,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3418451,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 231,
                            "title": "Anatomy of an Episode: A Golden Crown",
                            "ids": {
                                "trakt": 5805702,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695110,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 232,
                            "title": "Cast Auditions: Harry Lloyd (Viserys Targaryen)",
                            "ids": {
                                "trakt": 6084684,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695208,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 233,
                            "title": "Cast Auditions: Rory McCann (Sandor Clegane)",
                            "ids": {
                                "trakt": 6084685,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695212,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 234,
                            "title": "Cast Auditions: Jason Momoa (Khal Drogo)",
                            "ids": {
                                "trakt": 6084686,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695216,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 235,
                            "title": "Cast Auditions: Sophie Turner (Sansa Stark)",
                            "ids": {
                                "trakt": 6084687,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695221,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 236,
                            "title": "Cast Auditions: Maisie Williams (Arya Stark)",
                            "ids": {
                                "trakt": 6084688,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695227,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 237,
                            "title": "Cast Auditions: Miltos Yerolemou (Syrio Forel)",
                            "ids": {
                                "trakt": 6084689,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695229,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 238,
                            "title": "Deleted Scene: Dorreah and Irri",
                            "ids": {
                                "trakt": 6084690,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695426,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 239,
                            "title": "Deleted Scene: The Hound and the Little Bird",
                            "ids": {
                                "trakt": 6084691,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695427,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 240,
                            "title": "Deleted Scene: Varys congratulates Littlefinger",
                            "ids": {
                                "trakt": 6084692,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695428,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 241,
                            "title": "Deleted Scene: Margaery comforts Loras",
                            "ids": {
                                "trakt": 6084693,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695429,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 243,
                            "title": "Anatomy of a Scene: Planning a Royal Wedding",
                            "ids": {
                                "trakt": 6084695,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3695656,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 244,
                            "title": "The Rains of Castamere Unveiled",
                            "ids": {
                                "trakt": 6416970,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3748378,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 245,
                            "title": "Official Opening Credits (Season 1)",
                            "ids": {
                                "trakt": 6605385,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3874773,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 246,
                            "title": "Stark Kids Sing Show Opening (Season 1)",
                            "ids": {
                                "trakt": 6605386,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3874775,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 247,
                            "title": "Stark Children Beatboxing Game of Thrones Theme Song (Season 2",
                            "ids": {
                                "trakt": 6605387,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3874776,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 248,
                            "title": "Blooper Reel 2 (Season 5)",
                            "ids": {
                                "trakt": 6605388,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3874778,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 249,
                            "title": "Deleted Scenes from Season 8",
                            "ids": {
                                "trakt": 6605389,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3874780,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 250,
                            "title": "Arya's Transition",
                            "ids": {
                                "trakt": 6768773,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948402,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 251,
                            "title": "Arya and the Hound",
                            "ids": {
                                "trakt": 6768777,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948403,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 252,
                            "title": "Dany's Love Triangle",
                            "ids": {
                                "trakt": 6768781,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948404,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 253,
                            "title": "The Bedding Ceremony",
                            "ids": {
                                "trakt": 6768784,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948405,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 254,
                            "title": "Marriage in Westeros",
                            "ids": {
                                "trakt": 6768788,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948409,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 255,
                            "title": "The Free Companies of Essos",
                            "ids": {
                                "trakt": 6768792,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948411,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 256,
                            "title": "History of the Gift",
                            "ids": {
                                "trakt": 6768796,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948414,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 257,
                            "title": "The Ultimate Surprise",
                            "ids": {
                                "trakt": 6768800,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948419,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 258,
                            "title": "The temptation of Jon Snow",
                            "ids": {
                                "trakt": 6768803,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948424,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 259,
                            "title": "One must suffer for art",
                            "ids": {
                                "trakt": 6768806,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948436,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 260,
                            "title": "Guest Right",
                            "ids": {
                                "trakt": 6768807,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948438,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 261,
                            "title": "History of the Nightfort",
                            "ids": {
                                "trakt": 6768808,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948443,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 262,
                            "title": "History of Slaver's Bay",
                            "ids": {
                                "trakt": 6768811,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948444,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 263,
                            "title": "New Sound for 'The rains of Castamere'",
                            "ids": {
                                "trakt": 6768814,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948497,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 264,
                            "title": "Roose Bolton's motivation",
                            "ids": {
                                "trakt": 6768818,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948499,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 265,
                            "title": "Sam the wizard",
                            "ids": {
                                "trakt": 6768822,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948514,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 266,
                            "title": "Dany's motivation: Freeing the slaves",
                            "ids": {
                                "trakt": 6768823,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948526,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 267,
                            "title": "Wildling Raiders",
                            "ids": {
                                "trakt": 6768824,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948542,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 268,
                            "title": "The Stark state of mind",
                            "ids": {
                                "trakt": 6768826,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3948543,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 269,
                            "title": "Fire & Steel: Creating the Invasion of Westeros",
                            "ids": {
                                "trakt": 7443216,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4324749,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 270,
                            "title": "From Imagination to Reality: Inside the Art Department - Part 1",
                            "ids": {
                                "trakt": 7443217,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4324750,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 271,
                            "title": "From Imagination to Reality: Inside the Art Department - Part 2",
                            "ids": {
                                "trakt": 7443218,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4324752,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 272,
                            "title": "Jon's Inner Struggle",
                            "ids": {
                                "trakt": 7443219,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4324765,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 273,
                            "title": "Jon's Tragic Flaw",
                            "ids": {
                                "trakt": 7443220,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4324775,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 274,
                            "title": "VFX: Creating the Twins",
                            "ids": {
                                "trakt": 7443221,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4324789,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 275,
                            "title": "VFX: Creating the Wall",
                            "ids": {
                                "trakt": 7443222,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4324795,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 276,
                            "title": "Red Wedding Option 1: Behind The Scenes",
                            "ids": {
                                "trakt": 7443223,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4324806,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 277,
                            "title": "Red Wedding Option 2: Interviews",
                            "ids": {
                                "trakt": 7443224,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4324807,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 278,
                            "title": "Red Wedding Option 3: Red Wedding Scene",
                            "ids": {
                                "trakt": 7443225,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4324813,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 279,
                            "title": "The Last Season: When Winter Falls",
                            "ids": {
                                "trakt": 10680196,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4404695,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 280,
                            "title": "The Last Season: Duty is the Death of Love",
                            "ids": {
                                "trakt": 10680200,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4404696,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 1,
                    "ids": {
                        "trakt": 3963,
                        "tvdb": 364731,
                        "tmdb": 3624,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 1,
                            "number": 1,
                            "title": "Winter Is Coming",
                            "ids": {
                                "trakt": 73640,
                                "tvdb": 3254641,
                                "imdb": "tt1480055",
                                "tmdb": 63056,
                                "tvrage": 1065008299
                            }
                        },
                        {
                            "season": 1,
                            "number": 2,
                            "title": "The Kingsroad",
                            "ids": {
                                "trakt": 73641,
                                "tvdb": 3436411,
                                "imdb": "tt1668746",
                                "tmdb": 63057,
                                "tvrage": 1065023912
                            }
                        },
                        {
                            "season": 1,
                            "number": 3,
                            "title": "Lord Snow",
                            "ids": {
                                "trakt": 73642,
                                "tvdb": 3436421,
                                "imdb": "tt1829962",
                                "tmdb": 63058,
                                "tvrage": 1065027990
                            }
                        },
                        {
                            "season": 1,
                            "number": 4,
                            "title": "Cripples, Bastards, and Broken Things",
                            "ids": {
                                "trakt": 73643,
                                "tvdb": 3436431,
                                "imdb": "tt1829963",
                                "tmdb": 63059,
                                "tvrage": 1065029350
                            }
                        },
                        {
                            "season": 1,
                            "number": 5,
                            "title": "The Wolf and the Lion",
                            "ids": {
                                "trakt": 73644,
                                "tvdb": 3436441,
                                "imdb": "tt1829964",
                                "tmdb": 63060,
                                "tvrage": 1065036402
                            }
                        },
                        {
                            "season": 1,
                            "number": 6,
                            "title": "A Golden Crown",
                            "ids": {
                                "trakt": 73645,
                                "tvdb": 3436451,
                                "imdb": "tt1837862",
                                "tmdb": 63061,
                                "tvrage": 1065036403
                            }
                        },
                        {
                            "season": 1,
                            "number": 7,
                            "title": "You Win or You Die",
                            "ids": {
                                "trakt": 73646,
                                "tvdb": 3436461,
                                "imdb": "tt1837863",
                                "tmdb": 63062,
                                "tvrage": 1065036404
                            }
                        },
                        {
                            "season": 1,
                            "number": 8,
                            "title": "The Pointy End",
                            "ids": {
                                "trakt": 73647,
                                "tvdb": 3360391,
                                "imdb": "tt1837864",
                                "tmdb": 63063,
                                "tvrage": 1065039305
                            }
                        },
                        {
                            "season": 1,
                            "number": 9,
                            "title": "Baelor",
                            "ids": {
                                "trakt": 73648,
                                "tvdb": 4063481,
                                "imdb": "tt1851398",
                                "tmdb": 63064,
                                "tvrage": 1065039306
                            }
                        },
                        {
                            "season": 1,
                            "number": 10,
                            "title": "Fire and Blood",
                            "ids": {
                                "trakt": 73649,
                                "tvdb": 4063491,
                                "imdb": "tt1851397",
                                "tmdb": 63065,
                                "tvrage": 1065039307
                            }
                        }
                    ]
                },
                {
                    "number": 2,
                    "ids": {
                        "trakt": 3964,
                        "tvdb": 473271,
                        "tmdb": 3625,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 2,
                            "number": 1,
                            "title": "The North Remembers",
                            "ids": {
                                "trakt": 73650,
                                "tvdb": 4161693,
                                "imdb": "tt1971833",
                                "tmdb": 63066,
                                "tvrage": 1065074755
                            }
                        },
                        {
                            "season": 2,
                            "number": 2,
                            "title": "The Night Lands",
                            "ids": {
                                "trakt": 73651,
                                "tvdb": 4245771,
                                "imdb": "tt2069318",
                                "tmdb": 974430,
                                "tvrage": 1065150289
                            }
                        },
                        {
                            "season": 2,
                            "number": 3,
                            "title": "What is Dead May Never Die",
                            "ids": {
                                "trakt": 73652,
                                "tvdb": 4245772,
                                "imdb": "tt2070135",
                                "tmdb": 63068,
                                "tvrage": 1065153444
                            }
                        },
                        {
                            "season": 2,
                            "number": 4,
                            "title": "Garden of Bones",
                            "ids": {
                                "trakt": 73653,
                                "tvdb": 4245773,
                                "imdb": "tt2069319",
                                "tmdb": 63069,
                                "tvrage": 1065153998
                            }
                        },
                        {
                            "season": 2,
                            "number": 5,
                            "title": "The Ghost of Harrenhal",
                            "ids": {
                                "trakt": 73654,
                                "tvdb": 4245774,
                                "imdb": "tt2074658",
                                "tmdb": 63070,
                                "tvrage": 1065155087
                            }
                        },
                        {
                            "season": 2,
                            "number": 6,
                            "title": "The Old Gods and the New",
                            "ids": {
                                "trakt": 73655,
                                "tvdb": 4245775,
                                "imdb": "tt2085238",
                                "tmdb": 63071,
                                "tvrage": 1065155089
                            }
                        },
                        {
                            "season": 2,
                            "number": 7,
                            "title": "A Man Without Honor",
                            "ids": {
                                "trakt": 73656,
                                "tvdb": 4245776,
                                "imdb": "tt2085239",
                                "tmdb": 63073,
                                "tvrage": 1065158090
                            }
                        },
                        {
                            "season": 2,
                            "number": 8,
                            "title": "The Prince of Winterfell",
                            "ids": {
                                "trakt": 73657,
                                "tvdb": 4245777,
                                "imdb": "tt2085240",
                                "tmdb": 63074,
                                "tvrage": 1065158091
                            }
                        },
                        {
                            "season": 2,
                            "number": 9,
                            "title": "Blackwater",
                            "ids": {
                                "trakt": 73658,
                                "tvdb": 4245778,
                                "imdb": "tt2084342",
                                "tmdb": 63072,
                                "tvrage": 1065155086
                            }
                        },
                        {
                            "season": 2,
                            "number": 10,
                            "title": "Valar Morghulis",
                            "ids": {
                                "trakt": 73659,
                                "tvdb": 4245779,
                                "imdb": "tt2112510",
                                "tmdb": 63075,
                                "tvrage": 1065158092
                            }
                        }
                    ]
                },
                {
                    "number": 3,
                    "ids": {
                        "trakt": 3965,
                        "tvdb": 488434,
                        "tmdb": 3626,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 3,
                            "number": 1,
                            "title": "Valar Dohaeris",
                            "ids": {
                                "trakt": 73660,
                                "tvdb": 4293685,
                                "imdb": "tt2178782",
                                "tmdb": 63077,
                                "tvrage": 1065200053
                            }
                        },
                        {
                            "season": 3,
                            "number": 2,
                            "title": "Dark Wings, Dark Words",
                            "ids": {
                                "trakt": 73661,
                                "tvdb": 4517458,
                                "imdb": "tt2178772",
                                "tmdb": 63076,
                                "tvrage": 1065287390
                            }
                        },
                        {
                            "season": 3,
                            "number": 3,
                            "title": "Walk of Punishment",
                            "ids": {
                                "trakt": 73662,
                                "tvdb": 4517459,
                                "imdb": "tt2178802",
                                "tmdb": 63078,
                                "tvrage": 1065287391
                            }
                        },
                        {
                            "season": 3,
                            "number": 4,
                            "title": "And Now His Watch Is Ended",
                            "ids": {
                                "trakt": 73663,
                                "tvdb": 4517460,
                                "imdb": "tt2178798",
                                "tmdb": 63082,
                                "tvrage": 1065289512
                            }
                        },
                        {
                            "season": 3,
                            "number": 5,
                            "title": "Kissed by Fire",
                            "ids": {
                                "trakt": 73664,
                                "tvdb": 4517461,
                                "imdb": "tt2178788",
                                "tmdb": 63083,
                                "tvrage": 1065289513
                            }
                        },
                        {
                            "season": 3,
                            "number": 6,
                            "title": "The Climb",
                            "ids": {
                                "trakt": 73665,
                                "tvdb": 4517462,
                                "imdb": "tt2178812",
                                "tmdb": 63084,
                                "tvrage": 1065289514
                            }
                        },
                        {
                            "season": 3,
                            "number": 7,
                            "title": "The Bear and the Maiden Fair",
                            "ids": {
                                "trakt": 73666,
                                "tvdb": 4517463,
                                "imdb": "tt2178814",
                                "tmdb": 63081,
                                "tvrage": 1065289515
                            }
                        },
                        {
                            "season": 3,
                            "number": 8,
                            "title": "Second Sons",
                            "ids": {
                                "trakt": 73667,
                                "tvdb": 4517464,
                                "imdb": "tt2178806",
                                "tmdb": 63085,
                                "tvrage": 1065289516
                            }
                        },
                        {
                            "season": 3,
                            "number": 9,
                            "title": "The Rains of Castamere",
                            "ids": {
                                "trakt": 73668,
                                "tvdb": 4517465,
                                "imdb": "tt2178784",
                                "tmdb": 63080,
                                "tvrage": 1065289517
                            }
                        },
                        {
                            "season": 3,
                            "number": 10,
                            "title": "Mhysa",
                            "ids": {
                                "trakt": 73669,
                                "tvdb": 4517466,
                                "imdb": "tt2178796",
                                "tmdb": 63079,
                                "tvrage": 1065289518
                            }
                        }
                    ]
                },
                {
                    "number": 4,
                    "ids": {
                        "trakt": 3966,
                        "tvdb": 568657,
                        "tmdb": 3628,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 4,
                            "number": 1,
                            "title": "Two Swords",
                            "ids": {
                                "trakt": 73670,
                                "tvdb": 4721938,
                                "imdb": "tt2816136",
                                "tmdb": 973190,
                                "tvrage": 1065381541
                            }
                        },
                        {
                            "season": 4,
                            "number": 2,
                            "title": "The Lion and the Rose",
                            "ids": {
                                "trakt": 73671,
                                "tvdb": 4801602,
                                "imdb": "tt2832378",
                                "tmdb": 973219,
                                "tvrage": 1065501363
                            }
                        },
                        {
                            "season": 4,
                            "number": 3,
                            "title": "Breaker of Chains",
                            "ids": {
                                "trakt": 73672,
                                "tvdb": 4801603,
                                "imdb": "tt2972426",
                                "tmdb": 63096,
                                "tvrage": 1065501364
                            }
                        },
                        {
                            "season": 4,
                            "number": 4,
                            "title": "Oathkeeper",
                            "ids": {
                                "trakt": 73673,
                                "tvdb": 4801604,
                                "imdb": "tt2972428",
                                "tmdb": 63097,
                                "tvrage": 1065501365
                            }
                        },
                        {
                            "season": 4,
                            "number": 5,
                            "title": "First of His Name",
                            "ids": {
                                "trakt": 73674,
                                "tvdb": 4801605,
                                "imdb": "tt3060856",
                                "tmdb": 63098,
                                "tvrage": 1065501369
                            }
                        },
                        {
                            "season": 4,
                            "number": 6,
                            "title": "The Laws of Gods and Men",
                            "ids": {
                                "trakt": 73675,
                                "tvdb": 4801606,
                                "imdb": "tt3060910",
                                "tmdb": 63099,
                                "tvrage": 1065501370
                            }
                        },
                        {
                            "season": 4,
                            "number": 7,
                            "title": "Mockingbird",
                            "ids": {
                                "trakt": 73676,
                                "tvdb": 4801607,
                                "imdb": "tt3060876",
                                "tmdb": 63100,
                                "tvrage": 1065501371
                            }
                        },
                        {
                            "season": 4,
                            "number": 8,
                            "title": "The Mountain and the Viper",
                            "ids": {
                                "trakt": 73677,
                                "tvdb": 4801608,
                                "imdb": "tt3060782",
                                "tmdb": 63101,
                                "tvrage": 1065501372
                            }
                        },
                        {
                            "season": 4,
                            "number": 9,
                            "title": "The Watchers on the Wall",
                            "ids": {
                                "trakt": 73678,
                                "tvdb": 4801609,
                                "imdb": "tt3060858",
                                "tmdb": 63102,
                                "tvrage": 1065501373
                            }
                        },
                        {
                            "season": 4,
                            "number": 10,
                            "title": "The Children",
                            "ids": {
                                "trakt": 73679,
                                "tvdb": 4801610,
                                "imdb": "tt3060860",
                                "tmdb": 63103,
                                "tvrage": 1065501374
                            }
                        }
                    ]
                },
                {
                    "number": 5,
                    "ids": {
                        "trakt": 3967,
                        "tvdb": 607490,
                        "tmdb": 62090,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 5,
                            "number": 1,
                            "title": "The Wars to Come",
                            "ids": {
                                "trakt": 73680,
                                "tvdb": 5083694,
                                "imdb": "tt3658012",
                                "tmdb": 1043618,
                                "tvrage": 1065590199
                            }
                        },
                        {
                            "season": 5,
                            "number": 2,
                            "title": "The House of Black and White",
                            "ids": {
                                "trakt": 1782360,
                                "tvdb": 5150174,
                                "imdb": "tt3846626",
                                "tmdb": 1045551,
                                "tvrage": 1065765454
                            }
                        },
                        {
                            "season": 5,
                            "number": 3,
                            "title": "High Sparrow",
                            "ids": {
                                "trakt": 1782361,
                                "tvdb": 5150175,
                                "imdb": "tt3866836",
                                "tmdb": 1045552,
                                "tvrage": 1065765455
                            }
                        },
                        {
                            "season": 5,
                            "number": 4,
                            "title": "Sons of the Harpy",
                            "ids": {
                                "trakt": 1782362,
                                "tvdb": 5150183,
                                "imdb": "tt3866838",
                                "tmdb": 1045553,
                                "tvrage": 1065765456
                            }
                        },
                        {
                            "season": 5,
                            "number": 5,
                            "title": "Kill the Boy",
                            "ids": {
                                "trakt": 1786535,
                                "tvdb": 5171022,
                                "imdb": "tt3866840",
                                "tmdb": 1051286,
                                "tvrage": 1065774189
                            }
                        },
                        {
                            "season": 5,
                            "number": 6,
                            "title": "Unbowed, Unbent, Unbroken",
                            "ids": {
                                "trakt": 1786537,
                                "tvdb": 5171023,
                                "imdb": "tt3866842",
                                "tmdb": 1051287,
                                "tvrage": 1065775844
                            }
                        },
                        {
                            "season": 5,
                            "number": 7,
                            "title": "The Gift",
                            "ids": {
                                "trakt": 1786539,
                                "tvdb": 5171024,
                                "imdb": "tt3866846",
                                "tmdb": 1051288,
                                "tvrage": 1065779792
                            }
                        },
                        {
                            "season": 5,
                            "number": 8,
                            "title": "Hardhome",
                            "ids": {
                                "trakt": 1786541,
                                "tvdb": 5194184,
                                "imdb": "tt3866850",
                                "tmdb": 1070282,
                                "tvrage": 1065797703
                            }
                        },
                        {
                            "season": 5,
                            "number": 9,
                            "title": "The Dance of Dragons",
                            "ids": {
                                "trakt": 1786543,
                                "tvdb": 5194187,
                                "imdb": "tt3866826",
                                "tmdb": 1054979,
                                "tvrage": 1065797704
                            }
                        },
                        {
                            "season": 5,
                            "number": 10,
                            "title": "Mother's Mercy",
                            "ids": {
                                "trakt": 1786545,
                                "tvdb": 5194188,
                                "imdb": "tt3866862",
                                "tmdb": 1159054,
                                "tvrage": 1065797705
                            }
                        }
                    ]
                },
                {
                    "number": 6,
                    "ids": {
                        "trakt": 114727,
                        "tvdb": 651357,
                        "tmdb": 71881,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 6,
                            "number": 1,
                            "title": "The Red Woman",
                            "ids": {
                                "trakt": 1956360,
                                "tvdb": 5469015,
                                "imdb": "tt3658014",
                                "tmdb": 1156503,
                                "tvrage": 1065893436
                            }
                        },
                        {
                            "season": 6,
                            "number": 2,
                            "title": "Home",
                            "ids": {
                                "trakt": 1989020,
                                "tvdb": 5579002,
                                "imdb": "tt4077554",
                                "tmdb": 1187406,
                                "tvrage": 1065908649
                            }
                        },
                        {
                            "season": 6,
                            "number": 3,
                            "title": "Oathbreaker",
                            "ids": {
                                "trakt": 1989021,
                                "tvdb": 5579003,
                                "imdb": "tt4131606",
                                "tmdb": 1186952,
                                "tvrage": 1065908650
                            }
                        },
                        {
                            "season": 6,
                            "number": 4,
                            "title": "Book of the Stranger",
                            "ids": {
                                "trakt": 1989022,
                                "tvdb": 5599364,
                                "imdb": "tt4283016",
                                "tmdb": 1186953,
                                "tvrage": 1065908651
                            }
                        },
                        {
                            "season": 6,
                            "number": 5,
                            "title": "The Door",
                            "ids": {
                                "trakt": 1989023,
                                "tvdb": 5600132,
                                "imdb": "tt4283028",
                                "tmdb": 1186954,
                                "tvrage": 1065908652
                            }
                        },
                        {
                            "season": 6,
                            "number": 6,
                            "title": "Blood of My Blood",
                            "ids": {
                                "trakt": 1989025,
                                "tvdb": 5615733,
                                "imdb": "tt4283054",
                                "tmdb": 1186955,
                                "tvrage": 1065908653
                            }
                        },
                        {
                            "season": 6,
                            "number": 7,
                            "title": "The Broken Man",
                            "ids": {
                                "trakt": 1989026,
                                "tvdb": 5615734,
                                "imdb": "tt4283060",
                                "tmdb": 1186956,
                                "tvrage": 1065908654
                            }
                        },
                        {
                            "season": 6,
                            "number": 8,
                            "title": "No One",
                            "ids": {
                                "trakt": 1989029,
                                "tvdb": 5624259,
                                "imdb": "tt4283074",
                                "tmdb": 1187403,
                                "tvrage": 1065908655
                            }
                        },
                        {
                            "season": 6,
                            "number": 9,
                            "title": "Battle of the Bastards",
                            "ids": {
                                "trakt": 1989030,
                                "tvdb": 5624260,
                                "imdb": "tt4283088",
                                "tmdb": 1187404,
                                "tvrage": 1065908656
                            }
                        },
                        {
                            "season": 6,
                            "number": 10,
                            "title": "The Winds of Winter",
                            "ids": {
                                "trakt": 1989031,
                                "tvdb": 5624261,
                                "imdb": "tt4283094",
                                "tmdb": 1187405,
                                "tvrage": 1065908657
                            }
                        }
                    ]
                },
                {
                    "number": 7,
                    "ids": {
                        "trakt": 140912,
                        "tvdb": 703353,
                        "tmdb": 81266,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 7,
                            "number": 1,
                            "title": "Dragonstone",
                            "ids": {
                                "trakt": 2520054,
                                "tvdb": 6185708,
                                "imdb": "tt5654088",
                                "tmdb": 1233022,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 2,
                            "title": "Stormborn",
                            "ids": {
                                "trakt": 2610967,
                                "tvdb": 6132445,
                                "imdb": "tt5655178",
                                "tmdb": 1336114,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 3,
                            "title": "The Queen's Justice",
                            "ids": {
                                "trakt": 2610968,
                                "tvdb": 6132453,
                                "imdb": "tt5775840",
                                "tmdb": 1336115,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 4,
                            "title": "The Spoils of War",
                            "ids": {
                                "trakt": 2610969,
                                "tvdb": 6235145,
                                "imdb": "tt5775846",
                                "tmdb": 1340524,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 5,
                            "title": "Eastwatch",
                            "ids": {
                                "trakt": 2610970,
                                "tvdb": 6132455,
                                "imdb": "tt5775854",
                                "tmdb": 1340526,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 6,
                            "title": "Beyond the Wall",
                            "ids": {
                                "trakt": 2610971,
                                "tvdb": 6132456,
                                "imdb": "tt5775864",
                                "tmdb": 1340527,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 7,
                            "title": "The Dragon and the Wolf",
                            "ids": {
                                "trakt": 2610972,
                                "tvdb": 6275142,
                                "imdb": "tt5775874",
                                "tmdb": 1340528,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 8,
                    "ids": {
                        "trakt": 184210,
                        "tvdb": 793782,
                        "tmdb": 107971,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 8,
                            "number": 1,
                            "title": "Winterfell",
                            "ids": {
                                "trakt": 3401782,
                                "tvdb": 7117386,
                                "imdb": "tt5924366",
                                "tmdb": 1551825,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 2,
                            "title": "A Knight of the Seven Kingdoms",
                            "ids": {
                                "trakt": 3465694,
                                "tvdb": 7121401,
                                "imdb": "tt6027908",
                                "tmdb": 1551826,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 3,
                            "title": "The Long Night",
                            "ids": {
                                "trakt": 3465695,
                                "tvdb": 7121402,
                                "imdb": "tt6027912",
                                "tmdb": 1551827,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 4,
                            "title": "The Last of the Starks",
                            "ids": {
                                "trakt": 3465696,
                                "tvdb": 7121403,
                                "imdb": "tt6027914",
                                "tmdb": 1551828,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 5,
                            "title": "The Bells",
                            "ids": {
                                "trakt": 3465697,
                                "tvdb": 7121404,
                                "imdb": "tt6027916",
                                "tmdb": 1551829,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 8,
                            "number": 6,
                            "title": "The Iron Throne",
                            "ids": {
                                "trakt": 3465698,
                                "tvdb": 7121405,
                                "imdb": "tt6027920",
                                "tmdb": 1551830,
                                "tvrage": null
                            }
                        }
                    ]
                }
            ]
        },
        "1409": {
            "title": "The Big Bang Theory",
            "year": 2007,
            "id": 1409,
            "slug": "the-big-bang-theory",
            "imdb": "https://www.imdb.com/title/tt0898266/",
            "tagline": "Smart is the new sexy.",
            "overview": "Physicists Leonard and Sheldon find their nerd-centric social circle with pals Howard and Raj expanding when aspiring actress Penny moves in next door.",
            "network": "CBS",
            "country": "us",
            "trailer": "https://youtube.com/watch?v=3g2yTcg1QFI",
            "status": "ended",
            "rating": 7.97196,
            "votes": 57872,
            "language": "en",
            "genres": [
                "comedy"
            ],
            "aired_episodes": 279,
            "poster": "https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
            "seasons": [
                {
                    "number": 0,
                    "ids": {
                        "trakt": 4079,
                        "tvdb": 28046,
                        "tmdb": 3732,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 0,
                            "number": 1,
                            "title": "Unaired Pilot",
                            "ids": {
                                "trakt": 75366,
                                "tvdb": 2321301,
                                "imdb": "tt2176186",
                                "tmdb": 64739,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 2,
                            "title": "Access All Areas",
                            "ids": {
                                "trakt": 75367,
                                "tvdb": 4302970,
                                "imdb": "tt2342337",
                                "tmdb": 64740,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 3,
                            "title": "It All Started With A Big Bang",
                            "ids": {
                                "trakt": 75368,
                                "tvdb": 4302972,
                                "imdb": "tt2342339",
                                "tmdb": 64646,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 1,
                    "ids": {
                        "trakt": 4080,
                        "tvdb": 28047,
                        "tmdb": 3738,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 1,
                            "number": 1,
                            "title": "Pilot",
                            "ids": {
                                "trakt": 75369,
                                "tvdb": 332484,
                                "imdb": "tt0775431",
                                "tmdb": 64766,
                                "tvrage": 550436
                            }
                        },
                        {
                            "season": 1,
                            "number": 2,
                            "title": "The Big Bran Hypothesis",
                            "ids": {
                                "trakt": 75370,
                                "tvdb": 337065,
                                "imdb": "tt1091289",
                                "tmdb": 64777,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 3,
                            "title": "The Fuzzy Boots Corollary",
                            "ids": {
                                "trakt": 75371,
                                "tvdb": 337249,
                                "imdb": "tt1091290",
                                "tmdb": 64765,
                                "tvrage": 604480
                            }
                        },
                        {
                            "season": 1,
                            "number": 4,
                            "title": "The Luminous Fish Effect",
                            "ids": {
                                "trakt": 75372,
                                "tvdb": 338488,
                                "imdb": "tt1091291",
                                "tmdb": 64762,
                                "tvrage": 607807
                            }
                        },
                        {
                            "season": 1,
                            "number": 5,
                            "title": "The Hamburger Postulate",
                            "ids": {
                                "trakt": 75373,
                                "tvdb": 339077,
                                "imdb": "tt1091292",
                                "tmdb": 64763,
                                "tvrage": 614283
                            }
                        },
                        {
                            "season": 1,
                            "number": 6,
                            "title": "The Middle-Earth Paradigm",
                            "ids": {
                                "trakt": 75374,
                                "tvdb": 339895,
                                "imdb": "tt1091293",
                                "tmdb": 64764,
                                "tvrage": 618205
                            }
                        },
                        {
                            "season": 1,
                            "number": 7,
                            "title": "The Dumpling Paradox",
                            "ids": {
                                "trakt": 75375,
                                "tvdb": 341166,
                                "imdb": "tt1136041",
                                "tmdb": 64767,
                                "tvrage": 618419
                            }
                        },
                        {
                            "season": 1,
                            "number": 8,
                            "title": "The Grasshopper Experiment",
                            "ids": {
                                "trakt": 75376,
                                "tvdb": 341996,
                                "imdb": "tt1127389",
                                "tmdb": 64769,
                                "tvrage": 622781
                            }
                        },
                        {
                            "season": 1,
                            "number": 9,
                            "title": "The Cooper-Hofstadter Polarization",
                            "ids": {
                                "trakt": 75377,
                                "tvdb": 342790,
                                "imdb": "tt1127390",
                                "tmdb": 64770,
                                "tvrage": 624751
                            }
                        },
                        {
                            "season": 1,
                            "number": 10,
                            "title": "The Loobenfeld Decay",
                            "ids": {
                                "trakt": 75378,
                                "tvdb": 356711,
                                "imdb": "tt1127384",
                                "tmdb": 64650,
                                "tvrage": 641156
                            }
                        },
                        {
                            "season": 1,
                            "number": 11,
                            "title": "The Pancake Batter Anomaly",
                            "ids": {
                                "trakt": 75379,
                                "tvdb": 358455,
                                "imdb": "tt1127385",
                                "tmdb": 64768,
                                "tvrage": 641157
                            }
                        },
                        {
                            "season": 1,
                            "number": 12,
                            "title": "The Jerusalem Duality",
                            "ids": {
                                "trakt": 75380,
                                "tvdb": 360371,
                                "imdb": "tt1127386",
                                "tmdb": 64774,
                                "tvrage": 641158
                            }
                        },
                        {
                            "season": 1,
                            "number": 13,
                            "title": "The Bat Jar Conjecture",
                            "ids": {
                                "trakt": 75381,
                                "tvdb": 363199,
                                "imdb": "tt1127387",
                                "tmdb": 64775,
                                "tvrage": 641159
                            }
                        },
                        {
                            "season": 1,
                            "number": 14,
                            "title": "The Nerdvana Annihilation",
                            "ids": {
                                "trakt": 75382,
                                "tvdb": 364198,
                                "imdb": "tt1127905",
                                "tmdb": 64773,
                                "tvrage": 641160
                            }
                        },
                        {
                            "season": 1,
                            "number": 15,
                            "title": "The Pork Chop Indeterminacy",
                            "ids": {
                                "trakt": 75383,
                                "tvdb": 365914,
                                "imdb": "tt1127906",
                                "tmdb": 64771,
                                "tvrage": 641161
                            }
                        },
                        {
                            "season": 1,
                            "number": 16,
                            "title": "The Peanut Reaction",
                            "ids": {
                                "trakt": 75384,
                                "tvdb": 365967,
                                "imdb": "tt1127907",
                                "tmdb": 64772,
                                "tvrage": 641162
                            }
                        },
                        {
                            "season": 1,
                            "number": 17,
                            "title": "The Tangerine Factor",
                            "ids": {
                                "trakt": 75385,
                                "tvdb": 367404,
                                "imdb": "tt1127908",
                                "tmdb": 64776,
                                "tvrage": 641163
                            }
                        }
                    ]
                },
                {
                    "number": 2,
                    "ids": {
                        "trakt": 4081,
                        "tvdb": 35155,
                        "tmdb": 3733,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 2,
                            "number": 1,
                            "title": "The Bad Fish Paradigm",
                            "ids": {
                                "trakt": 75386,
                                "tvdb": 387721,
                                "imdb": "tt1256599",
                                "tmdb": 64651,
                                "tvrage": 676620
                            }
                        },
                        {
                            "season": 2,
                            "number": 2,
                            "title": "The Codpiece Topology",
                            "ids": {
                                "trakt": 75387,
                                "tvdb": 389025,
                                "imdb": "tt1256030",
                                "tmdb": 64652,
                                "tvrage": 714401
                            }
                        },
                        {
                            "season": 2,
                            "number": 3,
                            "title": "The Barbarian Sublimation",
                            "ids": {
                                "trakt": 75388,
                                "tvdb": 391204,
                                "imdb": "tt1256034",
                                "tmdb": 64653,
                                "tvrage": 719412
                            }
                        },
                        {
                            "season": 2,
                            "number": 4,
                            "title": "The Griffin Equivalency",
                            "ids": {
                                "trakt": 75389,
                                "tvdb": 393953,
                                "imdb": "tt1256035",
                                "tmdb": 64654,
                                "tvrage": 719733
                            }
                        },
                        {
                            "season": 2,
                            "number": 5,
                            "title": "The Euclid Alternative",
                            "ids": {
                                "trakt": 75390,
                                "tvdb": 396576,
                                "imdb": "tt1256036",
                                "tmdb": 64655,
                                "tvrage": 723034
                            }
                        },
                        {
                            "season": 2,
                            "number": 6,
                            "title": "The Cooper-Nowitzki Theorem",
                            "ids": {
                                "trakt": 75391,
                                "tvdb": 401078,
                                "imdb": "tt1256037",
                                "tmdb": 64656,
                                "tvrage": 728602
                            }
                        },
                        {
                            "season": 2,
                            "number": 7,
                            "title": "The Panty Piñata Polarization",
                            "ids": {
                                "trakt": 75392,
                                "tvdb": 402940,
                                "imdb": "tt1256038",
                                "tmdb": 64657,
                                "tvrage": 732185
                            }
                        },
                        {
                            "season": 2,
                            "number": 8,
                            "title": "The Lizard-Spock Expansion",
                            "ids": {
                                "trakt": 75393,
                                "tvdb": 405395,
                                "imdb": "tt1256039",
                                "tmdb": 64658,
                                "tvrage": 734185
                            }
                        },
                        {
                            "season": 2,
                            "number": 9,
                            "title": "The White Asparagus Triangulation",
                            "ids": {
                                "trakt": 75394,
                                "tvdb": 406628,
                                "imdb": "tt1256040",
                                "tmdb": 64659,
                                "tvrage": 735929
                            }
                        },
                        {
                            "season": 2,
                            "number": 10,
                            "title": "The Vartabedian Conundrum",
                            "ids": {
                                "trakt": 75395,
                                "tvdb": 410324,
                                "imdb": "tt1256020",
                                "tmdb": 64660,
                                "tvrage": 745602
                            }
                        },
                        {
                            "season": 2,
                            "number": 11,
                            "title": "The Bath Item Gift Hypothesis",
                            "ids": {
                                "trakt": 75396,
                                "tvdb": 413490,
                                "imdb": "tt1256021",
                                "tmdb": 64661,
                                "tvrage": 750933
                            }
                        },
                        {
                            "season": 2,
                            "number": 12,
                            "title": "The Killer Robot Instability",
                            "ids": {
                                "trakt": 75397,
                                "tvdb": 420058,
                                "imdb": "tt1256022",
                                "tmdb": 64662,
                                "tvrage": 760062
                            }
                        },
                        {
                            "season": 2,
                            "number": 13,
                            "title": "The Friendship Algorithm",
                            "ids": {
                                "trakt": 75398,
                                "tvdb": 426681,
                                "imdb": "tt1256023",
                                "tmdb": 64663,
                                "tvrage": 769602
                            }
                        },
                        {
                            "season": 2,
                            "number": 14,
                            "title": "The Financial Permeability",
                            "ids": {
                                "trakt": 75399,
                                "tvdb": 428394,
                                "imdb": "tt1256024",
                                "tmdb": 64664,
                                "tvrage": 771773
                            }
                        },
                        {
                            "season": 2,
                            "number": 15,
                            "title": "The Maternal Capacitance",
                            "ids": {
                                "trakt": 75400,
                                "tvdb": 431000,
                                "imdb": "tt1256025",
                                "tmdb": 64665,
                                "tvrage": 776856
                            }
                        },
                        {
                            "season": 2,
                            "number": 16,
                            "title": "The Cushion Saturation",
                            "ids": {
                                "trakt": 75401,
                                "tvdb": 439079,
                                "imdb": "tt1256026",
                                "tmdb": 64666,
                                "tvrage": 781628
                            }
                        },
                        {
                            "season": 2,
                            "number": 17,
                            "title": "The Terminator Decoupling",
                            "ids": {
                                "trakt": 75402,
                                "tvdb": 439587,
                                "imdb": "tt1256027",
                                "tmdb": 64667,
                                "tvrage": 782398
                            }
                        },
                        {
                            "season": 2,
                            "number": 18,
                            "title": "The Work Song Nanocluster",
                            "ids": {
                                "trakt": 75403,
                                "tvdb": 443622,
                                "imdb": "tt1256028",
                                "tmdb": 64668,
                                "tvrage": 785493
                            }
                        },
                        {
                            "season": 2,
                            "number": 19,
                            "title": "The Dead Hooker Juxtaposition",
                            "ids": {
                                "trakt": 75404,
                                "tvdb": 461831,
                                "imdb": "tt1256029",
                                "tmdb": 64669,
                                "tvrage": 786506
                            }
                        },
                        {
                            "season": 2,
                            "number": 20,
                            "title": "The Hofstadter Isotope",
                            "ids": {
                                "trakt": 75405,
                                "tvdb": 461841,
                                "imdb": "tt1256031",
                                "tmdb": 64670,
                                "tvrage": 1064794674
                            }
                        },
                        {
                            "season": 2,
                            "number": 21,
                            "title": "The Vegas Renormalization",
                            "ids": {
                                "trakt": 75406,
                                "tvdb": 588971,
                                "imdb": "tt1256032",
                                "tmdb": 64671,
                                "tvrage": 1064801333
                            }
                        },
                        {
                            "season": 2,
                            "number": 22,
                            "title": "The Classified Materials Turbulence",
                            "ids": {
                                "trakt": 75407,
                                "tvdb": 588981,
                                "imdb": "tt1256033",
                                "tmdb": 64672,
                                "tvrage": 1064801331
                            }
                        },
                        {
                            "season": 2,
                            "number": 23,
                            "title": "The Monopolar Expedition",
                            "ids": {
                                "trakt": 75408,
                                "tvdb": 588991,
                                "imdb": "tt1426233",
                                "tmdb": 64673,
                                "tvrage": 1064801332
                            }
                        }
                    ]
                },
                {
                    "number": 3,
                    "ids": {
                        "trakt": 4082,
                        "tvdb": 82831,
                        "tmdb": 3734,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 3,
                            "number": 1,
                            "title": "The Electric Can Opener Fluctuation",
                            "ids": {
                                "trakt": 75409,
                                "tvdb": 795681,
                                "imdb": "tt1487706",
                                "tmdb": 64674,
                                "tvrage": 1064815621
                            }
                        },
                        {
                            "season": 3,
                            "number": 2,
                            "title": "The Jiminy Conjecture",
                            "ids": {
                                "trakt": 75410,
                                "tvdb": 1046141,
                                "imdb": "tt1495238",
                                "tmdb": 64675,
                                "tvrage": 1064843427
                            }
                        },
                        {
                            "season": 3,
                            "number": 3,
                            "title": "The Gothowitz Deviation",
                            "ids": {
                                "trakt": 75411,
                                "tvdb": 1101931,
                                "imdb": "tt1494210",
                                "tmdb": 64676,
                                "tvrage": 1064843428
                            }
                        },
                        {
                            "season": 3,
                            "number": 4,
                            "title": "The Pirate Solution",
                            "ids": {
                                "trakt": 75412,
                                "tvdb": 1123661,
                                "imdb": "tt1523181",
                                "tmdb": 64677,
                                "tvrage": 1064846782
                            }
                        },
                        {
                            "season": 3,
                            "number": 5,
                            "title": "The Creepy Candy Coating Corollary",
                            "ids": {
                                "trakt": 75413,
                                "tvdb": 1175941,
                                "imdb": "tt1528188",
                                "tmdb": 64678,
                                "tvrage": 1064846783
                            }
                        },
                        {
                            "season": 3,
                            "number": 6,
                            "title": "The Cornhusker Vortex",
                            "ids": {
                                "trakt": 75414,
                                "tvdb": 1175951,
                                "imdb": "tt1523180",
                                "tmdb": 64679,
                                "tvrage": 1064852479
                            }
                        },
                        {
                            "season": 3,
                            "number": 7,
                            "title": "The Guitarist Amplification",
                            "ids": {
                                "trakt": 75415,
                                "tvdb": 1205511,
                                "imdb": "tt1535334",
                                "tmdb": 64680,
                                "tvrage": 1064864485
                            }
                        },
                        {
                            "season": 3,
                            "number": 8,
                            "title": "The Adhesive Duck Deficiency",
                            "ids": {
                                "trakt": 75416,
                                "tvdb": 1236491,
                                "imdb": "tt1536922",
                                "tmdb": 64681,
                                "tvrage": 1064852481
                            }
                        },
                        {
                            "season": 3,
                            "number": 9,
                            "title": "The Vengeance Formulation",
                            "ids": {
                                "trakt": 75417,
                                "tvdb": 1269601,
                                "imdb": "tt1544819",
                                "tmdb": 64682,
                                "tvrage": 1064852482
                            }
                        },
                        {
                            "season": 3,
                            "number": 10,
                            "title": "The Gorilla Experiment",
                            "ids": {
                                "trakt": 75418,
                                "tvdb": 1370211,
                                "imdb": "tt1558529",
                                "tmdb": 64683,
                                "tvrage": 1064870908
                            }
                        },
                        {
                            "season": 3,
                            "number": 11,
                            "title": "The Maternal Congruence",
                            "ids": {
                                "trakt": 75419,
                                "tvdb": 1309961,
                                "imdb": "tt1558530",
                                "tmdb": 64684,
                                "tvrage": 1064870909
                            }
                        },
                        {
                            "season": 3,
                            "number": 12,
                            "title": "The Psychic Vortex",
                            "ids": {
                                "trakt": 75420,
                                "tvdb": 1313511,
                                "imdb": "tt1567073",
                                "tmdb": 64685,
                                "tvrage": 1064883411
                            }
                        },
                        {
                            "season": 3,
                            "number": 13,
                            "title": "The Bozeman Reaction",
                            "ids": {
                                "trakt": 75421,
                                "tvdb": 1418721,
                                "imdb": "tt1570312",
                                "tmdb": 64691,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 14,
                            "title": "The Einstein Approximation",
                            "ids": {
                                "trakt": 75422,
                                "tvdb": 1585301,
                                "imdb": "tt1588684",
                                "tmdb": 64686,
                                "tvrage": 1064884086
                            }
                        },
                        {
                            "season": 3,
                            "number": 15,
                            "title": "The Large Hadron Collision",
                            "ids": {
                                "trakt": 75423,
                                "tvdb": 1611971,
                                "imdb": "tt1589887",
                                "tmdb": 64687,
                                "tvrage": 1064886961
                            }
                        },
                        {
                            "season": 3,
                            "number": 16,
                            "title": "The Excelsior Acquisition",
                            "ids": {
                                "trakt": 75424,
                                "tvdb": 1670231,
                                "imdb": "tt1592080",
                                "tmdb": 64692,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 17,
                            "title": "The Precious Fragmentation",
                            "ids": {
                                "trakt": 75425,
                                "tvdb": 1765801,
                                "imdb": "tt1607974",
                                "tmdb": 64693,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 18,
                            "title": "The Pants Alternative",
                            "ids": {
                                "trakt": 75426,
                                "tvdb": 1801741,
                                "imdb": "tt1609715",
                                "tmdb": 64695,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 19,
                            "title": "The Wheaton Recurrence",
                            "ids": {
                                "trakt": 75427,
                                "tvdb": 1766111,
                                "imdb": "tt1609410",
                                "tmdb": 64688,
                                "tvrage": 1064905311
                            }
                        },
                        {
                            "season": 3,
                            "number": 20,
                            "title": "The Spaghetti Catalyst",
                            "ids": {
                                "trakt": 75428,
                                "tvdb": 1975621,
                                "imdb": "tt1628617",
                                "tmdb": 64694,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 21,
                            "title": "The Plimpton Stimulation",
                            "ids": {
                                "trakt": 75429,
                                "tvdb": 2063651,
                                "imdb": "tt1648755",
                                "tmdb": 64696,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 22,
                            "title": "The Staircase Implementation",
                            "ids": {
                                "trakt": 75430,
                                "tvdb": 2063661,
                                "imdb": "tt1648756",
                                "tmdb": 64689,
                                "tvrage": 1064919092
                            }
                        },
                        {
                            "season": 3,
                            "number": 23,
                            "title": "The Lunar Excitation",
                            "ids": {
                                "trakt": 75431,
                                "tvdb": 2099491,
                                "imdb": "tt1627740",
                                "tmdb": 64690,
                                "tvrage": 1064922801
                            }
                        }
                    ]
                },
                {
                    "number": 4,
                    "ids": {
                        "trakt": 4083,
                        "tvdb": 261421,
                        "tmdb": 3735,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 4,
                            "number": 1,
                            "title": "The Robotic Manipulation",
                            "ids": {
                                "trakt": 75432,
                                "tvdb": 2405541,
                                "imdb": "tt1632224",
                                "tmdb": 64697,
                                "tvrage": 1064940776
                            }
                        },
                        {
                            "season": 4,
                            "number": 2,
                            "title": "The Cruciferous Vegetable Amplification",
                            "ids": {
                                "trakt": 75433,
                                "tvdb": 2813551,
                                "imdb": "tt1632235",
                                "tmdb": 64698,
                                "tvrage": 1064975046
                            }
                        },
                        {
                            "season": 4,
                            "number": 3,
                            "title": "The Zazzy Substitution",
                            "ids": {
                                "trakt": 75434,
                                "tvdb": 2828801,
                                "imdb": "tt1632240",
                                "tmdb": 64699,
                                "tvrage": 1064978266
                            }
                        },
                        {
                            "season": 4,
                            "number": 4,
                            "title": "The Hot Troll Deviation",
                            "ids": {
                                "trakt": 75435,
                                "tvdb": 2828811,
                                "imdb": "tt1632241",
                                "tmdb": 64700,
                                "tvrage": 1064978267
                            }
                        },
                        {
                            "season": 4,
                            "number": 5,
                            "title": "The Desperation Emanation",
                            "ids": {
                                "trakt": 75436,
                                "tvdb": 2903361,
                                "imdb": "tt1632242",
                                "tmdb": 64701,
                                "tvrage": 1064984545
                            }
                        },
                        {
                            "season": 4,
                            "number": 6,
                            "title": "The Irish Pub Formulation",
                            "ids": {
                                "trakt": 75437,
                                "tvdb": 2969761,
                                "imdb": "tt1632243",
                                "tmdb": 64702,
                                "tvrage": 1064985563
                            }
                        },
                        {
                            "season": 4,
                            "number": 7,
                            "title": "The Apology Insufficiency",
                            "ids": {
                                "trakt": 75438,
                                "tvdb": 2995711,
                                "imdb": "tt1632244",
                                "tmdb": 64703,
                                "tvrage": 1064987248
                            }
                        },
                        {
                            "season": 4,
                            "number": 8,
                            "title": "The 21-Second Excitation",
                            "ids": {
                                "trakt": 75439,
                                "tvdb": 3066471,
                                "imdb": "tt1632245",
                                "tmdb": 64704,
                                "tvrage": 1064988792
                            }
                        },
                        {
                            "season": 4,
                            "number": 9,
                            "title": "The Boyfriend Complexity",
                            "ids": {
                                "trakt": 75440,
                                "tvdb": 3110921,
                                "imdb": "tt1632246",
                                "tmdb": 64705,
                                "tvrage": 1064990329
                            }
                        },
                        {
                            "season": 4,
                            "number": 10,
                            "title": "The Alien Parasite Hypothesis",
                            "ids": {
                                "trakt": 75441,
                                "tvdb": 3168381,
                                "imdb": "tt1632225",
                                "tmdb": 64706,
                                "tvrage": 1064995085
                            }
                        },
                        {
                            "season": 4,
                            "number": 11,
                            "title": "The Justice League Recombination",
                            "ids": {
                                "trakt": 75442,
                                "tvdb": 3198011,
                                "imdb": "tt1632226",
                                "tmdb": 64707,
                                "tvrage": 1064995651
                            }
                        },
                        {
                            "season": 4,
                            "number": 12,
                            "title": "The Bus Pants Utilization",
                            "ids": {
                                "trakt": 75443,
                                "tvdb": 3270941,
                                "imdb": "tt1632227",
                                "tmdb": 64708,
                                "tvrage": 1065003228
                            }
                        },
                        {
                            "season": 4,
                            "number": 13,
                            "title": "The Love Car Displacement",
                            "ids": {
                                "trakt": 75444,
                                "tvdb": 3392921,
                                "imdb": "tt1632228",
                                "tmdb": 64709,
                                "tvrage": 1065006074
                            }
                        },
                        {
                            "season": 4,
                            "number": 14,
                            "title": "The Thespian Catalyst",
                            "ids": {
                                "trakt": 75445,
                                "tvdb": 3473151,
                                "imdb": "tt1632229",
                                "tmdb": 64710,
                                "tvrage": 1065008579
                            }
                        },
                        {
                            "season": 4,
                            "number": 15,
                            "title": "The Benefactor Factor",
                            "ids": {
                                "trakt": 75446,
                                "tvdb": 3509831,
                                "imdb": "tt1632230",
                                "tmdb": 64711,
                                "tvrage": 1065012963
                            }
                        },
                        {
                            "season": 4,
                            "number": 16,
                            "title": "The Cohabitation Formulation",
                            "ids": {
                                "trakt": 75447,
                                "tvdb": 3616341,
                                "imdb": "tt1632231",
                                "tmdb": 64712,
                                "tvrage": 1065013265
                            }
                        },
                        {
                            "season": 4,
                            "number": 17,
                            "title": "The Toast Derivation",
                            "ids": {
                                "trakt": 75448,
                                "tvdb": 3682891,
                                "imdb": "tt1632232",
                                "tmdb": 64713,
                                "tvrage": 1065016646
                            }
                        },
                        {
                            "season": 4,
                            "number": 18,
                            "title": "The Prestidigitation Approximation",
                            "ids": {
                                "trakt": 75449,
                                "tvdb": 3770211,
                                "imdb": "tt1632233",
                                "tmdb": 64714,
                                "tvrage": 1065018166
                            }
                        },
                        {
                            "season": 4,
                            "number": 19,
                            "title": "The Zarnecki Incursion",
                            "ids": {
                                "trakt": 75450,
                                "tvdb": 3892111,
                                "imdb": "tt1632234",
                                "tmdb": 64640,
                                "tvrage": 1065022166
                            }
                        },
                        {
                            "season": 4,
                            "number": 20,
                            "title": "The Herb Garden Germination",
                            "ids": {
                                "trakt": 75451,
                                "tvdb": 3911231,
                                "imdb": "tt1632236",
                                "tmdb": 64641,
                                "tvrage": 1065023909
                            }
                        },
                        {
                            "season": 4,
                            "number": 21,
                            "title": "The Agreement Dissection",
                            "ids": {
                                "trakt": 75452,
                                "tvdb": 4062871,
                                "imdb": "tt1632237",
                                "tmdb": 64715,
                                "tvrage": 1065029837
                            }
                        },
                        {
                            "season": 4,
                            "number": 22,
                            "title": "The Wildebeest Implementation",
                            "ids": {
                                "trakt": 75453,
                                "tvdb": 4066721,
                                "imdb": "tt1632238",
                                "tmdb": 64643,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 23,
                            "title": "The Engagement Reaction",
                            "ids": {
                                "trakt": 75454,
                                "tvdb": 4066741,
                                "imdb": "tt1632239",
                                "tmdb": 64716,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 24,
                            "title": "The Roommate Transmogrification",
                            "ids": {
                                "trakt": 75455,
                                "tvdb": 4066751,
                                "imdb": "tt1918407",
                                "tmdb": 64642,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 5,
                    "ids": {
                        "trakt": 4084,
                        "tvdb": 468774,
                        "tmdb": 3736,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 5,
                            "number": 1,
                            "title": "The Skank Reflex Analysis",
                            "ids": {
                                "trakt": 75456,
                                "tvdb": 4123308,
                                "imdb": "tt1980710",
                                "tmdb": 64719,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 2,
                            "title": "The Infestation Hypothesis",
                            "ids": {
                                "trakt": 75457,
                                "tvdb": 4123309,
                                "imdb": "tt2033019",
                                "tmdb": 64720,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 3,
                            "title": "The Pulled Groin Extrapolation",
                            "ids": {
                                "trakt": 75458,
                                "tvdb": 4170663,
                                "imdb": "tt2057241",
                                "tmdb": 64721,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 4,
                            "title": "The Wiggly Finger Catalyst",
                            "ids": {
                                "trakt": 75459,
                                "tvdb": 4170664,
                                "imdb": "tt2058495",
                                "tmdb": 64724,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 5,
                            "title": "The Russian Rocket Reaction",
                            "ids": {
                                "trakt": 75460,
                                "tvdb": 4175088,
                                "imdb": "tt2063481",
                                "tmdb": 64723,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 6,
                            "title": "The Rhinitis Revelation",
                            "ids": {
                                "trakt": 75461,
                                "tvdb": 4179771,
                                "imdb": "tt2079337",
                                "tmdb": 64722,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 7,
                            "title": "The Good Guy Fluctuation",
                            "ids": {
                                "trakt": 75462,
                                "tvdb": 4188110,
                                "imdb": "tt2082016",
                                "tmdb": 64727,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 8,
                            "title": "The Isolation Permutation",
                            "ids": {
                                "trakt": 75463,
                                "tvdb": 4193651,
                                "imdb": "tt2092310",
                                "tmdb": 64726,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 9,
                            "title": "The Ornithophobia Diffusion",
                            "ids": {
                                "trakt": 75464,
                                "tvdb": 4198747,
                                "imdb": "tt2100287",
                                "tmdb": 64725,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 10,
                            "title": "The Flaming Spittoon Acquisition",
                            "ids": {
                                "trakt": 75465,
                                "tvdb": 4198860,
                                "imdb": "tt2105978",
                                "tmdb": 64718,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 11,
                            "title": "The Speckerman Recurrence",
                            "ids": {
                                "trakt": 75466,
                                "tvdb": 4209982,
                                "imdb": "tt2119890",
                                "tmdb": 64729,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 12,
                            "title": "The Shiny Trinket Maneuver",
                            "ids": {
                                "trakt": 75467,
                                "tvdb": 4219025,
                                "imdb": "tt2136314",
                                "tmdb": 64731,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 13,
                            "title": "The Recombination Hypothesis",
                            "ids": {
                                "trakt": 75468,
                                "tvdb": 4225828,
                                "imdb": "tt2139151",
                                "tmdb": 64730,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 14,
                            "title": "The Beta Test Initiation",
                            "ids": {
                                "trakt": 75469,
                                "tvdb": 4240138,
                                "imdb": "tt2181587",
                                "tmdb": 64728,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 15,
                            "title": "The Friendship Contraction",
                            "ids": {
                                "trakt": 75470,
                                "tvdb": 4245901,
                                "imdb": "tt2192687",
                                "tmdb": 64732,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 16,
                            "title": "The Vacation Solution",
                            "ids": {
                                "trakt": 75471,
                                "tvdb": 4251630,
                                "imdb": "tt2209665",
                                "tmdb": 64734,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 17,
                            "title": "The Rothman Disintegration",
                            "ids": {
                                "trakt": 75472,
                                "tvdb": 4255863,
                                "imdb": "tt2220955",
                                "tmdb": 64733,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 18,
                            "title": "The Werewolf Transformation",
                            "ids": {
                                "trakt": 75473,
                                "tvdb": 4261649,
                                "imdb": "tt2238153",
                                "tmdb": 64735,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 19,
                            "title": "The Weekend Vortex",
                            "ids": {
                                "trakt": 75474,
                                "tvdb": 4272451,
                                "imdb": "tt2275203",
                                "tmdb": 64736,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 20,
                            "title": "The Transporter Malfunction",
                            "ids": {
                                "trakt": 75475,
                                "tvdb": 4278486,
                                "imdb": "tt2275201",
                                "tmdb": 64717,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 21,
                            "title": "The Hawking Excitation",
                            "ids": {
                                "trakt": 75476,
                                "tvdb": 4285345,
                                "imdb": "tt2300453",
                                "tmdb": 64737,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 22,
                            "title": "The Stag Convergence",
                            "ids": {
                                "trakt": 75477,
                                "tvdb": 4293932,
                                "imdb": "tt2332311",
                                "tmdb": 64644,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 23,
                            "title": "The Launch Acceleration",
                            "ids": {
                                "trakt": 75478,
                                "tvdb": 4293934,
                                "imdb": "tt2372043",
                                "tmdb": 64738,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 24,
                            "title": "The Countdown Reflection",
                            "ids": {
                                "trakt": 75479,
                                "tvdb": 4293937,
                                "imdb": "tt2379487",
                                "tmdb": 64645,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 6,
                    "ids": {
                        "trakt": 4085,
                        "tvdb": 494401,
                        "tmdb": 3737,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 6,
                            "number": 1,
                            "title": "The Date Night Variable",
                            "ids": {
                                "trakt": 75480,
                                "tvdb": 4359108,
                                "imdb": "tt2194640",
                                "tmdb": 64741,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 2,
                            "title": "The Decoupling Fluctuation",
                            "ids": {
                                "trakt": 75481,
                                "tvdb": 4396332,
                                "imdb": "tt2392630",
                                "tmdb": 64742,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 3,
                            "title": "The Higgs Boson Observation",
                            "ids": {
                                "trakt": 75482,
                                "tvdb": 4396333,
                                "imdb": "tt2378184",
                                "tmdb": 64647,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 4,
                            "title": "The Re-Entry Minimization",
                            "ids": {
                                "trakt": 75483,
                                "tvdb": 4396334,
                                "imdb": "tt2411550",
                                "tmdb": 64743,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 5,
                            "title": "The Holographic Excitation",
                            "ids": {
                                "trakt": 75484,
                                "tvdb": 4408722,
                                "imdb": "tt2411582",
                                "tmdb": 64744,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 6,
                            "title": "The Extract Obliteration",
                            "ids": {
                                "trakt": 75485,
                                "tvdb": 4413988,
                                "imdb": "tt2450064",
                                "tmdb": 64746,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 7,
                            "title": "The Habitation Configuration",
                            "ids": {
                                "trakt": 75486,
                                "tvdb": 4413989,
                                "imdb": "tt2462410",
                                "tmdb": 64745,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 8,
                            "title": "The 43 Peculiarity",
                            "ids": {
                                "trakt": 75487,
                                "tvdb": 4429401,
                                "imdb": "tt2502436",
                                "tmdb": 64748,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 9,
                            "title": "The Parking Spot Escalation",
                            "ids": {
                                "trakt": 75488,
                                "tvdb": 4429402,
                                "imdb": "tt2505340",
                                "tmdb": 64749,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 10,
                            "title": "The Fish Guts Displacement",
                            "ids": {
                                "trakt": 75489,
                                "tvdb": 4437045,
                                "imdb": "tt2523744",
                                "tmdb": 64747,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 11,
                            "title": "The Santa Simulation",
                            "ids": {
                                "trakt": 75490,
                                "tvdb": 4439082,
                                "imdb": "tt2559784",
                                "tmdb": 64750,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 12,
                            "title": "The Egg Salad Equivalency",
                            "ids": {
                                "trakt": 75491,
                                "tvdb": 4449180,
                                "imdb": "tt2571320",
                                "tmdb": 64751,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 13,
                            "title": "The Bakersfield Expedition",
                            "ids": {
                                "trakt": 75492,
                                "tvdb": 4453065,
                                "imdb": "tt2582488",
                                "tmdb": 64752,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 14,
                            "title": "The Cooper/Kripke Inversion",
                            "ids": {
                                "trakt": 75493,
                                "tvdb": 4453066,
                                "imdb": "tt2636834",
                                "tmdb": 64753,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 15,
                            "title": "The Spoiler Alert Segmentation",
                            "ids": {
                                "trakt": 75494,
                                "tvdb": 4453067,
                                "imdb": "tt2633894",
                                "tmdb": 64754,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 16,
                            "title": "The Tangible Affection Proof",
                            "ids": {
                                "trakt": 75495,
                                "tvdb": 4485780,
                                "imdb": "tt2668846",
                                "tmdb": 64648,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 17,
                            "title": "The Monster Isolation",
                            "ids": {
                                "trakt": 75496,
                                "tvdb": 4496358,
                                "imdb": "tt2697398",
                                "tmdb": 64755,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 18,
                            "title": "The Contractual Obligation Implementation",
                            "ids": {
                                "trakt": 75497,
                                "tvdb": 4498291,
                                "imdb": "tt2708314",
                                "tmdb": 64649,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 19,
                            "title": "The Closet Reconfiguration",
                            "ids": {
                                "trakt": 75498,
                                "tvdb": 4513651,
                                "imdb": "tt2739286",
                                "tmdb": 64757,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 20,
                            "title": "The Tenure Turbulence",
                            "ids": {
                                "trakt": 75499,
                                "tvdb": 4513973,
                                "imdb": "tt2784494",
                                "tmdb": 64756,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 21,
                            "title": "The Closure Alternative",
                            "ids": {
                                "trakt": 75500,
                                "tvdb": 4516557,
                                "imdb": "tt2833366",
                                "tmdb": 64758,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 22,
                            "title": "The Proton Resurgence",
                            "ids": {
                                "trakt": 75501,
                                "tvdb": 4516558,
                                "imdb": "tt2833352",
                                "tmdb": 64761,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 23,
                            "title": "The Love Spell Potential",
                            "ids": {
                                "trakt": 75502,
                                "tvdb": 4516559,
                                "imdb": "tt2852720",
                                "tmdb": 64760,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 24,
                            "title": "The Bon Voyage Reaction",
                            "ids": {
                                "trakt": 75503,
                                "tvdb": 4516560,
                                "imdb": "tt2891288",
                                "tmdb": 64759,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 7,
                    "ids": {
                        "trakt": 4086,
                        "tvdb": 522809,
                        "tmdb": 3739,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 7,
                            "number": 1,
                            "title": "The Hofstadter Insufficiency",
                            "ids": {
                                "trakt": 75504,
                                "tvdb": 4594867,
                                "imdb": "tt3111660",
                                "tmdb": 64778,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 2,
                            "title": "The Deception Verification",
                            "ids": {
                                "trakt": 75505,
                                "tvdb": 4623192,
                                "imdb": "tt2933998",
                                "tmdb": 64781,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 3,
                            "title": "The Scavenger Vortex",
                            "ids": {
                                "trakt": 75506,
                                "tvdb": 4635786,
                                "imdb": "tt3218670",
                                "tmdb": 64779,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 4,
                            "title": "The Raiders Minimization",
                            "ids": {
                                "trakt": 75507,
                                "tvdb": 4635787,
                                "imdb": "tt3221722",
                                "tmdb": 64780,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 5,
                            "title": "The Workplace Proximity",
                            "ids": {
                                "trakt": 75508,
                                "tvdb": 4668379,
                                "imdb": "tt3229392",
                                "tmdb": 64782,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 6,
                            "title": "The Romance Resonance",
                            "ids": {
                                "trakt": 75509,
                                "tvdb": 4668380,
                                "imdb": "tt3229394",
                                "tmdb": 966293,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 7,
                            "title": "The Proton Displacement",
                            "ids": {
                                "trakt": 75510,
                                "tvdb": 4694392,
                                "imdb": "tt3229396",
                                "tmdb": 966295,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 8,
                            "title": "The Itchy Brain Simulation",
                            "ids": {
                                "trakt": 75511,
                                "tvdb": 4700015,
                                "imdb": "tt3303726",
                                "tmdb": 966296,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 9,
                            "title": "The Thanksgiving Decoupling",
                            "ids": {
                                "trakt": 75512,
                                "tvdb": 4705246,
                                "imdb": "tt3309570",
                                "tmdb": 968153,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 10,
                            "title": "The Discovery Dissipation",
                            "ids": {
                                "trakt": 75513,
                                "tvdb": 4714074,
                                "imdb": "tt3338358",
                                "tmdb": 968871,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 11,
                            "title": "The Cooper Extraction",
                            "ids": {
                                "trakt": 75514,
                                "tvdb": 4720503,
                                "imdb": "tt3337724",
                                "tmdb": 969334,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 12,
                            "title": "The Hesitation Ramification",
                            "ids": {
                                "trakt": 75515,
                                "tvdb": 4720502,
                                "imdb": "tt3337728",
                                "tmdb": 969409,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 13,
                            "title": "The Occupation Recalibration",
                            "ids": {
                                "trakt": 75516,
                                "tvdb": 4749334,
                                "imdb": "tt3337730",
                                "tmdb": 970481,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 14,
                            "title": "The Convention Conundrum",
                            "ids": {
                                "trakt": 75517,
                                "tvdb": 4764530,
                                "imdb": "tt3453320",
                                "tmdb": 971295,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 15,
                            "title": "The Locomotive Manipulation",
                            "ids": {
                                "trakt": 75518,
                                "tvdb": 4773931,
                                "imdb": "tt3477310",
                                "tmdb": 971376,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 16,
                            "title": "The Table Polarization",
                            "ids": {
                                "trakt": 75519,
                                "tvdb": 4783271,
                                "imdb": "tt3507240",
                                "tmdb": 972131,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 17,
                            "title": "The Friendship Turbulence",
                            "ids": {
                                "trakt": 75520,
                                "tvdb": 4792591,
                                "imdb": "tt3521962",
                                "tmdb": 972676,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 18,
                            "title": "The Mommy Observation",
                            "ids": {
                                "trakt": 75521,
                                "tvdb": 4792592,
                                "imdb": "tt3517894",
                                "tmdb": 973094,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 19,
                            "title": "The Indecision Amalgamation",
                            "ids": {
                                "trakt": 75522,
                                "tvdb": 4792593,
                                "imdb": "tt3521964",
                                "tmdb": 973688,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 20,
                            "title": "The Relationship Diremption",
                            "ids": {
                                "trakt": 75523,
                                "tvdb": 4840057,
                                "imdb": "tt3554854",
                                "tmdb": 973988,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 21,
                            "title": "The Anything Can Happen Recurrence",
                            "ids": {
                                "trakt": 75524,
                                "tvdb": 4840951,
                                "imdb": "tt3572170",
                                "tmdb": 974377,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 22,
                            "title": "The Proton Transmogrification",
                            "ids": {
                                "trakt": 75525,
                                "tvdb": 4840952,
                                "imdb": "tt3572176",
                                "tmdb": 974378,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 23,
                            "title": "The Gorilla Dissolution",
                            "ids": {
                                "trakt": 75526,
                                "tvdb": 4840953,
                                "imdb": "tt3572182",
                                "tmdb": 975272,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 24,
                            "title": "The Status Quo Combustion",
                            "ids": {
                                "trakt": 75527,
                                "tvdb": 4840954,
                                "imdb": "tt3572184",
                                "tmdb": 975625,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 8,
                    "ids": {
                        "trakt": 4087,
                        "tvdb": 589268,
                        "tmdb": 62016,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 8,
                            "number": 1,
                            "title": "The Locomotion Interruption",
                            "ids": {
                                "trakt": 75528,
                                "tvdb": 4917009,
                                "imdb": "tt3596130",
                                "tmdb": 1000640,
                                "tvrage": 1065567528
                            }
                        },
                        {
                            "season": 8,
                            "number": 2,
                            "title": "The Junior Professor Solution",
                            "ids": {
                                "trakt": 75529,
                                "tvdb": 4917010,
                                "imdb": "tt3807172",
                                "tmdb": 1000641,
                                "tvrage": 1065595345
                            }
                        },
                        {
                            "season": 8,
                            "number": 3,
                            "title": "The First Pitch Insufficiency",
                            "ids": {
                                "trakt": 75530,
                                "tvdb": 4917011,
                                "imdb": "tt3811812",
                                "tmdb": 1001381,
                                "tvrage": 1065616629
                            }
                        },
                        {
                            "season": 8,
                            "number": 4,
                            "title": "The Hook-Up Reverberation",
                            "ids": {
                                "trakt": 75531,
                                "tvdb": 4996845,
                                "imdb": "tt3811814",
                                "tmdb": 1001382,
                                "tvrage": 1065679405
                            }
                        },
                        {
                            "season": 8,
                            "number": 5,
                            "title": "The Focus Attenuation",
                            "ids": {
                                "trakt": 75532,
                                "tvdb": 4997386,
                                "imdb": "tt3811816",
                                "tmdb": 1001383,
                                "tvrage": 1065680877
                            }
                        },
                        {
                            "season": 8,
                            "number": 6,
                            "title": "The Expedition Approximation",
                            "ids": {
                                "trakt": 75533,
                                "tvdb": 4997387,
                                "imdb": "tt3823240",
                                "tmdb": 1001384,
                                "tvrage": 1065683267
                            }
                        },
                        {
                            "season": 8,
                            "number": 7,
                            "title": "The Misinterpretation Agitation",
                            "ids": {
                                "trakt": 75534,
                                "tvdb": 5021431,
                                "imdb": "tt3823244",
                                "tmdb": 1001385,
                                "tvrage": 1065696793
                            }
                        },
                        {
                            "season": 8,
                            "number": 8,
                            "title": "The Prom Equivalency",
                            "ids": {
                                "trakt": 1392144,
                                "tvdb": 5002091,
                                "imdb": "tt3823242",
                                "tmdb": 1012428,
                                "tvrage": 1065690139
                            }
                        },
                        {
                            "season": 8,
                            "number": 9,
                            "title": "The Septum Deviation",
                            "ids": {
                                "trakt": 1392145,
                                "tvdb": 5033323,
                                "imdb": "tt3823248",
                                "tmdb": 1016510,
                                "tvrage": 1065703132
                            }
                        },
                        {
                            "season": 8,
                            "number": 10,
                            "title": "The Champagne Reflection",
                            "ids": {
                                "trakt": 1392146,
                                "tvdb": 5039499,
                                "imdb": "tt3823250",
                                "tmdb": 1018201,
                                "tvrage": 1065707704
                            }
                        },
                        {
                            "season": 8,
                            "number": 11,
                            "title": "The Clean Room Infiltration",
                            "ids": {
                                "trakt": 1392147,
                                "tvdb": 5049225,
                                "imdb": "tt3823252",
                                "tmdb": 1019131,
                                "tvrage": 1065716571
                            }
                        },
                        {
                            "season": 8,
                            "number": 12,
                            "title": "The Space Probe Disintegration",
                            "ids": {
                                "trakt": 1392148,
                                "tvdb": 5066301,
                                "imdb": "tt3823254",
                                "tmdb": 1023703,
                                "tvrage": 1065728622
                            }
                        },
                        {
                            "season": 8,
                            "number": 13,
                            "title": "The Anxiety Optimization",
                            "ids": {
                                "trakt": 1405050,
                                "tvdb": 5077937,
                                "imdb": "tt3862708",
                                "tmdb": 1031868,
                                "tvrage": 1065729773
                            }
                        },
                        {
                            "season": 8,
                            "number": 14,
                            "title": "The Troll Manifestation",
                            "ids": {
                                "trakt": 1723953,
                                "tvdb": 5108937,
                                "imdb": "tt3862712",
                                "tmdb": 1039676,
                                "tvrage": 1065745008
                            }
                        },
                        {
                            "season": 8,
                            "number": 15,
                            "title": "The Comic Book Store Regeneration",
                            "ids": {
                                "trakt": 1726180,
                                "tvdb": 5110662,
                                "imdb": "tt3862710",
                                "tmdb": 1041899,
                                "tvrage": 1065741958
                            }
                        },
                        {
                            "season": 8,
                            "number": 16,
                            "title": "The Intimacy Acceleration",
                            "ids": {
                                "trakt": 1726181,
                                "tvdb": 5110663,
                                "imdb": "tt3862714",
                                "tmdb": 1041629,
                                "tvrage": 1065745009
                            }
                        },
                        {
                            "season": 8,
                            "number": 17,
                            "title": "The Colonization Application",
                            "ids": {
                                "trakt": 1754505,
                                "tvdb": 5127444,
                                "imdb": "tt3862720",
                                "tmdb": 1044145,
                                "tvrage": 1065754069
                            }
                        },
                        {
                            "season": 8,
                            "number": 18,
                            "title": "The Leftover Thermalization",
                            "ids": {
                                "trakt": 1763644,
                                "tvdb": 5135832,
                                "imdb": "tt3862722",
                                "tmdb": 1044789,
                                "tvrage": 1065756634
                            }
                        },
                        {
                            "season": 8,
                            "number": 19,
                            "title": "The Skywalker Incursion",
                            "ids": {
                                "trakt": 1765390,
                                "tvdb": 5149888,
                                "imdb": "tt3862724",
                                "tmdb": 1046725,
                                "tvrage": 1065768525
                            }
                        },
                        {
                            "season": 8,
                            "number": 20,
                            "title": "The Fortification Implementation",
                            "ids": {
                                "trakt": 1765391,
                                "tvdb": 5155402,
                                "imdb": "tt3862726",
                                "tmdb": 1046726,
                                "tvrage": 1065768526
                            }
                        },
                        {
                            "season": 8,
                            "number": 21,
                            "title": "The Communication Deterioration",
                            "ids": {
                                "trakt": 1765392,
                                "tvdb": 5169863,
                                "imdb": "tt3862728",
                                "tmdb": 1050573,
                                "tvrage": 1065780908
                            }
                        },
                        {
                            "season": 8,
                            "number": 22,
                            "title": "The Graduation Transmission",
                            "ids": {
                                "trakt": 1765393,
                                "tvdb": 5173430,
                                "imdb": "tt3862732",
                                "tmdb": 1050574,
                                "tvrage": 1065787791
                            }
                        },
                        {
                            "season": 8,
                            "number": 23,
                            "title": "The Maternal Combustion",
                            "ids": {
                                "trakt": 1765394,
                                "tvdb": 5173431,
                                "imdb": "tt3862734",
                                "tmdb": 1050575,
                                "tvrage": 1065794652
                            }
                        },
                        {
                            "season": 8,
                            "number": 24,
                            "title": "The Commitment Determination",
                            "ids": {
                                "trakt": 1765395,
                                "tvdb": 5173432,
                                "imdb": "tt3862738",
                                "tmdb": 1050576,
                                "tvrage": 1065794655
                            }
                        }
                    ]
                },
                {
                    "number": 9,
                    "ids": {
                        "trakt": 110698,
                        "tvdb": 625567,
                        "tmdb": 70493,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 9,
                            "number": 1,
                            "title": "The Matrimonial Momentum",
                            "ids": {
                                "trakt": 1860456,
                                "tvdb": 5248007,
                                "imdb": "tt3603346",
                                "tmdb": 1105614,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 2,
                            "title": "The Separation Oscillation",
                            "ids": {
                                "trakt": 1965697,
                                "tvdb": 5312556,
                                "imdb": "tt4938690",
                                "tmdb": 1105615,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 3,
                            "title": "The Bachelor Party Corrosion",
                            "ids": {
                                "trakt": 1971269,
                                "tvdb": 5316861,
                                "imdb": "tt4962326",
                                "tmdb": 1105616,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 4,
                            "title": "The 2003 Approximation",
                            "ids": {
                                "trakt": 1990453,
                                "tvdb": 5333194,
                                "imdb": "tt4995126",
                                "tmdb": 1112198,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 5,
                            "title": "The Perspiration Implementation",
                            "ids": {
                                "trakt": 1994271,
                                "tvdb": 5336345,
                                "imdb": "tt5027380",
                                "tmdb": 1112199,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 6,
                            "title": "The Helium Insufficiency",
                            "ids": {
                                "trakt": 1998590,
                                "tvdb": 5341207,
                                "imdb": "tt5090816",
                                "tmdb": 1131419,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 7,
                            "title": "The Spock Resonance",
                            "ids": {
                                "trakt": 1998592,
                                "tvdb": 5341206,
                                "imdb": "tt5073156",
                                "tmdb": 1112200,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 8,
                            "title": "The Mystery Date Observation",
                            "ids": {
                                "trakt": 2034709,
                                "tvdb": 5378695,
                                "imdb": "tt5117928",
                                "tmdb": 1135343,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 9,
                            "title": "The Platonic Permutation",
                            "ids": {
                                "trakt": 2040192,
                                "tvdb": 5384384,
                                "imdb": "tt5143500",
                                "tmdb": 1135344,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 10,
                            "title": "The Earworm Reverberation",
                            "ids": {
                                "trakt": 2052057,
                                "tvdb": 5398852,
                                "imdb": "tt5143508",
                                "tmdb": 1136314,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 11,
                            "title": "The Opening Night Excitation",
                            "ids": {
                                "trakt": 2058961,
                                "tvdb": 5406713,
                                "imdb": "tt5143516",
                                "tmdb": 1147325,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 12,
                            "title": "The Sales Call Sublimation",
                            "ids": {
                                "trakt": 2081130,
                                "tvdb": 5436033,
                                "imdb": "tt5273742",
                                "tmdb": 1149672,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 13,
                            "title": "The Empathy Optimization",
                            "ids": {
                                "trakt": 2087315,
                                "tvdb": 5442484,
                                "imdb": "tt5273740",
                                "tmdb": 1149676,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 14,
                            "title": "The Meemaw Materialization",
                            "ids": {
                                "trakt": 2121704,
                                "tvdb": 5479688,
                                "imdb": "tt5295650",
                                "tmdb": 1157668,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 15,
                            "title": "The Valentino Submergence",
                            "ids": {
                                "trakt": 2130037,
                                "tvdb": 5487474,
                                "imdb": "tt5341496",
                                "tmdb": 1160735,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 16,
                            "title": "The Positive Negative Reaction",
                            "ids": {
                                "trakt": 2140009,
                                "tvdb": 5499997,
                                "imdb": "tt5376678",
                                "tmdb": 1163453,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 17,
                            "title": "The Celebration Experimentation",
                            "ids": {
                                "trakt": 2145521,
                                "tvdb": 5507659,
                                "imdb": "tt5436356",
                                "tmdb": 1165278,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 18,
                            "title": "The Application Deterioration",
                            "ids": {
                                "trakt": 2162795,
                                "tvdb": 5529050,
                                "imdb": "tt5497250",
                                "tmdb": 1173420,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 19,
                            "title": "The Solder Excursion Diversion",
                            "ids": {
                                "trakt": 2169547,
                                "tvdb": 5537607,
                                "imdb": "tt5522908",
                                "tmdb": 1173421,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 20,
                            "title": "The Big Bear Precipitation",
                            "ids": {
                                "trakt": 2181271,
                                "tvdb": 5551964,
                                "imdb": "tt5586046",
                                "tmdb": 1179057,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 21,
                            "title": "The Viewing Party Combustion",
                            "ids": {
                                "trakt": 2184691,
                                "tvdb": 5556823,
                                "imdb": "tt5586050",
                                "tmdb": 1179058,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 22,
                            "title": "The Fermentation Bifurcation",
                            "ids": {
                                "trakt": 2184692,
                                "tvdb": 5573269,
                                "imdb": "tt5597958",
                                "tmdb": 1187582,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 23,
                            "title": "The Line Substitution Solution",
                            "ids": {
                                "trakt": 2184693,
                                "tvdb": 5579744,
                                "imdb": "tt5597960",
                                "tmdb": 1189555,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 9,
                            "number": 24,
                            "title": "The Convergence Convergence",
                            "ids": {
                                "trakt": 2184694,
                                "tvdb": 5580583,
                                "imdb": "tt5562854",
                                "tmdb": 1189556,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 10,
                    "ids": {
                        "trakt": 127604,
                        "tvdb": 671558,
                        "tmdb": 80035,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 10,
                            "number": 1,
                            "title": "The Conjugal Conjecture",
                            "ids": {
                                "trakt": 2244839,
                                "tvdb": 5654968,
                                "imdb": "tt3603372",
                                "tmdb": 1221931,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 2,
                            "title": "The Military Miniaturization",
                            "ids": {
                                "trakt": 2267810,
                                "tvdb": 5714255,
                                "imdb": "tt5973910",
                                "tmdb": 1221932,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 3,
                            "title": "The Dependence Transcendence",
                            "ids": {
                                "trakt": 2298780,
                                "tvdb": 5723041,
                                "imdb": "tt5996928",
                                "tmdb": 1221933,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 4,
                            "title": "The Cohabitation Experimentation",
                            "ids": {
                                "trakt": 2298781,
                                "tvdb": 5728928,
                                "imdb": "tt6062772",
                                "tmdb": 1229282,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 5,
                            "title": "The Hot Tub Contamination",
                            "ids": {
                                "trakt": 2313216,
                                "tvdb": 5728929,
                                "imdb": "tt6077690",
                                "tmdb": 1229980,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 6,
                            "title": "The Fetal Kick Catalyst",
                            "ids": {
                                "trakt": 2313222,
                                "tvdb": 5779076,
                                "imdb": "tt5825290",
                                "tmdb": 1231939,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 7,
                            "title": "The Veracity Elasticity",
                            "ids": {
                                "trakt": 2313223,
                                "tvdb": 5787224,
                                "imdb": "tt6186420",
                                "tmdb": 1236541,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 8,
                            "title": "The Brain Bowl Incubation",
                            "ids": {
                                "trakt": 2322308,
                                "tvdb": 5788094,
                                "imdb": "tt6189462",
                                "tmdb": 1237227,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 9,
                            "title": "The Geology Elevation",
                            "ids": {
                                "trakt": 2322310,
                                "tvdb": 5818673,
                                "imdb": "tt6214960",
                                "tmdb": 1240547,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 10,
                            "title": "The Property Division Collision",
                            "ids": {
                                "trakt": 2322318,
                                "tvdb": 5821331,
                                "imdb": "tt6255718",
                                "tmdb": 1242471,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 11,
                            "title": "The Birthday Synchronicity",
                            "ids": {
                                "trakt": 2322321,
                                "tvdb": 5852363,
                                "imdb": "tt6255770",
                                "tmdb": 1247340,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 12,
                            "title": "The Holiday Summation",
                            "ids": {
                                "trakt": 2421973,
                                "tvdb": 5864719,
                                "imdb": "tt6320950",
                                "tmdb": 1252065,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 13,
                            "title": "The Romance Recalibration",
                            "ids": {
                                "trakt": 2434892,
                                "tvdb": 5880148,
                                "imdb": "tt6337212",
                                "tmdb": 1254471,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 14,
                            "title": "The Emotion Detection Automation",
                            "ids": {
                                "trakt": 2458599,
                                "tvdb": 5911146,
                                "imdb": "tt6414316",
                                "tmdb": 1258773,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 15,
                            "title": "The Locomotion Reverberation",
                            "ids": {
                                "trakt": 2473985,
                                "tvdb": 5933590,
                                "imdb": "tt6438684",
                                "tmdb": 1258774,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 16,
                            "title": "The Allowance Evaporation",
                            "ids": {
                                "trakt": 2478976,
                                "tvdb": 5939843,
                                "imdb": "tt6495864",
                                "tmdb": 1270524,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 17,
                            "title": "The Comic-Con Conundrum",
                            "ids": {
                                "trakt": 2486713,
                                "tvdb": 5952327,
                                "imdb": "tt6527026",
                                "tmdb": 1270566,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 18,
                            "title": "The Escape Hatch Identification",
                            "ids": {
                                "trakt": 2492472,
                                "tvdb": 5963134,
                                "imdb": "tt6565510",
                                "tmdb": 1279264,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 19,
                            "title": "The Collaboration Fluctuation",
                            "ids": {
                                "trakt": 2502157,
                                "tvdb": 5975781,
                                "imdb": "tt6565514",
                                "tmdb": 1285746,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 20,
                            "title": "The Recollection Dissipation",
                            "ids": {
                                "trakt": 2524003,
                                "tvdb": 6005941,
                                "imdb": "tt6565516",
                                "tmdb": 1296166,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 21,
                            "title": "The Separation Agitation",
                            "ids": {
                                "trakt": 2530511,
                                "tvdb": 6016356,
                                "imdb": "tt6565524",
                                "tmdb": 1297790,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 22,
                            "title": "The Cognition Regeneration",
                            "ids": {
                                "trakt": 2536988,
                                "tvdb": 6026834,
                                "imdb": "tt6565530",
                                "tmdb": 1303311,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 23,
                            "title": "The Gyroscopic Collapse",
                            "ids": {
                                "trakt": 2536989,
                                "tvdb": 6026835,
                                "imdb": "tt6706250",
                                "tmdb": 1303312,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 10,
                            "number": 24,
                            "title": "The Long Distance Dissonance",
                            "ids": {
                                "trakt": 2536990,
                                "tvdb": 6026836,
                                "imdb": "tt6706254",
                                "tmdb": 1303313,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 11,
                    "ids": {
                        "trakt": 142214,
                        "tvdb": 714200,
                        "tmdb": 91000,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 11,
                            "number": 1,
                            "title": "The Proposal Proposal",
                            "ids": {
                                "trakt": 2543344,
                                "tvdb": 6112057,
                                "imdb": "tt6673774",
                                "tmdb": 1343852,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 2,
                            "title": "The Retraction Reaction",
                            "ids": {
                                "trakt": 2705687,
                                "tvdb": 6277743,
                                "imdb": "tt6674506",
                                "tmdb": 1369083,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 3,
                            "title": "The Relaxation Integration",
                            "ids": {
                                "trakt": 2711814,
                                "tvdb": 6288202,
                                "imdb": "tt6674504",
                                "tmdb": 1369085,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 4,
                            "title": "The Explosion Implosion",
                            "ids": {
                                "trakt": 2726537,
                                "tvdb": 6311198,
                                "imdb": "tt6674498",
                                "tmdb": 1369086,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 5,
                            "title": "The Collaboration Contamination",
                            "ids": {
                                "trakt": 2735962,
                                "tvdb": 6324497,
                                "imdb": "tt6674496",
                                "tmdb": 1369087,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 6,
                            "title": "The Proton Regeneration",
                            "ids": {
                                "trakt": 2749328,
                                "tvdb": 6346730,
                                "imdb": "tt6674494",
                                "tmdb": 1383967,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 7,
                            "title": "The Geology Methodology",
                            "ids": {
                                "trakt": 2756767,
                                "tvdb": 6357448,
                                "imdb": "tt6674492",
                                "tmdb": 1391209,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 8,
                            "title": "The Tesla Recoil",
                            "ids": {
                                "trakt": 2768254,
                                "tvdb": 6371975,
                                "imdb": "tt6674490",
                                "tmdb": 1391230,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 9,
                            "title": "The Bitcoin Entanglement",
                            "ids": {
                                "trakt": 2779956,
                                "tvdb": 6389649,
                                "imdb": "tt6674486",
                                "tmdb": 1391231,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 10,
                            "title": "The Confidence Erosion",
                            "ids": {
                                "trakt": 2793743,
                                "tvdb": 6410397,
                                "imdb": "tt6674480",
                                "tmdb": 1400066,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 11,
                            "title": "The Celebration Reverberation",
                            "ids": {
                                "trakt": 2799864,
                                "tvdb": 6420024,
                                "imdb": "tt6674476",
                                "tmdb": 1400067,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 12,
                            "title": "The Matrimonial Metric",
                            "ids": {
                                "trakt": 2808529,
                                "tvdb": 6436133,
                                "imdb": "tt6674472",
                                "tmdb": 1406757,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 13,
                            "title": "The Solo Oscillation",
                            "ids": {
                                "trakt": 2819221,
                                "tvdb": 6453565,
                                "imdb": "tt6674468",
                                "tmdb": 1406758,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 14,
                            "title": "The Separation Triangulation",
                            "ids": {
                                "trakt": 2830936,
                                "tvdb": 6468765,
                                "imdb": "tt6674466",
                                "tmdb": 1418484,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 15,
                            "title": "The Novelization Correlation",
                            "ids": {
                                "trakt": 2846069,
                                "tvdb": 6486419,
                                "imdb": "tt6674462",
                                "tmdb": 1426838,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 16,
                            "title": "The Neonatal Nomenclature",
                            "ids": {
                                "trakt": 2854214,
                                "tvdb": 6498115,
                                "imdb": "tt6674448",
                                "tmdb": 1431840,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 17,
                            "title": "The Athenaeum Allocation",
                            "ids": {
                                "trakt": 2889538,
                                "tvdb": 6549611,
                                "imdb": "tt6674452",
                                "tmdb": 1434700,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 18,
                            "title": "The Gates Excitation",
                            "ids": {
                                "trakt": 2895366,
                                "tvdb": 6557317,
                                "imdb": "tt6674456",
                                "tmdb": 1434701,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 19,
                            "title": "The Tenant Disassociation",
                            "ids": {
                                "trakt": 2919856,
                                "tvdb": 6589204,
                                "imdb": "tt6674454",
                                "tmdb": 1454903,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 20,
                            "title": "The Reclusive Potential",
                            "ids": {
                                "trakt": 2926233,
                                "tvdb": 6600689,
                                "imdb": "tt6674434",
                                "tmdb": 1465165,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 21,
                            "title": "The Comet Polarization",
                            "ids": {
                                "trakt": 2935730,
                                "tvdb": 6614322,
                                "imdb": "tt6674432",
                                "tmdb": 1465375,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 22,
                            "title": "The Monetary Insufficiency",
                            "ids": {
                                "trakt": 2937115,
                                "tvdb": 6617321,
                                "imdb": "tt6674428",
                                "tmdb": 1465376,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 23,
                            "title": "The Sibling Realignment",
                            "ids": {
                                "trakt": 2937116,
                                "tvdb": 6617322,
                                "imdb": "tt6674424",
                                "tmdb": 1473373,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 11,
                            "number": 24,
                            "title": "The Bow Tie Asymmetry",
                            "ids": {
                                "trakt": 2937117,
                                "tvdb": 6617323,
                                "imdb": "tt6674430",
                                "tmdb": 1477740,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 12,
                    "ids": {
                        "trakt": 163410,
                        "tvdb": 771231,
                        "tmdb": 107083,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 12,
                            "number": 1,
                            "title": "The Conjugal Configuration",
                            "ids": {
                                "trakt": 2979674,
                                "tvdb": 6755587,
                                "imdb": "tt6673778",
                                "tmdb": 1534358,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 2,
                            "title": "The Wedding Gift Wormhole",
                            "ids": {
                                "trakt": 3076941,
                                "tvdb": 6808099,
                                "imdb": "tt6674688",
                                "tmdb": 1572527,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 3,
                            "title": "The Procreation Calculation",
                            "ids": {
                                "trakt": 3076942,
                                "tvdb": 6833864,
                                "imdb": "tt6674692",
                                "tmdb": 1575221,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 4,
                            "title": "The Tam Turbulence",
                            "ids": {
                                "trakt": 3163031,
                                "tvdb": 6833867,
                                "imdb": "tt6674690",
                                "tmdb": 1575223,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 5,
                            "title": "The Planetarium Collision",
                            "ids": {
                                "trakt": 3174625,
                                "tvdb": 6842655,
                                "imdb": "tt6674694",
                                "tmdb": 1593011,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 6,
                            "title": "The Imitation Perturbation",
                            "ids": {
                                "trakt": 3193819,
                                "tvdb": 6860580,
                                "imdb": "tt6674704",
                                "tmdb": 1593014,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 7,
                            "title": "The Grant Allocation Derivation",
                            "ids": {
                                "trakt": 3205502,
                                "tvdb": 6873461,
                                "imdb": "tt6674696",
                                "tmdb": 1604724,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 8,
                            "title": "The Consummation Deviation",
                            "ids": {
                                "trakt": 3218327,
                                "tvdb": 6887183,
                                "imdb": "tt6674702",
                                "tmdb": 1614628,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 9,
                            "title": "The Citation Negation",
                            "ids": {
                                "trakt": 3218328,
                                "tvdb": 6887208,
                                "imdb": "tt6674698",
                                "tmdb": 1615073,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 10,
                            "title": "The VCR Illumination",
                            "ids": {
                                "trakt": 3248689,
                                "tvdb": 6913270,
                                "imdb": "tt6674710",
                                "tmdb": 1628622,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 11,
                            "title": "The Paintball Scattering",
                            "ids": {
                                "trakt": 3273293,
                                "tvdb": 6937351,
                                "imdb": "tt6674706",
                                "tmdb": 1639117,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 12,
                            "title": "The Propagation Proposition",
                            "ids": {
                                "trakt": 3275577,
                                "tvdb": 6938260,
                                "imdb": "tt6674708",
                                "tmdb": 1648382,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 13,
                            "title": "The Confirmation Polarization",
                            "ids": {
                                "trakt": 3317248,
                                "tvdb": 6987000,
                                "imdb": "tt6674714",
                                "tmdb": 1675687,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 14,
                            "title": "The Meteorite Manifestation",
                            "ids": {
                                "trakt": 3347600,
                                "tvdb": 7009000,
                                "imdb": "tt6674712",
                                "tmdb": 1677264,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 15,
                            "title": "The Donation Oscillation",
                            "ids": {
                                "trakt": 3356300,
                                "tvdb": 7018622,
                                "imdb": "tt6674716",
                                "tmdb": 1694025,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 16,
                            "title": "The D & D Vortex",
                            "ids": {
                                "trakt": 3373210,
                                "tvdb": 7037091,
                                "imdb": "tt6674718",
                                "tmdb": 1712585,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 17,
                            "title": "The Conference Valuation",
                            "ids": {
                                "trakt": 3386929,
                                "tvdb": 7048797,
                                "imdb": "tt6674726",
                                "tmdb": 1713493,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 18,
                            "title": "The Laureate Accumulation",
                            "ids": {
                                "trakt": 3440742,
                                "tvdb": 7099719,
                                "imdb": "tt6674724",
                                "tmdb": 1748952,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 19,
                            "title": "The Inspiration Deprivation",
                            "ids": {
                                "trakt": 3462094,
                                "tvdb": 7117710,
                                "imdb": "tt6674720",
                                "tmdb": 1749468,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 20,
                            "title": "The Decision Reverberation",
                            "ids": {
                                "trakt": 3473596,
                                "tvdb": 7128890,
                                "imdb": "tt6674728",
                                "tmdb": 1749469,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 21,
                            "title": "The Plagiarism Schism",
                            "ids": {
                                "trakt": 3493221,
                                "tvdb": 7146880,
                                "imdb": "tt6674732",
                                "tmdb": 1778893,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 22,
                            "title": "The Maternal Conclusion",
                            "ids": {
                                "trakt": 3499513,
                                "tvdb": 7153508,
                                "imdb": "tt6674730",
                                "tmdb": 1779190,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 23,
                            "title": "The Change Constant / The Stockholm Syndrome",
                            "ids": {
                                "trakt": 3507719,
                                "tvdb": 7161279,
                                "imdb": "tt6674734",
                                "tmdb": 1786931,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 12,
                            "number": 24,
                            "title": "Unraveling the Mystery: A Big Bang Farewell",
                            "ids": {
                                "trakt": 3524428,
                                "tvdb": 7159758,
                                "imdb": "tt10269988",
                                "tmdb": 2767846,
                                "tvrage": null
                            }
                        }
                    ]
                }
            ]
        },
        "77692": {
            "title": "Billions",
            "year": 2016,
            "id": 77692,
            "slug": "billions",
            "imdb": "https://www.imdb.com/title/tt4270492/",
            "tagline": "Go for broke.",
            "overview": "A complex drama about power politics in the world of New York high finance. Shrewd, savvy U.S. Attorney Chuck Rhoades and the brilliant, ambitious hedge fund king Bobby \"Axe\" Axelrod are on an explosive collision course, with each using all of his considerable smarts, power and influence to outmaneuver the other. The stakes are in the billions in this timely, provocative series.",
            "network": "Showtime",
            "country": "us",
            "trailer": "https://youtube.com/watch?v=_raEUMLL-ZI",
            "status": "returning series",
            "rating": 8.32417,
            "votes": 4877,
            "language": "en",
            "genres": [
                "drama"
            ],
            "aired_episodes": 77,
            "poster": "https://image.tmdb.org/t/p/w500/edwYPQdZE998d748AdwWLsfy0rl.jpg",
            "seasons": [
                {
                    "number": 0,
                    "ids": {
                        "trakt": 153333,
                        "tvdb": 0,
                        "tmdb": 177228,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 0,
                            "number": 1,
                            "title": "About Billions",
                            "ids": {
                                "trakt": 2779703,
                                "tvdb": 6389175,
                                "imdb": null,
                                "tmdb": 3225765,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 2,
                            "title": "Street Slang",
                            "ids": {
                                "trakt": 2779704,
                                "tvdb": 6389175,
                                "imdb": null,
                                "tmdb": 2659645,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 3,
                            "title": "Profile Axe",
                            "ids": {
                                "trakt": 2779707,
                                "tvdb": 6389176,
                                "imdb": null,
                                "tmdb": 2659647,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 4,
                            "title": "Profile Chuck",
                            "ids": {
                                "trakt": 2779708,
                                "tvdb": 6389177,
                                "imdb": null,
                                "tmdb": 2659648,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 5,
                            "title": "Profile Wendy",
                            "ids": {
                                "trakt": 2779709,
                                "tvdb": 6389178,
                                "imdb": null,
                                "tmdb": 2659649,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 6,
                            "title": "Profile Lara",
                            "ids": {
                                "trakt": 2779710,
                                "tvdb": 6389179,
                                "imdb": null,
                                "tmdb": 2659650,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 7,
                            "title": "Location: New York",
                            "ids": {
                                "trakt": 2779711,
                                "tvdb": 6389180,
                                "imdb": null,
                                "tmdb": 2659651,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 8,
                            "title": "Character Development",
                            "ids": {
                                "trakt": 2779712,
                                "tvdb": 6389182,
                                "imdb": null,
                                "tmdb": 2659652,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 0,
                            "number": 9,
                            "title": "Shadows and Light",
                            "ids": {
                                "trakt": 5577349,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 2659653,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 1,
                    "ids": {
                        "trakt": 104676,
                        "tvdb": 579475,
                        "tmdb": 67333,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 1,
                            "number": 1,
                            "title": "Pilot",
                            "ids": {
                                "trakt": 1744886,
                                "tvdb": 4825218,
                                "imdb": "tt4608554",
                                "tmdb": 1098816,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 2,
                            "title": "Naming Rights",
                            "ids": {
                                "trakt": 2066816,
                                "tvdb": 5415406,
                                "imdb": "tt4674946",
                                "tmdb": 1152142,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 3,
                            "title": "YumTime",
                            "ids": {
                                "trakt": 2066818,
                                "tvdb": 5415407,
                                "imdb": "tt4700648",
                                "tmdb": 1152145,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 4,
                            "title": "Short Squeeze",
                            "ids": {
                                "trakt": 2077011,
                                "tvdb": 5429012,
                                "imdb": "tt4704400",
                                "tmdb": 1152146,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 5,
                            "title": "The Good Life",
                            "ids": {
                                "trakt": 2077012,
                                "tvdb": 5429013,
                                "imdb": "tt4772192",
                                "tmdb": 1152147,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 6,
                            "title": "The Deal",
                            "ids": {
                                "trakt": 2077013,
                                "tvdb": 5429014,
                                "imdb": "tt4776696",
                                "tmdb": 1152148,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 7,
                            "title": "The Punch",
                            "ids": {
                                "trakt": 2077014,
                                "tvdb": 5429015,
                                "imdb": "tt4776698",
                                "tmdb": 1162003,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 8,
                            "title": "Boasts and Rails",
                            "ids": {
                                "trakt": 2077015,
                                "tvdb": 5429016,
                                "imdb": "tt4776710",
                                "tmdb": 1162004,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 9,
                            "title": "Where the F-ck is Donnie?",
                            "ids": {
                                "trakt": 2077016,
                                "tvdb": 5429017,
                                "imdb": "tt4790002",
                                "tmdb": 1162005,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 10,
                            "title": "Quality of Life",
                            "ids": {
                                "trakt": 2077017,
                                "tvdb": 5500159,
                                "imdb": "tt4790766",
                                "tmdb": 1162006,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 11,
                            "title": "Magical Thinking",
                            "ids": {
                                "trakt": 2077019,
                                "tvdb": 5532805,
                                "imdb": "tt4790768",
                                "tmdb": 1173976,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 12,
                            "title": "The Conversation",
                            "ids": {
                                "trakt": 2077021,
                                "tvdb": 5532806,
                                "imdb": "tt4608560",
                                "tmdb": 1173977,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 2,
                    "ids": {
                        "trakt": 130706,
                        "tvdb": 676870,
                        "tmdb": 79306,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 2,
                            "number": 1,
                            "title": "Risk Management",
                            "ids": {
                                "trakt": 2307852,
                                "tvdb": 5707079,
                                "imdb": "tt5376026",
                                "tmdb": 1215170,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 2,
                            "title": "Dead Cat Bounce",
                            "ids": {
                                "trakt": 2449469,
                                "tvdb": 5900353,
                                "imdb": "tt5829294",
                                "tmdb": 1250877,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 3,
                            "title": "Optimal Play",
                            "ids": {
                                "trakt": 2487506,
                                "tvdb": 5953965,
                                "imdb": "tt5946238",
                                "tmdb": 1267401,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 4,
                            "title": "The Oath",
                            "ids": {
                                "trakt": 2487508,
                                "tvdb": 5953966,
                                "imdb": "tt6059518",
                                "tmdb": 1267402,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 5,
                            "title": "Currency",
                            "ids": {
                                "trakt": 2487510,
                                "tvdb": 5953967,
                                "imdb": "tt5989406",
                                "tmdb": 1267403,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 6,
                            "title": "Indian Four",
                            "ids": {
                                "trakt": 2487512,
                                "tvdb": 5953969,
                                "imdb": "tt6092996",
                                "tmdb": 1267404,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 7,
                            "title": "Victory Lap",
                            "ids": {
                                "trakt": 2487518,
                                "tvdb": 5983161,
                                "imdb": "tt6062920",
                                "tmdb": 1279274,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 8,
                            "title": "The Kingmaker",
                            "ids": {
                                "trakt": 2487519,
                                "tvdb": 5983162,
                                "imdb": "tt6093000",
                                "tmdb": 1279275,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 9,
                            "title": "Sic Transit Imperium",
                            "ids": {
                                "trakt": 2487520,
                                "tvdb": 5983163,
                                "imdb": "tt6093004",
                                "tmdb": 1279276,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 10,
                            "title": "With or Without You",
                            "ids": {
                                "trakt": 2487523,
                                "tvdb": 5983164,
                                "imdb": "tt6093006",
                                "tmdb": 1279277,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 11,
                            "title": "Golden Frog Time",
                            "ids": {
                                "trakt": 2487524,
                                "tvdb": 5983165,
                                "imdb": "tt5960350",
                                "tmdb": 1279278,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 12,
                            "title": "Ball in Hand",
                            "ids": {
                                "trakt": 2487525,
                                "tvdb": 5983166,
                                "imdb": "tt5691466",
                                "tmdb": 1302177,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 3,
                    "ids": {
                        "trakt": 148445,
                        "tvdb": 723336,
                        "tmdb": 97573,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 3,
                            "number": 1,
                            "title": "Tie Goes to the Runner",
                            "ids": {
                                "trakt": 2676919,
                                "tvdb": 6235785,
                                "imdb": "tt6667762",
                                "tmdb": 1416356,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 2,
                            "title": "The Wrong Maria Gonzalez",
                            "ids": {
                                "trakt": 2676920,
                                "tvdb": 6235786,
                                "imdb": "tt7549654",
                                "tmdb": 1445579,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 3,
                            "title": "A Generation Too Late",
                            "ids": {
                                "trakt": 2859911,
                                "tvdb": 6508241,
                                "imdb": "tt7471904",
                                "tmdb": 1445580,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 4,
                            "title": "Hell of a Ride",
                            "ids": {
                                "trakt": 2859912,
                                "tvdb": 6508242,
                                "imdb": "tt7620520",
                                "tmdb": 1445581,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 5,
                            "title": "Flaw in the Death Star",
                            "ids": {
                                "trakt": 2859913,
                                "tvdb": 6508243,
                                "imdb": "tt7620518",
                                "tmdb": 1445582,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 6,
                            "title": "The Third Ortolan",
                            "ids": {
                                "trakt": 2859915,
                                "tvdb": 6508244,
                                "imdb": "tt7731472",
                                "tmdb": 1445583,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 7,
                            "title": "Not You, Mr. Dake",
                            "ids": {
                                "trakt": 2859916,
                                "tvdb": 6508245,
                                "imdb": "tt7731480",
                                "tmdb": 1463700,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 8,
                            "title": "All the Wilburys",
                            "ids": {
                                "trakt": 2859917,
                                "tvdb": 6508246,
                                "imdb": "tt7780756",
                                "tmdb": 1463702,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 9,
                            "title": "Icebreaker",
                            "ids": {
                                "trakt": 2859918,
                                "tvdb": 6508247,
                                "imdb": "tt7780758",
                                "tmdb": 1463703,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 10,
                            "title": "Redemption",
                            "ids": {
                                "trakt": 2859920,
                                "tvdb": 6508248,
                                "imdb": "tt7549638",
                                "tmdb": 1463704,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 11,
                            "title": "Kompenso",
                            "ids": {
                                "trakt": 2859921,
                                "tvdb": 6508249,
                                "imdb": "tt7549642",
                                "tmdb": 1481720,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 12,
                            "title": "Elmsley Count",
                            "ids": {
                                "trakt": 2859922,
                                "tvdb": 6508251,
                                "imdb": "tt6667766",
                                "tmdb": 1481721,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 4,
                    "ids": {
                        "trakt": 178201,
                        "tvdb": 790180,
                        "tmdb": 114651,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 4,
                            "number": 1,
                            "title": "Chucky Rhoades's Greatest Game",
                            "ids": {
                                "trakt": 3281846,
                                "tvdb": 6945782,
                                "imdb": "tt8490712",
                                "tmdb": 1647355,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 2,
                            "title": "Arousal Template",
                            "ids": {
                                "trakt": 3287763,
                                "tvdb": 6953346,
                                "imdb": "tt9261354",
                                "tmdb": 1698011,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 3,
                            "title": "Chickentown",
                            "ids": {
                                "trakt": 3287782,
                                "tvdb": 6953348,
                                "imdb": "tt9141488",
                                "tmdb": 1698012,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 4,
                            "title": "Overton Window",
                            "ids": {
                                "trakt": 3403453,
                                "tvdb": 7064189,
                                "imdb": "tt9256906",
                                "tmdb": 1717710,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 5,
                            "title": "A Proper Sendoff",
                            "ids": {
                                "trakt": 3403454,
                                "tvdb": 7064190,
                                "imdb": "tt9261360",
                                "tmdb": 1717711,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 6,
                            "title": "Maximum Recreational Depth",
                            "ids": {
                                "trakt": 3403455,
                                "tvdb": 7064191,
                                "imdb": "tt9261364",
                                "tmdb": 1717712,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 7,
                            "title": "Infinite Game",
                            "ids": {
                                "trakt": 3403456,
                                "tvdb": 7064193,
                                "imdb": "tt9261366",
                                "tmdb": 1717713,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 8,
                            "title": "Fight Night",
                            "ids": {
                                "trakt": 3433494,
                                "tvdb": 7092433,
                                "imdb": "tt9261368",
                                "tmdb": 1743202,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 9,
                            "title": "American Champion",
                            "ids": {
                                "trakt": 3455209,
                                "tvdb": 7111074,
                                "imdb": "tt9261372",
                                "tmdb": 1743203,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 10,
                            "title": "New Year's Day",
                            "ids": {
                                "trakt": 3455210,
                                "tvdb": 7111075,
                                "imdb": "tt9261374",
                                "tmdb": 1743205,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 11,
                            "title": "Lamster",
                            "ids": {
                                "trakt": 3514218,
                                "tvdb": 7167769,
                                "imdb": "tt9261376",
                                "tmdb": 1779920,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 4,
                            "number": 12,
                            "title": "Extreme Sandbox",
                            "ids": {
                                "trakt": 3514199,
                                "tvdb": 7167768,
                                "imdb": "tt8490718",
                                "tmdb": 1779921,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 5,
                    "ids": {
                        "trakt": 208585,
                        "tvdb": 1814579,
                        "tmdb": 140802,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 5,
                            "number": 1,
                            "title": "The New Decas",
                            "ids": {
                                "trakt": 3934212,
                                "tvdb": 7538214,
                                "imdb": "tt10569630",
                                "tmdb": 2048261,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 2,
                            "title": "The Chris Rock Test",
                            "ids": {
                                "trakt": 4029944,
                                "tvdb": 7615439,
                                "imdb": "tt11191406",
                                "tmdb": 2208916,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 3,
                            "title": "Beg, Bribe, Bully",
                            "ids": {
                                "trakt": 4029946,
                                "tvdb": 7615442,
                                "imdb": "tt11191410",
                                "tmdb": 2208917,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 4,
                            "title": "Opportunity Zone",
                            "ids": {
                                "trakt": 4029948,
                                "tvdb": 7615443,
                                "imdb": "tt11191416",
                                "tmdb": 2208918,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 5,
                            "title": "Contract",
                            "ids": {
                                "trakt": 4029949,
                                "tvdb": 7615446,
                                "imdb": "tt11229598",
                                "tmdb": 2208919,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 6,
                            "title": "The Nordic Model",
                            "ids": {
                                "trakt": 4029950,
                                "tvdb": 7615449,
                                "imdb": "tt11519846",
                                "tmdb": 2275719,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 7,
                            "title": "The Limitless Sh*t",
                            "ids": {
                                "trakt": 4029952,
                                "tvdb": 7615450,
                                "imdb": "tt11519848",
                                "tmdb": 2275720,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 8,
                            "title": "Copenhagen",
                            "ids": {
                                "trakt": 5217160,
                                "tvdb": 8488847,
                                "imdb": "tt11519850",
                                "tmdb": 3017539,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 9,
                            "title": "Implosion",
                            "ids": {
                                "trakt": 5395461,
                                "tvdb": 8488848,
                                "imdb": "tt11519852",
                                "tmdb": 3142363,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 10,
                            "title": "Liberty",
                            "ids": {
                                "trakt": 5395462,
                                "tvdb": 8488849,
                                "imdb": "tt11519858",
                                "tmdb": 3142364,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 11,
                            "title": "Victory Smoke",
                            "ids": {
                                "trakt": 5395463,
                                "tvdb": 8488850,
                                "imdb": "tt11519860",
                                "tmdb": 3142365,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 5,
                            "number": 12,
                            "title": "No Direction Home",
                            "ids": {
                                "trakt": 5452210,
                                "tvdb": 8488851,
                                "imdb": "tt11514788",
                                "tmdb": 3184314,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 6,
                    "ids": {
                        "trakt": 280657,
                        "tvdb": 1960293,
                        "tmdb": 221039,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 6,
                            "number": 1,
                            "title": "Cannonade",
                            "ids": {
                                "trakt": 5726500,
                                "tvdb": 8752699,
                                "imdb": "tt13206844",
                                "tmdb": 3355315,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 2,
                            "title": "Lyin' Eyes",
                            "ids": {
                                "trakt": 5817092,
                                "tvdb": 8752780,
                                "imdb": "tt15271790",
                                "tmdb": 3440035,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 3,
                            "title": "STD",
                            "ids": {
                                "trakt": 5817093,
                                "tvdb": 8752781,
                                "imdb": "tt15318584",
                                "tmdb": 3440036,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 4,
                            "title": "Burn Rate",
                            "ids": {
                                "trakt": 5817094,
                                "tvdb": 8752782,
                                "imdb": "tt15318518",
                                "tmdb": 3440037,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 5,
                            "title": "Rock of Eye",
                            "ids": {
                                "trakt": 5817095,
                                "tvdb": 8752783,
                                "imdb": "tt15274764",
                                "tmdb": 3440038,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 6,
                            "title": "Hostis Humani Generis",
                            "ids": {
                                "trakt": 5817096,
                                "tvdb": 8752784,
                                "imdb": "tt15228188",
                                "tmdb": 3440039,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 7,
                            "title": "Napoleon's Hat",
                            "ids": {
                                "trakt": 5886616,
                                "tvdb": 8752785,
                                "imdb": "tt15318634",
                                "tmdb": 3488955,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 8,
                            "title": "The Big Ugly",
                            "ids": {
                                "trakt": 5886617,
                                "tvdb": 8752786,
                                "imdb": "tt15318544",
                                "tmdb": 3488957,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 9,
                            "title": "Hindenburg",
                            "ids": {
                                "trakt": 5886618,
                                "tvdb": 8752787,
                                "imdb": "tt15318562",
                                "tmdb": 3488960,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 10,
                            "title": "Johnny Favorite",
                            "ids": {
                                "trakt": 5886619,
                                "tvdb": 8752788,
                                "imdb": "tt15318638",
                                "tmdb": 3488962,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 11,
                            "title": "Succession",
                            "ids": {
                                "trakt": 5956276,
                                "tvdb": 8752789,
                                "imdb": "tt15318650",
                                "tmdb": 3578479,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 6,
                            "number": 12,
                            "title": "Cold Storage",
                            "ids": {
                                "trakt": 5956277,
                                "tvdb": 8752790,
                                "imdb": "tt15318586",
                                "tmdb": 3578481,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 7,
                    "ids": {
                        "trakt": 326939,
                        "tvdb": null,
                        "tmdb": 345435,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 7,
                            "number": 1,
                            "title": "Tower of London",
                            "ids": {
                                "trakt": 10725601,
                                "tvdb": 9856212,
                                "imdb": "tt18259210",
                                "tmdb": 4524402,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 2,
                            "title": "Original Sin",
                            "ids": {
                                "trakt": 10725602,
                                "tvdb": 9856215,
                                "imdb": "tt28101935",
                                "tmdb": 4524403,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 3,
                            "title": "Winston Dick Energy",
                            "ids": {
                                "trakt": 10725603,
                                "tvdb": 9856216,
                                "imdb": "tt28288317",
                                "tmdb": 4524404,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 4,
                            "title": "Hurricane Rosie",
                            "ids": {
                                "trakt": 10787679,
                                "tvdb": 9856217,
                                "imdb": "tt28288318",
                                "tmdb": 4596774,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 5,
                            "title": "The Gulag Archipelago",
                            "ids": {
                                "trakt": 10787683,
                                "tvdb": 9856218,
                                "imdb": "tt28288320",
                                "tmdb": 4596775,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 6,
                            "title": "The Man in the Olive Drab T-Shirt",
                            "ids": {
                                "trakt": 10787685,
                                "tvdb": 9856219,
                                "imdb": "tt28288322",
                                "tmdb": 4596776,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 7,
                            "title": "DMV",
                            "ids": {
                                "trakt": 10802997,
                                "tvdb": 9856220,
                                "imdb": "tt28279356",
                                "tmdb": 4616632,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 8,
                            "title": "The Owl",
                            "ids": {
                                "trakt": 10802998,
                                "tvdb": 9856221,
                                "imdb": "tt28288324",
                                "tmdb": 4616633,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 9,
                            "title": "Game Theory Optimal",
                            "ids": {
                                "trakt": 10811724,
                                "tvdb": 9856222,
                                "imdb": "tt28288328",
                                "tmdb": 4633265,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 10,
                            "title": "Enemies List",
                            "ids": {
                                "trakt": 10811727,
                                "tvdb": 9856223,
                                "imdb": "tt28288329",
                                "tmdb": 4633267,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 11,
                            "title": "Axe Global",
                            "ids": {
                                "trakt": 10811729,
                                "tvdb": 9856224,
                                "imdb": "tt28288332",
                                "tmdb": 4633268,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 7,
                            "number": 12,
                            "title": "Admirals Fund",
                            "ids": {
                                "trakt": 10811732,
                                "tvdb": 9856225,
                                "imdb": "tt28288333",
                                "tmdb": 4633269,
                                "tvrage": null
                            }
                        }
                    ]
                }
            ]
        },
        "145783": {
            "title": "The Morning Show",
            "year": 2019,
            "id": 145783,
            "slug": "the-morning-show",
            "imdb": "https://www.imdb.com/title/tt7203552/",
            "tagline": "Change is in the air.",
            "overview": "A behind-the-scenes look at the lives of the people who help America wake up in the morning, exploring the unique challenges faced by the men and women who carry out this daily televised ritual.",
            "network": "Apple TV+",
            "country": "us",
            "trailer": "https://youtube.com/watch?v=iJjp5p51Cow",
            "status": "returning series",
            "rating": 7.87238,
            "votes": 3393,
            "language": "en",
            "genres": [
                "drama"
            ],
            "aired_episodes": 22,
            "poster": "https://image.tmdb.org/t/p/w500/dJVlhv56kpZ6aQO6FWgbe0PtY6s.jpg",
            "seasons": [
                {
                    "number": 1,
                    "ids": {
                        "trakt": 197592,
                        "tvdb": 827497,
                        "tmdb": 125819,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 1,
                            "number": 1,
                            "title": "In the Dark Night of the Soul It's Always 3:30 in the Morning",
                            "ids": {
                                "trakt": 3679915,
                                "tvdb": 7372590,
                                "imdb": "tt8054880",
                                "tmdb": 1886106,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 2,
                            "title": "A Seat at the Table",
                            "ids": {
                                "trakt": 3781921,
                                "tvdb": 7422149,
                                "imdb": "tt9205212",
                                "tmdb": 1967584,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 3,
                            "title": "Chaos Is the New Cocaine",
                            "ids": {
                                "trakt": 3781922,
                                "tvdb": 7422150,
                                "imdb": "tt9216618",
                                "tmdb": 1967586,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 4,
                            "title": "That Woman",
                            "ids": {
                                "trakt": 3781923,
                                "tvdb": 7422164,
                                "imdb": "tt9216660",
                                "tmdb": 1972592,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 5,
                            "title": "No One's Gonna Harm You, Not While I'm Around",
                            "ids": {
                                "trakt": 3781924,
                                "tvdb": 7440727,
                                "imdb": "tt9216684",
                                "tmdb": 1978448,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 6,
                            "title": "The Pendulum Swings",
                            "ids": {
                                "trakt": 3781925,
                                "tvdb": 7466680,
                                "imdb": "tt9216688",
                                "tmdb": 1984162,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 7,
                            "title": "Open Waters",
                            "ids": {
                                "trakt": 3781926,
                                "tvdb": 7466682,
                                "imdb": "tt9216706",
                                "tmdb": 1998031,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 8,
                            "title": "Lonely at the Top",
                            "ids": {
                                "trakt": 3781927,
                                "tvdb": 7466683,
                                "imdb": "tt9216718",
                                "tmdb": 2007696,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 9,
                            "title": "Play the Queen",
                            "ids": {
                                "trakt": 3781929,
                                "tvdb": 7466684,
                                "imdb": "tt9216732",
                                "tmdb": 2010245,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 10,
                            "title": "The Interview",
                            "ids": {
                                "trakt": 3781930,
                                "tvdb": 7466685,
                                "imdb": "tt9216752",
                                "tmdb": 2010248,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 2,
                    "ids": {
                        "trakt": 260266,
                        "tvdb": 1877702,
                        "tmdb": 199148,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 2,
                            "number": 1,
                            "title": "My Least Favorite Year",
                            "ids": {
                                "trakt": 5230938,
                                "tvdb": 8489872,
                                "imdb": "tt11191264",
                                "tmdb": 3026033,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 2,
                            "title": "It’s Like the Flu",
                            "ids": {
                                "trakt": 5376231,
                                "tvdb": 8489873,
                                "imdb": "tt12689028",
                                "tmdb": 3101399,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 3,
                            "title": "Laura",
                            "ids": {
                                "trakt": 5376232,
                                "tvdb": 8489874,
                                "imdb": "tt12689034",
                                "tmdb": 3101400,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 4,
                            "title": "Kill the Fatted Calf",
                            "ids": {
                                "trakt": 5376233,
                                "tvdb": 8489875,
                                "imdb": "tt12689042",
                                "tmdb": 3101401,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 5,
                            "title": "Ghosts",
                            "ids": {
                                "trakt": 5376234,
                                "tvdb": 8489876,
                                "imdb": "tt12689048",
                                "tmdb": 3101402,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 6,
                            "title": "A Private Person",
                            "ids": {
                                "trakt": 5376235,
                                "tvdb": 8489877,
                                "imdb": "tt12689056",
                                "tmdb": 3101403,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 7,
                            "title": "La Amara Vita",
                            "ids": {
                                "trakt": 5376236,
                                "tvdb": 8489878,
                                "imdb": "tt12689062",
                                "tmdb": 3101404,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 8,
                            "title": "Confirmations",
                            "ids": {
                                "trakt": 5376237,
                                "tvdb": 8489879,
                                "imdb": "tt12689068",
                                "tmdb": 3101405,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 9,
                            "title": "Testimony",
                            "ids": {
                                "trakt": 5376238,
                                "tvdb": 8489880,
                                "imdb": "tt12689072",
                                "tmdb": 3101406,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 10,
                            "title": "Fever",
                            "ids": {
                                "trakt": 5376239,
                                "tvdb": 8489881,
                                "imdb": "tt12689074",
                                "tmdb": 3101407,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 3,
                    "ids": {
                        "trakt": 327565,
                        "tvdb": 2071322,
                        "tmdb": 346964,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 3,
                            "number": 1,
                            "title": "The Kármán Line",
                            "ids": {
                                "trakt": 10739595,
                                "tvdb": 9874253,
                                "imdb": "tt16161700",
                                "tmdb": 4556110,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 2,
                            "title": "Ghost in the Machine",
                            "ids": {
                                "trakt": 10739596,
                                "tvdb": 9875719,
                                "imdb": "tt26921524",
                                "tmdb": 4556111,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 3,
                            "title": "White Noise",
                            "ids": {
                                "trakt": 10739597,
                                "tvdb": 9875720,
                                "imdb": "tt26921528",
                                "tmdb": 4556112,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 4,
                            "title": "The Green Light",
                            "ids": {
                                "trakt": 10739598,
                                "tvdb": 9875721,
                                "imdb": "tt26921530",
                                "tmdb": 4556113,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 5,
                            "title": "Love Island",
                            "ids": {
                                "trakt": 10739599,
                                "tvdb": 9875722,
                                "imdb": "tt26921531",
                                "tmdb": 4556114,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 6,
                            "title": "The Stanford Student",
                            "ids": {
                                "trakt": 10739600,
                                "tvdb": 9875723,
                                "imdb": "tt26921534",
                                "tmdb": 4556115,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 7,
                            "title": "Strict Scrutiny",
                            "ids": {
                                "trakt": 10739601,
                                "tvdb": 9875724,
                                "imdb": "tt26921538",
                                "tmdb": 4556116,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 8,
                            "title": "DNF",
                            "ids": {
                                "trakt": 10739602,
                                "tvdb": 9875725,
                                "imdb": "tt26921540",
                                "tmdb": 4556117,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 9,
                            "title": "Update Your Priors",
                            "ids": {
                                "trakt": 10739603,
                                "tvdb": 9875726,
                                "imdb": "tt26921541",
                                "tmdb": 4556118,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 3,
                            "number": 10,
                            "title": "The Overview Effect",
                            "ids": {
                                "trakt": 10739604,
                                "tvdb": 9875727,
                                "imdb": "tt26921543",
                                "tmdb": 4556119,
                                "tvrage": null
                            }
                        }
                    ]
                }
            ]
        },
        "150469": {
            "title": "Foundation",
            "year": 2021,
            "id": 150469,
            "slug": "foundation-2021",
            "imdb": "https://www.imdb.com/title/tt0804484/",
            "tagline": "All empires fall.",
            "overview": "Follow a band of exiles on their monumental journey to save humanity and rebuild civilization amid the fall of the Galactic Empire.",
            "network": "Apple TV+",
            "country": "ie",
            "trailer": "https://youtube.com/watch?v=X4QYV5GTz7c",
            "status": "returning series",
            "rating": 7.65871,
            "votes": 3812,
            "language": "en",
            "genres": [
                "science-fiction",
                "drama",
                "fantasy"
            ],
            "aired_episodes": 19,
            "poster": "https://image.tmdb.org/t/p/w500/1AZERr7KEJBpcchQ6vFcbUUC0Zw.jpg",
            "seasons": [
                {
                    "number": 1,
                    "ids": {
                        "trakt": 195099,
                        "tvdb": 818841,
                        "tmdb": 154362,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 1,
                            "number": 1,
                            "title": "The Emperor's Peace",
                            "ids": {
                                "trakt": 3626882,
                                "tvdb": 8287162,
                                "imdb": "tt8887436",
                                "tmdb": 2317130,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 2,
                            "title": "Preparing to Live",
                            "ids": {
                                "trakt": 5272546,
                                "tvdb": 8682932,
                                "imdb": "tt8887438",
                                "tmdb": 3047693,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 3,
                            "title": "The Mathematician’s Ghost",
                            "ids": {
                                "trakt": 5272550,
                                "tvdb": 8682933,
                                "imdb": "tt8887492",
                                "tmdb": 3047694,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 4,
                            "title": "Barbarians at the Gate",
                            "ids": {
                                "trakt": 5272554,
                                "tvdb": 8682934,
                                "imdb": "tt8887528",
                                "tmdb": 3047849,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 5,
                            "title": "Upon Awakening",
                            "ids": {
                                "trakt": 5509634,
                                "tvdb": 8682935,
                                "imdb": "tt8887530",
                                "tmdb": 3226254,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 6,
                            "title": "Death and the Maiden",
                            "ids": {
                                "trakt": 5509635,
                                "tvdb": 8682936,
                                "imdb": "tt8887534",
                                "tmdb": 3226255,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 7,
                            "title": "Mysteries and Martyrs",
                            "ids": {
                                "trakt": 5509636,
                                "tvdb": 8682937,
                                "imdb": "tt8887538",
                                "tmdb": 3226256,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 8,
                            "title": "The Missing Piece",
                            "ids": {
                                "trakt": 5509637,
                                "tvdb": 8682938,
                                "imdb": "tt8887542",
                                "tmdb": 3226257,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 9,
                            "title": "The First Crisis",
                            "ids": {
                                "trakt": 5509638,
                                "tvdb": 8682939,
                                "imdb": "tt8887572",
                                "tmdb": 3226258,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 10,
                            "title": "The Leap",
                            "ids": {
                                "trakt": 5509639,
                                "tvdb": 8682940,
                                "imdb": "tt8887574",
                                "tmdb": 3226259,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 2,
                    "ids": {
                        "trakt": 312735,
                        "tvdb": 1982299,
                        "tmdb": 322843,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 2,
                            "number": 1,
                            "title": "In Seldon's Shadow",
                            "ids": {
                                "trakt": 7832608,
                                "tvdb": 9208201,
                                "imdb": "tt15575028",
                                "tmdb": 4430698,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 2,
                            "title": "A Glimpse of Darkness",
                            "ids": {
                                "trakt": 7832742,
                                "tvdb": 9785488,
                                "imdb": "tt26912717",
                                "tmdb": 4430699,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 3,
                            "title": "King and Commoner",
                            "ids": {
                                "trakt": 7832956,
                                "tvdb": 9785494,
                                "imdb": "tt28150455",
                                "tmdb": 4430700,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 4,
                            "title": "Where the Stars Are Scattered Thinly",
                            "ids": {
                                "trakt": 7833154,
                                "tvdb": 9785495,
                                "imdb": "tt28150457",
                                "tmdb": 4430701,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 5,
                            "title": "The Sighted and the Seen",
                            "ids": {
                                "trakt": 7833343,
                                "tvdb": 9785496,
                                "imdb": "tt28150459",
                                "tmdb": 4430702,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 6,
                            "title": "Why the Gods Made Wine",
                            "ids": {
                                "trakt": 7833494,
                                "tvdb": 9785497,
                                "imdb": "tt28150461",
                                "tmdb": 4430703,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 7,
                            "title": "A Necessary Death",
                            "ids": {
                                "trakt": 7833720,
                                "tvdb": 9785498,
                                "imdb": "tt28150467",
                                "tmdb": 4430704,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 8,
                            "title": "The Last Empress",
                            "ids": {
                                "trakt": 7833885,
                                "tvdb": 9785499,
                                "imdb": "tt28150470",
                                "tmdb": 4430705,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 9,
                            "title": "Long Ago, Not Far Away",
                            "ids": {
                                "trakt": 7834041,
                                "tvdb": 9785500,
                                "imdb": "tt28150472",
                                "tmdb": 4430706,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 10,
                            "title": "Creation Myths",
                            "ids": {
                                "trakt": 7834229,
                                "tvdb": 9785501,
                                "imdb": "tt28150474",
                                "tmdb": 4430710,
                                "tvrage": null
                            }
                        }
                    ]
                }
            ]
        },
        "170559": {
            "title": "Ahsoka",
            "year": 2023,
            "id": 170559,
            "slug": "ahsoka",
            "imdb": "https://www.imdb.com/title/tt13622776/",
            "tagline": "Warrior. Outcast. Rebel. Jedi.",
            "overview": "Former Jedi Knight Ahsoka Tano investigates an emerging threat to a vulnerable galaxy.",
            "network": "Disney+",
            "country": "us",
            "trailer": "https://youtube.com/watch?v=J_1EXWNETiI",
            "status": "returning series",
            "rating": 7.46328,
            "votes": 531,
            "language": "en",
            "genres": [
                "fantasy",
                "science-fiction",
                "action",
                "adventure"
            ],
            "aired_episodes": 5,
            "poster": "https://image.tmdb.org/t/p/w500/laCJxobHoPVaLQTKxc14Y2zV64J.jpg",
            "seasons": [
                {
                    "number": 1,
                    "ids": {
                        "trakt": 236209,
                        "tvdb": null,
                        "tmdb": 171668,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 1,
                            "number": 1,
                            "title": "Part One: Master and Apprentice",
                            "ids": {
                                "trakt": 4636526,
                                "tvdb": 9217784,
                                "imdb": "tt13622790",
                                "tmdb": 2552685,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 2,
                            "title": "Part Two: Toil and Trouble",
                            "ids": {
                                "trakt": 7436889,
                                "tvdb": 9833819,
                                "imdb": "tt27484643",
                                "tmdb": 4502580,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 3,
                            "title": "Part Three: Time to Fly",
                            "ids": {
                                "trakt": 7436890,
                                "tvdb": 9833820,
                                "imdb": "tt27484650",
                                "tmdb": 4502583,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 4,
                            "title": "Part Four: Fallen Jedi",
                            "ids": {
                                "trakt": 7436891,
                                "tvdb": 9833821,
                                "imdb": "tt27484653",
                                "tmdb": 4502586,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 5,
                            "title": "Part Five: Shadow Warrior",
                            "ids": {
                                "trakt": 7436892,
                                "tvdb": 9833822,
                                "imdb": "tt27484657",
                                "tmdb": 4502590,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 6,
                            "title": "Part Six",
                            "ids": {
                                "trakt": 7436893,
                                "tvdb": 9833823,
                                "imdb": "tt27484659",
                                "tmdb": 4502594,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 7,
                            "title": "Part Seven",
                            "ids": {
                                "trakt": 7436894,
                                "tvdb": 9833824,
                                "imdb": "tt27484664",
                                "tmdb": 4502598,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 8,
                            "title": "Part Eight",
                            "ids": {
                                "trakt": 7436895,
                                "tvdb": 9833825,
                                "imdb": "tt27484667",
                                "tmdb": 4502602,
                                "tvrage": null
                            }
                        }
                    ]
                }
            ]
        },
        "181803": {
            "title": "Invasion",
            "year": 2021,
            "id": 181803,
            "slug": "invasion-2021",
            "imdb": "https://www.imdb.com/title/tt9737326/",
            "tagline": "Fight together or fall apart.",
            "overview": "Earth is visited by an alien species that threatens humanity’s existence. Events unfold in real time through the eyes of five ordinary people across the globe as they struggle to make sense of the chaos unraveling around them.",
            "network": "Apple TV+",
            "country": "us",
            "trailer": "https://youtube.com/watch?v=DlaHxL3mHAU",
            "status": "returning series",
            "rating": 6.37741,
            "votes": 1709,
            "language": "en",
            "genres": [
                "drama",
                "fantasy",
                "science-fiction"
            ],
            "aired_episodes": 14,
            "poster": "https://image.tmdb.org/t/p/w500/wWFs3pl9gWHYvDElQVB4CB809m9.jpg",
            "seasons": [
                {
                    "number": 1,
                    "ids": {
                        "trakt": 259641,
                        "tvdb": 1933168,
                        "tmdb": 198668,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 1,
                            "number": 1,
                            "title": "Last Day",
                            "ids": {
                                "trakt": 5214745,
                                "tvdb": 8481419,
                                "imdb": "tt10973974",
                                "tmdb": 3014880,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 2,
                            "title": "Crash",
                            "ids": {
                                "trakt": 5217051,
                                "tvdb": 8481519,
                                "imdb": "tt11895942",
                                "tmdb": 3014923,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 3,
                            "title": "Orion",
                            "ids": {
                                "trakt": 5217052,
                                "tvdb": 8481520,
                                "imdb": "tt11895944",
                                "tmdb": 3014925,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 4,
                            "title": "The King is Dead",
                            "ids": {
                                "trakt": 5217053,
                                "tvdb": 8481521,
                                "imdb": "tt11895948",
                                "tmdb": 3014926,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 5,
                            "title": "Going Home",
                            "ids": {
                                "trakt": 5217054,
                                "tvdb": 8481522,
                                "imdb": "tt11895950",
                                "tmdb": 3017447,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 6,
                            "title": "Home Invasion",
                            "ids": {
                                "trakt": 5217055,
                                "tvdb": 8481523,
                                "imdb": "tt11895952",
                                "tmdb": 3017448,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 7,
                            "title": "Hope",
                            "ids": {
                                "trakt": 5217056,
                                "tvdb": 8481524,
                                "imdb": "tt11895954",
                                "tmdb": 3017449,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 8,
                            "title": "Contact",
                            "ids": {
                                "trakt": 5217057,
                                "tvdb": 8481525,
                                "imdb": "tt11895956",
                                "tmdb": 3017453,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 9,
                            "title": "Full of Stars",
                            "ids": {
                                "trakt": 5217058,
                                "tvdb": 8481526,
                                "imdb": "tt13920782",
                                "tmdb": 3017458,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 10,
                            "title": "First Day",
                            "ids": {
                                "trakt": 5217059,
                                "tvdb": 8481527,
                                "imdb": "tt13920794",
                                "tmdb": 3017462,
                                "tvrage": null
                            }
                        }
                    ]
                },
                {
                    "number": 2,
                    "ids": {
                        "trakt": 327624,
                        "tvdb": null,
                        "tmdb": 347066,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 2,
                            "number": 1,
                            "title": "Something's Changed",
                            "ids": {
                                "trakt": 10740957,
                                "tvdb": 9208207,
                                "imdb": "tt16373998",
                                "tmdb": 4557656,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 2,
                            "title": "Chasing Ghosts",
                            "ids": {
                                "trakt": 10741266,
                                "tvdb": 9872885,
                                "imdb": "tt28591482",
                                "tmdb": 4557658,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 3,
                            "title": "Fireworks",
                            "ids": {
                                "trakt": 10741322,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4557660,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 4,
                            "title": "The Tunnel",
                            "ids": {
                                "trakt": 10741386,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4557661,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 5,
                            "title": "A Voice From the Other Side",
                            "ids": {
                                "trakt": 10741394,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4557662,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 6,
                            "title": "Pressure Points",
                            "ids": {
                                "trakt": 10741395,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4557663,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 7,
                            "title": "Down the Rabbit Hole",
                            "ids": {
                                "trakt": 10741396,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4557664,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 8,
                            "title": "Cosmic Ocean",
                            "ids": {
                                "trakt": 10741397,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4557666,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 9,
                            "title": "Episode 9",
                            "ids": {
                                "trakt": 10741398,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4557667,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 2,
                            "number": 10,
                            "title": "Episode 10",
                            "ids": {
                                "trakt": 10741399,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4557668,
                                "tvrage": null
                            }
                        }
                    ]
                }
            ]
        },
        "184618": {
            "title": "ONE PIECE",
            "year": 2023,
            "id": 184618,
            "slug": "one-piece-2023",
            "imdb": "https://www.imdb.com/title/tt11737520/",
            "tagline": "You're already part of my crew.",
            "overview": "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.",
            "network": "Netflix",
            "country": "us",
            "trailer": "https://youtube.com/watch?v=l6kp780S-os",
            "status": "returning series",
            "rating": 8.2431,
            "votes": 1522,
            "language": "en",
            "genres": [
                "action",
                "adventure",
                "fantasy",
                "science-fiction"
            ],
            "aired_episodes": 8,
            "poster": "https://image.tmdb.org/t/p/w500/osr1tBt0hjghPFDthfSUXv1T2as.jpg",
            "seasons": [
                {
                    "number": 1,
                    "ids": {
                        "trakt": 270360,
                        "tvdb": 1953684,
                        "tmdb": 164867,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 1,
                            "number": 1,
                            "title": "ROMANCE DAWN",
                            "ids": {
                                "trakt": 5437335,
                                "tvdb": 8651297,
                                "imdb": "tt11748904",
                                "tmdb": 2454621,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 2,
                            "title": "THE MAN IN THE STRAW HAT",
                            "ids": {
                                "trakt": 10740325,
                                "tvdb": 9931632,
                                "imdb": "tt11758442",
                                "tmdb": 4557389,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 3,
                            "title": "TELL NO TALES",
                            "ids": {
                                "trakt": 10740326,
                                "tvdb": 9931633,
                                "imdb": "tt11758446",
                                "tmdb": 4557390,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 4,
                            "title": "THE PIRATES ARE COMING",
                            "ids": {
                                "trakt": 10740327,
                                "tvdb": 9931634,
                                "imdb": "tt11758452",
                                "tmdb": 4557391,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 5,
                            "title": "EAT AT BARATIE!",
                            "ids": {
                                "trakt": 10740328,
                                "tvdb": 9931635,
                                "imdb": "tt11758462",
                                "tmdb": 4557392,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 6,
                            "title": "THE CHEF AND THE CHORE BOY",
                            "ids": {
                                "trakt": 10740329,
                                "tvdb": 9931636,
                                "imdb": "tt11758464",
                                "tmdb": 4557393,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 7,
                            "title": "THE GIRL WITH THE SAWFISH TATTOO",
                            "ids": {
                                "trakt": 10740330,
                                "tvdb": 9931637,
                                "imdb": "tt11758476",
                                "tmdb": 4557394,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 8,
                            "title": "WORST IN THE EAST",
                            "ids": {
                                "trakt": 10740331,
                                "tvdb": 9931638,
                                "imdb": "tt11758482",
                                "tmdb": 4557395,
                                "tvrage": null
                            }
                        }
                    ]
                }
            ]
        },
        "193894": {
            "title": "Moving",
            "year": 2023,
            "id": 193894,
            "slug": "moving-2023",
            "imdb": "https://www.imdb.com/title/tt24640580/",
            "tagline": "We can be heroes or monsters.",
            "overview": "Children who live in hiding with superpowers, along with their parents who live with painful secrets of the past, face enormous dangers together",
            "network": "Disney+",
            "country": "kr",
            "trailer": "https://youtube.com/watch?v=UVYw3biOgyE",
            "status": "returning series",
            "rating": 7.39583,
            "votes": 48,
            "language": "ko",
            "genres": [
                "action",
                "adventure",
                "mystery",
                "drama",
                "fantasy",
                "science-fiction"
            ],
            "aired_episodes": 17,
            "poster": "https://image.tmdb.org/t/p/w500/b9MhD5syJ7TbYSeje4wB4oyTzc7.jpg",
            "seasons": [
                {
                    "number": 1,
                    "ids": {
                        "trakt": 289017,
                        "tvdb": null,
                        "tmdb": 197093,
                        "tvrage": null
                    },
                    "episodes": [
                        {
                            "season": 1,
                            "number": 1,
                            "title": "Senior Year",
                            "ids": {
                                "trakt": 6650253,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 3871835,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 2,
                            "title": "Booyang: Family Support, Levitation",
                            "ids": {
                                "trakt": 10733176,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543076,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 3,
                            "title": "1+1",
                            "ids": {
                                "trakt": 10733177,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543077,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 4,
                            "title": "The Secret",
                            "ids": {
                                "trakt": 10733178,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543080,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 5,
                            "title": "Recall",
                            "ids": {
                                "trakt": 10733179,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543082,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 6,
                            "title": "Bungaeman",
                            "ids": {
                                "trakt": 10736548,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543083,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 7,
                            "title": "The Stranger",
                            "ids": {
                                "trakt": 10736552,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543084,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 8,
                            "title": "Black",
                            "ids": {
                                "trakt": 10736555,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543085,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 9,
                            "title": "Humanists",
                            "ids": {
                                "trakt": 10736557,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543086,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 10,
                            "title": "The Monster",
                            "ids": {
                                "trakt": 10736562,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543087,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 11,
                            "title": "Romanticist",
                            "ids": {
                                "trakt": 10736564,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543088,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 12,
                            "title": "Partners",
                            "ids": {
                                "trakt": 10736567,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543090,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 13,
                            "title": "Jang Ju-won",
                            "ids": {
                                "trakt": 10736569,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543092,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 14,
                            "title": "The Idiot",
                            "ids": {
                                "trakt": 10736572,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543093,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 15,
                            "title": "N.T.D.P.",
                            "ids": {
                                "trakt": 10736574,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543094,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 16,
                            "title": "间谍",
                            "ids": {
                                "trakt": 10736576,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543095,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 17,
                            "title": "觉醒",
                            "ids": {
                                "trakt": 10736582,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543096,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 18,
                            "title": "南与北",
                            "ids": {
                                "trakt": 10736587,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543097,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 19,
                            "title": "最终之战",
                            "ids": {
                                "trakt": 10736589,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543098,
                                "tvrage": null
                            }
                        },
                        {
                            "season": 1,
                            "number": 20,
                            "title": "毕业日",
                            "ids": {
                                "trakt": 10736592,
                                "tvdb": null,
                                "imdb": null,
                                "tmdb": 4543099,
                                "tvrage": null
                            }
                        }
                    ]
                }
            ]
        }
    }
    const listeSeries = [
        {
            "title": "Ahsoka",
            "year": 2023,
            "id": 170559,
            "slug": "ahsoka",
            "imdb": "https://www.imdb.com/title/tt13622776/",
            "poster": "https://image.tmdb.org/t/p/w500/laCJxobHoPVaLQTKxc14Y2zV64J.jpg"
        },
        {
            "title": "Invasion",
            "year": 2021,
            "id": 181803,
            "slug": "invasion-2021",
            "imdb": "https://www.imdb.com/title/tt9737326/",
            "poster": "https://image.tmdb.org/t/p/w500/wWFs3pl9gWHYvDElQVB4CB809m9.jpg"
        },
        {
            "title": "ONE PIECE",
            "year": 2023,
            "id": 184618,
            "slug": "one-piece-2023",
            "imdb": "https://www.imdb.com/title/tt11737520/",
            "poster": "https://image.tmdb.org/t/p/w500/osr1tBt0hjghPFDthfSUXv1T2as.jpg"
        },
        {
            "title": "The Morning Show",
            "year": 2019,
            "id": 145783,
            "slug": "the-morning-show",
            "imdb": "https://www.imdb.com/title/tt7203552/",
            "poster": "https://image.tmdb.org/t/p/w500/dJVlhv56kpZ6aQO6FWgbe0PtY6s.jpg"
        },
        {
            "title": "Moving",
            "year": 2023,
            "id": 193894,
            "slug": "moving-2023",
            "imdb": "https://www.imdb.com/title/tt24640580/",
            "poster": "https://image.tmdb.org/t/p/w500/b9MhD5syJ7TbYSeje4wB4oyTzc7.jpg"
        },
        {
            "title": "Foundation",
            "year": 2021,
            "id": 150469,
            "slug": "foundation-2021",
            "imdb": "https://www.imdb.com/title/tt0804484/",
            "poster": "https://image.tmdb.org/t/p/w500/1AZERr7KEJBpcchQ6vFcbUUC0Zw.jpg"
        },
        {
            "title": "Billions",
            "year": 2016,
            "id": 77692,
            "slug": "billions",
            "imdb": "https://www.imdb.com/title/tt4270492/",
            "poster": "https://image.tmdb.org/t/p/w500/edwYPQdZE998d748AdwWLsfy0rl.jpg"
        },
        {
            "title": "The Big Bang Theory",
            "year": 2007,
            "id": 1409,
            "slug": "the-big-bang-theory",
            "imdb": "https://www.imdb.com/title/tt0898266/",
            "poster": "https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg"
        },
        {
            "title": "Game of Thrones",
            "year": 2011,
            "id": 1390,
            "slug": "game-of-thrones",
            "imdb": "https://www.imdb.com/title/tt0944947/",
            "poster": "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg"
        },
        {
            "title": "Futurama",
            "year": 1999,
            "id": 614,
            "slug": "futurama",
            "imdb": "https://www.imdb.com/title/tt0149460/",
            "poster": "https://image.tmdb.org/t/p/w500/7RRHbCUtAsVmKI6FEMzZB6Re88P.jpg"
        }
    ];
    const profils = [
        {
            photo: "https://i.pravatar.cc/300",
            nom: "Patate2000",
            seriesAimees: mesFavoris.length
        }
    ];
    const handleFavoriClick = (e) => {
        if (mesFavoris.includes(e.serie.id)) {
            setFavoris(mesFavoris => mesFavoris.filter((f) => {
                return f !== e.serie.id;
            }));
        }
        else {
            setFavoris(mesFavoris => [...mesFavoris, e.serie.id]);
        }
    }
    return (
        <main>
            {listeSelectionnee !== "" ? <Serie serie={series[listeSelectionnee.toString()]} saisons={series[listeSelectionnee.toString()].seasons} handleFavoriClick={handleFavoriClick} mesFavoris={mesFavoris}></Serie> : ""}
            <div className="listeSeries">
                <ListeSeries listeSeries={listeSeries} selectionnee={listeSelectionnee} setListeSelectionnee={setListeSelectionnee} estFavori={false} mesFavoris={mesFavoris}></ListeSeries>
            </div>
            <Profil profil={profils[0]}></Profil>
            <h1>Séries favorites</h1>
            <div className="listeSeries listeSeriesFavorites">
                <ListeSeries listeSeries={listeSeries} selectionnee={listeSelectionnee} setListeSelectionnee={setListeSelectionnee} estFavori={true} mesFavoris={mesFavoris}></ListeSeries>
            </div>
        </main>
    );
};

export default App;