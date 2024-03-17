# InvoiceIq (Production Ver)

This project is an invoice tracker built using Vue 3, Vuex for state management, and Firebase for the backend. It allows users to manage their invoices efficiently. 

### Features

* **Vue 3 Framework:** Utilizes Vue 3 for building reactive and dynamic user interfaces.
* **Vuex:** Implements Vuex for state management, ensuring a centralized and predictable state for the application.
* **Firebase Backend:** Utilizes Firebase for authentication, database, and hosting, providing a scalable and reliable backend solution.
* **Invoice Tracking:** Allows users to create, view, edit, and delete invoices, keeping track of their financial transactions.
* **Responsive Design:** Although not currently supporting mobile devices, the website is designed to be responsive and may support mobile devices in future updates.

### Photo Demo
**This is a view of the homescreen.**
![Homescreen](https://github.com/JSDWRLD/InvoiceIQ/assets/123333887/57d4f232-d533-432d-bba0-dd4a6c465393)

**From the homescreen you can click on an individual invoice and open a detailed view. Notice that the total is automatically calculated!**
![DetailedView](https://github.com/JSDWRLD/InvoiceIQ/assets/123333887/1add970f-efbb-4bc9-9de1-98dfe2136486)

**When creating a new invoice this menu slides in seamlessly on the left hand side.**
![NewInvoice](https://github.com/JSDWRLD/InvoiceIQ/assets/123333887/2e04e019-fdd5-4f86-bf4f-74d6116ea030)

**Inside of the new invoice menu there is a item list that you can keep adding to.**
![ItemList](https://github.com/JSDWRLD/InvoiceIQ/assets/123333887/55c949aa-6131-4732-8112-d96c92945663)




### Installation

To run this project locally, follow these steps:

    Clone this repository to your local machine:
    git clone https://github.com/JSDWRLD/InvoiceIQ.git

Install dependencies using npm:

    npm install

Set up Firebase:

    Create a Firebase project and set up Firebase Authentication and Firestore.
    Obtain your Firebase configuration (apiKey, authDomain, projectId, etc.).
    Replace the Firebase configuration in the src/firebase.js file with your own.

Start the development server:

    npm run serve

    Open your web browser and visit http://localhost:8080 to view the website.

### Usage
 - Create new invoices, view existing ones, edit or delete invoices as needed.
 - Track your financial transactions with ease.

### Acknowledgements

 - Vue.js: https://v3.vuejs.org/
 - Vuex: https://vuex.vuejs.org/
 - Firebase: https://firebase.google.com/
