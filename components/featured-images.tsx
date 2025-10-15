'use client'
import { motion } from "motion/react"

function FeaturedImages({path}: {path: string}) {
    return (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          
          className="relative z-10  rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src={path}
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={100}
              width={100}
            />
          </div>
        </motion.div>
    )
}

export default FeaturedImages