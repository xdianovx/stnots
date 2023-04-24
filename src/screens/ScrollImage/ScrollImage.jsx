import Image from 'next/image'

import ImageSrc from './Image.jpg'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

import s from './ScrollImage.module.scss'

export const ScrollImage = () => {
  const ref = useRef(null)
  const imageRef = useRef(null)

  const { scrollY } = useScroll({
    target: ref,
  })

  return (
    <section ref={ref} className={s.section} data-scroll-section>
      <motion.div
        whileInView={{ opacity: 1 }}
        className={s.wrap}
        style={{ width: scrollY + 'px' }}
        initial={{ opacity: 0 }}
        ref={imageRef}
      >
        <Image src={ImageSrc} className="object-cover" fill alt="alt" />
      </motion.div>
    </section>
  )
}
