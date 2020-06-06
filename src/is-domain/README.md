## regexPool - isDomain()

To use this function:

## Installation

```bash
npm i regexpool
```

## Usage

Call the function to the page you want to use after the installation process:

```bash
import { isDomain } from 'regexpool'
```

Finally, create a variable and send the parameter to the function you call.

```bash
const regexPoolVariable  = isDomain('www.sample.com', 'wwwPath'); // true
const regexPoolVariable2  = isDomain('www.sample.com.tr', 'wwwOptionally'); // true
const regexPoolVariable3  = isDomain('sample.com', 'wwwOptionally'); // true
const regexPoolVariable4  = isDomain('sample.com', 'wwwPath'); // false
const regexPoolVariable5  = isDomain('sub.sample.com.tr', 'wwwOptionally'); // true
```
