export function isNumeric(num) {
    return (typeof num === "number" || (typeof num === "string" && num.trim() !== "")) && !isNaN(num);
}
export function parseString(val) {
    if (!isNumeric(val)) {
        return val;
    }
    return parseFloat(val);
}
