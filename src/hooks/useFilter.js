

// export function useFilter(data, callback) {    //first will provide the actual data(normally array)(on which base it can be filter) //the second callback we will be told how we get data(there are many things e.g title,category,amount) on which base(thing) we can filter//this is the convention that hook is namely export
//   return (
//     console.log(data)
//   )
// }





// export function useFilter(data, callback) {   //in this place data means expenses //first will provide the actual data(normally array)(on which base it can be filter) //the second callback we will be told how we get data(there are many things e.g title,category,amount) on which base(thing) we can filter//this is the convention that hook is namely export
//   return (
//     expense.category.toLowerCase().includes(category)
//   )
// }


// import { useState } from "react"


// export function useFilter(data, callback) {   //first will provide the actual data in this place (expenses)(normally array)(on which base it can be filter) //the second callback we will be told how we get data(there are many things e.g title,category,amount) on which base(thing) we can filter//this is the convention that hook is namely export
//   const[query, setQuery] = useState('')

//   const filterData = data.filter((el) => el.category.toLowerCase().includes(query))      //here i can filter on category base


//   return [filterData, setQuery]
    
  
// }



import { useState } from "react"


export function useFilter(dataList, callback) {   //first will provide the actual data in this place (expenses)(normally array)(on which base it can be filter) //the second callback we will be told how we get data(there are many things e.g title,category,amount) on which base(thing) we can filter//this is the convention that hook is namely export
  const[query, setQuery] = useState('')

  // console.log(callback)

  const filterData = dataList.filter((el) => callback(el).toLowerCase().includes(query))      //here i can filter on category base


  return [filterData, setQuery]
    
  
}