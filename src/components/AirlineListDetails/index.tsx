import { useState, useEffect, FormEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  AirlineData,
  AirlineDataList,
  setAirlineDataList,
} from "../../store/airlineDataListSlice";
import * as Icons from "heroicons-react";

function AirlineListDetails() {
  const dispatch = useAppDispatch();
  const airlineList = useAppSelector((state) => state.airlineData.airlineDataList);
  const [airlineListData, setAirlineListData] = useState<AirlineDataList>([]);

  const fetchAirlineData = async () => {
    const resp = await fetch("https://www.kayak.com/h/mobileapis/directory/airlines/homework", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        format: 'jsonp',
        Host: "api.producthunt.com",
        Referer: 'localhost:3000/'
      },
    });
    const respData: AirlineDataList = await resp.json();
    dispatch(setAirlineDataList(respData));
  };

  useEffect(() => {
    fetchAirlineData();
  }, []);

  useEffect(() => {
    airlineList && setAirlineDataList(airlineList);
  }, [airlineList]);


  return (
    <div>
      <h5 data-testid="airline-page-heading">Airlines</h5>
    </div>
  );
}

export default AirlineListDetails;
