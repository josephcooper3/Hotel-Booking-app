<template>
  <form v-on:submit="addBooking" method="post">
    <h3>Make a new booking</h3>
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="name">
    </div>
    <div>
      <label for="email">e-mail</label>
      <input type="text" v-model='email'>
    </div>
    <div>
      <label for="checkedIn">Checked In?</label>
      <input type="checkbox" v-model="checkedIn">
    </div>
   
      <input type="submit" value="save"/>
  </form>
</template>

<script>
 import BookingService from '../services/BookingService'
 import {eventBus} from '../main'

export default {
   name: 'booking-form',
   data() {
     return {
       name: "",
       email: "",
       checkedIn: false
     }
   },
   methods: {
     addBooking(event){
       event.preventDefault()
       const booking = {
         name: this.name,
         email: this.email,
         checkedIn: this.checkedIn
       }
       BookingService.postBooking(booking)
       .then(res => eventBus.$emit('booking-added', res))
       this.name = ""; 
       this.email = "";
       this.checkedIn = false;
     }
   }
}
</script>

<style>

</style>