import './App.css';
//dali treba import React from "react";?
import { Route, Routes, } from "react-router-dom";
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Inventory } from './pages/Inventory/Inventory';
import { Reports } from './pages/Reports/Reports';
import { Suppliers } from './pages/Suppliers/Suppliers';
import { DarkMode } from './components/DarkMode';
import { SignOut } from './pages/SignOut/SignOut';
import { ActivityHistory } from './pages/ActivityHistory/ActivityHistory';
import { InventorySummary } from './pages/InventorySummary/InventorySummary';
import { InventorySecond } from './pages/InventorySecond/InventorySecond';
import { InventoryOfficeSuppliesFirst } from './pages/InventoryOfficeSuppliesFirst/InventoryOfficeSuppliesFirts';
import { IOfficeSMouse } from './pages/IOfficeSMouse/IOfficeSMouse';
import { InventoryThirdPage } from './pages/InventoryThirdPage/InventoryThirdPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/darkmode" element={<DarkMode />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/reports/activityhistory" element={<ActivityHistory />} />
        <Route path="/reports/inventorysummary" element={<InventorySummary />} />
        <Route path="/inventory/inventorysecondpage" element={<InventorySecond />} />
        <Route path="/inventory/inventorythirdpage" element={<InventoryThirdPage />} />
        <Route path="/inventory/inventoryofficesupliesfirstpage" element={<InventoryOfficeSuppliesFirst />} />
        <Route path="/inventory/inventoryofficesupliesfirstpage/mouse" element={<IOfficeSMouse />} />
      </Routes>
    </div>
  );
}

export default App;
