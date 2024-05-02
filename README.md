#Flutter Authentication and Validation Application
Overview
This Flutter application serves as a basic authentication and validation system, integrating a frontend built with Flutter and a backend developed with Node.js, Express.js, and MongoDB. The main functionalities include user registration, login, and authentication.

#Features
User Registration: Allows users to create an account by providing necessary details such as email and password.
Upon registration, the user's information is stored securely in the MongoDB database.
User Authentication: Utilizes JSON Web Tokens (JWT) for secure authentication.
When users log in with their credentials, a JWT token is generated and used for subsequent authentication.
Email Existence Check: Provides functionality to check if an email already exists in the database during registration. 
If the email is already registered, appropriate feedback is provided to the user.
Installation
