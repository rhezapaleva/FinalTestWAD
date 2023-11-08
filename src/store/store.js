import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase/firebaseconfig.js'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth'

import db from "../firebase/firebaseconfig.js"
import { doc, setDoc,addDoc,collection} from "firebase/firestore";

export default createStore({
  state: {
    user: null
  },
  mutations: {

    SET_USER (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    }

  },
  actions: {
    async login ({ commit }, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        console.log(error.message)
        switch(error.code) {
          case 'auth/missing-email':
            alert('Missing Email!')
            break
            case 'auth/missing-password':
            alert('Missing Password')
            break
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
            case 'auth/invalid-login-credentials':
            alert("Invalid Login Credentials!")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },

    async register ({ commit}, details) {
       const { email, password } = details
      // const docRef = await setDoc(collection(db,"usersForProj",
      // {email:email}

      // ));
      const username = email.split('@')[0];
      const colRef= collection(db,"usersForProj")

      const dataObj={
        email: email,
        username: username,
        contactInformation: "",
        is_service_provider: true,
        location: "",
        userid: "",
        profileImage: "",
        calendlyURL: "",
        mrr: {},
        permits: {
          website1: {
            desciption: "",
            name: "",
            url: "",
          },
          website2: {
            name: "",
            description: "",
            url: "",
          },
          website3: {
            name: "",
            description: "",
            url: "",
          },
          website4: {
            name: "",
            description: "",
            url: "",
          },
          website5: {
            name: "",
            description: "",
            url: "",
          },
        },
        prevmonthsales: "",
        recentsales: "",
        responsetime: "",
        salesPrevPercent: "",
        Courses: {
          Course1: {
            cname: "",
            cimg: "",
          },
          Course2: {
            cname: "",
            cimg: "",
          },
        },
        webpage: {
          referral: "",
          direct: "",
          organic: "",
        },
        name: "",
        creationdate: "",
        reviews: [],
        serviceList: {
          serviceTitle: "",
          serviceDescription: "",
          serviceImage: [],
          serviceId: "",
          serviceCategory: "",
          productArray: [
            {
              product_image: "",
              product_description: "",
              product_name: "",
              pricing: "",
            },
            {
              product_image: "",
              product_description: "",
              product_name: "",
              pricing: "",
            },
            {
              product_image: "",
              product_description: "",
              product_name: "",
              pricing: "",
            },
          ],
        },
      }

      const docRef=await addDoc(colRef,dataObj)

      //  await addDoc(doc(db, "usersForProj"),
      //  {
      //   email:  email

      //  }
      // );

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        console.log(error.message)
        switch(error.code) {
          case 'auth/missing-email':
            alert('Missing Email!')
            break
            case 'auth/missing-password':
            alert('Missing Password')
            break
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },

    async logout ({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/loginPage')
    },

    fetchUser ({ commit }) { //check if user exists or what not
      auth.onAuthStateChanged(async user => { //if user sign in or out
        if (user === null) { // if no users
          commit('CLEAR_USER') //log out users
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/loginPage') {
            router.push('/')
          }
        }
      })
    }
    
  }
})