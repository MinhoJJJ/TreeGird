
<C Name="" 	Type="Bool" Width="80" CanEdit="1" Visible="1" Align="center" CanExport="1" CanFilter="0"  />


treegrid에서 <grid> 태그의 <C> 태그는 각 열(Column)의 속성을 정의하는 역할을 합니다. 이 중, <C> 태그의 속성은 다음과 같습니다.

Type: 해당 열의 데이터 타입을 지정합니다. 예를 들어, "Bool"은 Boolean 데이터 타입을 의미합니다.
Width: 해당 열의 너비를 지정합니다. 일반적으로 픽셀 단위로 지정되며, 화면에 표시되는 열의 너비를 결정합니다.
CanEdit: 해당 열의 셀(Cell)이 편집 가능한지 여부를 지정합니다. 1은 편집 가능하다는 의미이며, 0은 편집 불가능하다는 의미입니다
Visible: 해당 열이 화면에 표시될지 여부를 지정합니다. 1은 표시된다는 의미이며, 0은 표시되지 않는다는 의미입니다.
Align: 해당 열의 텍스트 정렬 방향을 지정합니다. "left", "right", "center" 등의 값을 사용할 수 있습니다.
CanExport: 해당 열의 데이터가 내보내기(Export) 가능한지 여부를 지정합니다. 1은 내보내기 가능하다는 의미이며, 0은 내보내기 불가능하다는 의미입니다.
CanFilter: 해당 열의 데이터가 필터링(Filtering) 가능한지 여부를 지정합니다. 1은 필터링 가능하다는 의미이며, 0은 필터링 불가능하다는 의미입니다.
"CanExpand='1'"은 해당 행이 하위 항목을 가질 수 있는지 여부를 나타내는 속성입니다. "CanExpand"가 "1"인 경우 해당 행에 하위 항목이 표시될 수 있습니다.
"Expanded='1'"은 해당 행의 하위 항목이 현재 펼쳐져 있는지 여부를 나타내는 속성입니다. "Expanded"가 "1"인 경우 해당 행의 하위 항목이 펼쳐져 있습니다..

treegird의 <grid>태그의  <cfg>태그 안의 
			AcceptEnters   = "1" Calculated = "1"  CalculateSelected = "1"      DateStrings = "2" Deleting  = "0"
			Dragging       = "1" Editing    = "1"  EnterMode         = "4"      Filtering   = "1" IdChars   = ""
			InEditMode     = "1" MaxPages   = "20" NoFormatEscape    = "1"      NoHScroll   = "0" NoVScroll = "0"
			NumberId       = "1" SafeCSS    = '1'  Selecting 		 = "0"
			SelectingCells = "0" SortIcons  = "0"  Style             = "Standard" SuppressCfg = "1" 
			Paging		   = "2" AllPages   = "0"  PageLength		 = "30"		MaxPages    = "20"
			CopySelected   = "0" CopyFocused= "1"  CopyCols			 = "0"	
			ExportFormat="xlsx"    ExportCols="0" ExportType="TextType"	
			ClearSelected="2"    Alternate="2" 
			MainCol="MINO_GIT"
	/> 
treegrid의 <grid> 태그 안의 <cfg> 태그는 해당 그리드의 전반적인 설정을 정의하는 역할을 합니다. 이 중, <cfg> 태그의 속성은 다음과 같습니다.

AcceptEnters: 엔터 키 입력을 허용할지 여부를 지정합니다. 1은 허용한다는 의미이며, 0은 허용하지 않는다는 의미입니다.
Calculated: 계산된 값을 표시할지 여부를 지정합니다. 1은 표시한다는 의미이며, 0은 표시하지 않는다는 의미입니다.
CalculateSelected: 선택한 셀의 합계 등을 계산하여 표시할지 여부를 지정합니다. 1은 표시한다는 의미이며, 0은 표시하지 않는다는 의미입니다.
DateStrings: 날짜 데이터의 형식을 지정합니다. 1은 "YYYY-MM-DD" 형식이며, 2는 "MM/DD/YYYY" 형식입니다.
Deleting: 셀이나 행을 삭제할 수 있는지 여부를 지정합니다. 1은 삭제 가능하다는 의미이며, 0은 삭제 불가능하다는 의미입니다.
Dragging: 드래그하여 행의 순서를 변경할 수 있는지 여부를 지정합니다. 1은 가능하다는 의미이며, 0은 불가능하다는 의미입니다.
Editing: 셀을 편집할 수 있는지 여부를 지정합니다. 1은 가능하다는 의미이며, 0은 불가능하다는 의미입니다.
EnterMode: 편집 모드 진입 시 기본 동작을 지정합니다. 1은 셀 전체를 선택하며, 4는 마지막으로 클릭한 위치에 캐럿을 놓습니다.
Filtering: 필터링 기능을 사용할지 여부를 지정합니다. 1은 사용한다는 의미이며, 0은 사용하지 않는다는 의미입니다.
IdChars: 행의 ID로 사용 가능한 문자를 지정합니다.
InEditMode: 편집 모드에서 다른 셀로 이동할 때 새로운 행을 만들어 편집할 수 있는지 여부를 지정합니다. 1은 가능하다는 의미이며, 0은 불가능하다는 의미입니다.
MaxPages: 페이지 수 제한을 지정합니다. 페이지 수가 이 값보다 크면 더 이상 페이지를 나누지 않습니다.
NoFormatEscape: HTML 형식 문자를 이스케이프(Escape)하지 않을지 여부를 지정합니다.
NoHScroll: 가로 스크롤바를 표시할지 여부를 지정합니다. 1은 표시하지 않는다는 의미이며, 0
MainCol: "MINO_GIT"를 기준으로 하위행이 있을 경우 밑으로 열고 닫을 수 있는 화살표 박스를 생성해준다. 이때 화살표 박스는  <I>태그와 CanExpand='1' Expanded='1'>로 상위, 하위를 구분할 수있습니다.
