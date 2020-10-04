import React, { Component, createContext } from 'react'
export const NumberContext = createContext();





class NumberProvider extends Component {
constructor(props) {
    super(props)

    this.state = {
         totalval:[],
         num:null,
         calledout:[],
         count:1,
         plus:false,
         minus:false,
         normal:true,
         first:null,
         second:null,
         third:null,
         fourth:null,
         fifth:null,
         swap:false
    }
}

swap5=()=>{
    this.setState(()=>{
        return{
            swap:!this.state.swap
        }
    },this.reset())
}

alert=()=>{
   if(this.state.count!==1&&this.state.count%5===1 && this.state.swap===true)
    window.alert("SWAP YOUR TICKETS!!")
}



generate =()=>{
    let num1= Math.ceil((Math.random()*90000)/1000)
    while(this.state.calledout.includes(num1))
    {
        num1= Math.ceil((Math.random()*90000)/1000)
    }
        
        this.setState(()=>{
            return{
                num:num1,
                calledout:[num1,...this.state.calledout],
                count:this.state.count+1,
                first:num1,
                second:this.state.first,
                third:this.state.second,
                fourth:this.state.third,
                fifth:this.state.fourth
                
            }
        },this.alert());

        if(this.state.count===90)
        {
            this.reset() 
        }
}

mirror =()=>{
    let num1= Math.ceil((Math.random()*90000)/1000)
    while(this.state.calledout.includes(num1))
    {
        num1= Math.ceil((Math.random()*90000)/1000)
    }


        this.setState(()=>{
            return{
                num:num1,
                calledout:[num1,...this.state.calledout],
                count:this.state.count+1,
                first:num1,
                second:this.state.first,
                third:this.state.second,
                fourth:this.state.third,
                fifth:this.state.fourth
                
            }
        },this.alert());

        if(this.state.count===90)
        {
            this.reset() 
        }
}


plusone=()=>{
    this.setState(()=>{
        return{plus:true,
                minus:false,
                normal:false
        }
    },this.reset())
}


minusone=()=>{
    this.setState(()=>{
        return{plus:false,
                minus:true,
                normal:false
                }
    },this.reset())
}

normalh=()=>{
    this.setState(()=>{
        return{plus:false,
                minus:false,
                normal:true
                }
    },this.reset())
}



reset=()=>{
    
    this.setState(()=>{
        return{
            num:null,
            calledout:[],
            count:1,
            first:null,
            second:null,
            third:null,
            fourth:null,
            fifth:null          
        }
    },this.componentDidMount)

}





setProducts=()=>{
    let tempProducts=[];
            for(let i=1;i<=90;i++){
            tempProducts=[...tempProducts,i];}
    this.setState(()=>{
        return{totalval:tempProducts}
    })
    
}




componentDidMount (){
    this.setProducts()
}






    render() {
        return (
            <NumberContext.Provider value={{totalval:this.state.totalval,
                                            generate:this.generate,
                                            num:this.state.num,
                                            calledout:this.state.calledout,
                                            reset:this.reset,
                                            plusone:this.plusone,
                                            plus:this.state.plus,
                                            minusone:this.minusone,
                                            minus:this.state.minus,
                                            normalh:this.normalh,
                                            normal:this.state.normal,
                                            first:this.state.first,
                                            second:this.state.second,
                                            third:this.state.third,
                                            fourth:this.state.fourth,
                                            fifth:this.state.fifth,
                                            swap5:this.swap5,
                                            swap:this.state.swap
                                            }}>
                {this.props.children}
            </NumberContext.Provider>
        )
    }
}

export default NumberProvider
