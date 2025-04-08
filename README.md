# Ani-Topia 🎌

Ani-Topia is a simple anime discovery web app powered by the [Jikan API](https://jikan.moe/), which fetches data from MyAnimeList. Users can browse popular anime, search by title, and explore details for each anime.

## 🌟 Features

- 🔍 Search anime by name
- 📈 View trending/popular anime
- 📋 See detailed anime info including synopsis, episodes, rating, and more

## 🚀 Tech Stack

- Node.js
- Express.js
- EJS for templating
- Jikan API (MyAnimeList data)
- HTML/CSS/JavaScript (frontend)
- Bootstrap (UI framework)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/23Amol08/Ani-Topia.git
   cd Ani-Topia

2. Install dependencies
npm install

3. Start the development server
node index.js

4. Open in browser Navigate to http://localhost:3000 in your web browser.

📁 Folder Structure

Ani-Topia/
├── public/         # Static assets (CSS, JS)
├── views/          # EJS templates
├── index.js        # Main server file
├── package.json    # Project metadata and dependencies
📌 API Reference
All anime data is fetched using the Jikan REST API.

Example endpoint:

GET https://api.jikan.moe/v4/anime?q={anime_name}
🤝 Contributing
Pull requests are welcome! If you have suggestions or bug fixes, feel free to open an issue or submit a PR.

📄 License
This project is licensed under the MIT License.

Made with ❤️ by @23Amol08


---

