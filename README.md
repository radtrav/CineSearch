## Cine Search

The main part of the functionality happens in SearchBar, I wanted it to be as modular and reusable as possible. It takes onQuery, which is the action to take on entering text into the input. The app queries the OMDB API, however in theory you could pass it a different function to query any api. The second prop is onClick which in this application fetches the full movie information and renders it. The last prop is placeholder which is the text to display when no text is entered. I wanted SearchBar to be self contained, so I kept the results of the search in component state rather than redux state. The selected  full movie information is however stored in Redux state because it it needed outside of the SearchBar. Side effects are handled with redux-saga. Redux saga (and even redux) may be overkill for such a simple app, but I wanted to set it up so that this app could be extended further in the future. 

For styling I used Material and JSS, which I find to be a very simple solutions that is also quite scalable for many applications.

### How to Run

npm i && npm start

go to http://localhost:3000/ in your browser

Click input and seach a title for example Harry Potter. Click the title to see movie information.
