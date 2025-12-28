// const DropdownMenu = ({ title, items }) => {
//   return (
//     <div className="group relative">
//       <button className="hover:text-red-700 font-medium py-4 flex items-center gap-1 uppercase text-[13px]">
//         {title} <span className="text-[10px]">▼</span>
//       </button>
//       <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl border-t-2 border-red-700 w-64 z-100">
//         <ul className="py-2">
//           {items.map((item, idx) => (
//             <li key={idx}>
//               <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-700 text-sm">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default DropdownMenu;


import { Link } from 'react-router-dom';

const DropdownMenu = ({ title, items }) => {
  return (
    <div className="group relative">
      {/* मुख्य बटण */}
      <button className="hover:text-red-700 font-bold py-4 flex items-center gap-1 uppercase text-[12px] tracking-wider transition-colors">
        {title} <span className="text-[10px] group-hover:rotate-180 transition-transform duration-300">▼</span>
      </button>

      {/* ड्रॉपडाऊन लिस्ट */}
      <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-2xl border-t-4 border-red-700 w-72 z-100 animate-in fade-in slide-in-from-top-2 duration-300">
        <ul className="py-2 overflow-hidden">
          {items.map((item, idx) => (
            <li key={idx} className="border-b border-gray-50 last:border-0">
              {/* 'a' टॅग ऐवजी 'Link' वापरला आहे जेणेकरून पेज रिफ्रेश होणार नाही */}
              <Link 
                to={item.link} 
                className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 text-[13px] font-medium transition-all duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;