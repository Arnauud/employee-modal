# Employee-Modal
A simple, reusable React modal component for displaying messages, such as confirmation after an employee is successfully created.

## Installation

`npm i employee-modal`


## Usage

Import and use the EmployeeModal component in your React project:

```
import React, { useState } from 'react';
import EmployeeModal from 'employee-modal';

const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Employee successfully created!"
      />
    </div>
  );
};

export default ExampleComponent;
```

## Props

| Prop      | Type       | Required | Description                                                         |
| --------- | ---------- | -------- | ------------------------------------------------------------------- |
| `isOpen`  | `boolean`  | ✅        | Controls whether the modal is visible (`true`) or hidden (`false`). |
| `onClose` | `function` | ✅        | Function that handles closing the modal when the button is clicked. |
| `message` | `string`   | ❌        | Optional message to display inside the modal.                       |


## Version & Dependencies 

Node version: 18.16.1
IDE: Visual Studio Code

if you already have npm installed you can : 
`npm install Arnauud/employee-modal`


if not, `npm install` => `npm install Arnauud/employee-modal`

or `git clone https://github.com/Arnauud/employee-modal.git`
