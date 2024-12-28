import {
    Button, Dialog, DialogTitle, DialogContent, DialogActions, Box,
  } from '@mui/material';
  
function ModalComponent({isOpen,handleClose,selectedPatient}){
    return(
        <div>
              <Dialog
        open={isOpen}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        
      >
        <DialogTitle className="textAlignCenter">Patient Details</DialogTitle>
        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="200px"
          >
            {selectedPatient && (
              <div>
                <p><strong>Patient Name:</strong> {selectedPatient.Patientname}</p>
                <p><strong>Contact:</strong> {selectedPatient.Contact}</p>
                <p><strong>Parent:</strong> {selectedPatient.Parent}</p>
                <p><strong>Immediate Actions:</strong></p>
                <ul>
                  {selectedPatient.ImmediateActions.map(action => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
                <p><strong>Due Date:</strong> {selectedPatient.DueDate}</p>
              </div>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

        </div>
    )
}
export default ModalComponent