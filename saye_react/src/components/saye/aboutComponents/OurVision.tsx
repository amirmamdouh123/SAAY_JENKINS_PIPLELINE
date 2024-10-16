

import vision from '@assets/homeImgs/vision.jpg'
import visionIcon from '@assets/homeImgs/vision-icon.png'
import { Link } from 'react-router-dom'

const OurVision = () => {
  return (
  
    

        <section className="mission wrapper" id="about">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row mb-10 gap-4">
              <div className="lg:w-1/2 relative">
                <div className=" mb-5">
                  <p className="text-myGreen-dark text-lg">مهمتنا</p>
                  <h2 className="text-5xl font-serif">مهمتنا</h2>
                </div>
                <p className="text-gray-600  text-lg mb-7 leading-8">
                  نسعى من خلال جهودنا التطوعية إلى إحداث تأثير إيجابي ومستدام في حياة الأطفال والشباب المشردين والعاملين في الشوارع. هدفنا هو تمكينهم من خلال تقديم الدعم والرعاية والمساهمة في بناء مستقبل أفضل لهم.
                </p>
                <Link to="#!" className="bg-myGreen-dark text-white px-4 py-2 rounded hover:bg-myGreen-hover transition duration-300">
                  اقرأ المزيد
                </Link>
                <img
                  src={visionIcon}
                  alt="about"
                  loading="lazy"
                  className="absolute top-0 right-2 animate-[TopBottom_5s_infinite_ease-in-out]"
                />
              </div>
              <div className="lg:w-1/2">
                <img
                  src={vision}
                  alt="mission"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
    
            <div className="flex flex-col lg:flex-row-reverse gap-4">
              <div className="lg:w-1/2 relative">
                <div className=" mb-5">
                  <p className="text-myGreen-dark text-lg">رؤيتنا</p>
                  <h2 className="text-5xl font-serif">رؤيتنا</h2>
                </div>
                <p className="text-gray-600  text-lg mb-7 leading-8">
                  رؤيتنا تتمثل في بناء مجتمع قائم على التضامن والمساواة، حيث تتاح الفرصة لكل فرد للنمو والازدهار. نؤمن بأن العمل الجماعي التطوعي هو السبيل لتحقيق هذا الهدف وبناء مستقبل مشرق للجميع.
                </p>
                <Link to="#!" className=" bg-myGreen-dark text-white px-4 py-2 rounded hover:bg-myGreen-hover transition duration-300">
                  اقرأ المزيد
                </Link>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={vision}
                  alt="vision"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
 







  )
}

export default OurVision