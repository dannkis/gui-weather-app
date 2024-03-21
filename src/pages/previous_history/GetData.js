import React, { useEffect, useState } from "react";
import useHistory from "../../hooks/useHistory";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import useHistoryChart from "../../hooks/useHistoryChart";
import GetDate from "../../components/GetDate";

function GetData(dayDelta) {
  const { location, errorL } = useCurrentLocation();
  const dataHis = useHistoryChart(
    location?.latitude,
    location?.longitude,
    GetDate(dayDelta)
  );
  console.log("USE NEW API DATA: ", dataHis);
  return dataHis == null ? 0 : dataHis;
}

export default GetData;
