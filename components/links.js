import Link from 'next/link';
import React from 'react';

const Links = ({ nextLink, scroll, additionalClasses, href, as, text, textColor, colored, children }) => {
  const textColorClass = textColor && `text-${textColor}`;

  return (
    <>
      {nextLink ? (
        <Link href={href} scroll={false} as={as}>
          <a
            className={`${
              colored
                ? `${textColorClass || 'text-accent'} hover:bg-accent hover:text-light`
                : `text-light hover:text-accent`
            } ${additionalClasses}`}
          >
            {text || children}
          </a>
        </Link>
      ) : (
        <a
          className={`${
            colored
              ? `${textColorClass || 'text-accent'} hover:bg-accent hover:text-light`
              : `text-light hover:text-accent`
          } ${additionalClasses}`}
          href={href}
        >
          {text || children}
        </a>
      )}
    </>
  );
};

export default Links;
