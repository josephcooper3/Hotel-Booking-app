<template>
  <tr>
    <td>{{booking.name}}</td>
    <td>{{booking.email}}</td>
    <td>{{booking.checkedIn}}</td>
    <td>
      <button>Delete</button>
    </td>
  </tr>
</template>

<script>
import BookingService from '../services/BookingService';
import { eventBus } from '../main';

export default {
  name: "table-item",
  props: ["booking"]
}
</script>

<style>

</style>