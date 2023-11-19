import axios from 'axios';
import { useEffect } from 'react';

function App() {
  // Test for apply sql to node
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:5173/api/users',
      responseType: 'json',
    })
      .then((data) => console.log(data.data))
      .catch((err) => console.error(err));
  }, []);

  return <div>BetZillion</div>;
}

export default App;
