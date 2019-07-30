## Cine Search

The main part of the functionality happens in SearchBar, I wanted it to be as modular and reusable as possible. It takes onQuery, which is the action to take on entering text into the input. The app queries the OMDB API, however in theory you could pass it a different function to query any api. The second prop is onClick which in this application fetches the full movie information and renders it. The last prop is placeholder which is the text to display when no text is entered. I wanted SearchBar to be self contained, so I kept the results of the search in component state rather than redux state. The selected movie is however stored in Redux state because it it needed outside of the SearchBar.

For styling I used Material and JSS, which I find to be a very simple solutions that is also quite scalable for many applications.

### How to Run

npm i && npm start
