# regexPool

A library of frequently used regex samples.

## Installation

```bash
npm i regexpool
```

## Usage

It is implemented from within the regexPool file. For example: 

```bash
import { forExample } from 'regexpool'
```

You must send parameters to the function you called last. The value true / false will return you: 

```bash
const regexPoolVariable = forExample('parameter');
```

## Regex Properties

| Name | Used Type  | Return Options  |
| :-----: | :-: | :-: |
| isEmail | isEmail('example@domain.com') | true, false |
| onlyLetters | onlyLetters('example') | true, false |

## License
MIT

## Changelog
#### v1.0.0 
Initial commit and Adding isEmail control
#### v1.1.0 
Adding onlyLetters control