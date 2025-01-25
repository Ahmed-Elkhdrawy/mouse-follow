
# 🐭 mouse-follow

A React hook that enables elements to follow or move away from the mouse cursor, enhancing user interaction with dynamic cursor effects.

![npm](https://img.shields.io/npm/v/mouse-follow) ![GitHub](https://img.shields.io/github/license/Ahmed-Elkhdrawy/mouse-follow) ![GitHub stars](https://img.shields.io/github/stars/Ahmed-Elkhdrawy/mouse-follow?style=social)



![Project Screenshot](https://raw.githubusercontent.com/Ahmed-Elkhdrawy/mouse-follow/refs/heads/main/mouse-follow-screenshot.gif)



## ✨ Features

- **Dynamic Cursor Interaction**: Effortlessly make elements follow or repel the mouse cursor. 🖱️
- **Customizable Behavior**: Easily adjust settings to fit your application's needs. 🛠️
- **Lightweight and Efficient**: Designed with performance in mind to ensure smooth user experiences. ⚡

## 📦 Installation

Install the package using npm:

```bash
npm install mouse-follow
```

Or with yarn:

```bash
yarn add mouse-follow
```

## 🚀 Usage

First, import the `useMouseFollow` hook into your React component:

```javascript
import useMouseFollow from 'mouse-follow';
```

Then, apply the hook to your component:

```javascript
import React from 'react';
import useMouseFollow from 'mouse-follow';

const YourComponent = () => {
  const ref = useMouseFollow({
    // Configuration options
    follow: true, // Set to false to make the element repel the cursor
    speed: 0.1,   // Adjust the speed of the movement
  });

  return (
    <div ref={ref}>
      {/* Your content */}
    </div>
  );
};

export default YourComponent;
```

## ⚙️ Configuration Options

The `useMouseFollow` hook accepts an optional configuration object with the following properties:

| Property | Type    | Description                                                                 | Default |
|----------|---------|-----------------------------------------------------------------------------|---------|
| `follow`   | boolean | If `true`, the element follows the cursor; if `false`, the element moves away from the cursor. | `true`    |
| `speed`    | number  | Determines the speed of the element's movement. A lower value results in slower movement. | `0.1`     |

## 🎯 Example

Here's a simple example demonstrating how to use `mouse-follow`:

```javascript
import React from 'react';
import useMouseFollow from 'mouse-follow';

const FollowExample = () => {
  const ref = useMouseFollow({ follow: true, speed: 0.2 });

  return (
    <div
      ref={ref}
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        position: 'absolute',
      }}
    />
  );
};

export default FollowExample;
```

In this example, a blue circle will smoothly follow the mouse cursor around the screen. 🖱️💙

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or encounter any issues, please open an issue or submit a pull request on the [GitHub repository](https://github.com/Ahmed-Elkhdrawy/mouse-follow).

Steps to Contribute:
1. Fork the repository. 🍴
2. Create a new branch for your feature or bugfix. 🌿
3. Commit your changes. 💾
4. Push your branch and submit a pull request. 🚀


## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Ahmed-Elkhdrawy/mouse-follow/blob/main/LICENSE) file for details.

---

**Made with ❤️ by [Ahmed Elkhdrawy](https://github.com/Ahmed-Elkhdrawy).**
