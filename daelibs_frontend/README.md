# Assessment Frontend Component

This repository contains a frontend component developed as part of an assessment. The component is a table that displays data with appropriate headers and cells. The data is rendered based on the provided API response and follows the styling guidelines from the Figma design.

## Table Component

The table component is implemented using React and utilizes the `react-table` library for managing table-related functionalities. The component consists of the following files:

### table.css

This file contains the CSS styling for the table component. It defines various styles for the table, including colors, fonts, header styles, and cell styles. The component also handles the background color of the "Actual Score" cells based on the provided data.

### Table.jsx

The `Table.jsx` file is the main component file that renders the table. It imports the necessary data and column configurations from `DATA.json` and `columns.js`, respectively. The component utilizes the `useTable` hook from the `react-table` library to manage the table instance and data.

### DATA.json

This file contains the API response data in JSON format. The data includes information about individuals, such as their names, target scores, actual scores, and points.

### columns.js

The `columns.js` file defines the column configurations for the table. It specifies the headers and accessors for each column and provides a custom `ActualScoreCell` component to render the "Actual Score" cells. The background color of the "Actual Score" cells is determined based on the provided data.

## Additional Notes

- The table displays the data with appropriate headers and cells, and it highlights the "Actual Score" cells with a red background for the first two rows and a green background for the remaining rows. I made this decision because there is no indication of what can make the "Actual Score" red or green. In a working environment, I will ask for clarification, and the logic for handling the background color will be managed in the `ActualScoreCell` component within the `columns.js` file.

Please feel free to reach out if you have any questions or need further information about the repository or the assessment.
