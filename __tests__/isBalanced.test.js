import isBalancedMethod from "../src/balancedBrackets";

test("Test the balanced brackets method",
()=>{

    const testBalanced = "{{[[(())]]}}"; //balanced
    const testUnbalanced = "{(([])[])[]]}}";
    expect(isBalancedMethod(testBalanced)).toBe('YES');
    expect(isBalancedMethod(testUnbalanced)).toBe('NO');
    
});