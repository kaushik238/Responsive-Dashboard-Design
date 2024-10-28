Here's a combined README file that integrates the features of both your User Dashboard app built with React and the original structure you provided. This README is tailored for a React-based responsive user dashboard application:

---

# Responsive User Dashboard

A responsive and interactive user dashboard built using **React**, **HTML**, **CSS**, and **JavaScript**. This application fetches user data from a mock API and displays it in a card-based layout. It features real-time search and sort functionality, as well as detailed view modals. The app is optimized for both desktop and mobile views, providing a seamless user experience.

## Features

- **Responsive Design**: Adapts to desktop and mobile screens, displaying cards in a grid layout for larger screens and a single-column list on smaller screens.
- **Fetch User Data**: Retrieves user information from the API at [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- **Search Functionality**: Filter users by name or username in real-time.
- **Sort Options**: Sort users alphabetically by name or username.
- **Interactive User Cards**: Hover effect reveals a "View Details" button on each user card.
- **Modal for Additional Details**: Displays extra user information (address, phone, website) in a modal when "View Details" is clicked.

## Technologies Used

- **React**: A JavaScript library for building user interfaces with reusable components.
- **HTML**: Structure and layout of the web page.
- **CSS**: Styling for responsiveness, aesthetics, and animations.
- **JavaScript**: Functionality for fetching data, filtering, sorting, and managing modal interactions.

## Project Structure

```
├── public/
│   ├── index.html          # Main HTML structure for the dashboard
├── src/
│   ├── components/         # Reusable components (UserCard, Modal, etc.)
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point for the React application
│   ├── styles.css          # Styling for the dashboard (responsive design)
└── README.md               # Project documentation
```

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- Web browser (Chrome, Firefox, Safari, etc.) for viewing the application.

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/responsive-dashboard.git
    cd responsive-dashboard
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm start
    ```

4. Open `http://localhost:3000` in your browser to view the dashboard.

## Usage

- **Search**: Type in the search bar to filter users by name or username.
- **Sort**: Use the dropdown menu to sort users by name or username.
- **View Details**: Hover over a user card and click "View Details" to see additional user information in a modal.

## Code Overview

### HTML (`public/index.html`)

Defines the layout with containers for the header, search, sort options, and user list. Also includes a modal structure for displaying user details.

### CSS (`src/styles.css`)

- **Responsive Design**: Flexbox layout for adaptive screen sizes.
- **Styling**: Colors, backgrounds, shadows, and animations.
- **Modal and Hover Effects**: Smooth animations for user interactions.

### JavaScript (`src/App.js`)

- **Fetch API**: Retrieves user data from JSONPlaceholder.
- **Filter Function**: Searches for users by name or username.
- **Sorting Function**: Sorts users based on selected criteria.
- **Modal Management**: Opens and closes the modal to show user details.

## API Reference

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Provides mock data for development and testing.

## Screenshots

### Desktop View
![image](https://github.com/user-attachments/assets/a79ab5c2-0d17-448e-99cc-036b0d02c3d0)

![image](https://github.com/user-attachments/assets/3f14d70a-0a7f-494d-8c58-a048fa1babbc)

![image](https://github.com/user-attachments/assets/e43f8579-5c6e-4df8-8004-beae468da5cd)


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

### Steps to Contribute

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **JSONPlaceholder** for the mock API.
- **Inspiration** from various UI design references.
