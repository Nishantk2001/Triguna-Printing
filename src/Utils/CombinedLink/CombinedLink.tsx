import React, { useEffect, FC, ReactNode } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

interface CombinedLinkProps {
  to: string;
  target?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

const CombinedLink: FC<CombinedLinkProps> = ({
  to,
  target,
  children,
  ...props
}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === to && target) {
      // Increase delay if needed for the target to render
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      }, 300); // Increased delay to 300ms
    }
  }, [location, target, to]);

  return (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  );
};

export default CombinedLink;
