function updateTime() {
    const now = new Date();
    console.dir(now);
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial update
updateTime();


// JavaScript (script.js):

// The updateTime function is defined to get the current time (hours, minutes, and seconds) and update the content of the element with the id "time" in the HTML with the formatted time string.

// The setInterval function is used to call the updateTime function every 1000 milliseconds (1 second). This ensures that the clock is updated every second.

// The initial call to updateTime is made outside of the setInterval to display the current time when the page is loaded.

// Inside the updateTime function:

// new Date() creates a new JavaScript Date object representing the current date and time.
// getHours(), getMinutes(), and getSeconds() retrieve the current hour, minute, and second from the date object.
// toString().padStart(2, '0') is used to ensure that the hours, minutes, and seconds are always displayed as two digits (e.g., '03' instead of '3').
// The formatted time string is then constructed and set as the text content of the element with the id "time" in the HTML.

// In JavaScript, the `Date` object is used to work with dates and times. The `new Date()` expression creates a new instance of the `Date` object, representing the current date and time at the moment it is called.

// Here's a brief overview of the `Date` object and how it works:

// - **Creation:**
//   ```javascript
//   const currentDate = new Date();
//   ```

// - **Methods:**
//   - `getHours()`: Returns the hour (0-23) of the specified date.
//   - `getMinutes()`: Returns the minutes (0-59) of the specified date.
//   - `getSeconds()`: Returns the seconds (0-59) of the specified date.
//   - `getMilliseconds()`: Returns the milliseconds (0-999) of the specified date.

// - **Example:**
//   ```javascript
//   const now = new Date();
//   const currentHour = now.getHours();
//   const currentMinute = now.getMinutes();
//   const currentSecond = now.getSeconds();
//   ```

// - **Formatting:**
//   The `Date` object can be used to create formatted date and time strings, as demonstrated in the previous example with the `toString().padStart(2, '0')` usage to ensure two-digit representation.

// Keep in mind that the `Date` object provides a variety of methods for working with dates and times, including methods for setting values, comparing dates, and performing various operations. It's a versatile tool for handling temporal information in JavaScript.