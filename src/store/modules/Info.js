const state = {

    Orders_Recieved : [
      {
        "Order_Id" : "0001",
        "Customer_Name" : "Rahul K",
        "Total_Amount"  : 1000,
        "Total_Items"   : 2,
        "Ship_To"       : "HSR Layout",
        "Order_Status"  : "Order_Recieved"
      },
      {
        "Order_Id" : "0002",
        "Customer_Name" : "Venki",
        "Total_Amount"  : 3000,
        "Total_Items"   : 4,
        "Ship_To"       : "Banshankri",
        "Order_Status"  : "Preparing"
      },
      {
        "Order_Id" : "0003",
        "Customer_Name" : "Rakesh ",
        "Total_Amount"  : 10000,
        "Total_Items"   : 5,
        "Ship_To"       : "Kormangala",
        "Order_Status"  : "Ready"
      },
      {
        "Order_Id" : "0004",
        "Customer_Name" : "John",
        "Total_Amount"  : 500,
        "Total_Items"   : 1,
        "Ship_To"       : "Bommanahalli",
        "Order_Status"  : "Preparing"
      },
      {
        "Order_Id" : "0005",
        "Customer_Name" : "Sid",
        "Total_Amount"  : 1200,
        "Total_Items"   : 2,
        "Ship_To"       : "Arekere",
        "Order_Status"  : "Ready"
      },
      {
        "Order_Id" : "0006",
        "Customer_Name" : "Nandan",
        "Total_Amount"  : 1500,
        "Total_Items"   : 1,
        "Ship_To"       : "J.P.Nagar",
        "Order_Status"  : "Preparing"
      },
      {
        "Order_Id" : "0007",
        "Customer_Name" : "Ram",
        "Total_Amount"  : 1000,
        "Total_Items"   : 3,
        "Ship_To"       : "Marathalli",
        "Order_Status"  : "Ready"
      },
      {
        "Order_Id" : "0008",
        "Customer_Name" : "Wilson",
        "Total_Amount"  : 800,
        "Total_Items"   : 2,
        "Ship_To"       : "HBR Layout",
        "Order_Status"  : "Preparing"
      },
      {
        "Order_Id" : "0009",
        "Customer_Name" : "Sneha",
        "Total_Amount"  : 900,
        "Total_Items"   : 1,
        "Ship_To"       : "Kudlu Gate",
        "Order_Status"  : "Ready"
      },
      {
        "Order_Id" : "0010",
        "Customer_Name" : "Soumya",
        "Total_Amount"  : 1800,
        "Total_Items"   : 1,
        "Ship_To"       : "Electronic City",
        "Order_Status"  : "Delivered"
      },
    ]        
}
  
  const mutations = {
      UpdateOrderStatus(state,payload){
        let index = state.Orders_Recieved.findIndex(x => x['Order_Id'] == payload['Order_Id'])
        state.Orders_Recieved.splice(index,1,payload)
      }
  }
  
  const actions = {
      
  }
  
  const getters = {
      GetOrdersList(state){
        return state.Orders_Recieved
      }
  }
  
  export default {
    state,
    mutations,
    actions,
    getters
  }
  