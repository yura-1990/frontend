import axios from "axios"

const apiMiddleware = ({dispatch})=>(next)=>(action)=>{
  
  if (action.type !== 'api/apiCall') {
    next(action)
    return
  }
  
  next(action)
  
  const {url, method, data, onSuccess, onFailed, headers} = action.payload
  
  axios({ baseURL: 'http://test-project/api/', url, method, data, headers})
    .then(res=>{dispatch({type:onSuccess, payload: res})})
    .catch(err=>{dispatch({type: onFailed, payload: err})})
  
}

export default apiMiddleware