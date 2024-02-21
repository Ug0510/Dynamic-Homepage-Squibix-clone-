const fetchData = async () => {
    try {

      const response = await fetch('/data.json');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse the JSON response
      const jsonData = await response.json();
      // Store the fetched data in localStorage
      localStorage.setItem('data', JSON.stringify(jsonData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export default fetchData;