import React, { useState } from 'react';
import axios from 'axios';
import  Results from './Results'


// const SearchBar = () => {
//     const [value, setValue] = useState('');
  
//     const handleChange = async event => {
//         setValue(event.target.value)
//         const { data: { Search: results } } = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=c471e040&s=${value}`);

//     };
  
//     return (
//       <div>
//           <input type="text" value={value} onChange={handleChange} />
//       </div>
//     );
//   };

// export default SearchBar;

class SearchBar extends React.Component {
    state = { value: '', results: [] }
    // const [value, setValue] = useState('');
  
    handleChange = async event => {
        this.setState({value: event.target.value});
        const { data: { Search: results } } = await axios.get(`http://www.omdbapi.com/?apikey=c471e040&s=${this.state.value}`);
        
        if(results) {
            this.setState({ results });
        }
    };
    
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <Results results={this.state.results} />
            </div>
          );
    }

  };

export default SearchBar;

