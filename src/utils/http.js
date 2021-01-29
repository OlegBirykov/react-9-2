async function request(url, options) {
  const result = {
    data: [],
    error: ''
  };

  try {
    const response = await fetch(url, options);
    console.log(response);
  
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    if (!options) {
      result.data = await response.json();
    }         
  
  } catch (error) {
    result.error = error.message ? error.message : 'No Server Response';
  
  } finally {
    return result;
  }
}

export default request;