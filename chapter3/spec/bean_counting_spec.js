describe("countBs",function(){
	it("knows that 'the big bad wolf' has 2 bs",function(){
		expect(countChars('the Big Bad wolf',"B")).toBe(2);
	});

	it("knows that 'All the kings men will never come back' has 5 e's",function(){
		expect(countChars('All the kings men will never come back',"e")).toBe(5)
	})
})