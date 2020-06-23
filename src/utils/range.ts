/** Returns an array of length (end - start), with numbers ranging from start(inclusive) to end(exclusive) */
export const range = (start: number, end: number) => {
    return Array(end - start).fill(0).map((_, i) => i + start);
};
