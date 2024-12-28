import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Button
  } from '@mui/material';
  
function TableComponent({rows,isTableDisplay,handleClickOpen}){
    return(
        <div>
 {isTableDisplay && 
     <TableContainer  >
     <Table className='tableContainerStyle'>
       <TableHead  className='tableborder tableHead'>
         <TableRow  >
           <TableCell  className='whitecolor textAlignCenter'>Patient Name</TableCell>
           <TableCell  className='whitecolor textAlignCenter'>Contact</TableCell>
           <TableCell  className='whitecolor textAlignCenter'>Parent</TableCell>
           <TableCell  className='whitecolor'>Immediate Actions</TableCell>
           <TableCell  className='whitecolor textAlignCenter'>Due Date</TableCell>
           <TableCell  className='whitecolor'>Actions</TableCell>

         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow
             key={row.Patientname}
             className='tableborder'
           >
             <TableCell className='textAlignCenter'>
               <Button 
                className='Links'
                 onClick={() => handleClickOpen(row)}
               >
                 {row.Patientname}
               </Button>
             </TableCell>
             <TableCell className="textAlignCenter">{row.Contact}</TableCell>
             <TableCell className="textAlignCenter">{row.Parent}</TableCell>
             <TableCell>
               {row.ImmediateActions.map(action => (
                 <p key={action}>{action}</p>
               ))}
             </TableCell>
             <TableCell className='textAlignCenter'>{row.DueDate}</TableCell>
             <TableCell  >{row.ImmediateActions.map(action=>{
               return(<div><Button 
              
                className='Links' onClick={()=>handleClickOpen(row)}>{action.split(" ").slice(0,1)}</Button></div>)
             })}</TableCell>
          
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>} 

        </div>
    )
}
export default TableComponent;