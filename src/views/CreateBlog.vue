<template>
    <Loading v-if="loading"/>
  <div v-if="preview">
    <PhotoPreview @closeModal="preview = false" />
  </div>
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
    <div
      v-if="this.error"
      class="
        err-message
        w-full
        flex
        mb-2
        bg-dark
        rounded-md
        px-5
        py-2
        text-white
      "
    >
      <p>
        <span>Error:</span>
        {{ errorMssg }}
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
          @change="FileChanged()"
          type="file"
          ref="blogPhoto"
          id="blog-photo"
          accept=".jpg, .png, .jpeg"
        />
        <button
          :disabled="!this.$store.state.blogPhotoFileUrl"
          @click="previewChange()"
          class="bg-dark rounded-full px-3 py-2 text-white text-sm sm:mx-3 mx-0"
          :class="{ 'bg-gray-300': !this.$store.state.blogPhotoFileUrl }"
        >
          Preview Photo
        </button>
        <span>File Chosen: {{ this.$store.state.blogPhotoName }}</span>
      </div>
    </div>
    <div class="flex w-full flex-col sm:h-96">
      <QuillEditor
        theme="snow"
        :modules="modules"
        v-model:content="blogHtml"
        contentType="html"
      />
    </div>
    <div class="flex iems-center justify-start mt-4">
      <button
        @click="uploadBlog()"
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
        :to="{ name: 'PostPreview' }"
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
import { storage } from "../firebase/firebaseInit";
import { db } from "../firebase/firebaseInit";
import { doc, setDoc, addDoc,  Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { ref } from "@vue/reactivity";
import PhotoPreview from "@/components/PhotoPreview.vue";
import Loading from "@/components/Loading.vue";
export default {
    created(){
    },

  data() {
    return {
      preview: false,
      file: null,
      error: false,
      loading:false,
      errorMssg: "",
      modules: {
        name: "blotFormatter",
        module: BlotFormatter,
        options: {
          /* options */
        },
      },
    };
  },
  computed: {
    uniqueID(){
        return this.uid
    },
    userId() {
      return this.$store.state.UserId;
    },
    blogPhotoName() {
      return this.$store.state.blogPhotoName;
    },
    blogTitle: {
      get() {
        return this.$store.state.blogTitle;
      },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      },
    },
    blogHtml: {
      get() {
        return this.$store.state.blogHtml;
      },
      set(payload) {
        this.$store.commit("updateBlogHtml", payload);
      },
    },
  },
  methods: {
    FileChanged() {
      this.file = this.$refs.blogPhoto.files[0];
      const filename = this.file.name;
      this.$store.commit("filenameChanged", filename),
        this.$store.commit("createFileUrl", URL.createObjectURL(this.file));
    },
    previewChange() {
      this.preview = true;
      console.log("hy");
    },
    uploadBlog() {
      if (this.$store.state.blogHtml.length < 0) {
        this.error = true;
        this.errorMssg = "Please, enter a Post body ";

        setTimeout(() => {
          this.error = false;
          this.errorMssg = " ";
        }, 5000);

        return;
      } else if (this.$store.state.blogTitle.length < 0 ) {
        this.error = true;
        this.errorMssg = "Please, enter a Post Title ";

        setTimeout(() => {
          this.error = false;
          this.errorMssg = " ";
        }, 5000);

      } else if (this.file == null) {
        this.error = true;
        this.errorMssg = "Please, enter a Post Image ";
        setTimeout(() => {
          this.error = false;
        }, 5000);
      } else {
        this.loading= true;
        this.error = false;
        const imgRef = ref(
          storage,
          `documents/${this.$store.state.blogPhotoName}`
        );

        uploadBytes(imgRef, this.file).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        }
        ).then(() => {
    getDownloadURL(imgRef).then((downloadURL) => {
let ID = Math.floor((Math.random() * 1234567890 - Math.random() * 5678) )+'' +'ABOOp'
        const docData = {
    blogUrl:downloadURL,
    blogDate: Timestamp.fromDate(new Date(Date.now())),
  blogHtml : this.$store.state.blogHtml,
  blogTitle: this.$store.state.blogTitle,
  blogPhotoName: this.$store.state.blogPhotoName,
userName:this.$store.state.userUsername,
  blogID:this.$store.state.userEmail 

};
 setDoc(doc(db, "Blogs", ID ), docData);

this.$router.push('/blogView')
window.location.reload()


    })}).catch((err)=>{
        this.loading=false
            console.log(err);
        })
      }
      
    },
  },
  components: { PhotoPreview, Loading },
};
</script>

<style lang="scss">
.ql-editor {
  overflow: scroll;
  max-height: 50vh;
  @media (max-width: 576px) {
    max-height: 30vh;
    height: 30vh;
    bottom: 5rem;
  }
}
</style>
