import http from "k6/http";
import { check, sleep } from 'k6';
import { SharedArray } from "k6/data";
import exec from 'k6/execution';

export let options = {
  stages: [
    { duration: "5s", target: 10 },
    { duration: "10s", target: 10 },
    { duration: "5s", target: 0 },
  ],
  thresholds: {
    "http_req_duration": ["p(95)<5000"],
  },
};

// Add this line after the options block, outside of the default function, as we want to load the data only once.
// Add this line after the options block, outside of the default function, as we want to load the data only once.
const customers = new SharedArray('all my customers', function () {
  return JSON.parse(open('./customers.json')).customers;
});

const BASE_URL = __ENV.BASE_URL || "http://localhost:3333";

export default function () {
  let restrictions = {
    maxCaloriesPerSlice: 500,
    mustBeVegetarian: false,
    excludedIngredients: ["pepperoni"],
    excludedTools: ["knife"],
    maxNumberOfToppings: 6,
    minNumberOfToppings: 2,
  };
  let res = http.post(`${BASE_URL}/api/pizza`, JSON.stringify(restrictions), {
    headers: {
      "Content-Type": 'application/json',
      "X-User-ID": customers[ (exec.vu.idInTest - 1) % customers.length],
    },
  });

  check(res, {
    "is status 200": (r) => r.status === 200,
    "is status 500": (r) => r.status === 500
  });

  console.log(`${res.json().pizza.name} (${res.json().pizza.ingredients.length} ingredients)`);
  sleep(1);
}

