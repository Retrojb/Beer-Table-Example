
    /* P.L.N. Sort:
        if ARG1(a) appear BEFORE ARG2(b) return a negative number
        if ARG1(a) appears AFTER the ARG2(b) return a positive number
        if ARG1(a) is EQUAL to ARG2(b) return 0
        ["John", "Lisa", "Dave"]
        when dealing with typeof String call toLowerCase()
        
    */
   
    function descendingCompare(a, b, orderBy) {
        // orderBy is the value of ABV
        if (b[orderBy] < a[orderBy])
            return -1;

        if (b[orderBy] > a[orderBy])
            return 1;

        return 0;
    }

    export function getCompare(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingCompare(a, b, orderBy)
            : (a, b) => -descendingCompare(a, b, orderBy);
    }

    export function stableSort(arr, comparator) {
        const stable = arr.map((el, index) => [el, index]);
        stable.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stable.map((el) => el[0]);
    }
    
export default { descendingCompare, getCompare, stableSort }
