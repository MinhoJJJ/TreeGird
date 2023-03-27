//체크박스 체크시
Grids.OnValueChanged = function(grid,row, col, old_value, new_value){
	var number;                                                      // 번호를 담아줄 변수 

		if (old_value === 1 && (new_value === ""||new_value === 0)){    // 해당 행이 체크상태라면 
			number = row.number;                                 // 해당 행의 ndx값을 가져온다. 
		}else{                                                          // 체크박스 풀었을 경우
		}
}  //실제로 체크박스 체크라기보다는 해당 row에 변화가 있고 없고로 체크한다.

// grid cfg 옵션에서 selecting 옵션이 1이고 체크를 한 경우 체크 값들 가져오는 방법
var selected_rows = Grids["grid명"].GetSelRows();
for (var i = 0; i<selected_rows.length; i++) {
	console.log(selected_rows[i].cols이름+",");        
}

// 셀값 수정후 나오는 이벤트
Grids.OnAfterSave = function(grid,source){
	Grids.List.ReloadBody();
}; 
// "Grids.OnAfterSave" 이벤트는 그리드에서 셀 값이 변경된 후에 발생하는 이벤트입니다. 따라서 //
// 이 코드는 그리드의 셀 값이 저장되고 나면 "Grids.List" 그리드의 본문을 다시로드하도록 지시합니다. 
// 이렇게하면 저장된 변경 사항이 그리드에 즉시 표시됩니다.

row.kind  // 현재 렌더링 되는 행의 종류

//그리드 row 더블클릭시 사용하는 함수
Grids.OnDblClick = function(grid, row, col){}

//그리드 row 한번 클릭시 이벤트
Grids.OnClick = function(grid, row, col){}

// 첨부파일 이미지 추가
Grids.OnDataReceive = function(grid,source){
	grid.SetAttribute(row, "열 이름", "열의 타입", "이미지 주소",1);	
}

var colIndex=myGrid.ColNames[1].indexOf("SELECT_YN");   // 트리그리드 열의 인덱스만 가져옴 객체는 아님
