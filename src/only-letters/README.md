## regexPool - onlyLetters()

To use this function:

## Installation

```bash
npm i regexpool
```

## Usage

Call the function to the page you want to use after the installation process:

```bash
import { onlyLetters } from 'regexpool'
```

Finally, create a variable and send the parameter to the function you call.

```bash
const regexPoolVariable  = onlyLetters('example Or EXAMPLE'); // true
const regexPoolVariable2 = onlyLetters('123$'); // false
```
