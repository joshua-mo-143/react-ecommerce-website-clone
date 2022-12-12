import {Link} from 'react-router-dom'

type Props = {
    link: string;
    text: string;
}

const NavigationLink = ({link, text}: Props) => {
  return (
    <li className=' transition-all hover:border-b-2 border-b-fuchsia-700'><Link to={link}>{text}</Link></li>
  )
}

export default NavigationLink