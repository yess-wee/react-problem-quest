Traffic light:

Description:

You are tasked with building a simple traffic light component using React. The traffic light should consist of three lights: red, yellow, and green. The lights should switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

Red light: 4000ms
Yellow light: 500ms
Green light: 3000ms

Your task is to implement a React component that represents the traffic light and switches between these colors based on the specified intervals. Additionally, you should style the traffic light to make it visually appealing.


Requirements:
Use React to create a component called TrafficLight.
The TrafficLight component should display three lights: red, yellow, and green.
The lights should switch according to the following intervals:

Red light: 4000ms
Yellow light: 500ms
Green light: 3000ms

The traffic light should loop indefinitely, switching between colors in the specified order.
Ensure that only one light is active at a time.
Style the traffic light to make it visually appealing. You can use CSS or any other styling method of your choice.


Example:
Here's how the traffic light should behave:
Initially, the red light should be active.
After 4000ms, the red light turns off, and the green light turns on.
After 3000ms, the green light turns off, and the yellow light turns on.
After 500ms, the yellow light turns off, and the red light turns on.
This sequence repeats indefinitely.
