<template>
  <tr>
    <td>{{booking.name}}</td>
    <td>{{booking.email}}</td>
    <td>{{booking.checkedIn}}</td>
    <td>
      <button v-on:click="deleteBooking">Delete</button>
    </td>
    <td>
      <button v-on:click="toggleCheckedIn(booking)">Change Check-in Status</button>
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
    deleteBooking() {
      BookingService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted'))
    },
    toggleCheckedIn(booking) {
      const payload = this.booking;
      payload.checkedIn = !booking.checkedIn;
      BookingService.updateBooking(payload)
      .then(() => eventBus.$emit('booking-updated'))
    }
  }
}
</script>

<style>

</style>