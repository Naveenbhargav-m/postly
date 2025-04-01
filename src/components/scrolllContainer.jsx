const ScrollContainer = ({ 
    children, 
    className = '',
    maxHeight = '500px', 
    maxWidth = '100%',
    horizontal = false,
    vertical = true,
    style = {}
  }) => {
    const scrollbarStyles = `
      scrollbar-thin 
      scrollbar-thumb-gray-300 
      scrollbar-track-gray-100 
      hover:scrollbar-thumb-gray-400
    `;
  
    const scrollDirectionStyles = `
      ${vertical ? 'overflow-y-auto' : 'overflow-y-hidden'} 
      ${horizontal ? 'overflow-x-auto' : 'overflow-x-hidden'}
    `;
  
    return (
      <div 
        className={`
          ${scrollDirectionStyles}
          ${scrollbarStyles}
          ${className}
        `}
        style={{
          maxHeight,
          maxWidth,
          ...style
        }}
      >
        {children}
      </div>
    );
  };
  
export {ScrollContainer} ;