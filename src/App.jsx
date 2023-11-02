import { useState } from "react";

const allStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "20px",
  gap: "30px",
}

const inputStyle = {
  backgroundColor: "transparent",
  // outline: "none",
  borderTop: "0 none",
  borderRight: "0 none",
  borderBottom: "3px solid #473131",
  borderLeft: "0 none",
	outline: "0 none",
  height: "25px",
  width: "270px",
  textAlign: "center",
  fontSize: "20px",
  padding: "5px",
}

const btnBoxStyle = {
  display: "flex",
  gap: "7px",
}

const btnStyle = {
  backgroundColor: "rgb(255, 174, 0, 0.6)",
  borderRadius: "8px",
  border: "2px solid black",
  padding: "5px",
  fontSize: "14px",
}

const boxStyle1 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid black",
  flexDirection: "column",
  height: "90px",
  width: "900px"
}

const boxStyle2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid rgb(236, 31, 109)",
  flexDirection: "column",
  height: "90px",
  width: "900px"
}

const innerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "0px"
}



function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value
  const newArr = [...array];



  const handleForEach = () => {
    let temp = "";
    array.forEach((item, index) => {
      temp += `${index} : ${item} / `
    });
    setResult(temp.slice(0, -3));
  }

  const handleFilter = () => {
    const filtered = array.filter(item => item.includes(query))
    setResult(filtered.join(", "));
  }

  const handleMap = () => {
    const mapped = array.map(item => item.toUpperCase())
    setResult(mapped.join(", "));
  }

  const handleReduce = () => {
    const reduced = array.reduce((acc, cur) => `${acc} + ${cur}`)
    setResult(reduced);
  }

  const handlePush = () => {
    if (query.length <= 0) {
      alert("추가하려는 값을 입력해주세요.");
    }
    newArr.push(query);
    setArray(newArr);
    setResult(newArr.join(", "));
  }

  const handlePop = () => {
    // 초기에 작성한 코드
    // array.pop()
    // const poped = array.join(", ");
    // setResult(poped);

    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  }

  // + Slices의 경우 2~4번째 값을 반환하도록 구현
  const handleSlice = () => {
    const sliced = newArr.slice(1, 4);
    setResult(sliced.join(", "))
  }

  // + Splices의 경우 1~2번째은 그대로 출력하고, 3~4번째에 kiwi, lime 넣기
  // + 원본배열(array)은 변경하지 않고 result만 변경하셔도 됩니다.
  // Slice와는 다르게 여기서는 변수에 선언하지 않는 이유?
  // slice : 해당되는 값을 추출
  // splice : 해당되는 값을 변경 후 배열을 추출
  // 그리고 반영되어 있는 array 값을 가져와서 구현하기 위해서 newArr 대신 array 사용
  const handleSplice = () => {
    array.splice(2, 2, "kiwi", "lime");
    setResult(array.join(", "));
  }

  const handleIndexOf = () => {
    const IndexOf = newArr.indexOf(query);
    return (IndexOf === -1) ? alert("확인하려는 값을 정확히 입력해주세요.") : setResult(IndexOf);
  }

  const handleIncludes = () => {
    const Includes = newArr.includes(query);
    if (query === "") {
      alert("확인하려는 값을 정확히 입력해주세요.");
    }
    console.log(query)
    return Includes ? setResult("True") : setResult("False");
  }

  const handleFind = () => {
    const found = newArr.find(item => item.includes(query));
    return (found !== undefined) ? setResult(found) : setResult("Not Found");
  }

  // + some의 경우 각 요소가 input의 value(query)를 포함하고 있는 경우 true를 반환하도록 구현합니다.
  const handleSome = () => {
    const some = newArr.some(item => item.includes(query))
    if (query === "") {
      alert("확인하려는 값을 입력해주세요.");
    }
    return some ? setResult("True") : setResult("False");
  }

  // + every의 경우 각 요소가 모두 2글자 이상의 길이를 가진 경우 true를 반환하도록 구현합니다.
  const handleEvery = () => {
    const every = newArr.every(item => item.length >= 2);
    return every ? setResult("True") : setResult("False");
  }

  const handleSort = () => {
    const sorted = array.sort();
    setResult(sorted.join(", "))
  }
  
  const handleJoin = () => {
    return (query === "") ? alert("단어 사이에 넣을 값을 입력해 주세요.") : setResult(newArr.join(query));
  }



  return (
    <div style={allStyle}>
      <h1>Standard반 배열 API</h1>
      <input  type="text" value={query} placeholder="값을 입력해 주세요." style={inputStyle} onChange={function (e) {
        setQuery(e.target.value);
      }} />
      <div style={btnBoxStyle}>
        <button style={btnStyle} onClick={handleForEach}>ForEach</button>
        <button style={btnStyle} onClick={handleFilter}>Filter</button>
        <button style={btnStyle} onClick={handleMap}>Map</button>
        <button style={btnStyle} onClick={handleReduce}>Reduce</button>
        <button style={btnStyle} onClick={handlePush}>Push</button>
        <button style={btnStyle} onClick={handlePop}>Pop</button>
        <button style={btnStyle} onClick={handleSlice}>Slice</button>
        <button style={btnStyle} onClick={handleSplice}>Splice</button>
        <button style={btnStyle} onClick={handleIndexOf}>IndexOf</button>
        <button style={btnStyle} onClick={handleIncludes}>Includes</button>
        <button style={btnStyle} onClick={handleFind}>Find</button>
        <button style={btnStyle} onClick={handleSome}>Some</button>
        <button style={btnStyle} onClick={handleEvery}>Every</button>
        <button style={btnStyle} onClick={handleSort}>Sort</button>
        <button style={btnStyle} onClick={handleJoin}>Join</button>
      </div>
      <div style={boxStyle1}>
        <h3 style={innerStyle}>원본 배열</h3>
        <p style={innerStyle}>{array.join(", ")}</p>
      </div>
      <div style={boxStyle2}>
        <h3 style={innerStyle}>▼ 결과 ▼</h3>
        <p style={innerStyle}>{result}</p>
      </div>
    </div>
  );
}

export default App;
