import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center lg:min-h-[30rem] w-full bg-red-500'>
        <div className='flex flex-col justify-center py-5'>
            <h1 className='py-4 text-center'>Sign In</h1>
            <form action="" className='flex flex-col gap-4'>
                <label htmlFor="" className='flex flex-row gap-4 items-center justify-end lg:justify-center'>
                    <span>Email:</span>
                    <input type="email" className='lg:px-5 lg:py-2' />
                </label>
                <label htmlFor="" className='flex flex-row gap-4 items-center'>
                    <span>Password:</span>
                    <input type="password" className='lg:px-5 lg:py-2' />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login