import Geocode from "react-geocode";
const SIMULATION = `http://localhost:3000`;


const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

//login
const login = (data) => {
  return fetch(`${SIMULATION}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

//signup
const signup = (data) => {
  return fetch(`${SIMULATION}/signup`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      user: data,
    }),
    //   user: data
  }).then((res) => res.json());
};

//ensures user login across the site
const getCurrentUser = () => {
  return fetch(`${SIMULATION}/getuser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  }).then((res) => res.json());
};

const getAllMisses = () => {
  return fetch(`${SIMULATION}/misses`).then((res) => res.json());
};

const addMiss = (newMiss) => {
  return fetch(`${SIMULATION}/misses/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newMiss),
  }).then((res) => res.json());
};

const getCoords = () => {
  // Geocode.setLanguage("en");
  // Geocode.setLocationType("ROOFTOP");
  // Geocode.enableDebug();
  // Geocode.fromLatLng().then((response) => {
  //   const address = response.results[0].formatted_address;
  //   console.log(address);
  // });
};

export const api = {
  auth: {
    login,
    signup,
    getCurrentUser,
  },
  miss: {
    getAllMisses,
    addMiss,
  },
  coords: {
    getCoords,
  },
};
