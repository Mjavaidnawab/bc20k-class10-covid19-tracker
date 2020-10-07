import React, { useEffect, useState } from 'react';
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries';


export default function InfoPanel({currrentScreen}) {
 
if (currrentScreen===0)
    return <GlobalStats />
else if (currrentScreen===1)
    return <AllCountries />
    else return <GlobalStats />

}

