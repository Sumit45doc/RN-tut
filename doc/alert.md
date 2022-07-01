#### jasacript alert function works in react native.
The title is displayed as header and alert string as message.

To customize the alert we can use Alert api.
import {Alert} from "react-native";

- There are two methoud of Alert - alert & prompt
- Syntax for alert method: Alert.alert("title", "message", [Array of buttons])
- Syntax for prompt method: Alert.prompt("title", "message", userInputText => consoel.log(userInputText));

#### Note: prompt method only works on IOS
