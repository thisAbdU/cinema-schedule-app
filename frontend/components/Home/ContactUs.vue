<template>
  <div class="bg-transparent py-16">
    <section id="contact-section">
    <div class="max-w-3xl mx-auto text-center space-y-8">
      <h2 class="text-4xl font-bold text-white font-abhaya-libre">
        Request More Information
      </h2>
      
      <!-- Form section -->
      <Form @submit="handleSubmit" class="space-y-4">
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 shadow-md">
          <div class="px-4 py-6 bg-white rounded-t-lg dark:bg-gray-800">
            <Field
              name="comment"
              as="textarea"
              id="comment"
              rows="4"
              class="w-full px-3 py-2 text-sm text-gray-900 bg-white border rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 dark:text-white dark:placeholder-gray-400"
              placeholder="Your message here..."
            />
            <ErrorMessage name="comment" class="text-red-500 text-xs mt-1" />
          </div>

          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 space-x-4">
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-8 text-xs font-medium text-center text-white bg-gradient-to-r from-[#FF4766] to-[#5C28D4] rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:from-[#E33958] hover:to-[#4C22A3]"
            >
              Send
            </button>
            <div class="flex space-x-1">
              <!-- Attach file button -->
              <button
                type="button"
                class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                  />
                </svg>
                <span class="sr-only">Attach file</span>
              </button>
              <!-- Set location button -->
              <button
                type="button"
                class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path
                    d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                  />
                </svg>
                <span class="sr-only">Set location</span>
              </button>
              <!-- Upload image button -->
              <button
                type="button"
                class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path
                    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                  />
                </svg>
                <span class="sr-only">Upload image</span>
              </button>
            </div>
          </div>
        </div>
      </Form>

      <p class="text-xs text-gray-500 dark:text-gray-400 mt-6">
        By booking a ticket, you agree to our
        <a href="#" class="text-red-600 dark:text-red-500 hover:underline">Terms & Conditions</a>.
        Please ensure you arrive on time as latecomers may not be admitted. Tickets are non-refundable.
      </p>
    </div>
  </section>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

// Define form schema
const schema = yup.object({
  comment: yup.string().required('Please provide your comment.')
});

// Submit handler
function handleSubmit(values) {
  console.log('Form submitted', values);
}
</script>
