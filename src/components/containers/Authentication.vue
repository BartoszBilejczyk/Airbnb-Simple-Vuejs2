<!-- <template lang="html">
  <div class="">
    <v-layout class="airbnb-navigation" tag="ul" row justify-end>
      <li class="airbnb-navigation__item" @click="signUp()">
        Sign up
      </li>
      <li class="airbnb-navigation__item" @click="dialog2 = true">
        Log in
      </li>
    </v-layout>

    <v-dialog v-model="dialog2">
      <v-card>
        <v-layout pr-4 pl-4 column>
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
              @keyup.enter="signIn()"
            ></v-text-field>
          </div>
          <v-btn
            v-if="isSigningIn"
            block
            @click="signIn()"
            class="game-authentication__button">
              Sign In
          </v-btn>
          <v-btn
            v-else
            block
            @click="signUp()"
            class="game-authentication__button">
              Sign Up
          </v-btn>

          <div v-if="isSigningIn"
               class="grey--text
                      grey-lighten-4">
            <span>Or sign in easily with</span>
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
          </div>
        </v-layout>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
import {db, auth} from '../../firebase'
import firebase from 'firebase'

export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      email: 'biley94@gmail.com',
      password: 'biley##',
      isSigningIn: true,
      user: null
    }
  },
  firebase: {
    users: db.ref('users')
  },
  beforeCreate() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user
      }
    })
  },
  methods: {
    signUp() {
      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          // sending user to users node in firebase
          this.$firebaseRefs.users.push({uid: result.uid, providerData: result.providerData})
          // dispatching action to vuex (logging user in after creting him)
          this.$store.dispatch('LOGIN_USER', result)
          console.log('user signed up')
        })
        .catch(error => {
          console.log(error.code)
          console.log(error.message)
        })
    },
    signIn() {

    },
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithRedirect(provider).then(result => {
        this.user = result.user
      })
    },
    signOut() {
      auth.signOut()
      this.$store.dispatch('LOGOUT_USER', null)
      this.$router.push('/')
    }
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
    }
  }
}

</style> -->
