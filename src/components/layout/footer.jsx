import React from 'react'
import image1 from '../../assets/imgs/fb2.png'
import image2 from '../../assets/imgs/twitt3.png'
import image3 from '../../assets/imgs/instagram-logo.png'
import image4 from '../../assets/imgs/youtube.png'
import image5 from '../../assets/imgs/lin.jpg'
import '../../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabBrands} from '@fortawesome/free-solid-svg-icons'
export default function footer() {
  return (
    <div className='apropos'>
         <h2>A propos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eos consequuntur rerum nihil laudantium, fuga sunt quidem dolorum molestiae vero id quia accusamus. Iusto, aliquid autem consequatur facere delectus reprehenderit?
            Lorem ipsum dolor sit amet consectetur adipisicing 
            </p>

          <h2>Suivez-nous</h2>  
          <div className='iconimage'>
            <img className='imgfooter' src={image1} alt="img1" />
            <FontAwesomeIcon icon="fabBrands" />
            <img className='imgfooter' src={image2} alt="img2" />
            <img className='imgfooter' src={image3} alt="img3" />
            <img className='imgfooter' src={image4} alt="img4" />
            <img className='imgfooter' src={image5} alt="img5" />
          </div>
          <hr />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.<span>tanit web</span></p>
    </div>
  )
}
