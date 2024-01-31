import React from "react";



import { Button, Img, Line, List, SelectBox, Text } from "components";
import AppBar from "./AppBar";
import FirstCard from "./FirstCard";
import Customers from "./Customers";
import Graph from "./Graph";
import Chats from "./Chats";
import TopStates from "./TopStates";
import NewDeals from "./NewDeals";
import QuarterGoal from "./QuarterGoal";

const DashboardPage = () => {


  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter gap-4 items-start justify-start mx-auto p-4 w-auto sm:w-full md:w-full">
        <AppBar />
        <div className="flex flex-1 flex-col gap-4 h-full items-start justify-start md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-4 h-[261px] md:h-auto items-start justify-start w-full">
            <List
              className="md:flex md:flex-1 sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-3 md:items-start w-[100%] md:w-full"
              orientation="horizontal"
            >
              <FirstCard Heading={"Revenues"} NextPageName={"Revenues report"} Percentage={"15%"} Details={"Increase compared to last week"} />

              <FirstCard Heading={"Lost deals"} NextPageName={"All deals"} Percentage={"4%"} Details={"You closed 96 out of 100 deals"} />

              <QuarterGoal />
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
            <Customers />
            <Graph />
          </div>
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
            <Chats />
            <TopStates />
            <NewDeals />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
