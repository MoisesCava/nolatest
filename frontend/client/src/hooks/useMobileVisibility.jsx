import { useState, useEffect } from 'react';

const useMobileVisibility = (breakpoint) => {
  const [isChatDetailVisible, setIsChatDetailVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoint) {
        setIsChatDetailVisible(false);
      } else {
        setIsChatDetailVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isChatDetailVisible;
};

export default useMobileVisibility;