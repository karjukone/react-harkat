const fetchData = async (URL, options = {}) => {
    const response = await fetch(URL, options);
    const json = await response.json;
}