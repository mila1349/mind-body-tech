import React from 'react'
import {AnimateSharedLayout} from 'framer-motion'

function ContentSwitch() {
    return (
        <AnimateSharedLayout>
          <div className="content_shared">
            {data.map(
              (item) => item.service.includes(selected) && <Box color={item} />
            )}
          </div>
        </AnimateSharedLayout>
      );
}

export default ContentSwitch