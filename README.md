
# Travel Journal

## Description
Travel Journal is a React-based web application designed to document and share your travel experiences. The app allows users to view information about various travel destinations, including descriptions, dates, and locations, with links to view the locations on Google Maps.

## Features
- **Responsive Design**: Ensures the application looks great on all devices.
- **Dynamic Content**: Data-driven approach to render travel destination cards.
- **Google Maps Integration**: Links to view each destination on Google Maps.
- **Flexbox Layout**: Utilizes Flexbox for a clean and adaptable layout.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **CSS**: Custom styles to enhance the visual appeal.
- **JavaScript**: Provides interactivity and dynamic content rendering.

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/travel-journal.git
   cd travel-journal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open the app in your browser**:
   Navigate to `http://localhost:3000` to see the app in action.

## Project Structure
```
travel-journal/
├── public/
│   ├── images/
│   │   ├── Fill 219.png
│   │   ├── geirangerfjord.png
│   │   ├── logo.png
│   │   ├── mount_fuji.png
│   │   └── sydney_opera_house.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Card.js
│   │   ├── Header.js
│   │   └── Page.js
│   ├── style/
│   │   ├── App.css
│   │   ├── Card.css
│   │   ├── Header.css
│   │   └── Page.css
│   ├── util/
│   │   └── data.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Screenshots
![Travel Journal Screenshot](public/images/screenshot.png)

## Future Enhancements
- **User Authentication**: Allow users to create accounts and save their travel journals.
- **Interactive Map**: Integrate an interactive map to showcase travel destinations.
- **Social Sharing**: Enable users to share their travel experiences on social media.

## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.

## Website
Visit the live project at [https://travel-jouranl-445.netlify.app](https://travel-jouranl-445.netlify.app).
