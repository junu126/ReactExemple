import React, { Component } from 'react';
import weathertemplate from './component/weathertemplate';
import weathertitle from './component/weathertitle';
import weatherupdown from './component/weatherupdown';
import weatherlist from './component/weatherlist';

class App extends Component {



  render() {
    return (
        <weathertemplate  title = {(
          <weathertitle
            
          />
        )}

        list = {(
          <weatherlist
          
          />
        )}

        updown = {(
          <weatherupdown
          
          />
        )}
      />
    );
  }
}

export default App;
