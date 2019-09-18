<template>
  <div id="app">
    <h1>Hotel Bookings</h1>
  </div>
</template>

<script>
import BookingForm from './components/BookingForm'
import BookingsList from './components/BookingsList'
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
   'bookings-list': BookingsList
  },
  mounted(){
    this.fetchData()
  },
  methods: {
    fetchData() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
    }
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
