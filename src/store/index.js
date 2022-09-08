import { createStore } from 'vuex'
import { firebaseAuth } from "../firebase/firebaseInit";
import { db } from "../firebase/firebaseInit";
/**/ 
import { collection, getDoc, getDocs , doc, query, orderBy, deleteDoc, where , onSnapshot} from "firebase/firestore"; 
import { getFirestore,  setDoc } from "firebase/firestore";
export default createStore({
  state: {
    editPost:null,
    blogPost:[],
    postLoaded:null,
    blogPhotoName:'',
    blogTitle:'',
    blogHtml:'Write Your blog post here..',
    blogPhotoFileUrl:'',
    user:null,
    userEmail:'',
    userFirstname:'',
    userLastname:'',
    userUsername:'',
    userId:'',
    UserInitials:'',
    userPassword:''
  },
  getters: {
    blogPostFeed(state){
      return state.blogPost.slice(0,2)
    },
    blogPostCards(state){
      return state.blogPost.slice(2,6)
    }
  },
  mutations: {
   async getPost(state){

      const citiesRef = query(collection(db, "Blogs"),orderBy("blogDate"))
      const querySnapshot = await getDocs(citiesRef);
querySnapshot.forEach((doc) => {
  let store= {
blogEmail: doc.data().blogID,
blogUrl :doc.data().blogUrl,
blogCoverPhoto: doc.data().blogCoverPhoto,
blogHtml: doc.data().blogHtml,
blogTitle: doc.data().blogTitle,
blogId: doc.id,
blogDate: doc.data().blogDate,
blogUsername: doc.data().userName,
blogEditable: doc.data().editable
  };
  let res = state.blogPost.find((item) => item.blogId == store.blogId);
  if (res === undefined) {
    state.blogPost.push(store)

  }else{
    return state.blogPost
  }
});
state.postLoaded = true
    },
    async editPost(state){

      const citiesRef = query(collection(db, "Blogs"),orderBy("blogDate"))
      const querySnapshot = await getDocs(citiesRef);
querySnapshot.forEach((doc) => {
  let store= {
blogEmail: doc.data().blogID,
blogUrl :doc.data().blogUrl,
blogCoverPhoto: doc.data().blogCoverPhoto,
blogHtml: doc.data().blogHtml,
blogTitle: doc.data().blogTitle,
blogId: doc.id,
blogDate: doc.data().blogDate,
blogUsername: doc.data().userName,
blogEditable: doc.data().editable
  };

    state.blogPost.push(store)


});
state.postLoaded = true
    },
    changeUserDetails(state){
      const user = firebaseAuth.currentUser
      const docRef = doc(db, "Users", user.uid);
      const data = {
        Firstname: state.userFirstname,
        Lastname: state.userLastname,
        Email: state.userEmail ,
        Username:state.userUsername,
        password:state.userPassword
      };
      setDoc(docRef, data)
.then(docRef => {
    console.log(docRef);
})
.catch(error => {
    console.log(error);
})
    },
    setCurrent(state, payload){
      console.log(payload);
      state.blogHtml = payload.blogHtml

      state.blogId = payload.blogId
      state.blogTitle = payload.blogTitle
      state.blogPhotoFileUrl = payload.blogUrl
      state.blogPhotoName = payload.blogCoverPhoto
    },
    async deletePost(state, payload){
      await deleteDoc(doc(db, "Blogs", payload));
      state.blogPost = state.blogPost.filter(item => item.blogId != payload)
    },
    toggleEditPost(state, payload){
    state.editPost = payload
    },
    changeFirstname(state, payload){
      state.userFirstname = payload
    },
    changeLastname(state, payload){
      state.userLastname = payload
    },changeUsername(state, payload){
      state.userUsername = payload
    },
    updateUser(state, payload){
      state.user = payload
    },
    updateBlogHtml(state, payload){
      state.blogHtml = payload
    },
    updateBlogTitle(state, payload){
      state.blogTitle = payload

    },
    filenameChanged(state, payload){
      state.blogPhotoName = payload

    },
    createFileUrl(state, payload){
      state.blogPhotoFileUrl = payload

    },
   async userDetail(state){
    const user = firebaseAuth.currentUser
      const docRef = doc(db, "Users", user.uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  let db = []
  let initial = docSnap.data().Firstname.toUpperCase().slice(0,1) + docSnap.data().Lastname.toUpperCase().slice(0,1)
state.userFirstname = docSnap.data().Firstname
state.userLastname = docSnap.data().Lastname
state.userEmail = docSnap.data().Email
state.userUsername = docSnap.data().Username
state.userPassword = docSnap.data().password
state.UserInitials = initial
 db=[...db, state.userFirstname, state.userLastname, state.userEmail, state.userUsername, initial,state.userPassword, user.uid]

} else {
  console.log("No such document!");
}
    }
  },
  actions: {
  },
  modules: {
  }
})
