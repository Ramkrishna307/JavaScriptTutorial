const arr=[10,30,50,40,400,388];

const result=arr.filter(
    (item)=>item>100
)

console.log(result);



function filterBandsByGenre(bands, genre) {
    // Use the filter method to create a new array with bands that match the specified genre
    const filteredBands = bands.filter(band => band.genre === genre);
    return filteredBands;
  }
  
  // Example usage:
  const bands = [
    {"name": "Band 1", "genre":"Rock"},
    {"name": "Band 2", "genre":"Pop"},
    {"name": "Band 3", "genre":"Rock"}
  ];
  const genreToFilter = "Rock";
  
  const filteredBands = filterBandsByGenre(bands, genreToFilter);
  console.log(filteredBands);


  // There is a point where we jave to write return where not....

  const number =[1,2,3,4,5,6,7]

  const newnumber=number.filter((num)=>{
    return num>4
  })

  const newnum=number.filter((num)=> num>4)