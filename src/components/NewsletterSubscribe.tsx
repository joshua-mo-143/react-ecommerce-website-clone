import {faCheck, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

type Props = {}

const NewsletterSubscribe = (props: Props) => {

    const [email, setEmail] = React.useState<string>("");
    const [submitted, setSubmitted] = React.useState<boolean>(false);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setSubmitted(true);
    }

  return (
    <div className="w-full h-full m-auto py-10">
        <div className="w-4/5 h-full m-auto flex flex-col gap-4 bg-sky-200 py-10">
            <h1 className='text-center text-sm lg:text-lg w-4/5 m-auto'>Subscribe to get all of our updates on your favourite brands, new arrivals and promotions.</h1>
            <form className='flex flex-row justify-center items-center' onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <input name="email" type="email" className='lg:px-5 lg:py-2' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <button type="submit" className='px-2 lg:px-5 lg:py-2 bg-fuchsia-300' name="Newsletter subscription button">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </form>
            {submitted ? <p className='text-center'><FontAwesomeIcon icon={faCheck}/> Thanks for subscribing!</p> : ""}
        </div>
    </div>
  )
}

export default NewsletterSubscribe