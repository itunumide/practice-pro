import React from 'react'
import Button from './Button'

const SignupLeft = () => {
  return (
    <div className='h-full w-[100%] flex-col text-white bg-[#4ab0b1] flex items-center justify-center'>
      <h1 className='text-4xl' >Welcome back</h1>
      <p>To keep connected with us please login with your personal friends</p>
      <Button bg={''} border={'1px'} text={'Sign in'}/>
      
    </div>
  )
}

export default SignupLeft
