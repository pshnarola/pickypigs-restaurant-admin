

const initialState = {
  isLoading : false,
  errorMessage:'',
  login_Data:{},
  forgot_Password:{},
  reset_Password:{}

  };
  
  const generalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      
      case "GET_LOGIN_REQUEST":
        return {
          ...state,
          isLoading :true,
        };
      case "GET_LOGIN_SUCCESS":
        localStorage.setItem('access_token',payload);
        localStorage.setItem('role','restaurant_admin');
        return {
          ...state,
          isLoading:false,
          login_Data:payload,
        };   

      case "GET_LOGIN_FAILURE":
        return {
          ...state,
          isLoading:false,
          errorMessage:payload
        };

      //logout user
      case "LOGOUT_ADMIN_REQUEST":
        localStorage.removeItem('access_token');
        localStorage.removeItem('role');
         return{
            ...state,
            isLoading:true,
         } 
      case "FORGOT_ADMIN_SUCCESS":
        localStorage.removeItem('access_token');
        localStorage.removeItem('role');
        return {
          ...state,
            isLoading:false,
        };    

      case "FORGOT_ADMIN_FAILURE":
        localStorage.removeItem('access_token');
        localStorage.removeItem('role');
        return {
          ...state,
            isLoading:false,
        };    

      //FORGOT_PASSWORD
      case "FORGOT_PASSWORD_REQUEST":    
          return {
            ...state,
            isLoading :true,
          };

      case "FORGOT_PASSWORD_SUCCESS":
        return {
          ...state,
          isLoading:false,
          forgot_Password:payload,
        };    

      case "FORGOT_PASSWORD_FAILURE":
        return {
          ...state,
          isLoading:false,
          forgot_Password:{},
          errorMessage:payload
        }; 

       //RESET_PASSWORD
      case "RESET_PASSWORD_REQUEST":    
          return {
            ...state,
            isLoading :true,
          };

      case "RESET_PASSWORD_SUCCESS":
        return {
          ...state,
          isLoading:false,
          reset_Password:payload,
        };    

      case "RESET_PASSWORD_FAILURE":
        return {
          ...state,
          isLoading:false,
          reset_Password:{},
          errorMessage:payload
        };       

      default:
        return state;
    }
  };
  
  export default generalReducer;
  