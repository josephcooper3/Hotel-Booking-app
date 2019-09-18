<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <th>Name</th>
        <th>Email Address</th>
        <th>Checked In?</th>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        <table-item v-for="(booking, index) in bookings" :booking="booking" :key="index"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableItem from './TableItem'

export default {
  name: "bookings-table",
  props: ["bookings"],
  components: {
    'table-item': TableItem
  }
}
</script>

<style>
  .table-wrapper {
    display: inline-block;
  }
</style>