const navigatorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        resolve(location);
      });
    } else {
      reject("Error: Geolocalización no está disponible en tu navegador");
    }
  });
});

export default navigatorPromise;
