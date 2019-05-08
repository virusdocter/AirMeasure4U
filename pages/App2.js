import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator
} from "react-native";
import Weather from "./Weather";

const API_KEY = "A8FvMXBtsmQ82NmQG";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weatherName: null,
    cityName: null,
    aqi: null

  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, lon) => {
    fetch(
      `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        console.log("---");
        console.log(json.data.city);
        console.log(json.data.current.weather.tp);
        console.log(json.data.current.weather.ic.substring(0, 3));
        console.log(json.data.current.pollution.aqius);
        this.setState({
          cityName: json.data.city,
          temperature: json.data.current.weather.tp,
          weatherName: json.data.current.weather.ic.substring(0, 3),
          aqi: json.data.current.pollution.aqius,
          isLoaded: true
        });
      });
  };



  render() {
    const {
      isLoaded,
      error,
      temperature,
      weatherName,
      cityName,
      aqi
      } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather
            weatherName={weatherName}
            temperature={temperature}
            cityName={cityName}
            aqi={aqi}

          />
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size={1} color="black" />
            <Text style={styles.loadingText}>Getting the AirMeasure</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  errorText: {
    color: "red",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  loadingText: {
    fontSize: 30,
    marginTop: 40
  }
});
