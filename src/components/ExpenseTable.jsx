
// import React from 'react'

// export default function ExpenseTable({expenses}) {    
  
//  // expenses.filter((expense) => true)                    //the expense that is present in expenses

// //  const filterData = expenses.filter((expense) => {        
// //   console.log(expense.category.toLowerCase())
// //  })
// //  console.log(filterData)

// const filterData = expenses.filter((expense) => {        //filter return the true condition
//   // console.log(expense.category.toLowerCase().includes('bills'))
//   return expense.category.toLowerCase().includes('bills')
//  })
//  console.log(filterData)

//   return (
//     <table className="expense-table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>
//                 <select>
//                   <option value="">All</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//               </th>
//               <th className="amount-column">
//                 <div>
//                   <span>Amount</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     viewBox="0 0 384 512"
//                     className="arrow up-arrow"
//                   >
//                     <title>Ascending</title>
//                     <path
//                       d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
//                     />
//                   </svg>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     viewBox="0 0 384 512"
//                     className="arrow down-arrow"
//                   >
//                     <title>Descending</title>
//                     <path
//                       d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
//                     />
//                   </svg>
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {expenses.map(({id, title, category, amount}) => (               
//             <tr key={id}>
//               <td>{title}</td>
//               <td>{category}</td>
//               <td>{amount}</td>
//             </tr>
//             ))}
//             <tr>
//               <th>Total</th>
//               <th></th>
//               <th>₹8100</th>
//             </tr>
//           </tbody>
//         </table>
//   )
// }



// import React, { useState } from 'react'

// export default function ExpenseTable({expenses}) {     
  
//  const [category, setCategory] = useState('')

// const filterData = expenses.filter((expense) => {        //filter return the true condition//when it it will be empty string then it will be contained in every string(the four things are shown)//when we select(onchange event) then category is set (and return those category)
//   return expense.category.toLowerCase().includes(category)
//  })
// console.log(filterData)

//   return (
//     <table className="expense-table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>
//                 <select onChange={(e) => setCategory(e.target.value.toLowerCase())}>
//                   <option value="">All</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//               </th>
//               <th className="amount-column">
//                 <div>
//                   <span>Amount</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     viewBox="0 0 384 512"
//                     className="arrow up-arrow"
//                   >
//                     <title>Ascending</title>
//                     <path
//                       d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
//                     />
//                   </svg>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     viewBox="0 0 384 512"
//                     className="arrow down-arrow"
//                   >
//                     <title>Descending</title>
//                     <path
//                       d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
//                     />
//                   </svg>
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {filterData.map(({id, title, category, amount}) => (               
//             <tr key={id}>
//               <td>{title}</td>
//               <td>{category}</td>
//               <td>{amount}</td>
//             </tr>
//             ))}
//             <tr>
//               <th>Total</th>
//               <th></th>
//               <th>₹8100</th>
//             </tr>
//           </tbody>
//         </table>
//   )
// }




// import React, { useState } from 'react'
// import { useFilter } from "../hooks/useFilter";

// export default function ExpenseTable({expenses}) {     
  
//  const [category, setCategory] = useState('')

//  const result = useFilter(expenses)

//  console.log(result)

// const filterData = expenses.filter((expense) => {        //filter return the true condition//when it it will be empty string then it will be contained in every string(the four things are shown)//when we select(onchange event) then category is set (and return those category)
//   return expense.category.toLowerCase().includes(category)
//  })


//   return (
//     <table className="expense-table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>
//                 <select onChange={(e) => setCategory(e.target.value.toLowerCase())}>
//                   <option value="">All</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//               </th>
//               <th className="amount-column">
//                 <div>
//                   <span>Amount</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     viewBox="0 0 384 512"
//                     className="arrow up-arrow"
//                   >
//                     <title>Ascending</title>
//                     <path
//                       d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
//                     />
//                   </svg>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     viewBox="0 0 384 512"
//                     className="arrow down-arrow"
//                   >
//                     <title>Descending</title>
//                     <path
//                       d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
//                     />
//                   </svg>
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {filterData.map(({id, title, category, amount}) => (               
//             <tr key={id}>
//               <td>{title}</td>
//               <td>{category}</td>
//               <td>{amount}</td>
//             </tr>
//             ))}
//             <tr>
//               <th>Total</th>
//               <th></th>
//               <th>₹8100</th>
//             </tr>
//           </tbody>
//         </table>
//   )
// }


//hook is used


// import React, { useState } from 'react'
// import { useFilter } from "../hooks/useFilter";

// export default function ExpenseTable({expenses}) {     
  

//  const [filterData, setQuery]= useFilter(expenses)         //here we can gave other names instead of filterData, setQuery because use filter is destructure in array because two values is return from useFilter


//   return (
//     <table className="expense-table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>
//                 <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
//                   <option value="">All</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//               </th>
//               <th className="amount-column">
//                 <div>
//                   <span>Amount</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     viewBox="0 0 384 512"
//                     className="arrow up-arrow"
//                   >
//                     <title>Ascending</title>
//                     <path
//                       d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
//                     />
//                   </svg>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     viewBox="0 0 384 512"
//                     className="arrow down-arrow"
//                   >
//                     <title>Descending</title>
//                     <path
//                       d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
//                     />
//                   </svg>
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {filterData.map(({id, title, category, amount}) => (               
//             <tr key={id}>
//               <td>{title}</td>
//               <td>{category}</td>
//               <td>{amount}</td>
//             </tr>
//             ))}
//             <tr>
//               <th>Total</th>
//               <th></th>
//               <th>₹8100</th>
//             </tr>
//           </tbody>
//         </table>
//   )
// }

//the above is also correct


// import React, { useState } from 'react'
// import { useFilter } from "../hooks/useFilter";

// export default function ExpenseTable({expenses}) {     
  

//  //const [filterData, setQuery]= useFilter(expenses, (data))   //so in this function(callback) we will tell according to which property we want to filter we will take data as an argument and what data will return, a string will return 

//    const [filterData, setQuery]= useFilter(expenses, (data) => data.category)  //the callback function tells on which base it can filter

//   return (
//     <table className="expense-table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>
//                 <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
//                   <option value="">All</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//               </th>
//               <th className="amount-column">
//                 <div>
//                   <span>Amount</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     viewBox="0 0 384 512"
//                     className="arrow up-arrow"
//                   >
//                     <title>Ascending</title>
//                     <path
//                       d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
//                     />
//                   </svg>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="10"
//                     viewBox="0 0 384 512"
//                     className="arrow down-arrow"
//                   >
//                     <title>Descending</title>
//                     <path
//                       d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
//                     />
//                   </svg>
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {filterData.map(({id, title, category, amount}) => (               
//             <tr key={id}>
//               <td>{title}</td>
//               <td>{category}</td>
//               <td>{amount}</td>
//             </tr>
//             ))}
//             <tr>
//               <th>Total</th>
//               <th></th>
//               <th>₹8100</th>
//             </tr>
//           </tbody>
//         </table>
//   )
// }


import React, { useState } from 'react'
import { useFilter } from "../hooks/useFilter";

export default function ExpenseTable({expenses}) {     
  

 //const [filterData, setQuery]= useFilter(expenses, (data))   //so in this function(callback) we will tell according to which property we want to filter we will take data as an argument and what data will return, a string will return 

   const [filterData, setQuery]= useFilter(expenses, (data) => data.category) // in filterData //Each element is one expense object with fields id, title, category, amount.

   const total = filterData.reduce((accumulator, current) => accumulator + current.amount, 0) //It's the filtered array returned by your hook//accumulator does not point to any element in the array. It points to the running total — a plain number that you carry forward between iterations.//current points to the current element of filterData being processed at that moment — i.e. one expense object.

  //  console.log(total)

  return (
    <table className="expense-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>
                <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                  <option value="">All</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
                </select>
              </th>
              <th className="amount-column">
                <div>
                  <span>Amount</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow up-arrow"
                  >
                    <title>Ascending</title>
                    <path
                      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow down-arrow"
                  >
                    <title>Descending</title>
                    <path
                      d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filterData.map(({id, title, category, amount}) => (               
            <tr key={id}>
              <td>{title}</td>
              <td>{category}</td>
              <td>{amount}</td>
            </tr>
            ))}
            <tr>
              <th>Total</th>
              <th></th>
              <th>₹{total}</th>
            </tr>
          </tbody>
        </table>
  )
}