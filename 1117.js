const fixedOutPut = 
{
 "출퇴근비용" : {
   "카카오톡자전거" : "1500원",
   "택시" : "3500원",
  },
  "커피" : {
    "엔시나" : "4500원",
    "카누" : "200원",
  },
  "고양이간식" : {
    "닭고기" : "400원",
    "락토프리우유" : "800원",
  }
}
const fixedList =
{
 "출퇴근비용" : {
   "카카오톡자전거" : "19회",
   "택시" : "3회",
  },
  "커피" : {
    "엔시나" : "6잔",
    "카누" : "15잔",
  },
  "고양이간식" : {
    "닭고기" : "30개",
    "락토프리우유" : "2개",
  }
}

// console.log(fixedOutPut);
// console.log(fixedOutPut['출퇴근비용']);
// console.log(fixedOutPut['출퇴근비용']['카카오톡자전거']);
// console.log(typeof fixedOutPut['출퇴근비용']['카카오톡자전거']);
// const inta = parseInt(fixedOutPut['출퇴근비용']['카카오톡자전거']);
// console.log(inta);
// console.log(typeof inta);

// for (let key in fixedOutPut) {
//   console.log(key);
//   console.log(fixedOutPut[key]);
// }


// console.log(fixedList);




//도전과제 : 데이터의 특성을 파악하여 값을 도출하기

// 함수 이름 : commingsoon()
// 전개 1. 평소에 포켓몬스터를 좋아하는 공미남은 11월 18일 포켓몬스터 스칼렛 바이올렛이 출시된다는 소식을 알게 되었습니다.
// 전개 2. 이번에 정식발매되는 포켓몬스터 게임 가격은 64,800원입니다.
// 전개 3. 하지만 공미남의 고정지출예산을 확인해보니 포켓몬스터 게임을 사버리면 고정지출에서 얼만큼을 절약해야 하는 위기에 놓였습니다.
// 전개 4. 공미남의 고정지출예산은 총 100,000원(십만원)입니다.
//   전개 5. 고정지출 항목에서 어떤 것을 몇번 절약해야 게임을 구매할 수 있을까요 ?

//   고정지출 중요도 :
//   1. 출퇴근 비용 : 30분 더 일찍 일어나면 지출을 안할 수 있음
//   2. 커피 : 강의할 때 말이 안나오므로, 어떤 형태로든 꼭 마셔야함. 원장님 카드를 써서 훔쳐먹으면 지출을 안할 수 있음
//   3. 고양이간식 : 가족의 건강을 챙기기 위함이므로 지출을 줄일 수 없음
  
//   문제
//   조건 1: 고정 지출 항목, 내역 정보의 자료구조 및 데이터타입, 값은 외부에서 전달받은 "형식"이므로 변형 할 수 없습니다.
//   조건 2: 중요도 부분에서 3번 항목인 "고양이간식"은 완결한 고정지출 이므로 절약할 수 없습니다.
//   조건 3: 함수의 인자(입력) 데이터타입은 객체입니다.
//   조건 3: 리턴(출력)은 하나의 문장, 문자열(string)로 항목별 절약횟수가 도출되어야 합니다.
//   조건 4: 고정지출의 종류와 갯수, 총 예산과 목표가격(게임)이 변할수도 있습니다.
//   조건 6: 일찍 일어나면 30분당 1만큼 피로도가 증가합니다. 원장님 카드를 1회 훔쳐 사용하면 미움지수가 1만큼 증가합니다.
  
//   목표 : 공미남이 최대한 행복하게 절약하며 게임을 사는 방법은 어떤 방식이 되어야 좋을까요?
//   예시(자유롭게 작성) : "oo님은 A를 a회 일찍 일어나면 Z만큼 피곤해지고, B를 b회 훔쳐먹으면 Y만큼 미움받지만 C게임을 살수있게 됩니다!"

const bossHate = Math.floor(Math.random() * 100) + 1;
const fatigue = Math.floor(Math.random() * 100) + 1;
//console.log(bossHate);

function commingsoon(budget, targetExpense, output, list, boss, fatigue) {
  const newOutPut = new Map();
  for (let key in output) {
    const obj = output[key]
    for (let k in obj) {
      //console.log(obj[k]);
      //console.log(parseInt(obj[k]));
      newOutPut.set(k, parseInt(obj[k]));
    }
  }
  //console.log(newOutPut);
  //console.log(typeof newOutPut);

  const newList = new Map();
  for (let key in list) {
    const obj = list[key]
    for (let k in obj) {
      //console.log(obj[k]);
      //console.log(parseInt(obj[k]));
      newList.set(k, parseInt(obj[k]));
    }
  }
  //console.log(newList);

  const sumA = [];
  const sumB = [];  

  while (true) {
    for (let [key, value] of newList) {
      if (key === '카카오톡자전거' && value > 0) {
        value - 1;
        fatigue - 1;
      } else if (key === '택시' && value > 0) {
        value - 2;
        fatigue - 2;
      } else if (key === '엔시나' && value > 0) {
        value - 2;
        boss - 2;
      } else if (key === '카누' && value > 0) {
        value - 1;
        boss - 1;
      }
    }
    if (boss === 0 && fixedList === 0) {
      break;
    }
  }

  for (let [key, value] of newOutPut) {
    // if (key === '카카오톡자전거') {
    //   console.log("무야호");
    // }
    // for (let [k, v] of newList) {
    //   if (k === '카카오톡자전거') {
    //     console.log("무야호");
    //   }
    //   total.push(value * v)
    // }
    sumA.push(value);
  }
  for (let [key, value] of newList) {
    sumB.push(value);
  }

  const total = [];
  for (let i = 0; i < sumA.length; i++) {
    total[i] = sumA[i].sumB[i];
  }
  console.log(total);
  const result = total.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  const minus = budget - result;
  if (minus > targetExpense) {
    console.log("포켓몬 안녕....");
  } else {
    console.log("님 포켓몬 살수있음 취업 ㅂㅂ");
  }
}

commingsoon(100000, 64800, fixedOutPut, fixedList, bossHate, fatigue)
// 리턴값 x = 100,000 - x > 64800