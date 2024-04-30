# Sample Web App

This is a simple web application that allows users to manage users and posts. It utilizes a RESTful API built with Node.js and PostgreSQL on the backend and jQuery for handling frontend interactions.

## Installation

Before running the application, make sure you have Node.js and npm installed on your system, Also, Ensure that you have PostgREST installed and configured with your PostgreSQL database.

1. Clone this repository to your local machine:

    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```
    cd <project-directory>
    ```

3. Install the dependencies using npm:

    ```
    npm install
    ```

## Usage

To start the application, run the following command:

```
node app.js
```

This will start the server, and you can access the web application by opening your browser and navigating to `http://localhost:3003`.

## Features

- **Users Management**: Add, edit, and delete users.
- **Posts Management**: Add, edit, and delete posts.
- **Validation**: Input fields are validated to ensure proper data entry.
- **Responsive Design**: The application is responsive and can be accessed on various devices.

## Technologies Used

- **Frontend**: HTML, CSS, Bootstrap, jQuery
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **API**: RESTful API built with Express.js
