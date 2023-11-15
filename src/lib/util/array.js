export function IsInArrayWindow(i,arr,window_i,window_length){
    const r = (window_length-1)/2;
    return i>=Math.min(
        Math.max(0, window_i-r),arr.length-window_length
    ) && i<= window_i+r+Math.abs(Math.min(window_i-r,0));
}

// export function WindowArray(arr, i, diameter) {
//     const r = (diameter-1)/2;
//     return arr.slice(
//         Math.min(Math.max(0, i-r), arr.length-diameter),
//         i+r+1+Math.abs(Math.min(i-r,0))
//     )
// }