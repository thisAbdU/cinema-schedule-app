<template>
    <div class="w-full max-w-4xl mx-auto p-4 bg-[#21252D] text-white rounded-lg shadow-lg flex">
      <!-- Form Section -->
      <div class="w-full md:w-1/2 p-4">
        <h2 class="text-2xl font-bold mb-4">Add New Movie</h2>
        <form @submit.prevent="handleSubmit" novalidate>
            
          <!-- Movie Title -->
          <div class="mb-4">
            <label for="movie-title" class="block text-sm font-medium mb-1">Movie Title</label>
            <Field id="movie-title" name="movieTitle" as="input" type="text" class="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white" />
            <ErrorMessage name="movieTitle" class="text-red-500 text-sm" />
          </div>
  
        <!-- Genre -->
        <div class="mb-4">
        <label for="genre" class="block text-sm font-medium mb-1">Genre</label>
        <select id="genre" v-model="values.genre" class="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white appearance-none">
            <option value="" disabled>Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
        </select>
        </div>

          <!-- Thumbnail Upload -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">Upload Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              @change="handleFileUpload"
              class="w-full text-gray-700 border rounded-lg bg-gray-800"
            />
            <ErrorMessage name="thumbnailFiles" class="text-red-500 text-sm" />
          </div>
  
          <!-- Director -->
          <div class="mb-4">
            <label for="director" class="block text-sm font-medium mb-1">Director</label>
            <Field id="director" name="director" as="input" type="text" class="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white" />
            <ErrorMessage name="director" class="text-red-500 text-sm" />
          </div>
  
          <!-- Actor -->
          <div class="mb-4">
            <label for="actor" class="block text-sm font-medium mb-1">Actor</label>
            <Field id="actor" name="actor" as="input" type="text" class="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white" />
            <ErrorMessage name="actor" class="text-red-500 text-sm" />
          </div>
  
          <!-- Airing Time -->
          <div class="mb-4">
            <label for="airing-time" class="block text-sm font-medium mb-1">Airing Time</label>
            <Field id="airing-time" name="airingTime" as="input" type="datetime-local" class="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white" />
            <ErrorMessage name="airingTime" class="text-red-500 text-sm" />
          </div>
  
          <!-- Duration -->
          <div class="mb-4">
            <label for="duration" class="block text-sm font-medium mb-1">Duration (minutes)</label>
            <Field id="duration" name="duration" as="input" type="number" min="1" class="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white" />
            <ErrorMessage name="duration" class="text-red-500 text-sm" />
          </div>
  
          <!-- Preview and Upload -->
          <div class="mb-4">
            <button type="button" @click="previewMovie" class="w-full px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold mb-2 hover:bg-blue-600 transition">Preview</button>
            <button type="submit" class="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-pink-600 transition">Upload Movie</button>
          </div>
        </form>
      </div>
  
      <!-- Preview Section -->
      <div class="hidden md:block md:w-1/2 p-4">
        <div class="h-full bg-gray-800 rounded-lg p-4">
          <h3 class="text-xl font-bold mb-4">Preview</h3>
          <div v-if="preview">
            <h4 class="text-lg font-semibold mb-2">{{ preview.title }}</h4>
            <img :src="preview.thumbnailUrl" alt="Movie Thumbnail" class="w-full h-auto mb-2 rounded-lg shadow-md"/>
            <p class="text-sm mb-2">Director: {{ preview.director }}</p>
            <p class="text-sm mb-2">Actor: {{ preview.actor }}</p>
            <p class="text-sm mb-2">Genre: {{ preview.genre }}</p>
            <p class="text-sm mb-2">Airing Time: {{ preview.airingTime }}</p>
            <p class="text-sm">Duration: {{ preview.duration }} minutes</p>
          </div>
          <div v-else>
            <p class="text-gray-400">No preview available.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
 
  <script>
  import { defineComponent, ref } from 'vue';
  import { useForm } from 'vee-validate';
  
  export default defineComponent({
    setup() {
      const { handleSubmit, values, errors, isSubmitting } = useForm({
        initialValues: {
          genre: '',
          movieTitle: '',
          director: '',
          actor: '',
          airingTime: '',
          duration: '',
          thumbnailFiles: []
        }
      });
  
      const preview = ref(null);
  
      const handleFileUpload = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
          const file = files[0];
          const reader = new FileReader();
          reader.onload = (e) => {
            preview.value = {
              title: values.movieTitle,
              thumbnailUrl: e.target.result,
              director: values.director,
              actor: values.actor,
              genre: values.genre,
              airingTime: values.airingTime,
              duration: values.duration
            };
          };
          reader.readAsDataURL(file);
        }
      };
  
      const previewMovie = () => {
        if (values.movieTitle && values.thumbnailFiles.length > 0) {
          preview.value = {
            title: values.movieTitle,
            thumbnailUrl: URL.createObjectURL(values.thumbnailFiles[0]),
            director: values.director,
            actor: values.actor,
            genre: values.genre,
            airingTime: values.airingTime,
            duration: values.duration
          };
        } else {
          alert('Please fill out the required fields and upload a thumbnail.');
        }
      };
  
      const submitForm = (values) => {
        // Handle form submission
        console.log('Form submitted:', values);
      };
  
      return {
        handleSubmit: handleSubmit(submitForm),
        handleFileUpload,
        previewMovie,
        preview,
        values,
        errors,
        isSubmitting
      };
    }
  });
  </script>
  
  <style scoped>
  /* Additional styles for better UX */
  button {
    cursor: pointer;
  }
  button:hover {
    opacity: 0.9;
  }
  select {
    background-repeat: no-repeat;
    background-position: right 0.7em center;
    background-size: 0.65em auto;
  }
  </style>
  
 