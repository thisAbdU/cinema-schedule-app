import { ref, watch, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_MOVIES } from '../graphql/queries/movies'

export function useMovies(initialPage = 1, initialPageSize = 12) {
  const page = ref(initialPage)
  const pageSize = ref(initialPageSize)
  const movies = ref([])
  const totalCount = ref(0)

  console.log('useMovies called with:', { initialPage, initialPageSize })

  const variables = computed(() => {
    const vars = {
      limit: pageSize.value,
      offset: (page.value - 1) * pageSize.value
    }
    console.log('Query variables:', vars)
    return vars
  })

  const { result, loading, error, refetch } = useQuery(GET_MOVIES, variables, {debounce: 400});

  console.log('Initial query state:', { loading: loading.value, error: error.value })

  watch(result, (newResult) => {
    console.log('Query result updated:', newResult)
    if (newResult && newResult.movies) {
      movies.value = newResult.movies
      console.log('Movies fetched from backend:', JSON.stringify(movies.value, null, 2))
      console.log('Number of movies fetched:', movies.value.length)
      
      // Log details of each movie
      movies.value.forEach((movie, index) => {
        console.log(`Movie ${index + 1}:`, {
          id: movie.id,
          title: movie.title,
          genre: movie.genre,
          poster_url: movie.poster_url
        })
      })
      
      totalCount.value = newResult.movies_aggregate.aggregate.count
      console.log('Total count:', totalCount.value)
    } else {
      console.log('No movies data in the result')
    }
  }, { immediate: true })

  watch(loading, (isLoading) => {
    console.log('Loading state changed:', isLoading)
  })

  watch(error, (newError) => {
    if (newError) {
      console.error('Query error:', newError)
    }
  })

  function changePage(newPage) {
    console.log('Changing page to:', newPage)
    page.value = newPage
    refetch()
  }

  const buyTicket = (movieId) => {
    // TODO: Implement ticket purchase logic
    console.log(`Buying ticket for movie with ID: ${movieId}`)
  }

  const viewDetails = (movieId) => {
    // TODO: Implement view details logic
    console.log(`Viewing details for movie with ID: ${movieId}`)
  }

  return {
    movies,
    totalCount,
    loading,
    error,
    changePage,
    buyTicket,
    viewDetails
  }
}