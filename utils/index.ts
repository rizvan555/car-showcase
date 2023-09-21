export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'd85ed4a875mshc32a0b22657c31bp1e4420jsn3af5ff66d9d3',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    { headers: headers }
  );
  const result = response.json();
  return result;
}
