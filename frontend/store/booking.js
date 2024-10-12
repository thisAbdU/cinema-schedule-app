import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {

  state: () => ({
    movieId: null,
    movieTitle: '',
    moviePoster: '',
    movieDuration: '',
    movieGenre: '',
    selectedDate: '',
    selectedTime: '',
    selectedSeats: [],
    totalPrice: 0,
  }),

  actions: {
    setBookingDetails(details) {
      this.movieId = details.movieId
      this.movieTitle = details.movieTitle
      this.moviePoster = details.moviePoster
      this.movieDuration = details.movieDuration
      this.movieGenre = details.movieGenre
      this.selectedDate = details.selectedDate
      this.selectedTime = details.selectedTime
      this.selectedSeats = details.selectedSeats
      this.totalPrice = details.totalPrice

      // Save to local storage
      localStorage.setItem('bookingDetails', JSON.stringify(details))
      console.log("Booking details set, current state:", this.$state)
    },

    loadBookingDetails() {
      const storedDetails = localStorage.getItem('bookingDetails')
      console.log("Loading booking details from storage:", storedDetails)
      if (storedDetails) {
        const details = JSON.parse(storedDetails)
        this.setBookingDetails(details)
      }
      
      console.log("After loading, current state:", this.$state)
    },
  },
  persist : true,
})