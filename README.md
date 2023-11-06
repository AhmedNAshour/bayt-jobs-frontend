# Bayt Jobs Frontend

This Vite React application displays job titles from the Bayt client RSS feed in a table and showcases job locations on Google Maps with markers.

The frontend is deployed and accessible at [https://ahmednashour.github.io/bayt-jobs-frontend/](https://ahmednashour.github.io/bayt-jobs-frontend/).

## Technologies Used

- React
- Vite
- Google Maps JavaScript API

## Environment Variables

This project also relies on environment variables for configuration. To set up these variables, create a file called `.env` in the root directory of this project and add the following variables, as specified in the email:

```env
# Example .env file
VITE_GOOGLE_MAPS_API_KEY=<<key from the email>>
```

1-Clone the repository:

```bash
git clone <repository-url>
cd bayt-jobs-frontend
```
2-Install dependencies:

```bash
npm install
```
3- Start the development server:

```bash
npm run dev
```

Backend API
The frontend consumes data from the backend API, which is available at https://bayt-service.onrender.com.

Demo Video
https://www.loom.com/share/d61da9c8f682413a9d909563dd21989c?sid=ab35f382-dffb-4808-9203-6c7ab06a1479
