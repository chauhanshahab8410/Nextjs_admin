// "use client"
// import axios from 'axios';
// import { ColumnDef } from "@tanstack/react-table";
// import { DataTable } from "@/components/ui/custom/data-table";
// import * as React from 'react';

// export type Sales = {
//   id: string,
//   account_code: string,
//   account_type: string,
//   company_size: number,
//   email: string,
// }

// export const columns: ColumnDef<Sales>[] = [
//   {
//     accessorKey: "account_code",
//     header: "Account Id"
//   },
//   {
//     accessorKey: "account_type",
//     header: "User Type"
//   },
//   {
//     accessorKey: "company_size",
//     header: "Employees"
//   },
//   {
//     accessorKey: "email",
//     header: "Email"
//   },
// ];

// export function RecentSales() {
//   const [data, setData] = React.useState<Sales[]>([]);
//   const [searchTerm, setSearchTerm] = React.useState<string>('');

//   React.useEffect(() => {
//     fetchDataFromAPI()
//       .then((apiData) => {
//         setData(apiData.results);
//       })
//       .catch((error) => console.error('Error fetching data from API:', error));
//   }, []);

//   async function fetchDataFromAPI(): Promise<{ results: Sales[] }> {
//     try {
//       const response = await axios.get<{ results: Sales[] }>('http://localhost:3000/api/user');
//       if (response.status !== 200) {
//         throw new Error('Failed to fetch data from API');
//       }
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching data from API:', error);
//       return { results: [] };
//     }
//   }

//   const filteredData = data.filter(item => {
//     const searchFields = Object.values(item).join(' ').toLowerCase();
//     return searchFields.includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div className="w-full">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <DataTable data={filteredData} columns={columns}></DataTable>
//     </div>
//   );
// }


"use client"
import axios from 'axios';
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/custom/data-table";
import * as React from 'react';

export type Sales = {
  id: string,
  account_code: string,
  account_type: string,
  company_size: number,
  email: string,
}

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey: "account_code",
    header: "Account Id"
  },
  {
    accessorKey: "account_type",
    header: "User Type"
  },
  {
    accessorKey: "company_size",
    header: "Employees"
  },
  {
    accessorKey: "email",
    header: "Email"
  },
];

export function RecentSales() {
  const [data, setData] = React.useState<Sales[]>([]);

  React.useEffect(() => {
    fetchDataFromAPI()
      .then((apiData) => {
        if (apiData.results.length > 0) { // Ensure that results is an array
          setData(apiData.results);
        }
      })
      .catch((error) => console.error('Error fetching data from API:', error));
  }, []);

  async function fetchDataFromAPI(): Promise<{ results: Sales[] }> { // Define the type of the response
    try {
      const response = await axios.get<{ results: Sales[] }>('http://localhost:3000/api/user');
      if (response.status !== 200) {
        throw new Error('Failed to fetch data from API');
      }
      return response.data;
    } catch (error) {
      console.error('Error fetching data from API:', error);
      return { results: [] }; // Return an empty array or handle the error accordingly
    }
  }

  return (
    <div className="w-full">
      {data.length > 0 && <DataTable data={data} columns={columns}></DataTable>}
    </div>
  );
}
  





























































// "use client"

// import * as React from "react"
// import axios from 'axios';
// import {
//   ColumnDef
// } from "@tanstack/react-table"

// import { DataTable } from "@/components/ui/custom/data-table"


// async function fetchDataFromAPI(): Promise<Sales[]> {
//   try {
//     const response = await axios.get<Sales[]>('http://localhost:3000/api/user');
//     console.log(response);
//     if (response.status !== 200) {
//       throw new Error('Failed to fetch data from API');
//     }
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data from API:', error);
//     return []; // Return an empty array or handle the error accordingly
//   }
// }

// fetchDataFromAPI();
// const data: Sales[] = [
//   {
//     id: "1",
//     product:"Laptop Dell",
//     quantity:2,
//     amount: 55000,    
//     status: "success",
//   },
//   {
//     id: "2",
//     product:"PlayStation",
//     quantity:5,
//     amount: 35000,    
//     status: "processing",
//   },  
//   {
//     id: "3",
//     product:"Mobile Samsung Galaxy S23",
//     quantity:2,
//     amount: 75000,    
//     status: "success",
//   },  
//   {
//     id: "4",
//     product:"Gaming PC",
//     quantity:2,
//     amount: 155000,    
//     status: "success",
//   },  
//   {
//     id: "5",
//     product:"Mac",
//     quantity:2,
//     amount: 55000,    
//     status: "failed",
//   },  
//   {
//     id: "6",
//     product:"Smart Watch",
//     quantity:4,
//     amount: 55000,    
//     status: "success",
//   },
//   {
//     id: "7",
//     product:"XBox",
//     quantity:5,
//     amount: 45000,    
//     status: "processing",
//   },  
//   {
//     id: "8",
//     product:"IPad",
//     quantity:2,
//     amount: 55000,    
//     status: "success",
//   },  
//   {
//     id: "9",
//     product:"Ear Buds",
//     quantity:2,
//     amount: 10000,    
//     status: "success",
//   },  
//   {
//     id: "10",
//     product:"SSD",
//     quantity:2,
//     amount: 15000,    
//     status: "failed",
//   }
// ]

// export type Sales = {
//   id:string,
//   product: string
//   quantity:number
//   amount: number
//   status:string,
//   // status: "pending" | "processing" | "success" | "failed"

// }

// export const columns: ColumnDef<Sales>[] = [
//   {
//     accessorKey:"product",
//     header:"Product"
//   },
//   {
//     accessorKey:"amount",
//     header:"Amount"
//   },
//   {
//     accessorKey:"quantity",
//     header:"Quantity"
//   },
//   {
//     accessorKey:"status",
//     header:"Status"
//   },
// ]

// export function RecentSales() {
//   return (
//     <div className="w-full">
//       <DataTable data={data} columns={columns} ></DataTable>
//     </div>
//   )
// }
