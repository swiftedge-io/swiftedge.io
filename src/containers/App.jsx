import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import EmailDashboardContainer from './EmailDashboardContainer';

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <EmailDashboardContainer />
    </div>
  );
}
