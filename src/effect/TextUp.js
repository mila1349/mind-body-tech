import React, {useState} from "react";
import { motion } from "framer-motion";

function Nah({ children, ...rest }) {
  let words = children.split(" ");
  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <motion.div
          {...rest}
          style={{ display: "inline-block", willChange: "transform" }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </motion.div>
      </div>
    );
  });
}

export default function SplitText({text}) {
    const [start, setStart] = useState(false)
  return (
      <motion.div
        whileInView={()=>setStart(true)}
      >
        <Nah
        initial={{ y: "100%" }}
        animate={start&&"visible"}
        variants={{
            visible: (i) => ({
            y: 0,
            transition: {
                delay: i * 0.1
            }
            })
        }}
        >
        {text}
        </Nah>
    </motion.div>
  );
}