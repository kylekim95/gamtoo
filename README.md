# gamtoo
![111 (1)](https://github.com/user-attachments/assets/8ba9a856-0e46-4cc1-a28a-386d536320e7)
<br><br><br>


## :데스크톱_컴퓨터: 프로젝트 개요
- 기간 : 2025.01.06 ~ 2025.02.07
- 이 프로젝트는 TypeScript와 React, 국가유산청 OPEN API와 카카오지도 API를 사용하여 개발되었습니다.
- 감투: 감춰진 역사 투어는 국가유산 정보를 쉽고 직관적으로 탐색할 수 있도록 다양한 기능을 제공합니다. 국가유산 카테고리별 검색을 통해 원하는 정보를 빠르게 찾을 수 있으며, 상세 정보 페이지에서 해당 국가유산의 역사적 의미와 특징을 확인할 수 있습니다. 또한, 퀴즈 기능을 통해 사용자들이 재미있게 학습할 수 있도록 유도하였고, 문화행사 일정 조회 기능을 추가하여 국가유산과 관련된 행사 정보를 한눈에 확인할 수 있습니다. 또한 길찾기 기능을 통해 직접 방문을 계획할 수 있습니다.
<br><br><br>

## :다트: 프로젝트 목표
- TypeScript, React, Next.js를 활용하여 효율적이고 확장 가능한 SPA(Single Page Application) 설계 및 구현
- Next.js의 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 활용하여 성능 최적화
- 비동기 통신(Axios, Fetch API)를 활용하여 외부 API(XML → JSON 변환) 데이터를 효율적으로 가져오고 상태 관리
- React Router 대신 Next.js의 내장 라우팅 시스템을 활용하여 페이지 전환 및 상태 관리 최적화
- 사용자 경험(UX)을 고려한 직관적인 UI/UX 설계 및 구현
- Git, Notion, Zoom 등의 협업 툴을 활용하여 원활한 팀 협업 진행
<br><br><br>

## 👥 팀원 소개 및 역할
<center>
<table>
  <tbody>
    <tr>
      <td align="center"><img src="https://github.com/user-attachments/assets/afbe467c-8dc7-4bbe-bb3b-6e4eab5f5536" width="100px;" height="130px"/></td>
    </tr>
    <center>
    <tr>
      <td><a href="https://github.com/kimyougmin">김영민</a></td>
      <td><a href="https://github.com/chaeee1">배채연</a></td>
      <td><a href="https://github.com/erase0250">김지우</a></td>
      <td><a href="https://github.com/Castillou">전성우</a></td>
      <td><a href="https://github.com/hhj4569">한형주</a></td>
    </tr>
      <tr>
      <td><a>· 팀 리드 및 협업 관리<br>· 행사 페이지 제작 및 전역 상태 관리 로직</a></td>
      <td><a>· 국가유산 이름 및 카테고리별 검색 기능<br>. 국가유산 상세정보 제공 및 위치 마커</a></td>
      <td><a>· 글 수정 기능<br>· 토스트 모달 구현</a></td>
      <td><a>· 글 삭제 기능</a></td>
      <td><a>· 새로운 글 추가 기능</a></td>
    </tr>
  </tbody>
</table>
</center>
<br><br><br>

## ⚙️ 주요 기능
- 상위 및 하위 문서 추가, 저장, 삭제, 편집 기능
- 모달, 애니메이션 기능
<img src="https://github.com/user-attachments/assets/b667746a-67b8-4247-b9d7-517b223f0491"  />
<br><br><br>

- 검색 기능
<img src="https://github.com/user-attachments/assets/b6f70f95-92af-4484-b788-ee632b6b8fbf" width="1100" />
<br><br><br>

## 🛠️ 기술 스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/Vercel-%23000000?style=for-the-badge&logo=vercel&logoColor=white"/>
 <img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/> ![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
<br><br><br>

## 📁 폴더 구조
```bash
├── src
│   ├── app
│   │   ├── culture
│   │   │   ├── components
│   │   │   │   ├── components.tex
│   │   │   │   ├── ...
│   │   │   ├── detail
│   │   │   │   ├── page.tex
│   │   │   ├── videoPlayer
│   │   │   │   ├── page.tex
│   │   │   ├── page.tex
│   │   ├── festival
│   │   │   ├── page.tex
│   │   ├── login
│   │   │   ├── page.tex
│   │   ├── map
│   │   │   ├── components
│   │   │   │   ├── ...
│   │   │   ├── config
│   │   │   │   ├── ...
│   │   │   ├── page.tex
│   │   ├── qna
│   │   │   ├── page.tex
│   │   ├── quiz
│   │   │   ├── page.tex
│   │   ├── quizRanking
│   │   │   ├── components
│   │   │   │   ├── ...
│   │   │   ├── page.tex
│   │   ├── quizResults
│   │   │   ├── components
│   │   │   │   ├── ...
│   │   │   ├── page.tex
│   │   ├── rankingDetail
│   │   │   ├── components
│   │   │   │   ├── ...
│   │   │   ├── page.tex
│   │   ├── user
│   │   │   ├── page.tex
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── components
│   │   ├── main
│   │   │   ├── buttonGroup.tex
│   │   │   ├── ...
│   │   ├── quiz
│   │   │   ├── svg
│   │   │   │   ├── ArrowRightIcon.tsx
│   │   │   │   ├── ...
│   │   │   ├── CHCategories.te
│   │   │   ├── ...
│   │   ├── CalcCreateTimeToLocalTime.ts
│   │   ├── ...
│   ├── lib
│   │   ├── redux
│   │   │   ├── slice
│   │   │   │   ├── authSlice.ts
│   │   │   │   ├── createSlice.ts
│   │   │   ├── store.ts
│   │   │   ├── provider.tsx
│   ├── types
│   │   ├── AuthStateInterface.ts
│   │   ├── ...
``` 
