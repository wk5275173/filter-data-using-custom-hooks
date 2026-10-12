// import React from 'react'

// export default function Select({label, id, name, value, onChange, error}) {
//   return (
//     <div className="input-container">
//         <label htmlFor={id}>{label}</label>
//         <select id={id} name={name} value={value} onChange={onChange}>
//           <option value="" hidden> Select Category</option>
//           <option value="Grocery">Grocery</option>
//           <option value="Clothes">Clothes</option>
//           <option value="Bills">Bills</option>
//           <option value="Education">Education</option>
//           <option value="Medicine">Medicine</option>
//         </select>
//         <p className='error'>{error}</p> 
//       </div>
//   )
// }


// import React from 'react'

// export default function Select({label, id, name, value, onChange, options, error}) {
//   return (
//     <div className="input-container">
//         <label htmlFor={id}>{label}</label>
//         <select id={id} name={name} value={value} onChange={onChange}>
//           <option value="" hidden> Select Category</option>
//           {
//             options.map((option) =>  <option value="Grocery">Grocery</option>)
//           }                                                                        //five times give us Grocery
//         </select>
//         <p className='error'>{error}</p> 
//       </div>
//   )
// }


// import React from 'react'

// export default function Select({label, id, name, value, onChange, options, error}) {
//   return (
//     <div className="input-container">
//         <label htmlFor={id}>{label}</label>
//         <select id={id} name={name} value={value} onChange={onChange}>
//           <option value="" hidden>
//             {/* Select Category */}
//              </option>
//           {                                                              //curely braces are used for dynamic values//here we used index because list are not dynamic we are not insert or delete any element
//             options.map((option, i) =>  <option key={i} value={option}>{option}</option>)
//           }                                                                        
//         </select>
//         <p className='error'>{error}</p> 
//       </div>
//   )
// }


// import React from 'react'

// export default function Select({label, id, name, value, onChange, options, defaultOption, error}) {
//   return (
//     <div className="input-container">
//         <label htmlFor={id}>{label}</label>
//         <select id={id} name={name} value={value} onChange={onChange}>
//           <option value="" hidden>
//            {defaultOption}
//              </option>
//           {                                                              
//             options.map((option, i) =>  <option key={i} value={option}>{option}</option>)
//           }                                                                        
//         </select>
//         <p className='error'>{error}</p> 
//       </div>
//   )
// }                                                           //this is also correct

import React from 'react'

export default function Select({label, id, name, value, onChange, options, defaultOption, error}) {
  return (
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select id={id} name={name} value={value} onChange={onChange}>
         {defaultOption && (
           <option value="" hidden>
           {defaultOption}
            </option>
         )}                                                                
          {                                                              
            options.map((option, i) =>  <option key={i} value={option}>{option}</option>)
          }                                                                        
        </select>
        <p className='error'>{error}</p> 
      </div>
  )
}                                                          //if the value of defaultOption is true then extcute after && operator if false then not