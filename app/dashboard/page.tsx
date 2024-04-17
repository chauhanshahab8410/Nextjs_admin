"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Overview } from './components/overview'
import { RecentSales } from './components/recent-sales'
import "./dashboard.css"
import axios from 'axios';

const dashboard = () => {
  const [totalLoadAmount, setTotalLoadAmount] = useState('');
  const [movingLoads, setMovingLoads] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/cards_totalLoads')
      .then(response => {
        const totalLoadAmount = response.data.results[0].total_load_amount;
        setTotalLoadAmount(totalLoadAmount);
      })
      .catch(error => console.error('Error:', error));

    axios.get('http://localhost:3000/api/cards_moving_loads')
      .then(response => {
        const movingLoads = response.data.results[0].count;
        setMovingLoads(movingLoads);
      })
      .catch(error => console.error('Error:', error));
  }, []);
  // const [totalLoadAmount, setTotalLoadAmount] = useState('');

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/cards_totalLoads')
  //     .then(response => {
  //       const totalLoadAmount = response.data.results[0].total_load_amount;
  //       setTotalLoadAmount(totalLoadAmount);
  //     })
  //     .catch(error => console.error('Error:', error));

  //     axios.get('http://localhost:3000/api/cards_moving_loads')
  //     .then(response => {
  //       const moving_loads = response.data.results[0].count;
  //       setTotalLoadAmount(moving_loads);
  //     })
  //     .catch(error => console.error('Error:', error));
  // }, []);
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight my-4">Dashboard</h2>


      <div className="flex-1 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Loads
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M11 3a9 9 0 0 1 9 9c0 5.134-4.168 9.271-9 9.271v-2.271a7 7 0 1 0 0-14V3z" />
              </svg>
            </CardHeader>
            <div className="text-2xl font-bold">{totalLoadAmount}</div>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Moving Loads
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{movingLoads}</div>
              {/* <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              {/* <p className="text-xs text-muted-foreground">
                +19% from last month
              </p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Now
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              {/* <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p> */}
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              {/* <CardDescription>
                You made 265 sales this month.
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
      </div>
    </>

  );
};

export default dashboard;


