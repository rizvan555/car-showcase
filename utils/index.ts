export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'd85ed4a875mshc32a0b22657c31bp1e4420jsn3af5ff66d9d3',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers: headers }
  );
  const result = response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRentPerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRentPerDay.toFixed(0);
};
