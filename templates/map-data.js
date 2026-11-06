// 구조 지도의 데이터 파일 (예시)
// Skill Studio가 프로젝트마다 이 파일을 새로 만듭니다.
// 직접 고칠 때는 group, path, title, role, tasks, links만 바꾸면 됩니다.
// 수정 반영 후에는 versions에 기록을 추가하고, 노드의 applied 값을 새 버전으로 바꿉니다.

window.MAP_DATA = {
  project: 'example-project',
  version: 'v0',
  groups: ['문서', '화면', '코드', '기록'],
  versions: [
    {
      id: 'v0',
      date: '2026-01-01',
      summary: '첫 생성: 예시 구조 지도',
      changes: []
    }
  ],
  nodes: [
    {
      id: 'index-doc', group: '문서', path: 'docs/index.md', title: '문서 허브',
      role: '문서 전체로 가는 시작점입니다.',
      tasks: ['하위 문서 링크 관리'],
      links: ['feature-doc'],
      applied: 'v0'
    },
    {
      id: 'feature-doc', group: '문서', path: 'docs/feature.md', title: '기능 명세',
      role: '기능이 무엇을 해야 하는지 정리합니다.',
      tasks: ['입력과 출력 정의', '예외 상황 정리'],
      links: ['index-doc', 'main-screen'],
      applied: 'v0'
    },
    {
      id: 'main-screen', group: '화면', path: 'src/index.html', title: '메인 화면',
      role: '사용자가 처음 보는 화면입니다.',
      tasks: ['화면 배치', '버튼 동작'],
      links: ['feature-doc', 'main-logic'],
      applied: 'v0'
    },
    {
      id: 'main-logic', group: '코드', path: 'src/main.js', title: '메인 로직',
      role: '화면의 동작을 처리합니다.',
      tasks: ['입력 처리', '결과 계산'],
      links: ['main-screen'],
      applied: 'v0'
    },
    {
      id: 'prompt-note', group: '기록', path: 'PROMPT.md', title: '수정 프롬프트 원칙',
      role: '수정 요청 형식과 원칙을 정리합니다.',
      tasks: ['수정 요청 형식', '수정 원칙'],
      links: ['index-doc'],
      applied: 'v0'
    }
  ]
};
