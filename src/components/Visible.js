import React ,{useContext} from 'react'
import {NumberContext} from '../context'
import styled from 'styled-components'
function Visible() {
    const {totalval,calledout,first,second,third,fourth,fifth} =useContext(NumberContext)
    const {generate , num,reset,plusone,plus,minusone,minus,normalh,normal,swap,swap5} =useContext(NumberContext)

    
    return (
        <Item className="container-fluid">
        <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-7">
                    <span className="row text-center mx-auto ml-md-4 ml-lg-4">
                            {totalval.map((item)=> 
                            {
                            return <div key={item} className="col-1 p-1 item"><div className={calledout.includes(item)?"found":"notfound"}  >
                                {item}
                            </div>
                            </div>
                            })}
                    </span>
                    <Gen className="btn mr-0 pr-0 ml-0 pl-0 mt-3"  onClick={()=>generate()} >Generated Number :  <span>{(num===null)?<h2 className="bg-light text-dark">Start</h2>:<h2 className="bg-light text-dark">{plus?((num===1)?90:(num-1)):(minus?((num===90)?1:(num+1)):num)}</h2>}</span></Gen>
                    <Gen className="btn  mt-1 " onClick={()=>{
                        var retVal = window.confirm("Do you want to reset ?");
                        if(retVal===true)
                        {
                        return reset()
                        }
                        }} >Start All Over Again</Gen>
                </div>
                <div className=" col-sm-6 col-md-6 col-lg-2 mt-4 my-lg-5 text-center">
                        <h3 className="text-center mt-lg-5 pt-lg-5" style={{color:'#000'}} ><b>RECENT CALLS:</b></h3>
                        <h4 style={{border:'2px solid #000',fontWeight:'700',borderRadius:'15%',margin:'10px'}}>
                            {(first!=null)?plus?((first===1)?90:(first-1)):(minus?((first===90)?1:(first+1)):first):""}
                        </h4>
                        <h4 style={{border:'2px solid #000',fontWeight:'700',borderRadius:'15%',margin:'10px'}}>
                            {(second!=null)?plus?((second===1)?90:(second-1)):(minus?((second===90)?1:(second+1)):second):""}
                        </h4>
                        <h4 style={{border:'2px solid #000',fontWeight:'700',borderRadius:'15%',margin:'10px'}}>
                            {(third!=null)?plus?((third===1)?90:(third-1)):(minus?((third===90)?1:(third+1)):third):""}
                        </h4>
                        <h4 style={{border:'2px solid #000',fontWeight:'700',borderRadius:'15%',margin:'10px'}}>
                            {(fourth!=null)?plus?((fourth===1)?90:(fourth-1)):(minus?((fourth===90)?1:(fourth+1)):fourth):""}
                        </h4>
                        <h4 style={{border:'2px solid #000',fontWeight:'700',borderRadius:'15%',margin:'10px'}}>
                            {(fifth!=null)?plus?((fifth===1)?90:(fifth-1)):(minus?((fifth===90)?1:(fifth+1)):fifth):""}
                        </h4>
                </div>
                <div className=" col-sm-6 col-md-6 col-lg-2   mx-auto my-lg-auto mt-4">
                    <div className="row m-lg-0 m-md-4">
                        <Gen  className={normal?"found col-12 col-md-12 mx-auto m-1 mt-lg-5 mb-lg-5 pt-2":"col-12 col-md-12 mx-auto m-1 mt-lg-5 mb-lg-5 pt-2"} 
                        onClick={()=>{
                        var retVal = window.confirm("Do you want to continue ?");
                        if(retVal===true)
                        {
                        return normalh()
                        }}} ><h4>NORMAL</h4></Gen>
                        <Gen className={plus?"found col-12 col-md-12 mx-auto m-1 mb-lg-5 pt-2":"col-12 col-md-12 mx-auto m-1 mb-lg-5 pt-2"} onClick={()=>{
                        var retVal = window.confirm("Do you want to continue ?");
                        if(retVal===true)
                        {
                        return plusone()
                        }}} ><h4>PLUS ONE</h4></Gen>
                        <Gen className={minus?"found col-12 col-md-12 mx-auto m-1 mb-lg-5 pt-2":"col-12 col-md-12 mx-auto m-1 mb-lg-5 pt-2"} onClick={()=>{
                        var retVal = window.confirm("Do you want to continue ?");
                        if(retVal===true)
                        {
                        return minusone()
                        }}} ><h4>MINUS ONE</h4></Gen>
                        <Gen className={swap?"found col-12 col-md-12 mx-auto m-1 mb-lg-5 pt-2":"col-12 col-md-12 mx-auto m-1 mb-lg-5 pt-2"} onClick ={()=>swap5()}><h4>SWAP 5</h4></Gen>
                    </div>
                </div>
        </div>
        </Item>
    )
}

export default Visible

const Item =styled.div 
`
    align-items:center;
    justify-content:center;
    margin-left:2.5%;
.found{
    background:#000 !important;
    color:#fff;
    font-weight:700;
    border-radius:5px;
}
    overflow-X:hidden;
.item{
    border:1px solid white;
    margin:3px;
    
}
`
const Gen =styled.div
`
  width:100%;
  border:2px solid #000;
  text-align:center;
  color:#000;
    background:#fff;
    border-radius:5px;
  &:hover{
    background:#000;
  color:#fff;
    
  }
`