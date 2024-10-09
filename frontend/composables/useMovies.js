import { ref, watch, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_MOVIES } from '../graphql/queries/movies'

export function useMovies(initialPage = 1, initialPageSize = 12) {
  const page = ref(initialPage)
  const pageSize = ref(initialPageSize)
  const movies = ref([])
  const totalCount = ref(0)

  const variables = computed(() => ({
    page: page.value,
    pageSize: pageSize.value,
    offset: (page.value - 1) * pageSize.value
  }))

  const { result, loading, error, refetch } = useQuery(GET_MOVIES, variables)

  watch(result, (newResult) => {
    console.log('Query result updated:', newResult)
    if (newResult && newResult.movies) {
      movies.value = newResult.movies
      totalCount.value = newResult.movies_aggregate.aggregate.count
      console.log('Movies array updated:', movies.value)
    }
  })

  function changePage(newPage) {
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