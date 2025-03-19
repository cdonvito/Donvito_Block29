import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const puppyBowlApi = createApi({
  // Unique string used in constructing Redux action types, state selectors, and React hook names
  reducerPath: "puppyBowlApi",
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    // The base URL for all requests
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2411-ftb-et-web-pt-cmd",
  }),
  // Define endpoints for our API service
  endpoints: (builder) => ({
    // fetch All Players
    players: builder.query({
      query: () => "/players",
      providesTags: ["Players"],
    }),
    // fetch single player
    playerById: builder.query({
      query: (playerId) => `/players/${playerId}`,
      providesTags: (result, error, playerId) => [
        { type: "Players", id: playerId },
      ],
    }),
    deletePlayer: builder.mutation({
      query: (playerId) => ({
        url: `/players/${playerId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Players'}],
    }),
    createPlayer: builder.mutation({
      query: (playerId) => ({
        url: `/players`,
        method: 'POST',
      }),
      invalidatesTags: [{type: 'Players'}],
    }),
  }),
});

// Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query
export const { usePlayersQuery, usePlayerByIdQuery, useDeletePlayerMutation, useCreatePlayerMutation } = puppyBowlApi;
