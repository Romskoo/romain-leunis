import './MaskFooter.scss';
import gsap from 'gsap';

import Mask from '../../../assets/image-footer.webp';

const MaskFooter = () => {
    return(
        <div className='MaskFooter'>
            <img src={Mask} className='mask' />
        </div>
    )
}

export default MaskFooter;