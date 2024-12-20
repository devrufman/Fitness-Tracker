Ertugrul Fitness Tracker

Ertugrul Fitness Tracker is a responsive web application designed to help users achieve their fitness goals. It displays popular workout routines fetched from an external API, provides an about page, and a contact form, all styled with Tailwind CSS and animations for a modern look.

Features
1. Multi-Page Navigation:
   - Home: Displays workout data fetched from an API.(Mock Api)
   - About: Provides an overview of the website.
   - Contact Us: Includes a form for user messages.

2. API Integration:
   - Fetches workout data dynamically from the ("http://localhost:5000/workouts") .

3. Responsive Design:
   - Fully functional on mobile, tablet, and desktop devices.

4. Styling and Animations:
   - Beautifully styled with Tailwind CSS.
   - animations for an engaging user experience.


 Technologies Used
- Frontend Framework: React.js
- Routing: React Router
- HTTP Requests: Axios
- Styling:Tailwind CSS
- Vite
- Google: when finding it difficult to fetch from an external Api

5. Additional Notes:
- I added a db.json file in my root folder
- addition of vercel.json file in order to avoid any issue while reloading
- Some changes in the vite.config.js


Instructions for setting up and running the project locally.
To run the project locally, follow these steps:

1. Clone the repository to your local machine:
git clone <repository-url>

2. Navigate into the project directory:
cd <project-folder>

3. Install all dependencies:
npm install

4. Start the development server:
npm run dev

5. Open your browser and go to to the local host provided.

6. Deploy the project to a hosting platform like vercel using the generated dist folder.