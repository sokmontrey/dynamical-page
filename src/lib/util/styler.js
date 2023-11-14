export default function styler (node, vars) {
    Object.entries(vars).forEach(([ p, v ]) => { node.style[p] = v })
}