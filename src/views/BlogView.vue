<template>
 <div class="blog-view  top-10 relative px-5 mb-20">
    <p v-if="clickedonEdit" class="flex-w-full my-3 bg-dark text-white text-center rounded py-2">
        Ps: You can only make changes to your post
    </p>
    <div class="mt-5 flex items-center justify-end">
     
        <span class="text-xs font-semibold text-dark mr-4">
            Toggle Editing Post
        </span>
        <input type="checkbox"  @click="editPost">
    </div>
    <div class="relative mt-5">
        <div class="mt-5 px-4 gap-y-16 gap-x-7 grid  place-items-center grid-cols-1 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2">
        <BlogCard
          v-for="(post, index) in sampleBlogCards"
          :key="index"
          :posts="post"
        />
      </div>
    </div>
 </div>
</template>

<script>
       import { firebaseAuth } from "../firebase/firebaseInit";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import BlogCard from '@/components/BlogCard.vue';
export default {
    created(){
    onAuthStateChanged(firebaseAuth, (user) => {
this.email= (user.email);
  })
  this.post = (this.getPostFromStore);
},
mounted(){
   

},
    data(){
        return{
email:null,
post:null,
clickedonEdit:null
        }
    },
    components:{
        BlogCard
    },
    methods:{
      
        editPost(){
            this.clickedonEdit = !this.clickedonEdit
let filter = this.post.filter(item => item.blogEmail.toLowerCase() == this.email.toLowerCase())

filter.forEach(item=>{
    item.blogEditable = !item.blogEditable
})
        }
    },
    computed:{
sampleBlogCards(){
  return this.$store.state.blogPost
},
getPostFromStore(){
return this.$store.state.blogPost
}
  },
    beforeUnmount(){
        this.$store.commit('toggleEditPost', false)
    }
    
    }
</script>

<style lang="scss" scoped>
input[type='checkbox']{
    position: relative;
    border:none;
    -webkit-appearance: none;
    background: white;
    outline:none;
    height:38px;
    width: 82px;
    border-radius: 20px;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

&:before{
    content:'';
    position:absolute;
    width: 25px;
    height:25px;
    border-radius: 20px;
    transition: .75s ease all;
    top: 5.5px;
    left:5px;
    background:#363030;
    transform:scale(1.1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

}

}
input:checked[type='checkbox']:before{
    background: #fff;
    left:52px;
}
</style>