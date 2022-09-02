import Lottie from 'react-lottie'
import { ErrorLottie } from '../assets/lottie'
export default function PageNotFound() {
    return <Lottie options={{animationData:ErrorLottie,autoplay:true,loop:true}}  height='80vh' />
}