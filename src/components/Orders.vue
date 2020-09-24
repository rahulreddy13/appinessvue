<template>
    <section>
        <v-flex ma-12>
            <v-card>
                <v-card-title>Orders</v-card-title>
                <v-data-table :headers="headers" :items="GetOrders" :hide-default-footer="true" class="elevation-1">
                    <template v-slot:item="row">
                        <tr>
                            <td>{{ row.item.Order_Id }}</td>
                            <td>{{ row.item.Customer_Name }}</td>
                            <td>{{ row.item.Ship_To }}</td>
                            <td>{{ row.item.Total_Items }}</td>
                            <td>{{ row.item.Total_Amount }}</td>
                            <td>
                                <v-chip :color="row.item.Order_Status == 'Order_Recieved' ? 'red' : row.item.Order_Status == 'Preparing' ? 'orange' : row.item.Order_Status == 'Ready' ? 'green' : 'primary' " dark> {{ row.item.Order_Status == 'Order_Recieved' ? 'Order Recieved' : row.item.Order_Status == 'Preparing' ? 'Preparing' : row.item.Order_Status == 'Ready' ? 'Ready To Serve' : 'Delivered' }} </v-chip>
                            </td>
                            <td> <v-btn :disabled="row.item.Order_Status == 'Delivered'" color='primary' small @click="ChangeStatus(row.item)">Change Status</v-btn> </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card>
        </v-flex>
    </section>
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          { align: 'center' , text: 'Order Id' , value: 'Order_Id'},
          { align: 'center' , text: 'Customer Name', value: 'Customer_Name' },
          { align: 'center' , text: 'Ship To', value: 'Ship_To' },
          { align: 'center' , text: 'Total Items', value: 'Total_Items' },
          { align: 'center' , text: 'Total Amount', value: 'Total_Amount' },
          { align: 'center' , text: 'Order Status', value: 'Order_Status' },
          { align: 'center' , text: 'Change Status' }
        ]
      }
    },
    computed:{
        GetOrders(){
            return this.$store.getters.GetOrdersList
        }
    },
    methods:{
        ChangeStatus(order){
            let data = { ...order }
            order['Order_Status'] == 'Order_Recieved' ? data['Order_Status'] = 'Preparing' : order['Order_Status'] == 'Preparing' ?  data['Order_Status'] = 'Ready' : order['Order_Status'] == 'Ready' ? data['Order_Status'] = 'Delivered' : {}
            this.$store.commit('UpdateOrderStatus',data)
        }
    }
  }

</script>

<style>
.v-data-table-header {
    background-color: #1976d2;
}
.v-card__title {
    background-color: #1976d2;
    color: white;
    font-size: 28px !important;
}

table thead tr th {
    color: white !important;
    /* text-align: center !important; */
}

td {
  text-align: center !important;
}


</style>