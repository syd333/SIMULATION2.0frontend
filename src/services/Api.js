import Geocode from "react-geocode";
import axios from "axios";
import { unlikeMiss } from "../actions";
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

//put error into params
//dispatch an action + reducer for error
// then can pass through to component to display
const addMiss = (newMiss) => {
  return fetch(`${SIMULATION}/misses/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ miss: newMiss }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("miss not created");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteMiss = (selectedMis) => {
  return fetch(`${SIMULATION}/misses/${selectedMis.id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

const getLike = data => {
  return fetch(`${SIMULATION}/favorites`).then((res) => res.json());
}

const createLike = (data) => {
  return fetch(`${SIMULATION}/favorites`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      favorite: data,
    }),
  }).then((res) => res.json());
};

const unLikeMiss = data => {
  return fetch(`${SIMULATION}/favorites/${data.id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

export const api = {
  auth: {
    login,
    signup,
    getCurrentUser,
  },
  miss: {
    getAllMisses,
    addMiss,
    deleteMiss,
  },
  like: {
    getLike,
    createLike,
    unLikeMiss,
  }
};
