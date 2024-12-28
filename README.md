This is a Pediatrics Assignment done using React JS
//Here I have used Material UI library for developing CSS in a fast and easy way

1)First in Index.js, I have used StyledEngineProvider to give External CSS more preference,when needed like adding custom colors, or adding the padding
2)Then the counter comes to App.css,which has 3 components like header Component,table component and model component
3)The control of the table component and model component is at App.js which is maintained through state variables
4)Is table display is true,when we click on the patient name ,the handleClickOpen function will get activated and isTable becomes false and selectedPatient shows in the model box
5)Modal box is false initally,when clicked on a particular patient name ,it will become true and it will display with the help of handleClickOpen function and their a flexibility to close the modal,upon closing the modal box ,the isOpen and isTabledisplay variable comes into its previous state i.e false & true
