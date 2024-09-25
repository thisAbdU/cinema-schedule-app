<template>
  <footer class="bg-gray-900 text-white">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="https://yourwebsite.com/" class="flex items-center">
            <img src="@/assets/img/logo-no-background.svg" class="h-16" alt="Your Company Logo" />
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <a href="https://www.instagram.com/yourprofile" class="hover:underline">Instagram</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@yourprofile" class="hover:underline">TikTok</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-700 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-400 sm:text-center">© 2024 <a href="https://yourwebsite.com/" class="hover:underline">Cinema app™</a>. All Rights Reserved.</span>
        <div class="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
          <a href="https://www.facebook.com/yourprofile" class="text-gray-400 hover:text-white">
            <img src="@/assets/img/instagram-1-svgrepo-com.svg" class="h-5" alt="Facebook Logo" />
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="https://www.tiktok.com/@yourprofile" class="text-gray-400 hover:text-white">
            <img src="@/assets/img/tiktok-icon-white-1-logo-svgrepo-com.svg" class="h-5" alt="TikTok Logo" />
            <span class="sr-only">TikTok page</span>
          </a>
          <a href="https://www.tiktok.com/@yourprofile" class="text-gray-400 hover:text-white">
            <img src="@/assets/img/snapchat-snap-chat-svgrepo-com.svg" class="h-5" alt="Snap Logo" />
            <span class="sr-only">Snap page</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
footer {
  background-color: #1a202c; /* Tailwind's gray-900 */
  color: #edf2f7; /* Tailwind's gray-100 for text */
}

hr {
  border-color: #2d3748; /* Tailwind's gray-700 */
}
</style>
