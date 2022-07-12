export function arrayToggler(arrGetter=()=>{}, afterChange=()=>{}) {
  return (value) => {
    let arr = arrGetter();
    if (arr.includes(value)) {
      arr.splice(arr.indexOf(value), 1);
    } else {
      arr.push(value);
    }
    afterChange(arr);
    return arr;
  }
}