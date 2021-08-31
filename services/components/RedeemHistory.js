import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as fns from 'date-fns'

export function RedeemHistory() {
  const [data, setData] = useState({history: []});

  useEffect(() => {
    const fetchData = async() => {
        const result = await axios('/api/history', {
            headers: {
                'api_key': 'e4bbca38-9ad6-4f13-a07f-361795dbcdf5'
            }
        });
        setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
        <h1>Recent Rewards Granted</h1>
        <table>
            <thead>
                <tr>
                    <th>Redemption</th>
                    <th>Address</th>
                    <th>Steps</th>
                </tr>
            </thead>
            <tbody>
            {
                data.history.map(item =>
                    <tr>
                        <td>{fns.format(new Date(item.timestamp), 'MMM dd yyyy')}</td>
                        <td>{item.cryptoaddr}</td>
                        <td>{item.steps}</td>
                    </tr>)
            }
            </tbody>
    </table>
    </div>
  );
}