# Food Ordering Frontend

This is the frontend repository of the food ordering application. Access the backend repository [here](https://github.com/coderphilosophy/Food-Ordering-backend)

## Project Overview
This application enables users to create a restaurant profile and add menu items, along with selecting various types of cuisines. Restaurant owners can view a list of pending orders and update the status of these orders.

Users can select the city from which they wish to order, and the results can be filtered by cuisine type, delivery cost, and estimated delivery time. After selecting a restaurant, users can add items to their cart and proceed to checkout.
Payment processing is securely handled by Stripe, where users enter their card details. Upon successful payment, users are redirected to an order status page where they can monitor the status of their order.

### Key Features
•**User Authentication & Authorization:** Securely manage user access and data with Auth0.<br />
•**Advanced Search & Filtering:** Easily find restaurants and menu items with sophisticated filtering options.<br />
•**User-Friendly Interface:** Developed with React Hook Form to simplify user interactions, such as adding menu items and customizing restaurant profiles.<br />
•**Secure Payment Processing:** Integrated with Stripe to ensure safe and reliable transactions.<br />
•**Real-Time Updates:** Utilize webhooks to provide instant updates, enhancing the responsiveness and interactivity of the application.<br />

## Demo
https://github.com/user-attachments/assets/0f2b4f74-6ebb-4740-bc32-ac5477ce9131

## Installation
1. Clone the repo
   ```
   git clone https://github.com/coderphilosophy/Food-Ordering-frontend.git
   cd Food-Ordering-frontend
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Set up environment variables:<br/>
   Create a .env file in the root directory and add the necessary environment variables:
   ```
   VITE_API_BASE_URL=
   VITE_AUTH0_DOMAIN=
   VITE_AUTH0_CLIENTID=
   VITE_AUTH0_CALLBACK_URL=
   VITE_AUTH0_AUDIENCE=
   ```
4. Start the development server
   ```
   npm run dev
   ```
