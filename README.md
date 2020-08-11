# Demo [![Netlify Status](https://api.netlify.com/api/v1/badges/976f5f10-91e9-4d41-8a0f-08a9d20ac834/deploy-status)](https://app.netlify.com/sites/1to50-by-sangboom/deploys)
- ### CRA에서는 nextNumbers 배열에서 자꾸 shift()가 두번씩 호출되는 버그가 있었다. 진짜 왜그러는지 모르겠어서 그냥 배열원소들을 반복시켜서 두배로 늘렸다. 그랬더니 내가 원하던 대로 나왔다. 그런데 netlify에 배포했는데 이번엔 정상적으로 shift()가 한번 호출이 된다. 그래서 반복시켰던 배열원소들이 그대로 나타났다. 진짜 개열받음 
![image](https://user-images.githubusercontent.com/43921054/89748211-085b3e80-dafd-11ea-81e8-975d731ea050.png)

### :orange_book: Todo
- 타이머기능
- 성능개선
