import React from "react";
import { Switch,Route } from "react-router-dom";

import './App.css';

import HomePage  from "./pages/homepage/homepage.component"; 
import ShopPage  from "./pages/shop/shop.component"; 
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

//firebase
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(props){
   super(props);

   this.state = {
     currentUser: null
   }
  }

  // for subscription
  unsubscribeFromAuth = null;

  componentDidMount(){
    // getting currently authenticated user from firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser:userAuth});
      if(userAuth){
         const userRef = await  createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          });
         })
      } else{
       this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser}/> 
       <Switch>
         <Route exact={true} path="/" component={HomePage} />
         <Route path="/shop" component={ShopPage} />
         <Route path="/signin" component={SignInAndSignUpPage} />
       </Switch>
      </div>
    );
  }
}

export default App;
