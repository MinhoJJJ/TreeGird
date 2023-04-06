//그리드 객체 불러올때 방식들
Grids.Minho.GetSelRows()  // 직접 참조하는 방식
Grids["Minho"].GetSelRows() // 문자열로 불러오는 방식


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
// cfg의 selecting 옵션이 1일 경우  체크된 모든 행의 체크를 풀음
Grids["Minho"].SelectAllRows();

//그리드의 col속성에 값을 주입
Grids.Minho.SetValue(row, "SELECT_YN", "1", 0);

// 그드내의 cfg 의 Selecting = 1 일 경우
Grids.Minho.SelectAllRows(1); // 해당 그리드의 모든 행을 선택한다.
Grids.Minho.SelectAllRows(0); // 해당 그리드의 모든 행을 취소한다.


//모달에 다른거 채우기
$("#MINHOModal").load(url + encodeURI(param), function(){}

//그리드 반복문
for(var row=grid.GetFirst(null); row; row=grid.GetNext(row)) {}/ 그리드가 없을때까지 반복

//그리드 특정 row 값 변경
grid.SetAttribute(row, "MINHO", "Icon", "/images/com/web/downloadFile.png",1) 
// row의 minho라는 속성을 가진 곳에 아이콘을 넣고 이미지는 3번째 인자로 함 네번째 인자는 아이콘 사진의 위치를 말함 1은 row의 왼쪽 2는 오른쪽 

var colIndex=myGrid.ColNames[1].indexOf("SELECT_YN");   // 트리그리드 열의 인덱스만 가져옴 객체는 아님

// 그리드 초기화
Grids.Active = null;   
Grids.Focused = null;

// 그리드의 데이터 가져오는 것 스크립트단에서 처리
Grids.MINHO.Source.Data.Url = url + encodeURI(param);   //Grid.Source.Upload.Url 이건 업로드 데이터 처리 (저장 버튼 등)
Grids.MINHO.ReloadBody();   // 가져오고나서 새로고침



