# BruinByte

![logo](./logo.png)

### Contributors
Brian Roysar, Charles Zhang, Danny Choi, Kia Afzali and Victoria Delk

### About
BruinByte is a platform tailored for UCLA students to explore dining options around the Westwood area where users can leave and read reviews written by other students alike!

## Installation and Running BruinByte
### Running the app locally
The app depends on packages defined in our package.json file, so run the following command in the project root directory to install the required packages and their dependencies
```
npm install
```

Then, perform the following command and open http://localhost:3000 to view BruinByte in the browser
```
npm start
```

### Accessing hosted app 
BruinByte is also accessible without building the app locally. 

Link: https://bruinbyte.netlify.app/

## Project Structure
```
.
├── Documentation
│   └── assets
│       ├── img
│       │   └── faces
│       └── js
├── public
│   ├── css
│   │   └── nivo-lightbox
│   ├── fonts
│   │   ├── font-awesome
│   │   │   ├── fonts
│   │   │   ├── less
│   │   │   └── scss
│   │   └── fonts
│   ├── img
│   │   ├── portfolio
│   │   ├── team
│   │   └── testimonials
│   └── js
└── src
    ├── assets
    │   ├── css
    │   ├── img
    │   │   ├── faces
    │   │   ├── maps
    │   │   └── restaurants
    │   ├── jss
    │   │   └── material-kit-react
    │   │       ├── components
    │   │       └── views
    │   │           └── landingPageSections
    │   └── scss
    │       ├── core
    │       │   ├── mixins
    │       │   └── variables
    │       └── plugins
    ├── auth
    ├── components
    │   ├── AuthenticationButton
    │   ├── Card
    │   ├── CustomButtons
    │   ├── Grid
    │   ├── Ratings
    │   ├── RestaurantCard
    │   ├── Restaurants
    │   ├── Submission
    │   ├── TopBar
    │   ├── Typography
    │   └── UserForm
    ├── data
    ├── database
    └── views
        ├── LandingPage
        │   └── Sections
        ├── ProfilePage
        │   └── Sections
        └── SearchPage
```

TODO:
- Fix new user signins, possibly need a createAccount function in Firebase (currently, new users who try to access their profile will crash)
- Fix establishment names showing up on profile page (src/views/ProfilePage/Sections/ReviewSection.js)
- Get userExists implementation functional (src/components/UserForm/UserForm.js)
- Write reports
