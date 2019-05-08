import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  "01d": {
    colors: ["#FEF253", "#FF7300"],
    title: "Clear Sky",
    icon: "weather-sunny"
  },
  "01n": {
    colors: ["#D7D2CC", "#304352"],
    title: "Clear Sky",
    icon: "weather-night"
  },
  "02d": {
    colors: ["#D7D2CC", "#304352"],
    title: "Few Clouds",
    icon: "weather-partlycloudy"
  },
  "02n": {
    colors: ["#D7D2CC", "#304352"],
    title: "Few Clouds",
    icon: "weather-cloudy"
  },
  "03d": {
    colors: ["#00C6FB", "#005BEA"],
    title: "Scattered Clouds",
    icon: "weather-cloudy"
  },
  "04d": {
    colors: ["#00C6FB", "#005BEA"],
    title: "Broken Clouds",
    icon: "weather-cloudy"
  },
  "09d": {
    colors: ["#00ECBC", "#007ADF"],
    title: "Shower Rain",
    icon: "weather-pouring"
  },
  "10d": {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Rain",
    icon: "weather-rainy"
  },
  "10n": {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Rain",
    icon: "weather-rainy"
  },
  "11d": {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Thunderstorm",
    icon: "weather-lightning"
  },
  "13d": {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Snow",
    icon: "weather-snowy"
  },
  "50d": {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Mist",
    icon: "weather-fog"
  }
};

aqiStatus = (aqi) => {
    if(aqi > 300){
      return "Very Unhealthy"
    }
    else if(aqi > 200){
      return "Unhealthy"
    }
    else if(aqi > 100){
      return "Normal"
    }
    else if(aqi > 50){
      return "Good"
    }
    else if(aqi > 25){
      return "Very Good"
    }
 }



function Weather({ weatherName, temperature, cityName, aqi }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>


        <Text style={styles.cityName}>{cityName}</Text>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.temperature}>us aqi: {aqi}</Text>
        <Text style={styles.temperature}>status: {this.aqiStatus(aqi)}</Text>
        <Text style={styles.temperature}>temp: {temperature}℃</Text>
        </View>

      <View style={styles.lower}>
        {/* <Text style={styles.title}>{weatherCases[weatherName].title}</Text> */}
      </View>

    </LinearGradient>
  );
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  },
  cityName: {
    fontSize: 40,
    color: "white",
    marginBottom: 10
  },
  temperature: {
    fontSize: 35,
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 35,
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 25,
    color: "white",
    marginBottom: 50
  }
});

export default Weather;
