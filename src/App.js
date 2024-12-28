import './App.css';
import React, { useState } from 'react';
import HeaderComponent from './Component/HeaderComponent';
import TableComponent from './Component/TableComponent';
import ModalComponent from './Component/ModalComponent';
function createData(Patientname, Contact, Parent, ImmediateActions, DueDate) {
  return { Patientname, Contact, Parent, ImmediateActions, DueDate };
}

const rows = [
  createData('Ramu', 9239223359, "Balraju", ["Vaccine 1 Overdue", "Followup Pending"], '1/1/2022'),
  createData('Somu', 8392392237, "Balvir", ["Vaccine 1 Overdue", "Laboratory Report Pending"], '3/1/2022'),
  createData('Radha', 6239223262, "Hemant", ["Vaccine 1 Overdue"], '2/1/2022')
];

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
const [isTableDisplay,setIsTableDisplay]=useState(true)
  const handleClickOpen = (patient) => {
    setSelectedPatient(patient);
    setisOpen(true);
    setIsTableDisplay(false)
  };

  const handleClose = () => {
    setisOpen(false);
    setSelectedPatient(null);
    setIsTableDisplay(true)
  };

  return (
    <div>
     <HeaderComponent />
   <TableComponent rows={rows} isTableDisplay={isTableDisplay} handleClickOpen={handleClickOpen}/>
 <ModalComponent isOpen={isOpen} handleClose={handleClose} selectedPatient={selectedPatient} />
      {/* Responsive Modal */}
    
    </div>
  );
}

export default App;
