import encryption from "../src/encryption";

test("Test the balanced brackets method",
()=>{

    const text1 = "if man was meant to stay on the ground god would have given us roots";
    const encryptedText1 = "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau";
    const text2 = "chillout";
    const encryptedText2 = "clu hlt io";
    expect(encryption(text1)).toBe(encryptedText1);
    expect(encryption(text2)).toBe(encryptedText2);
    
});