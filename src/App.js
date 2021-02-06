import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import HomePage  from "./pages/homepage/homepage.component"; 
import ShopPage  from "./pages/shop/shop.component"; 
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";

//firebase
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

// redux
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {

  // constructor(props){
  //  super(props);

  //  this.state = {
  //    currentUser: null
  //  }
  // }

  // for subscription
  unsubscribeFromAuth = null;

  componentDidMount(){
    // getting currently authenticated user from firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser:userAuth});
      if(userAuth){
         const userRef = await  createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapshot=>{
          // this.setState({
          //   currentUser:{
          //     id: snapshot.id,
          //     ...snapshot.data()
          //   }
          // });
          this.props.setCurrentUser({
           id: snapshot.id,
           ...snapshot.data()
          });
         });
      } else{
      //  this.setState({ currentUser: userAuth });
      this.props.setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    // doing this to avoid memory leaks as subscription is created 
    // in componentDidMoutn with auth.onAuthStateChanged() method of firebase
  }

  render() {
    return (
      <div>
        <Header /> 
        {/* <Header currentUser={this.state.currentUser}/>  */}
       <Switch>
         <Route exact={true} path="/" component={HomePage} />
         <Route path="/shop" component={ShopPage} />
         {/* <Route path="/signin" component={SignInAndSignUpPage} /> */}
         <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/" />): (<SignInAndSignUpPage />)} />
         <Route exact path="/checkout" component={CheckoutPage} />
       </Switch>
      </div>
    );
  }
}

const mapStateToProps = state  => ({
  currentUser: state.user.currentUser
})

// sending data to store
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


// for exact -> if there is not ex- checkout/id  or /anydata
// then we can write exact={true} else we dont