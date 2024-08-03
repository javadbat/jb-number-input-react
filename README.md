# jb-number-input

this is a superset component on [jb-number-input](https://github.com/javadbat/jb-number-input) just for react.
it's also use [jb-input-react](https://github.com/javadbat/jb-input-react) for standard input props and styles
Demo: [stackblitz](https://stackblitz.com/edit/jb-number-input-react?file=src%2FApp.tsx) 
## instructions

### install

#### using npm

1- install npm package
```cmd
npm i jb-number-input-react
```

2- import module and use it

```jsx
import {JBNumberInput} from 'jb-number-input-react';

<JBNumberInput label="number:" message="subtitle of input box"></JBNumberInput>

```
### get/set value

```js
const [value,setValue] = useState("");
<JBNumberInput value={value} onChange={(e)=>setValue(e.target.value)}></JBNumberInput>
```
### Config Number parameters

if you want to control which number user may input, ex: you may want to let user input negative number or add min & max boundary or limit decimal precision. for doing so you can set number field parameter to jb-number-input.    

```jsx
    <JBNumberInput
        //how many number you want to + or  - on user press buttons or use arrow keys default is 1
        step={100}
        // how many decimal input accept default is infinity
        decimalPrecision={2}
        // what char replaced to input if user paste some illegal value default is '' (empty string)
        invalidNumberReplacement={'0'}
        // separate every 3 number with comma like 1000000 => 1,000,000
        showThousandSeparator={false}
        // which char we use to separate thousand number
        thousandSeparator=','
        //can input accept negative number or not
        acceptNegative={true}
        // max number value user can input. if user input bigger number it will be set to max
        maxValue= {1000}
        //min number value user can input. if user input smaller number it will be set to this value.
        minValue = {1}
        // will show persian number instead of english number in output but original input value remain in english char
        //if true and user type 123 and see ۱۲۳ but inputtedDom.value will be 123
        showPersianNumber={false}
    ></JBNumberInput>
  const numberInput = document.getElementByTagName('jb-number-input')

```

### set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component.
since jb-number-input use jb-input underneath, read [jb-input](https://github.com/javadbat/jb-input) custom style list.

| variable                                       | description |
|------------------------------------------------|-------------|
| --jb-number-input-input-direction              | number input is ltr by default even in rtl page.so you should override it by this variable if you want it rtl or inherit |
| --jb-number-input-button-width                 | |
| --jb-number-input-increase-button-bg           | |
| --jb-number-input-decrease-button-bg           | |
| --jb-number-input-increase-button-border       | |
| --jb-number-input-decrease-button-border       | |
| --jb-number-input-increase-button-border-radius| |
| --jb-number-input-decrease-button-border-radius| |
| --jb-number-input-increase-button-color        | |
| --jb-number-input-decrease-button-color        | |
| --jb-number-input-increase-button-color-hover  | |
| --jb-number-input-decrease-button-color-hover  | |

### control Buttons
you can add `+` and `-` button into your box element for easier access to change the number with just simple click or touch.
if you want to add this buttons you just have to set `showControlButton` of component:

```jsx
<JBNumberInput showControlButton={true}></JBNumberInput>
```
after that if user click on the `+` or `-` value will increase or decrease base on the step you set in `step`(default is 1).    
click on `+` `-` button will call `onChange` event.