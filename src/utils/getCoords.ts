const getCoords = (callback : any) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }: any) => {
        const { latitude, longitude } = coords;
        const position = { latitude, longitude };
        callback(position)
      },
      handleCoordsError,
      {
        enableHighAccuracy: true,
      }
    ); 
}




const handleCoordsError = ({ message } : any)=> {
  console.log(message) 
}





export {getCoords, handleCoordsError}

