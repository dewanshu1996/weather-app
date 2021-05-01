import React from 'react';

const weatherData = React.createContext({
    weatherData: {},
    changeWeatherData: (data) => {}
});

export default weatherData; 