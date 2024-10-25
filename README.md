# Web Development Project 5 - _My Weather App_

Submitted by: **Nereida Rondon**

This web app: **Allows users to check the current weather and 5-day forecast for any city by using the OpenWeather API. Users can switch between Fahrenheit and Celsius, filter weather conditions, and choose between displaying today's forecast, the 5-day forecast, or both.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the current weather for the searched city, including temperature, condition, humidity, and wind speed.**
- [x] **Users can search for weather data by city or ZIP code.**
- [x] **The app displays a 5-day weather forecast, showing one forecast per day.**
- [x] **Users can toggle between Fahrenheit and Celsius.**
- [x] **Users can filter the display to show either today's weather or the 5-day forecast.**
- [x] **The app displays summary statistics like average temperature over the forecast period.**

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='/src/assets/week5.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

GIF created with LiceCap

## Notes

Some challenges encountered during development:

- **Responsive Design:** Ensuring that the weather cards and filters display properly across different screen sizes (especially stacking elements vertically on mobile while maintaining a row-based layout on larger screens).
- **Data Handling:** Managing and displaying both current weather data and forecast data from two different API endpoints was tricky and required careful handling of asynchronous API calls.
- **Temperature Toggle:** Implementing a smooth toggle between Fahrenheit and Celsius required recalculating and re-fetching data in the correct units dynamically.

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
