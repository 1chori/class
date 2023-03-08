# git 다시 해보기

# 새 저장소(repository) 만들기

- git init

# 파일 전부 스테이징

- git add .

# 커밋 메시지 작성

- git commit -m "작업 내용"

# github 원격저장소 연결

- git remote add origin "저장소 주소"

# git push origin master

# 브런치 영역을 나눠보자

# 브런치는 저장소의 작업 공간

- master는 최종 작업물 다른 브런치를 만들어서 여럿이서 작업을 하거나 혼자 작업할 때
  작업의 내용을 나눠서 작업하고 최종 작업물로 병합한다.

- master(v0.1)로 먼저 작업 후 -> dev -> dev -> ... -> master 병합
  dev는 각자 만들어서 최종 병합하는 것이 좋은편

# 브런치 목록 확인

- git branch : 로컬 저장소의 브런치 목록 확인
- git branch -a : 원격과 로컬 저장소 브런치 목록 확인
- 현재 선택되어 있는 브런치에는 초록색으로 되있다
  br

# 브런치 생성

- git branch "브런치 이름"

# 브런치 이동

- git checkout "브런치 이름" : 선택된 브런치로 이동한다
- git switch "브런치 이름"

# 브런치 제거

- git branch -d "브런치 이름" : 브런치를 지운다

# 각자 다른 브런치의 내용을 병합할 때

- git merge "브런치 이름"
- merge 병합 중 충돌이 난 파일을 보여주고 선택할 수 있게 해준다.
