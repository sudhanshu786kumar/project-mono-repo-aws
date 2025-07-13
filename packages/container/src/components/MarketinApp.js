import {mount} from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
