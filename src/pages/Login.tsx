import React from 'react'
import {Helmet} from 'react-helmet'

type Props = {}

const Login = (props: Props) => {
  return (
<>
<Helmet>
    <meta name="description" content="Website login page"/>
  </Helmet>
    <div className='flex flex-col justify-center items-center lg:min-h-[30rem] w-full'>
        <div className='flex flex-col justify-center py-5'>
            <h1 className='py-4 text-center'>Sign In</h1>
            <form action="" className='flex flex-col gap-4'>
                <label htmlFor="email" className='flex flex-row gap-4 items-center justify-end lg:justify-center'>
                    <span>Email:</span>
                    <input name="email" type="email" className='lg:px-5 lg:py-2 bg-stone-200' />
                </label>
                <label htmlFor="password" className='flex flex-row gap-4 items-center'>
                    <span>Password:</span>
                    <input name="password" type="password" className='lg:px-5 lg:py-2 bg-stone-200' />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login