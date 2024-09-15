import { zoomIn } from '@/libs/motion'
import { motion } from 'framer-motion'
import { BiDonateBlood } from 'react-icons/bi'
import Dash from './Dash'

export default function TitleBottomLine() {
  return (
    <motion.div
      variants={zoomIn(0.5, 0.7)}
      className="mx-auto flex justify-center"
    >
      <Dash />

      <div className="px-2">
        <BiDonateBlood className="text-xl text-primary" />
      </div>
      <Dash />
    </motion.div>
  )
}
