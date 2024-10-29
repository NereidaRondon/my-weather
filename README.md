# Web Development Project 6 - _My Weather App_

Submitted by: **Nereida Rondon**

This web app: **Allows users to check the current weather and 5-day forecast for any city by using the OpenWeather API. Users can switch between Fahrenheit and Celsius, filter weather conditions, and choose between displaying today's forecast, the 5-day forecast, or both. The app also features interactive data visualizations to provide insights into temperature trends over the forecast period. Each forecast day in the 5-day forecast can be clicked to view a detailed page with more in-depth weather information. Each detail page has a unique, shareable link.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app includes at least one unique chart developed using the fetched data that tells an interesting story.**
- [x] **Clicking on an item in the list view displays more details about it.**
- [x] **Each detail view of an item has a direct, unique link to that item’s detail view page.**

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='/src/assets/week6.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

GIF created with LiceCap

## Notes

Some challenges encountered during development:

- **Routing and Navigation:** Structuring the app to enable a detailed view of the weather for a specific date required setting up dynamic routes. Ensuring that navigation between the home view and the detail view displayed only the relevant components involved restructuring routing logic across multiple files and separating the routes from the main app component.

- **Data Sharing Across Routes:** Displaying the correct weather data in the detailed view required sharing data across components. To achieve this without redundant API calls, we implemented a context provider to manage and provide weather data globally. This approach simplified data management but introduced complexity in setting up and accessing the data in multiple nested components.

- **Date Formatting Consistency:** To improve the user experience, we needed consistent and clear date formats, particularly for the detailed view page. Adjusting JavaScript’s `Date` object to format dates as “Month Day” instead of the default format required careful management of date strings and time zones to ensure accuracy.

## License

    Copyright 2024 Nereida Rondon

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
