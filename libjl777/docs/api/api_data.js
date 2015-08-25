define({ "api": [
  {
    "type": "btcd",
    "url": "'{\"plugin\":\"InstantDEX\",\"method\":\"balance\",\"exchange\":\"{exchange}\"}'",
    "title": "Balance",
    "version": "0.1.0",
    "name": "GetInstantDEXMethodBalance",
    "group": "InstantDEX",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "openorders",
            "description": "<p>Get list of active orders.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"bitfinex\"",
              "\"btc38\"",
              "\"bitstamp\"",
              "\"btce\"",
              "\"poloniex\"",
              "\"bittrex\"",
              "\"huobi\"",
              "\"coinbase\"",
              "\"okcoin\"",
              "\"bityes\"",
              "\"lakebtc\"",
              "\"exmo\"",
              "\"quadriga\""
            ],
            "optional": false,
            "field": "exchange",
            "description": "<p>Supported external exchanges</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "RPC-Call-Example:",
          "content": "./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"balance\",\"exchange\":\"btc38\"}'\n./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"balance\",\"exchange\":\"poloniex\"}'",
          "type": "btcd"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "to be added",
          "type": "json"
        }
      ]
    },
    "filename": "./supernet.js",
    "groupTitle": "InstantDEX"
  },
  {
    "type": "btcd",
    "url": "'{\"plugin\":\"InstantDEX\",\"method\":\"openorders\",\"exchange\":\"{exchange}\"}'",
    "title": "Openorders",
    "version": "0.1.0",
    "name": "GetInstantDEXMethodOpenOrders",
    "group": "InstantDEX",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "openorders",
            "description": "<p>Get list of active orders.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"nxtae\"",
              "\"InstantDEX\"",
              "\"bitfinex\"",
              "\"btc38\"",
              "\"bitstamp\"",
              "\"btce\"",
              "\"poloniex\"",
              "\"bittrex\"",
              "\"huobi\"",
              "\"coinbase\"",
              "\"okcoin\"",
              "\"bityes\"",
              "\"lakebtc\"",
              "\"exmo\"",
              "\"quadriga\""
            ],
            "optional": false,
            "field": "exchange",
            "defaultValue": "null",
            "description": "<p>(optional) If specified, only return data or use data from selected exchange.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "RPC-Call-Example:",
          "content": "./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"openorders\"}'\n./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"openorders\",\"exchange\":\"nxtae\"}'",
          "type": "btcd"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"openorders\": [\n  {\n    \"quoteid\": \"15812219587932742311\",\n    \"base\": \"Jay\",\n    \"baseid\": \"8688289798928624137\",\n    \"baseamount\": \"100000000\",\n    \"rel\": \"NXT\",\n    \"relid\": \"5527630\",\n    \"relamount\": \"100000000\",\n    \"price\": 1,\n    \"volume\": 1,\n    \"offerNXT\": \"6746683124695165774\",\n    \"timestamp\": \"1440498301\",\n    \"isask\": \"0\",\n    \"exchange\": \"InstantDEX\",\n    \"gui\": \"\"\n  }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./supernet.js",
    "groupTitle": "InstantDEX"
  },
  {
    "type": "btcd",
    "url": "'{\"plugin\":\"InstantDEX\",\"method\":\"openorders\",\"baseid\":\"{baseid}\",\"relid\":\"{relid}\",\"exchange\":\"{exchange}\"}'",
    "title": "Orderbook",
    "version": "0.1.0",
    "name": "GetInstantDEXMethodOrderbook",
    "group": "InstantDEX",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "orderbook",
            "description": "<p>Get orderbook for pairs.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "baseid",
            "description": "<p>Base Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "relid",
            "description": "<p>Rel Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"nxtae\"",
              "\"InstantDEX\"",
              "\"bitfinex\"",
              "\"btc38\"",
              "\"bitstamp\"",
              "\"btce\"",
              "\"poloniex\"",
              "\"bittrex\"",
              "\"huobi\"",
              "\"coinbase\"",
              "\"okcoin\"",
              "\"bityes\"",
              "\"lakebtc\"",
              "\"exmo\"",
              "\"quadriga\""
            ],
            "optional": false,
            "field": "exchange",
            "defaultValue": "null",
            "description": "<p>(optional) If specified, only return data or use data from selected exchange.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "RPC-Call-Example:",
          "content": "./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"orderbook\",\"baseid\":\"8688289798928624137\",\"relid\":\"5527630\"}'\n#Open Jay/NXT orderbook from all exchanges combined.\n\n./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"orderbook\",\"baseid\":\"8688289798928624137\",\"relid\":\"5527630\",\"exchange\":\"InstantDEX\"}'\n#Open Jay/NXT orderbook only from InstantDEX exchange.",
          "type": "btcd"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"inverted\": 0,\n\"contract\": \"Jay/NXT\",\n\"baseid\": \"8688289798928624137\",\n\"relid\": \"5527630\",\n\"bids\": [\n  {\n    \"plugin\": \"InstantDEX\",\n    \"method\": \"tradesequence\",\n    \"dotrade\": 1,\n    \"price\": 12.321,\n    \"volume\": 100\n  },\n  {\n    \"plugin\": \"InstantDEX\",\n    \"method\": \"tradesequence\",\n    \"dotrade\": 1,\n    \"price\": 12.32,\n    \"volume\": 99\n  },\n  {\n    \"plugin\": \"InstantDEX\",\n    \"method\": \"tradesequence\",\n    \"dotrade\": 1,\n    \"price\": 12.31,\n    \"volume\": 200\n  }\n],\n\"asks\": [\n  {\n    \"plugin\": \"InstantDEX\",\n    \"method\": \"tradesequence\",\n    \"dotrade\": 1,\n    \"price\": 15.749,\n    \"volume\": 17\n  },\n  {\n    \"plugin\": \"InstantDEX\",\n    \"method\": \"tradesequence\",\n    \"dotrade\": 1,\n    \"price\": 15.75,\n    \"volume\": 225.0492\n  },\n  {\n    \"plugin\": \"InstantDEX\",\n    \"method\": \"tradesequence\",\n    \"dotrade\": 1,\n    \"price\": 15.79,\n    \"volume\": 149.948\n  }\n],\n\"numbids\": 8,\n\"numasks\": 25,\n\"lastbid\": 12.321,\n\"lastask\": 15.749,\n\"NXT\": \"6746683124695165774\",\n\"timestamp\": 1440517635,\n\"maxdepth\": 25\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./supernet.js",
    "groupTitle": "InstantDEX"
  },
  {
    "type": "btcd",
    "url": "'{\"plugin\":\"InstantDEX\",\"method\":\"placeask\",\"baseid\":\"{baseid}\",\"relid\":\"{relid}\",\"price\":\"{price}\",\"volume\":\"{volume}\",\"exchange\":\"{exchange}\"}'",
    "title": "Placeask",
    "version": "0.1.0",
    "name": "GetInstantDEXMethodPlaceAsk",
    "group": "InstantDEX",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "placeask",
            "description": "<p>Submit ask order.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "price",
            "description": "<p>Bid/Ask Price.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "volume",
            "description": "<p>Bid/Ask Volume.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "baseid",
            "description": "<p>Base Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "relid",
            "description": "<p>Rel Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"nxtae\"",
              "\"InstantDEX\"",
              "\"bitfinex\"",
              "\"btc38\"",
              "\"bitstamp\"",
              "\"btce\"",
              "\"poloniex\"",
              "\"bittrex\"",
              "\"huobi\"",
              "\"coinbase\"",
              "\"okcoin\"",
              "\"bityes\"",
              "\"lakebtc\"",
              "\"exmo\"",
              "\"quadriga\""
            ],
            "optional": false,
            "field": "exchange",
            "defaultValue": "null",
            "description": "<p>(optional) If specified, only return data or use data from selected exchange.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "RPC-Call-Example:",
          "content": "./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"placeask\",\"baseid\":\"8688289798928624137\",\"relid\":\"5527630\",\"price\":1,\"volume\":1,\"exchange\":\"InstantDEX\"}'\n#Submit ask order : 1 Jay assets @ 1 Nxt into InstantDEX.\n\n./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"placeask\",\"baseid\":\"8688289798928624137\",\"relid\":\"5527630\",\"price\":1,\"volume\":1}'\n#Submit ask order : 1 Jay assets @ 1 Nxt. Automatch will be used if no exchange specified.",
          "type": "btcd"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"quoteid\": \"17093329214979608856\",\n\"base\": \"Jay\",\n\"baseid\": \"8688289798928624137\",\n\"baseamount\": \"100000000\",\n\"rel\": \"NXT\",\n\"relid\": \"5527630\",\n\"relamount\": \"100000000\",\n\"price\": 1,\n\"volume\": 1,\n\"offerNXT\": \"6746683124695165774\",\n\"timestamp\": \"1440518266\",\n\"isask\": \"1\",\n\"exchange\": \"InstantDEX\",\n\"gui\": \"\",\n\"plugin\": \"relay\",\n\"destplugin\": \"InstantDEX\",\n\"method\": \"busdata\",\n\"submethod\": \"ask\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./supernet.js",
    "groupTitle": "InstantDEX"
  },
  {
    "type": "btcd",
    "url": "'{\"plugin\":\"InstantDEX\",\"method\":\"placebid\",\"baseid\":\"{baseid}\",\"relid\":\"{relid}\",\"price\":\"{price}\",\"volume\":\"{volume}\",\"exchange\":\"{exchange}\"}'",
    "title": "Placebid",
    "version": "0.1.0",
    "name": "GetInstantDEXMethodPlaceBid",
    "group": "InstantDEX",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "placebid",
            "description": "<p>Submit bid order.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "price",
            "description": "<p>Bid/Ask Price.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "volume",
            "description": "<p>Bid/Ask Volume.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "baseid",
            "description": "<p>Base Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "relid",
            "description": "<p>Rel Asset ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"nxtae\"",
              "\"InstantDEX\"",
              "\"bitfinex\"",
              "\"btc38\"",
              "\"bitstamp\"",
              "\"btce\"",
              "\"poloniex\"",
              "\"bittrex\"",
              "\"huobi\"",
              "\"coinbase\"",
              "\"okcoin\"",
              "\"bityes\"",
              "\"lakebtc\"",
              "\"exmo\"",
              "\"quadriga\""
            ],
            "optional": false,
            "field": "exchange",
            "defaultValue": "null",
            "description": "<p>(optional) If specified, only return data or use data from selected exchange.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "RPC-Call-Example:",
          "content": "./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"placebid\",\"baseid\":\"8688289798928624137\",\"relid\":\"5527630\",\"price\":1,\"volume\":1,\"exchange\":\"InstantDEX\"}'\n#Submit bid order : 1 Jay assets @ 1 Nxt into InstantDEX.\n\n./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"placebid\",\"baseid\":\"8688289798928624137\",\"relid\":\"5527630\",\"price\":1,\"volume\":1}'\n#Submit bid order : 1 Jay assets @ 1 Nxt. Automatch will be used if no exchange specified.",
          "type": "btcd"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"quoteid\": \"14436741218861091498\",\n\"base\": \"Jay\",\n\"baseid\": \"8688289798928624137\",\n\"baseamount\": \"100000000\",\n\"rel\": \"NXT\",\n\"relid\": \"5527630\",\n\"relamount\": \"100000000\",\n\"price\": 1,\n\"volume\": 1,\n\"offerNXT\": \"6746683124695165774\",\n\"timestamp\": \"1440518600\",\n\"isask\": \"0\",\n\"exchange\": \"InstantDEX\",\n\"gui\": \"\",\n\"plugin\": \"relay\",\n\"destplugin\": \"InstantDEX\",\n\"method\": \"busdata\",\n\"submethod\": \"bid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./supernet.js",
    "groupTitle": "InstantDEX"
  },
  {
    "type": "btcd",
    "url": "'{\"plugin\":\"InstantDEX\",\"method\":\"allorderbooks\"}'",
    "title": "Allorderbooks",
    "version": "0.1.0",
    "name": "getInstantDEXmethodAllorderbooks",
    "group": "InstantDEX",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "allorderbooks",
            "description": "<p>Get list of all active orderbooks.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "RPC-Call-Example:",
          "content": "./BitcoinDarkd SuperNET '{\"plugin\":\"InstantDEX\",\"method\":\"allorderbooks\"}'",
          "type": "btcd"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"orderbooks\": [\n  {\n    \"name\": \"Jay/NXT\",\n    \"base\": \"Jay\",\n    \"baseid\": \"8688289798928624137\",\n    \"rel\": \"NXT\",\n    \"relid\": \"5527630\",\n    \"exchange\": \"InstantDEX\"\n  },\n  {\n    \"name\": \"SuperNET/NXT\",\n    \"base\": \"SuperNET\",\n    \"baseid\": \"12071612744977229797\",\n    \"rel\": \"NXT\",\n    \"relid\": \"5527630\",\n    \"exchange\": \"InstantDEX\"\n  }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./supernet.js",
    "groupTitle": "InstantDEX"
  }
] });