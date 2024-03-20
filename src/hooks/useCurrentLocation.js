const useCurrentLocation = () => {
  const error = null;
  var pos = null;

  const handleSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("COORDS LON", position.coords.longitude);
    pos = position.coords;
  };

  const handleError = (error) => {
    //error.message;
  };

  console.log("Geolocation is not supported by your browser.");

  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  return { pos, error };
};

export default useCurrentLocation;
