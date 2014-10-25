describe("ChessBoard",function(){
	beforeEach(function(){
		chess_board = new ChessBoard();
	})
	it("can print a line of alternating hash symbols and spaces", function(){
		expect(chess_board.line(8)).toEqual("# # # # ")
	});
	it("can print a reverse line", function(){
		expect(chess_board.reverse_line("# # # # ")).toEqual(" # # # #")
	});

	it("can print a line of any size", function(){
		expect(chess_board.line(16)).toEqual("# # # # # # # # ")
	});

});
