export default function handler(req, res) {
    res.status(200).json({
        photos: [
            {
                title: "Misty Morning Hunt",
                caption: "Caught my breakfast before sunrise 🦊☁️",
                date: "2025-10-01",
                thumbnail: "https://randomfox.ca/images/1.jpg",
                full: "https://randomfox.ca/images/1.jpg",
                author: {
                    name: "Fennec_Flare",
                    image: "https://randomfox.ca/images/2.jpg",
                    channel: "Desert Dwellers"
                }
            },
            {
                title: "Snow Patrol",
                caption: "Just another chilly walk ❄️ #FoxLife",
                date: "2025-10-02",
                thumbnail: "https://randomfox.ca/images/3.jpg",
                full: "https://randomfox.ca/images/3.jpg",
                author: {
                    name: "ArcticTail",
                    image: "https://randomfox.ca/images/4.jpg",
                    channel: "Frozen Paws"
                }
            },
            {
                title: "Urban Explorer",
                caption: "City lights, same instincts 🏙️🦊",
                date: "2025-10-03",
                thumbnail: "https://randomfox.ca/images/5.jpg",
                full: "https://randomfox.ca/images/5.jpg",
                author: {
                    name: "MetroMutt",
                    image: "https://randomfox.ca/images/6.jpg",
                    channel: "Fox of the Block"
                }
            },
            {
                title: "Den Decor",
                caption: "Renovated my den today. Cozy vibes only 🏡✨",
                date: "2025-10-04",
                thumbnail: "https://randomfox.ca/images/7.jpg",
                full: "https://randomfox.ca/images/7.jpg",
                author: {
                    name: "CozyKitsune",
                    image: "https://randomfox.ca/images/8.jpg",
                    channel: "FoxHaus"
                }
            },
            {
                title: "Pond Reflections",
                caption: "Thinking about my next nap spot 💧😴",
                date: "2025-10-05",
                thumbnail: "https://randomfox.ca/images/9.jpg",
                full: "https://randomfox.ca/images/9.jpg",
                author: {
                    name: "LazyLynx",
                    image: "https://randomfox.ca/images/10.jpg",
                    channel: "Quiet Corners"
                }
            },
            {
                title: "Golden Hour",
                caption: "No filter needed when you’re this fabulous 🌅🦊",
                date: "2025-10-06",
                thumbnail: "https://randomfox.ca/images/11.jpg",
                full: "https://randomfox.ca/images/11.jpg",
                author: {
                    name: "SunsetSnout",
                    image: "https://randomfox.ca/images/12.jpg",
                    channel: "Light Chasers"
                }
            },
            {
                title: "Rainy Day Fox",
                caption: "Raindrops on fur, mud on paws ☔ #cozyden",
                date: "2025-10-07",
                thumbnail: "https://randomfox.ca/images/13.jpg",
                full: "https://randomfox.ca/images/13.jpg",
                author: {
                    name: "DampWhiskers",
                    image: "https://randomfox.ca/images/14.jpg",
                    channel: "Weather Watchers"
                }
            },
            {
                title: "Field Frolics",
                caption: "Running like nobody’s watching 🌾💨",
                date: "2025-10-08",
                thumbnail: "https://randomfox.ca/images/15.jpg",
                full: "https://randomfox.ca/images/15.jpg",
                author: {
                    name: "ZoomTail",
                    image: "https://randomfox.ca/images/16.jpg",
                    channel: "Fleet Feet"
                }
            },
            {
                title: "Nap Squad",
                caption: "If you’re reading this, I’m already asleep 😴🦊",
                date: "2025-10-09",
                thumbnail: "https://randomfox.ca/images/17.jpg",
                full: "https://randomfox.ca/images/17.jpg",
                author: {
                    name: "SleepyVixen",
                    image: "https://randomfox.ca/images/18.jpg",
                    channel: "Dream Dens"
                }
            },
            {
                title: "Forest Glam",
                caption: "The forest asked for a model. I answered 🍂📸",
                date: "2025-10-10",
                thumbnail: "https://randomfox.ca/images/19.jpg",
                full: "https://randomfox.ca/images/19.jpg",
                author: {
                    name: "GlamFox",
                    image: "https://randomfox.ca/images/20.jpg",
                    channel: "Wild Vogue"
                }
            },
            {
                title: "Paws and Effect",
                caption: "Don’t mind the prints in your garden 🐾😏",
                date: "2025-10-11",
                thumbnail: "https://randomfox.ca/images/21.jpg",
                full: "https://randomfox.ca/images/21.jpg",
                author: {
                    name: "SneakPrint",
                    image: "https://randomfox.ca/images/22.jpg",
                    channel: "Trail Tails"
                }
            },
            {
                title: "Snowball Fight!",
                caption: "Loser buys dinner 🧊🦴",
                date: "2025-10-12",
                thumbnail: "https://randomfox.ca/images/23.jpg",
                full: "https://randomfox.ca/images/23.jpg",
                author: {
                    name: "FrostyFloof",
                    image: "https://randomfox.ca/images/24.jpg",
                    channel: "Cold Crew"
                }
            },
            {
                title: "Leaf Dive",
                caption: "Autumn’s playground 🍁🦊",
                date: "2025-10-13",
                thumbnail: "https://randomfox.ca/images/25.jpg",
                full: "https://randomfox.ca/images/25.jpg",
                author: {
                    name: "CrispTail",
                    image: "https://randomfox.ca/images/26.jpg",
                    channel: "Seasonal Snouts"
                }
            },
            {
                title: "Fox Yoga",
                caption: "Downward Fox achieved 🧘‍♂️",
                date: "2025-10-14",
                thumbnail: "https://randomfox.ca/images/27.jpg",
                full: "https://randomfox.ca/images/27.jpg",
                author: {
                    name: "ZenTail",
                    image: "https://randomfox.ca/images/28.jpg",
                    channel: "Flexible Floofs"
                }
            },
            {
                title: "High Alert",
                caption: "Heard a twig snap… might’ve been the paparazzi 📷",
                date: "2025-10-15",
                thumbnail: "https://randomfox.ca/images/29.jpg",
                full: "https://randomfox.ca/images/29.jpg",
                author: {
                    name: "SneakySnout",
                    image: "https://randomfox.ca/images/30.jpg",
                    channel: "Stealth Mode"
                }
            },
            {
                title: "Full Moon Energy",
                caption: "When the moon hits right 🌕🦊",
                date: "2025-10-16",
                thumbnail: "https://randomfox.ca/images/31.jpg",
                full: "https://randomfox.ca/images/31.jpg",
                author: {
                    name: "LunaLynx",
                    image: "https://randomfox.ca/images/32.jpg",
                    channel: "Howlers United"
                }
            },
            {
                title: "Mud Bath Monday",
                caption: "Skincare, but natural 💅🌧️",
                date: "2025-10-17",
                thumbnail: "https://randomfox.ca/images/33.jpg",
                full: "https://randomfox.ca/images/33.jpg",
                author: {
                    name: "MudMask",
                    image: "https://randomfox.ca/images/34.jpg",
                    channel: "Self Care Den"
                }
            },
            {
                title: "Foxes of the Night",
                caption: "Out here glowing in the dark 🌙✨",
                date: "2025-10-18",
                thumbnail: "https://randomfox.ca/images/35.jpg",
                full: "https://randomfox.ca/images/35.jpg",
                author: {
                    name: "NocturneNose",
                    image: "https://randomfox.ca/images/36.jpg",
                    channel: "Night Watchers"
                }
            },
            {
                title: "Stick Collector",
                caption: "You can never have too many sticks 🪵❤️",
                date: "2025-10-19",
                thumbnail: "https://randomfox.ca/images/37.jpg",
                full: "https://randomfox.ca/images/37.jpg",
                author: {
                    name: "TwigHunter",
                    image: "https://randomfox.ca/images/38.jpg",
                    channel: "Forest Finds"
                }
            },
            {
                title: "The Thinker",
                caption: "Pondering life’s great mysteries… and squirrels 🤔",
                date: "2025-10-20",
                thumbnail: "https://randomfox.ca/images/39.jpg",
                full: "https://randomfox.ca/images/39.jpg",
                author: {
                    name: "DeepFox",
                    image: "https://randomfox.ca/images/40.jpg",
                    channel: "Philosofur"
                }
            },
            {
                title: "Fox in Motion",
                caption: "Speed of light, grace of fox ✨💨",
                date: "2025-10-21",
                thumbnail: "https://randomfox.ca/images/41.jpg",
                full: "https://randomfox.ca/images/41.jpg",
                author: {
                    name: "SwiftSnout",
                    image: "https://randomfox.ca/images/42.jpg",
                    channel: "Trail Sprinters"
                }
            },
            {
                title: "Cozy Hideout",
                caption: "Don’t bother knocking, I’m nesting 🪺",
                date: "2025-10-22",
                thumbnail: "https://randomfox.ca/images/43.jpg",
                full: "https://randomfox.ca/images/43.jpg",
                author: {
                    name: "SnugTail",
                    image: "https://randomfox.ca/images/44.jpg",
                    channel: "Hearth Foxes"
                }
            },
            {
                title: "Blazing Trails",
                caption: "Every pawprint tells a story 🔥",
                date: "2025-10-23",
                thumbnail: "https://randomfox.ca/images/45.jpg",
                full: "https://randomfox.ca/images/45.jpg",
                author: {
                    name: "BlazeWhisker",
                    image: "https://randomfox.ca/images/46.jpg",
                    channel: "Pathfinders"
                }
            },
            {
                title: "Fox Family Portrait",
                caption: "Squad goals 🦊❤️🦊",
                date: "2025-10-24",
                thumbnail: "https://randomfox.ca/images/47.jpg",
                full: "https://randomfox.ca/images/47.jpg",
                author: {
                    name: "MamaFox",
                    image: "https://randomfox.ca/images/48.jpg",
                    channel: "Den Dynasty"
                }
            },
            {
                title: "River Dip",
                caption: "Refreshing splash before sunset 🌊🦊",
                date: "2025-10-25",
                thumbnail: "https://randomfox.ca/images/49.jpg",
                full: "https://randomfox.ca/images/49.jpg",
                author: {
                    name: "AquaTail",
                    image: "https://randomfox.ca/images/50.jpg",
                    channel: "Stream Striders"
                }
            }
        ]
    });
}
