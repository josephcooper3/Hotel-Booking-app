<template>
  <tr>
    <td>{{booking.name}}</td>
    <td>{{booking.email}}</td>
    <td>{{booking.checkedIn}}</td>
    <td>
      <button v-on:click="deleteBooking">Delete</button>
    </td>
  </tr>
</template>

<script>
import BookingService from '../services/BookingService';
import { eventBus } from '../main';

export default {
  name: "table-item",
  props: ["booking"],
  methods: {
    deleteBooking(booking) {
      BookingService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    }
  }
}
</script>

<style>

</style>