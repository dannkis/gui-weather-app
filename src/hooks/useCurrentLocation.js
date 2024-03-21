import { useState, useEffect } from 'react';

// Defines a custom hook to fetch and return the user's current location.
const useCurrentLocation = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    // Updates location state on successful geolocation fetch.
    const handleSuccess = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
    };

    // Updates error state if geolocation fetch fails.
    const handleError = (error) => {
        setError(error.message);
    };

    // Fetches geolocation on mount.
    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser.');
            return;
        }

        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

    console.log(location); // For debugging.

    return { location, error };
};

export default useCurrentLocation;
