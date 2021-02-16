import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
const StripeCheckoutButton = ({ price })=>{
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ILV81HMxIqu4YKqQCs5gtZuMqrkkUpMrd6HuZuKseMJqsbKvNvhfSCUYesYQCwPYCJ9jZP7n3jMZprkFPHcjAYM00KAYtXIDn';

  const onToken = token =>{
      console.log(token);
      alert('Payment Successfull');
  }

  return(
    <StripeCheckout
    label="Pay Now" 
    name="CRWN CLOTHING LTD."
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}
    bitcoin
    />
  )
}

export default StripeCheckoutButton;

//value should be in cent for dollars in stripe

// export it and import in the checkoutpage component