## regexPool - isDate()

To use this function:

## Installation

```bash
npm i regexpool
```

## Usage

Call the function to the page you want to use after the installation process:

```bash
import { isDate } from 'regexpool'
```

Finally, create a variable and send the parameter to the function you call.

```bash
const regexPoolVariable  = isDate('31/05/2020', 'DD/MM/YYYY'); // true
const regexPoolVariable2  = isDate('1/6/2020', 'DD/MM/YYYY'); // true
const regexPoolVariable3  = isDate('2020/05/31', 'YYYY/MM/DD'); // true
const regexPoolVariable4  = isDate('2020/6/1', 'YYYY/MM/DD'); // true
const regexPoolVariable5  = isDate('1234567', 'YYYY/MM/DD'); // false
```
