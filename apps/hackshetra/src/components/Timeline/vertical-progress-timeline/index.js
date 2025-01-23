import React, { Children, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

function Bookmark(props) {
  const { className, children, ...restProps } = props;

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.li
      {...restProps}
      className={`timeline-item ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      variants={variants}
    >
      {children}
    </motion.li>
  );
}

function Timeline(props) {
  const { className, tip = true, children } = props;
  const tipClassName = tip ? 'with-tip' : '';
  const fullClassName = `timeline-wrapper ${tipClassName} ${className || ''}`;
  const numBookmarks = Children.count(children);

  useLayoutEffect(() => {
    const globalStyles = `
      body, html {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background: url('https://via.placeholder.com/1920x1080') no-repeat center center fixed;
        background-size: cover;
      }
      .app-root, .timeline-wrapper {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        border-radius: 15px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        padding: 20px;
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.textContent = globalStyles;
    document.head.appendChild(styleSheet);

    let css = '';
    for (let i = 1; i <= numBookmarks; i += 1) {
      css += `.timeline-item:nth-child(${i}) { grid-row: ${i}; }`;
    }

    document.head.insertAdjacentHTML(
      'beforeend',
      `<style data-timeline-styles>${css}</style>`
    );

    return () => {
      document.querySelector('[data-timeline-styles]')?.remove();
      document.head.removeChild(styleSheet);
    };
  }, [numBookmarks]);

  return (
    <div className={fullClassName}>
      <div className="timeline-connector" />
      <ul className="timeline">
        {children}
        {Array(numBookmarks)
          .fill()
          .map((_, i) => (
            <motion.span
              key={i}
              className="timeline-dotmark"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="timeline-dot" />
            </motion.span>
          ))}
      </ul>
    </div>
  );
}

export { Timeline, Bookmark };
