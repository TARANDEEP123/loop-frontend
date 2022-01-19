import { useEffect, useState } from 'react';
import Accordion from '../../common/Accordion/Accordion';
import Cards from '../../common/Cards/Cards';
import Table from '../../common/Table/Table';
import { getCarsList } from '../../services/api';
import './list.css'
import logo from '../../assests/loopit.png';

function List() {
    const [carlist,setCarList] = useState([]);
    useEffect(() => {
        getCarsList()
        .then((result)=>{
            console.log(result);
            setCarList(result.data);
            
        }).catch((err)=>{
            console.log(err);
        })
    },[1])
    return (
    carlist.map((cars)=>{
        const image = logo;
        return(<Accordion title={cars.name} type={cars.type.name} company={cars.brand.name} model={cars.model.name}>
             <div className="blocks" style={{overflow:"scroll",maxHeight:"500px",height:"auto"}}>
                     <div style={{display: "flex", width:"100%"}}>
                         <div className="repay-margin" key={4}>
                             <div className="column">
                                 <img className="carimg" src={image} alt="None"></img>
                             </div>
                            <div className="column">
                                    <p className="text">{cars.description}</p>
                            </div> 
                            <div className="column">
                                <Cards className="repayment" >
                                    <Table>
                                        <tr>
                                            <td colSpan='2'> <b>Name</b></td>
                                            <td colSpan='2'> <b>{cars.name}</b></td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'> <b>Model</b></td>
                                            <td colSpan='2'> <b>{cars.model.name}</b></td>
                                        </tr>
                                         <tr>
                                            <td colSpan='2'> <b>Type</b></td>
                                            <td colSpan='2'> <b>{cars.type.name}</b></td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'> <b>Color</b></td>
                                            <td colSpan='2'> <b>{cars.color}</b></td>
                                        </tr>
                                         <tr>
                                            <td colSpan='2'> <b>Stocks</b></td>
                                            <td colSpan='2'> <b>{cars.stock_available}</b></td>
                                        </tr>
 
                                    </Table>
                                </Cards>
                            </div>
                        </div> 
                    </div> 
       
             </div>
        </Accordion>)
    })
      
    )
}
export default List;