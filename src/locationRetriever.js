function getLocation(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

async function getPosition() {
  try {
    const position = await getLocation();
    return `${position.coords.latitude}, ${position.coords.longitude}`;
  } catch (error) {
    console.log("Error: " + error.message);
  }
}
export { getPosition };
