

const initialState = {
    count: 0
  };
const reducer = (state=initialState,action) => {

    if (action.type === 'INCREMENT') {
        return{
        count:state.count+1

        }
        
    }

    else if (action.type === 'DECREMENT') {

    return {

        count:state.count>0?state.count-1:0
    }

        
    }

    else if (action.type==='RESET') {
        return {

            count:0
        }
    }
   
    return state ;
        
    
}

export default reducer

