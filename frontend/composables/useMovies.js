import { ref, watch, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_MOVIES } from '../graphql/queries/movies'

export function useMovies(initialPage = 1, initialPageSize = 12) {
  const page = ref(initialPage)
  const pageSize = ref(initialPageSize)
  const movies = ref([])
  const totalCount = ref(0)
  
  const variables = computed(() => {
    const vars = {
      limit: pageSize.value,
      offset: (page.value - 1) * pageSize.value
    }

    return vars
  })

  const { result, loading, error, refetch } = useQuery(GET_MOVIES, variables, {debounce: 400});

  watch(result, (newResult) => {
    if (newResult && newResult.movies) {
      movies.value = newResult.movies    
      totalCount.value = newResult.movies_aggregate.aggregate.count
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
    page.value = newPage
    refetch()
  }

  return {
    movies,
    totalCount,
    loading,
    error,
    changePage,
  }
}