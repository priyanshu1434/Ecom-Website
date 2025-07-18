// src/App.jsx
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Login from './components/LoginPage/Login';
import RegisterPage from './components/RegisterPage/RegisterPage';
import CRUD from './components/ProductDash/CRUD';
import Dashboard from './components/Dashboard/Dashboard';
import CartPage from './components/CartPage/CartPage';
import Profile from './components/Profile/Profile';
import Card from './components/Card/Card';
import PaymentHistoryPage from './components/PaymentHistoryPage/PaymentHistoryPage'; // Import the new component
import PaymentPage from './components/PaymentPage/PaymentPage';
import PaymentSuccessfulPage from './components/PaymentSuccessfulPage/PaymentSuccessfulPage';
import OrderConfirmationPage from './components/OrderConfirmationPage/OrderConfirmationPage';
import OrderDetailsPage from './components/OrderDetailsPage/OrderDetailsPage';
import SearchResultsPage from './components/SearchPage/Searchpage';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import AdminPanel from './components/AdminPanel/AdminPanel';
import OrderManagement from './components/OrderDash/OrderDash';
import UserManagement from './components/UserDash/UserDash';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword/>} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/product-management" element={<CRUD />} />
                    <Route path="/order-management" element={<OrderManagement />} />
                    <Route path="/user-management" element={<UserManagement />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/carts" element={<CartPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/payment-history" element={<PaymentHistoryPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/payment-successful" element={<PaymentSuccessfulPage />} />
                    <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/order-details" element={<OrderDetailsPage />} />
                    <Route path="/search-product" element={<SearchResultsPage />} />
                    <Route path="/admin-panel" element={<AdminPanel />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;