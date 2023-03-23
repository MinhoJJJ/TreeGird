//체크박스 체크시
Grids.OnValueChanged = function(grid,row, col, old_value, new_value){
	var number;                                                      // 번호를 담아줄 변수 

		if (old_value === 1 && (new_value === ""||new_value === 0)){    // 해당 행이 체크상태라면 
			number = row.number;                                 // 해당 행의 ndx값을 가져온다. 
		}else{                                                          // 체크박스 풀었을 경우
		}
}

row.kind  // 현재 렌더링 되는 행의 종류

sgexpanded: 상위 노드가 펼쳐져서 하위 노드를 보여주는 상태인 행
sgcollapsed: 상위 노드가 접혀서 하위 노드를 감추는 상태인 행
sgleaf: 상위 노드를 가지지 않는 하위 노드인 행
TreeGrid에서 row.kind 속성은 주로 사용자가 커스텀한 셀 스타일을 지정할 때 사용됩니다. 예를 들어, 
sgexpanded 상태인 행은 다른 상태와 구분하기 위해 다른 색상을 지정할 수 있습니다. 또한,
sgleaf 상태인 행은 아이콘을 변경하여 노드인지 아닌지를 시각적으로 나타낼 수 있습니다.

var colIndex=myGrid.ColNames[1].indexOf("SELECT_YN");   // 트리그리드 열의 인덱스만 가져옴 객체는 아님
