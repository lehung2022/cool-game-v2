import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";

// Load API key from environment variables
const apiKeyParam = `key=${import.meta.env.VITE_API_KEY}`;

export const fetchAsyncGames = createAsyncThunk(
  "games/fetch",
  async (page = 1) => {
    // Use corsProxy if necessary
    const { data } = await axios.get(
      `${corsProxy}${apiURL.gamesURL}?${apiKeyParam}&page=${page}`
    );
    return data;
  }
);

export const fetchAsyncGameDetails = createAsyncThunk(
  "game/details/fetch",
  async (id) => {
    // Use corsProxy if necessary
    const { data } = await axios.get(
      `${corsProxy}${apiURL.gamesURL}/${id}?${apiKeyParam}`
    );
    return data;
  }
);
