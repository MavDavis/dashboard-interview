<template>
  <div
    class="
      create-blog
      container
      flex flex-col
      sm:justify-center sm:top-7
      justify-start
      top-28
      relative
      px-5
      min-h-screen
    "
  >
    <div class="err-message" :class="{ hidden: !error }">
      <p>
        <span>Error:</span>
        {{ errorMsg }}
      </p>
    </div>
    <div
      class="
        blog-info
        flex
        md:items-center
        items-start
        md:flex-row
        flex-col
        mb-4
      "
    >
      <input
        type="text"
        class="
          text-lg
          font-semibold
          tracking-wider
          outline-0
          border-b
          py-1
          mb-3
          border-darkest
        "
        placeholder="Enter Blog Title"
        v-model="blogTitle"
      />
      <div
        class="
          upload-file
          items-start
          sm:items-center sm:flex-row
          flex-col flex
        "
      >
        <label
          for="blog-photo"
          class="
            md:ml-3
            ml-0
            mt-1
            mb-2
            sm:mb-0 sm:mt-0
            hover:tracking-wider
            rounded-full
            py-2
            px-3
            bg-dark
            text-white text-sm
            tracking-wide
          "
          >Upload Cover Photo</label
        >
        <input
          class="hidden"
          type="file"
          ref="blogPhoto"
          id="blog-photo"
          accept=".jpg, .png, .jpeg"
        />
        <button
          :disabled="!this.$store.state.blogPhotoFileUrl"
          class="
            bg-gray-300
            rounded-full
            px-3
            py-2
            text-white text-sm
            sm:mx-3
            mx-0
          "
          :class="{ 'opacity-100': !this.$store.state.blogPhotoFileUrl }"
        >
          Preview Photo
        </button>
        <span>File Chosen: {{ this.$store.state.blogPhotoName }}</span>
      </div>
    </div>
    <div class="flex w-full flex-col sm:h-96">
      <QuillEditor theme="snow" :modules="modules" v-model="blogHtml" />
    </div>
    <div class="flex iems-center justify-start mt-4">
      <button
        class="
          ml-3
          hover:tracking-wider
          rounded-full
          py-2
          px-3
          bg-dark
          text-white text-sm
          tracking-wide
        "
      >
        Publish Blog
      </button>
      <router-link
        to="/"
        class="
          ml-3
          hover:tracking-wider
          rounded-full
          py-2
          px-3
          bg-dark
          text-white text-sm
          tracking-wide
        "
        >Post Preview</router-link
      >
    </div>
  </div>
</template>

<script>
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import { ref } from "@vue/reactivity";
export default {
  setup: () => {
    const error = ref(false);
    const errorMssg = ref("");
    const modules = {
      name: "blotFormatter",
      module: BlotFormatter,
      options: {
        /* options */
      },
    };
    return { modules, error, errorMssg };
  },
};
</script>

<style lang="scss">
    .ql-editor{
        overflow: scroll;
        max-height: 50vh;
        @media (max-width:576px) {
            max-height:30vh;
            height:30vh;
            bottom: 5rem;
        }
    }
</style>
