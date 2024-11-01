TravelTrucks Web Application

Project Overview

TravelTrucks is a web application for renting campers. It allows users to browse available vehicles, filter them by various criteria, view detailed information, read and leave reviews, and book campers.

Main Features

Home Page: Includes a banner with a main call to action and a link to the catalog.
Campers Catalog: Allows filtering vehicles by location, body type, and specific features (air conditioning, kitchen, etc.).
Favorites List: Users can add campers to a favorites list, which is preserved even after page refreshes.
Camper Details Page: Displays detailed information about the selected camper, including a gallery, user reviews, and a booking form.
Reviews: Displays user reviews for each camper on its details page.
Booking Form: Allows users to book a camper, with a notification confirming successful booking.
Load More Functionality: A "Load More" button on the catalog page allows users to load additional camper cards based on the selected filters.

Technologies

The project is built using the following technologies and libraries:

React — a library for building user interfaces.
Redux — state management for the application.
React Router — routing within the application.
Vite — a build tool for the project.
Axios — a library for making HTTP requests.
CSS Modules — for component styling.
Vercel — hosting for deploying the web application.

Installation and Setup

Follow these steps to install and run the project locally:

1. Clone the Repository
   bash
   Copy code
   git clone https://github.com/your-username/TravelTrucksApp.git
2. Install Dependencies
   Navigate to the project directory and install the necessary dependencies:

bash
Copy code
cd TravelTrucksApp
npm install 3. Run the Project in Development Mode
To start the application in development mode, use the following command:

bash
Copy code
npm run dev
The application will be available at http://localhost:5173.

4. Build the Project for Production
   To build the project for production, run:

bash
Copy code
npm run build
The built files will be located in the dist folder.

5. Deploy to Vercel
   The project is deployed on Vercel and can be accessed at the following URL:

(https://travel-trucks-app-tan.vercel.app/)

Project Structure

src/components — application components.
src/pages — application pages.
src/redux — Redux slices and selectors for state management.
src/services — functions for making API requests.

Contact

If you have any questions or suggestions, feel free to contact us via email: d7akkord@gmail.com
