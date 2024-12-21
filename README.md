# DonorManagementApp

## Features Implemented

### General Features

- **Header with Branding**:

  - A header includes the app's logo, a title ("Donor Management"), and a heart icon for visual appeal.
  - Navigation bar with options: "Home," "Donors," and "About".
  - Active state styling for navigation links to identify the current section.

- **Routing**:

  - Smooth transitions between "Home," "Donors," and "About" sections using React Router.
  - Responsive design for all sections.

### Home Section

- Displays a welcome message and a brief overview of the application’s purpose.
- Includes a visually appealing banner or illustration.

### Donors Section

#### Donor Management Form:

- Fields:
  - **Donor Name** (text input).
  - **State** (dropdown with all U.S. states, including an "All States" option styled with a light gray border and rounded corners).
  - **Donation Amount** (number input with currency validation).
- Buttons:
  - **Add Donation**: Adds the donor's information.
  - **Clear Form**: Clears all form fields.
- Tooltips for each field to guide the user.

#### Donor List Table:

- Columns:
  - **Name**.
  - **State**.
  - **Donation Amount**.
  - **Action.**
- Features:
  - Sorting functionality for all columns.
  - Pagination for long donor lists.
  - Row highlighting on hover.
  - "Edit" and "Delete" actions for each donor.

#### Search/Filter Feature:

- Dropdown filter by state.
- Search bar for filtering donors by name.
- Real-time updates to the table as filters are applied.

#### Summary Section:

- Metrics displayed in cards:
  - Total Donations (\$).
  - Average Donation (\$).
  - Total Donors.
- Icons for better clarity (e.g., dollar sign for donations, person for donors).

### About Section

- A static page with:
  - Application purpose and features.
  - Information about the team or individual who created it.
  - Text, images, or icons for engagement.

### Styling and Accessibility

- Modern styling using Material-UI or Tailwind CSS.
- Light color palette with pastel accents.
- Soft animations for buttons (e.g., hover effects).
- Dark mode toggle for better accessibility.
- Fully keyboard-navigable and screen reader-friendly labels.

### Notifications

- Visually appealing toast notifications for successful actions (e.g., "Donation successfully added!") that disappear automatically after a few seconds, with manual dismissal available.

### Responsive Design

- Optimized layout for mobile, tablet, and desktop views.
- Form fields and cards stack vertically on smaller screens.

## Challenges Faced

- Ensuring real-time updates to the table with multiple filters applied simultaneously.
- Implementing responsive design for a seamless user experience across devices.
- Validating donation amounts and ensuring the input adheres to currency formats.
- Integrating accessible design features while maintaining visual appeal.

## Instructions to Run the App Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or above).
- npm or yarn package manager.

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SHALMA-DM/DonorManagementApp.git
   cd donor-management-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

   Or, if using yarn:

   ```bash
   yarn install
   ```

3. **Run the Application**:

   ```bash
   npm start
   ```

   Or, if using yarn:

   ```bash
   yarn start
   ```

4. **Access the Application**: Open your browser and navigate to `http://localhost:3000`.

### Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.

### Folder Structure

- `src/components`: Contains React components (e.g., Header, DonorForm, DonorTable, SummaryCards).
- `src/pages`: Contains individual pages (e.g., Home, Donors, About).
- `src/styles`: Contains CSS or Tailwind styles.
- `src/utils`: Utility functions (e.g., for sorting, filtering).

### Additional Notes

- Ensure your Node.js version is compatible to avoid issues during installation.
- For production, serve the app using a server like Nginx or deploy it to platforms like Vercel or Netlify.

