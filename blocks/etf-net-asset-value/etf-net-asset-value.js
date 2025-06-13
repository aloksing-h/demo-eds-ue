import { div, select, option, a, span, img, label, h3, ul, li, table, tr, td, th } from "../../scripts/dom-helper.js";


const EtfFund = {
    success: true,
    data: {
        "m50M100Data": [
            {
                "secname": "M50",
                "currNav": "259.86",
                "currNavDate": "6/10/2025 12:04:57 PM",
                "prevNAV": "258.85",
                "navChange": "1.01",
                "navPerChange": "0.39",
                "ord": "1",
                "schemeNameFull": "Motilal Oswal Nifty 50 ETF"
            },
            {
                "secname": "M50 iNAV",
                "currNav": "259.12",
                "currNavDate": "6/10/2025 12:26:05 PM",
                "prevNAV": "258.98",
                "navChange": "0.15",
                "navPerChange": "0.06",
                "ord": "2",
                "schemeNameFull": "Motilal Oswal Nifty 50 ETF"
            },
            {
                "secname": "M100",
                "currNav": "64.22",
                "currNavDate": "6/10/2025 12:04:56 PM",
                "prevNAV": "64.05",
                "navChange": "0.17",
                "navPerChange": "0.27",
                "ord": "3",
                "schemeNameFull": "Motilal Oswal Nifty Midcap 100 ETF"
            },
            {
                "secname": "M100 iNAV",
                "currNav": "64.08",
                "currNavDate": "6/10/2025 12:26:05 PM",
                "prevNAV": "63.97",
                "navChange": "0.10",
                "navPerChange": "0.16",
                "ord": "4",
                "schemeNameFull": "Motilal Oswal Nifty Midcap 100 ETF"
            },
            {
                "secname": "MOFGSEC",
                "currNav": "61.85",
                "currNavDate": "6/10/2025 12:05:06 PM",
                "prevNAV": "62.25",
                "navChange": "-0.40",
                "navPerChange": "-0.64",
                "ord": "5",
                "schemeNameFull": "Motilal Oswal Nifty 5 YR Benchmark G-Sec ETF"
            },
            {
                "secname": "MOFGSEC iNAV",
                "currNav": "61.88",
                "currNavDate": "6/10/2025 1:00:00 PM",
                "prevNAV": "61.87",
                "navChange": "0.01",
                "navPerChange": "0.02",
                "ord": "6",
                "schemeNameFull": "Motilal Oswal Nifty 5 YR Benchmark G-Sec ETF"
            },
            {
                "secname": "MONIFTY200M30ETF",
                "currNav": "64.35",
                "currNavDate": "6/10/2025 12:04:54 PM",
                "prevNAV": "63.89",
                "navChange": "0.46",
                "navPerChange": "0.72",
                "ord": "7",
                "schemeNameFull": "Motilal Oswal Nifty 200 Momentum 30 ETF"
            },
            {
                "secname": "MONIFTY200M30ETF iNAV",
                "currNav": "64.47",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "63.99",
                "navChange": "0.48",
                "navPerChange": "0.76",
                "ord": "8",
                "schemeNameFull": "Motilal Oswal Nifty 200 Momentum 30 ETF"
            },
            {
                "secname": "MOMOBSELVETF",
                "currNav": "37.76",
                "currNavDate": "6/10/2025 12:04:54 PM",
                "prevNAV": "37.54",
                "navChange": "0.22",
                "navPerChange": "0.59",
                "ord": "9",
                "schemeNameFull": "Motilal Oswal S&P BSE Low Volatility ETF"
            },
            {
                "secname": "MOMOBSELVETF iNAV",
                "currNav": "37.66",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "37.63",
                "navChange": "0.03",
                "navPerChange": "0.09",
                "ord": "10",
                "schemeNameFull": "Motilal Oswal S&P BSE Low Volatility ETF"
            },
            {
                "secname": "MOSPBSEHCETF",
                "currNav": "44.09",
                "currNavDate": "6/10/2025 12:04:51 PM",
                "prevNAV": "43.78",
                "navChange": "0.31",
                "navPerChange": "0.71",
                "ord": "11",
                "schemeNameFull": "Motilal Oswal S&P BSE Healthcare ETF"
            },
            {
                "secname": "MOSPBSEHCETF iNAV",
                "currNav": "43.89",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "43.9",
                "navChange": "-0.01",
                "navPerChange": "-0.02",
                "ord": "12",
                "schemeNameFull": "Motilal Oswal S&P BSE Healthcare ETF"
            },
            {
                "secname": "MOSPBSEEVETF",
                "currNav": "104.73",
                "currNavDate": "6/10/2025 12:04:54 PM",
                "prevNAV": "104.42",
                "navChange": "0.31",
                "navPerChange": "0.30",
                "ord": "13",
                "schemeNameFull": "Motilal Oswal S&P BSE Enhanced Value ETF"
            },
            {
                "secname": "MOSPBSEEVETF iNAV",
                "currNav": "104.48",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "104.65",
                "navChange": "-0.17",
                "navPerChange": "-0.16",
                "ord": "14",
                "schemeNameFull": "Motilal Oswal S&P BSE Enhanced Value ETF"
            },
            {
                "secname": "MOSPBSEQETF",
                "currNav": "197.15",
                "currNavDate": "6/10/2025 12:04:59 PM",
                "prevNAV": "195.61",
                "navChange": "1.54",
                "navPerChange": "0.79",
                "ord": "15",
                "schemeNameFull": "Motilal Oswal S&P BSE Quality ETF"
            },
            {
                "secname": "MOSPBSEQETF iNAV",
                "currNav": "196.95",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "196.17",
                "navChange": "0.79",
                "navPerChange": "0.40",
                "ord": "16",
                "schemeNameFull": "Motilal Oswal S&P BSE Quality ETF"
            },
            {
                "secname": "MON500",
                "currNav": "23.75",
                "currNavDate": "6/10/2025 12:04:54 PM",
                "prevNAV": "23.65",
                "navChange": "0.10",
                "navPerChange": "0.42",
                "ord": "17",
                "schemeNameFull": "Motilal Oswal Nifty 500 ETF"
            },
            {
                "secname": "MON500 iNAV",
                "currNav": "23.63",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "23.61",
                "navChange": "0.02",
                "navPerChange": "0.09",
                "ord": "18",
                "schemeNameFull": "Motilal Oswal Nifty 500 ETF"
            },
            {
                "secname": "MOSMALL250",
                "currNav": "17.60",
                "currNavDate": "6/10/2025 12:04:56 PM",
                "prevNAV": "17.54",
                "navChange": "0.06",
                "navPerChange": "0.34",
                "ord": "19",
                "schemeNameFull": "Motilal Oswal Nifty Smallcap 250 ETF"
            },
            {
                "secname": "MOSMALL250 iNAV",
                "currNav": "17.55",
                "currNavDate": "6/10/2025 12:26:01 PM",
                "prevNAV": "17.53",
                "navChange": "0.03",
                "navPerChange": "0.16",
                "ord": "20",
                "schemeNameFull": "Motilal Oswal Nifty Smallcap 250 ETF"
            },
            {
                "secname": "MOREALTY",
                "currNav": "102.95",
                "currNavDate": "6/10/2025 12:04:55 PM",
                "prevNAV": "103.58",
                "navChange": "-0.63",
                "navPerChange": "-0.61",
                "ord": "21",
                "schemeNameFull": "Motilal Oswal Nifty Realty ETF"
            },
            {
                "secname": "MOREALTY iNAV",
                "currNav": "102.85",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "103.68",
                "navChange": "-0.83",
                "navPerChange": "-0.80",
                "ord": "22",
                "schemeNameFull": "Motilal Oswal Nifty Realty ETF"
            },
            {
                "secname": "MODEFENCE",
                "currNav": "98.54",
                "currNavDate": "6/10/2025 12:04:59 PM",
                "prevNAV": "97.53",
                "navChange": "1.01",
                "navPerChange": "1.04",
                "ord": "23",
                "schemeNameFull": "Motilal Oswal Nifty India Defence ETF"
            },
            {
                "secname": "MODEFENCE iNAV",
                "currNav": "98.26",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "97.63",
                "navChange": "0.63",
                "navPerChange": "0.65",
                "ord": "24",
                "schemeNameFull": "Motilal Oswal Nifty India Defence ETF"
            },
            {
                "secname": "MOMENTUM50",
                "currNav": "54.85",
                "currNavDate": "6/10/2025 12:04:59 PM",
                "prevNAV": "54.49",
                "navChange": "0.36",
                "navPerChange": "0.66",
                "ord": "25",
                "schemeNameFull": "Motilal Oswal Nifty 500 Momentum 50 ETF"
            },
            {
                "secname": "MOMENTUM50 iNAV",
                "currNav": "54.77",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "54.51",
                "navChange": "0.26",
                "navPerChange": "0.48",
                "ord": "26",
                "schemeNameFull": "Motilal Oswal Nifty 500 Momentum 50 ETF"
            },
            {
                "secname": "MOCAPITAL",
                "currNav": "47.27",
                "currNavDate": "6/10/2025 12:04:59 PM",
                "prevNAV": "47.61",
                "navChange": "-0.34",
                "navPerChange": "-0.71",
                "ord": "27",
                "schemeNameFull": "Motilal Oswal Nifty Capital Market ETF"
            },
            {
                "secname": "MOCAPITAL iNAV",
                "currNav": "47.15",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "47.5",
                "navChange": "-0.35",
                "navPerChange": "-0.73",
                "ord": "28",
                "schemeNameFull": "Motilal Oswal Nifty Capital Market ETF"
            },
            {
                "secname": "MON50EQUAL",
                "currNav": "31.64",
                "currNavDate": "6/10/2025 12:03:50 PM",
                "prevNAV": "31.5",
                "navChange": "0.14",
                "navPerChange": "0.44",
                "ord": "29",
                "schemeNameFull": "Motilal Oswal Nifty 50 Equal Weight ETF"
            },
            {
                "secname": "MON50EQUAL iNAV",
                "currNav": "31.59",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "31.5",
                "navChange": "0.09",
                "navPerChange": "0.29",
                "ord": "30",
                "schemeNameFull": "Motilal Oswal Nifty 50 Equal Weight ETF"
            },
            {
                "secname": "MONEXT50",
                "currNav": "68.18",
                "currNavDate": "6/10/2025 12:04:51 PM",
                "prevNAV": "68.05",
                "navChange": "0.13",
                "navPerChange": "0.19",
                "ord": "31",
                "schemeNameFull": "Motilal Oswal Nifty Next 50 ETF"
            },
            {
                "secname": "MONEXT50 iNAV",
                "currNav": "68.32",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "68.24",
                "navChange": "0.08",
                "navPerChange": "0.11",
                "ord": "32",
                "schemeNameFull": "Motilal Oswal Nifty Next 50 ETF"
            },
            {
                "secname": "MOINFRA",
                "currNav": "61.77",
                "currNavDate": "6/10/2025 12:04:49 PM",
                "prevNAV": "61.8",
                "navChange": "-0.03",
                "navPerChange": "-0.05",
                "ord": "34",
                "schemeNameFull": "Motilal Oswal BSE India Infrastructure ETF"
            },
            {
                "secname": "MOINFRA iNAV",
                "currNav": "60.08",
                "currNavDate": "5/27/2025 9:02:50 AM",
                "prevNAV": "60.09",
                "navChange": "-0.01",
                "navPerChange": "-0.02",
                "ord": "35",
                "schemeNameFull": "Motilal Oswal BSE India Infrastructure ETF"
            },
            {
                "secname": "MOMGF",
                "currNav": "143.79",
                "currNavDate": "6/10/2025 12:04:56 PM",
                "prevNAV": "143.49",
                "navChange": "0.30",
                "navPerChange": "0.21",
                "ord": "35",
                "schemeNameFull": "Motilal Oswal Nifty India Manufacturing ETF"
            },
            {
                "secname": "MOMGF iNAV",
                "currNav": "141.25",
                "currNavDate": "5/28/2025 9:31:10 AM",
                "prevNAV": "141.47",
                "navChange": "-0.22",
                "navPerChange": "-0.15",
                "ord": "36",
                "schemeNameFull": "Motilal Oswal Nifty India Manufacturing ETF"
            },
            {
                "secname": "MOPSE",
                "currNav": "101.34",
                "currNavDate": "6/10/2025 12:04:56 PM",
                "prevNAV": "100.86",
                "navChange": "0.48",
                "navPerChange": "0.48",
                "ord": "36",
                "schemeNameFull": "Motilal Oswal Nifty PSE ETF"
            },
            {
                "secname": "MOPSE iNAV",
                "currNav": "98.91",
                "currNavDate": "6/5/2025 4:59:50 PM",
                "prevNAV": "98.49",
                "navChange": "0.41",
                "navPerChange": "0.42",
                "ord": "37",
                "schemeNameFull": "Motilal Oswal Nifty PSE ETF"
            }
        ],
        "n100Data": [
            {
                "secname": "MOFN100FOF",
                "currNav": "181.73",
                "currNavDate": "6/10/2025 12:04:55 PM",
                "prevNAV": "180.51",
                "navChange": "1.2199999999999989",
                "navPerChange": "0.675862833084039",
                "ord": "1"
            },
            {
                "secname": "MONQ50",
                "currNav": "74.94",
                "currNavDate": "6/10/2025 12:04:42 PM",
                "prevNAV": "74.66",
                "navChange": "0.28000000000000114",
                "navPerChange": "0.375033485132603",
                "ord": "1"
            },
            {
                "secname": "MOFN100FOF iNAV",
                "currNav": "182.15020370644805",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "182.3326",
                "navChange": "-0.1823962935519603",
                "navPerChange": "-0.10003493261872001",
                "ord": "2"
            },
            {
                "secname": "MONQ50 iNAV",
                "currNav": "72.47401208787086",
                "currNavDate": "6/10/2025 12:26:00 PM",
                "prevNAV": "72.5462",
                "navChange": "-0.072187912129138",
                "navPerChange": "-0.09950612455116603",
                "ord": "2"
            }
        ]
    },
    message: "Data found sucessfully",
};
export default function decorate(block) {
    const container = document.querySelector('.section.etf-net-asset-value-container');
    if (!container) return;
    console.log(container);


    // Add classes to the first two content blocks
    const contentBlocks = container.querySelectorAll(':scope > .default-content-wrapper');
    if (contentBlocks[0]) contentBlocks[0].classList.add('etf-funds-heading');
    // if (contentBlocks[1]) contentBlocks[1].classList.add('etf-funds-description');
    const etf = EtfFund.data.m50M100Data;
    const table = document.createElement("table");
    

    etf.forEach(e => {
        const a = document.createElement("thead")
        a.innerHTML = `
    <td>${e.secname}</td>
    <td>${e.navPerChange}</td>
    <td>${e.currNavDate}</td>
    <td>${e.navChange}</td>    
    <td>${e.schemeNameFull}</td>`;
        table.appendChild(a)
    })
    block.appendChild(table)

}



