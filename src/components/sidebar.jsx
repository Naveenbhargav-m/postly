
import { Database, User, BookText, Frame } from 'lucide-react';
import { useState, useRef , useEffect} from 'preact/hooks';
const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);
    const [selected, setSelected] = useState(null);
    const sidebarRef = useRef(null);
  
    // Handle outside clicks to collapse sidebar
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setExpanded(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleItemClick = (item) => {
      setSelected(item);
      setExpanded(false);
    };
  
    let options = [ "Setup", "posts", "billing", "Profile"];
    let icons = [
        <Database className="h-6 w-6"/>, 
        <BookText className="h-6 w-6"/>,
        <Frame className="h-6 w-6"/>,
        <User className="h-6 w-6" />, 
    ];
    let values = ["setup", "posts", "billing", "profile"];
  
    return (
      <div className="flex min-h-screen h-full">
        <div
          ref={sidebarRef}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          className={`bg-white text-black h-screen flex flex-col items-center justify-center p-2 pb-[300px] relative 
          ${expanded ? 'w-48' : 'w-14'}
          transition-width duration-500 ease-in-out`}
        >
          <ul className="mt-10 space-y-4 w-full">
            {options.map((value, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 rounded-md flex items-center 
                hover:bg-highlight transition-colors duration-300 ease-in-out ${
                  selected === values[index] ? 'bg-highlight' : ''
                }`}
              >
                <a
                  href={`/${values[index]}`}
                  onClick={() => handleItemClick(values[index])}
                  className="flex items-center w-full no-underline text-white"
                  style={{ textDecoration: 'none', color: 'inherit' }} // Prevent blue and underline
                >
                  <div style={{color:"black"}}>{icons[index]}</div>
                  {expanded && (
                    <span style={{"color":"black"}} className="ml-4 transition-opacity duration-300 ease-in-out">
                      {value}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  