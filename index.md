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
