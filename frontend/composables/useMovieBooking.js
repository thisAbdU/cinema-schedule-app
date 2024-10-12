import { ref, computed, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_MOVIE_BY_ID } from '~/graphql/queries/movies'
import { format, parseISO, addHours } from 'date-fns'

export function useMovieBooking(movieId) {
  console.log("Starting useMovieBooking with movieId:", movieId)

  const { result, loading} = useQuery(GET_MOVIE_BY_ID, { id: movieId })

  const movie = computed(() => {
    console.log('GraphQL result:', result.value)
    return result.value?.movies_by_pk || null
  })
  
  console.log("--=====", movie.value)

  const formattedDate = computed(() => {
    if (movie.value && movie.value.updated_at) {
      console.log("movie update at", movie.value.updated_at)
      const date = parseISO(movie.value.updated_at)
      const adjustedDate = addHours(date, 3) 
      return format(adjustedDate, 'yyyy-MM-dd')
    }
    return 'N/A'
  })

  const formattedTime = computed(() => {
    if (movie.value && movie.value.updated_at) {
      const date = parseISO(movie.value.updated_at)
      const adjustedDate = addHours(date, 3) // Adjust for GMT+3
      return `${format(adjustedDate, 'HH:mm')} (GMT+3)`
    }
    return 'N/A'
  })

  const createSeatRows = () => {
    const rows = []
    for (let i = 0; i < 5; i++) {
      const row = []
      for (let j = 0; j < 8; j++) {
        row.push({
          id: i * 8 + j + 1,
          status: Math.random() < 0.1 ? 'reserved' : 'available'
        })
      }
      rows.push(row)
    }
    return rows
  }

  const seatRows = ref(createSeatRows())
  const selectedSeats = ref([])
  const error = ref(null)

  const totalPrice = computed(() => selectedSeats.value.length * 10)

  const getSeatColor = (seat) => {
    switch (seat.status) {
      case 'reserved': return '#FF4136'
      case 'booked': return '#2ECC40'
      default: return '#7FDBFF'
    }
  }

  const getSeatPath = (rowIndex, seatIndex) => {
    const x = 60 + seatIndex * 80
    const y = 20 + rowIndex * 80
    return `
      M ${x} ${y}
      a 20 20 0 0 1 40 0
      v 30
      h 10
      v 10
      h -60
      v -10
      h 10
      v -30
      a 20 20 0 0 1 0 0
      z
    `
  }

  const selectSeat = (seat) => {
    if (seat.status === 'reserved') {
      error.value = 'This seat is reserved.'
      return
    }

    if (selectedSeats.value.length >= 10 && seat.status === 'available') {
      error.value = 'You can only book up to 10 seats at a time.'
      return
    }

    error.value = null
    if (seat.status === 'available') {
      seat.status = 'booked'
      selectedSeats.value.push(seat)
    } else {
      seat.status = 'available'
      const index = selectedSeats.value.findIndex(s => s.id === seat.id)
      if (index !== -1) {
        selectedSeats.value.splice(index, 1)
      }
    }
  }

  return {
    movie,
    loading,
    error,
    seatRows,
    selectedSeats,
    totalPrice,
    formattedDate,
    formattedTime,
    getSeatColor,
    getSeatPath,
    selectSeat
  }
}
