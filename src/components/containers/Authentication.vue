<template lang="html">
  <div class="">
    <v-layout v-if="!user" class="airbnb-navigation" tag="ul" row justify-end>
      <li class="airbnb-navigation__item" @click="dialog = true; isLoggingIn = false">
        Sign up
      </li>
      <li class="airbnb-navigation__item" @click="dialog = true; isLoggingIn = true">
        Log in
      </li>
    </v-layout>

    <v-layout v-else class="airbnb-navigation" tag="ul" row justify-end>
      <v-menu open-on-hover offset-y nudge-top="-10">
        <img
          class="airbnb-navigation__avatar"
          src="../../assets/images/minion.jpg"
          alt=""
          slot="activator"
          >
        <v-card>
          <li class="airbnb-navigation__item">
            <router-link :to="{ name: 'user-profile'}">Your profile</router-link>
          </li>
          <li class="airbnb-navigation__item" @click="signOut(); snackbar = true">
            Log Out
          </li>
        </v-card>
      </v-menu>
    </v-layout>

    <v-dialog v-model="dialog">
      <v-card>
        <v-layout pr-4 pl-4 pt-4 pb-4 column>
          <div>
            <v-text-field
              label="Email"
              single-line
              prepend-icon="mail_outline"
              v-model="email"
            ></v-text-field>
            <v-text-field
              type="password"
              label="Password"
              single-line
              prepend-icon="lock_outline"
              v-model="password"
            ></v-text-field>
            <div class="airbnb-error">
              <p>{{ errorMessage }}</p>
            </div>
          </div>
          <v-btn
            v-if="isLoggingIn"
            block
            @click="signIn()">
              Sign In
          </v-btn>
          <v-btn
            v-else
            block
            @click="signUp()">
              Sign Up
          </v-btn>

          <v-layout v-if="isLoggingIn"
                    class="grey--text
                           grey-lighten-4"
                    mt-2 mb-2 column>
            <span class="text-xs-center">or</span>
            <div>
              <v-btn block
                     @click="signInWithGoogle()"
                     class="airbnb-authentication-social__item">
                <img class="airbnb-authentication-social__icon"
                     src="../../assets/images/google.svg"
                     alt="Google">
                Sign in with Google
              </v-btn>
            </div>
          </v-layout>

          <v-layout mt-4 mb-2>
            <v-layout justify-space-around v-if="isLoggingIn">
              Don't have an account?<a @click="isLoggingIn = false">Sign up!</a>
            </v-layout>

            <v-layout justify-space-around v-if="isLoggingIn === false">
              Already have an account?<a @click="isLoggingIn = true">Log in</a>
            </v-layout>
          </v-layout>
        </v-layout>
      </v-card>
    </v-dialog>

    <v-snackbar
      top
      :timeout="timeout"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >{{ text }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>

</template>

<script>
import {db, auth} from '../../firebase'
import firebase from 'firebase'

export default {
  data() {
    return {
      dialog: false,
      email: '',
      password: '',
      isLoggingIn: true,
      errorMessage: '',

      // snackbar
      snackbar: false,
      color: '',
      mode: '',
      timeout: 3000,
      text: 'You\'ve been logged out successfully'
    }
  },
  // firebase: {
  //   users: db
  // },
  beforeCreate() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user
        console.log('there is user')
      } else {
        console.log('no user')
      }
    })
  },
  computed: {
    user() {
      return this.$store.state.loggedUser
    }
  },
  methods: {
    signUp() {
      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          // sending user to users node in firebase
          this.$firebaseRefs.users.push({uid: result.uid, providerData: result.providerData})
          // dispatching action to vuex (logging user in after creting him)
          this.$store.dispatch('LOGIN_USER', result)
          this.dialog = false
          console.log('user signed up')
        })
        .catch(error => {
          console.log(error.code)
          console.log(error.message)
          this.errorMessage = error.message
        })
    },
    signIn() {
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then(result => {
          this.$store.dispatch('LOGIN_USER', result)
          this.dialog = false
        })
        .catch(error => {
          console.log(error.code)
          console.log(error.message)
          this.errorMessage = error.message
        })
    },
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithRedirect(provider).then(result => {
        this.user = result.user
      })
      this.dialog = false
    },
    signOut() {
      auth.signOut()
      this.$store.dispatch('LOGOUT_USER', null)
      this.$router.push('/')
    }
  },
  created() {
    this.$bindAsObject('users', db.ref('users'))
  }

}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

.airbnb {
  &-navigation {
    padding: 0;
    margin: 0;

    &-wrapper {

    }

    &__item {
      padding: 10px 20px;
      list-style: none;
      @include font(11, 300);
    }

    &__avatar {
      width: 50px;
      border-radius: 50px;
    }
  }

  &-error {
    color: pal(brand, pink);
  }

  &-authentication-social {
    &__item {
      margin-top: 10px;
      padding: 7px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      &:hover {
        transition: 0.2s;
        background-color: pal(white);
      }
    }

    &__icon {
      width: 20px;
      margin-right: 10px;
    }
  }
}

</style>
