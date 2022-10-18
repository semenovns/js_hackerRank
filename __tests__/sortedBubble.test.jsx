import testZalupaMethod from "../src/sortedBubble";

test("Test the sorting method",
()=>{

    const unsortedArray = [5, 4, 8, 2, 17, 0, -76, 13];
    const sortedArray = [-76, 0, 2, 4, 5, 8, 13, 17];
    expect(testZalupaMethod(unsortedArray)).toEqual(sortedArray);
    
});