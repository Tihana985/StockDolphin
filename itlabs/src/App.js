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
import { AddCategoryModal } from './components/Modals/AddCategoryModal/AddCategoryModal';
import { AddItemModal } from './components/Modals/AddItemModal/AddItemModal';
import { EditCategoryModal } from './components/Modals/EditCategoryModal/EditCategoryModal';
import { DiscardModal } from './components/Modals/DisccardModal/DiscardModal';

//import FetchContextProvider from "./uttils/FetchContextProvider";?

function App() {
  return (
//<FetcContextProvider>

//ako odime so fetch dali treba div claasName="App"?
    <div className="App"> 


      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/darkmode" element={<DarkMode />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/reports/activityhistory" element={<ActivityHistory />} />
        <Route path="/reports/inventorysummary" element={<InventorySummary />} />
        <Route path="/inventory/inventorysecondpage" element={<InventorySecond />} />
        <Route path="/inventory/inventoryofficesupliesfirstpage" element={<InventoryOfficeSuppliesFirst />} />
        <Route path="/inventory/addmodal" element={<AddCategoryModal />} />
        <Route path="/inventoryofficesupliesfirstpage/additemmodal" element={<AddItemModal />} />
        <Route path="/inventoryofficesupliesfirstpage/editmmodal" element={<EditCategoryModal />} />
        <Route path="/inventory/inventorysecondpage/inventory/addmodal" element={<AddCategoryModal />} />
        <Route path="/addcatgorymodal/discardmodal" element={<DiscardModal />} />
      
      </Routes>
    </div>
       //</FetchContextProvider>
  );
}

export default App;
