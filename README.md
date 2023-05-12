# `react-ip-location`

    - Simplest, lightest and fastest JS library to get your current ip address and location.
    
    - Check current location by a provided ip address.

# How to use `react-ip-location` in your app

    1. Install
        yarn add react-ip-location
        Or
        npm i react-ip-location

    2. In your App.tsx
        import { getIPLocation, checkIPLocation } from "react-ip-location";
        
        getIPLocation().then(result => {
            // console.log(result);
        });
        checkIPLocation('checked_IP_Address_Value').then(result => {
            console.log('result');
        })

        Or declare an async function in your component
        const getMyIP = async () => {
            const ip = await getIPLocation();
            return console.log("ip", ip);
        };
        
        getMyIP();