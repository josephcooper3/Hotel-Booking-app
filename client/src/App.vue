<template>
  <div id="app">
    <h1>Hotel Bookings</h1>
    <booking-form></booking-form>
    <bookings-table :bookings="bookings"></bookings-table>
  </div>
</template>

<script>
import BookingForm from './components/BookingForm'
import BookingsTable from './components/BookingsTable'
import BookingService from './services/BookingService'
import { eventBus } from './main'

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {
   'booking-form': BookingForm,
   'bookings-table': BookingsTable
  },
  mounted(){
    this.fetchData();
    eventBus.$on('booking-added', () => {
      this.fetchData()
    });
    eventBus.$on('booking-deleted', () => {
      this.fetchData()
    });
  },
  methods: {
    fetchData() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
