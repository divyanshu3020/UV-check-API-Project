# UV Check API Project

## Overview

This project is a Node.js web application that provides UV index and sun exposure safety suggestions based on user-supplied geographic coordinates (latitude and longitude). It uses the [OpenUV API](https://www.openuv.io/) to fetch real-time UV data and gives recommendations on how long it is safe to stay outside, tailored for Indian users.

## Features

- **User Input:** Users enter their longitude and latitude via a web form.
- **UV Data Fetching:** The backend fetches the current UV index for the provided location using the OpenUV API.
- **Safety Suggestions:** Based on the UV index, the app suggests how long it is safe to stay outside.
- **Simple UI:** The frontend is rendered using EJS templates and styled with CSS, including a background image.
- **API Key Security:** Uses environment variables to keep the OpenUV API key secure.

## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** EJS (Embedded JavaScript templates), HTML, CSS
- **Other Libraries:** body-parser, dotenv
- **API:** OpenUV API

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd UV-check-API-Project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add your OpenUV API key:
     ```
     API_KEY=your_openuv_api_key_here
     ```

4. **Run the application:**
   ```bash
   node index.js
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- Open the app in your browser.
- Enter your longitude and latitude.
- Submit the form to get the current UV index and a safety suggestion for sun exposure.

## File Structure

- `index.js` - Main server file (Express app, routes, API logic)
- `views/index.ejs` - Main HTML template for the UI
- `public/images/bg2.jpg` - Background image for the UI
- `.env` - (Not committed) Store your API key here

## Notes

- The `.env` file is ignored by git for security.
- Make sure you have a valid OpenUV API key. You can get one from [OpenUV](https://www.openuv.io/).
- The app is tailored for Indian users but can be adapted for other regions.
