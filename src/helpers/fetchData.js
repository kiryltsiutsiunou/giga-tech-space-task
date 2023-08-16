export const fetchData = async (id) => {
  try {
    const response = await fetch(`http://rekrutacjaweb.gigatechspace.net/letters/${id}`);
    const data = await response.json();

    if(data?.letter) {
      return data.letter;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};