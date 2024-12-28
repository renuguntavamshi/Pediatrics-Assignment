import React,{Component} from 'react';


export class ClassComponent extends Component{
    render(){
        return(
            <div>   
                 <div className="container2">
                 <h2 className='head1'>This is created by using Class Component </h2> 
                 <p className='para1'>This is done using External CSS    </p>
                 <p style={{color:'blue',textAlign:'center'}}>This is done using Inline CSS    </p>
                  </div>
            </div>
        );
    }
}
