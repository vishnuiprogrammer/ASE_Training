const obj = `{
  "order_id": "ORD-2026-99X",
  "status": "in_transit",
  "metadata": {
    "priority": "high",
    "region": "North America",
    "tags": ["electronics", "fragile", "rush"]
  },
  "timestamps": {
    "created_at": "2026-04-20T09:00:00Z",
    "last_updated": "2026-04-24T12:34:37Z",
    "estimated_delivery": "2026-04-27T18:00:00Z"
  },
  "line_items": [
    {
      "product_id": "SKU-5542",
      "details": {
        "name": "Neural Processor v3",
        "manufacturer": {
          "name": "TechCore Inc.",
          "location": "Seoul, KR"
        }
      },
      "inventory_metrics": {
        "quantity": 150,
        "unit": "units",
        "weight": {
          "value": 0.45,
          "unit": "kg"
        }
      },
      "pricing": {
        "unit_price": 299.99,
        "currency": "USD",
        "discounts": [
          {
            "type": "bulk_order",
            "percentage": 10,
            "expiry": "2026-05-01"
          }
        ]
      }
    },
    {
      "product_id": "SKU-9910",
      "details": {
        "name": "Fiber Optic Shielding",
        "manufacturer": {
          "name": "OpticFlow",
          "location": "Berlin, DE"
        }
      },
      "inventory_metrics": {
        "quantity": 25,
        "unit": "rolls",
        "weight": {
          "value": 12.2,
          "unit": "kg"
        }
      },
      "pricing": {
        "unit_price": 1250.00,
        "currency": "USD",
        "discounts": []
      }
    }
  ],
  "shipping_log": [
    {
      "checkpoint": "Warehouse A",
      "timestamp": "2026-04-21T14:20:00Z",
      "coordinates": {
        "lat": 34.0522,
        "lng": -118.2437
      }
    },
    {
      "checkpoint": "Distribution Center 4",
      "timestamp": "2026-04-23T11:05:00Z",
      "coordinates": {
        "lat": 37.7749,
        "lng": -122.4194
      }
    }
  ]
}`;

console.log(JSON.parse(obj));
