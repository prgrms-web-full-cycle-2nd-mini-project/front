# Trip Plan

### 배포 링크
[Trip Plan](https://prgrms-web-full-cycle-2nd-mini-project.github.io/front)

## 개발 목적
이 프로젝트는 데브코스에서 배운 MERN 스택을 활용하여 동료들과 협업하는 방식을 경험하고자 하는 목적으로 제작되었습니다. 여행 일정을 정리하고 관리할 수 있는 서비스를 제공하며, 실제 협업 환경에서의 개발 과정을 체험하기 위해 다양한 기술 스택과 도구들을 사용하였습니다.

## 기술 스택
- **TypeScript**: 정적 타입을 통해 코드의 안전성을 높이고, 개발 시 오류를 사전에 방지합니다.
- **Axios**: HTTP 클라이언트로, API 요청을 보다 간편하게 관리하고 처리합니다.
- **Tanstack/React-Query**: 서버 상태 관리를 효율적으로 처리하여, 데이터 페칭 및 캐싱을 간편하게 구현합니다.
- **Zustand**: 전역 상태 관리를 위한 경량의 상태 관리 라이브러리로, React의 상태 관리를 간단하고 직관적으로 만듭니다.
- **Styled-Components**: CSS-in-JS 라이브러리로, 컴포넌트 단위로 스타일을 정의하여 스타일의 일관성과 유지보수성을 높입니다.
- **React-Hook-Form**: 폼 상태 관리를 간편하게 처리하며, 폼 검증과 데이터 관리를 쉽게 구현합니다.
- 그 외에도 다양한 라이브러리와 도구들을 활용하여 개발하였습니다.

## 주요 코드 설명

### 재사용 가능한 HTTP 요청 API 구축

```typescript
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;
```

공통적으로 사용되는 옵션들을 중앙에서 관리하기 위해 Axios 인스턴스를 생성하여 재사용 가능한 HTTP 요청 API를 구축하였습니다. 이를 통해 코드 중복을 줄이고 유지보수성을 높였습니다.

### 코드 일관성 확보

#### `.prettierrc`
```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true
}
```

#### `package.json`
```json
"lint-staged": {
  "src/**/*.{ts,tsx,js,jsx,json,md}": [
    "prettier --write",
    "git add"
  ]
}
```

코드 스타일의 일관성을 확보하기 위해 Prettier와 Husky를 사용하여 코드 포맷팅을 자동화하였습니다. 이는 코드 품질을 유지하고 팀원 간의 협업을 원활하게 합니다.

### 최적화

#### 코드 분할 및 사전 로딩

```typescript
import React, { lazy, useEffect } from 'react';

const TripDetailModal = lazy(() => import('../../TripDetailModal'));

useEffect(() => {
  import('../../TripDetailModal');
}, []);
```

SPA 특성상 초기 렌더링이 지연될 수 있으므로, 코드 분할과 사전 로딩을 통해 사용자 경험(UX)을 개선하였습니다. 주요 컴포넌트를 미리 로드하여 페이지 전환 시 로딩 시간을 단축하였습니다.

#### 디바운싱

```typescript
import { useState, useEffect } from 'react';

export function useDebounce({ value, delay }: Props) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

사용자의 입력값이 변할 때마다 API 요청이 발생하지 않도록 디바운싱을 적용하여 성능을 최적화하였습니다. 이는 불필요한 네트워크 요청을 줄이고, 서버 부하를 감소시키는 데 도움을 줍니다.

## 결론

이 프로젝트는 MERN 스택을 기반으로 다양한 최신 웹 개발 기술을 활용하여 구축되었습니다. 팀원들과의 협업을 통해 실제 개발 환경을 경험하고, 코드의 일관성과 성능 최적화를 위해 다양한 도구와 방법을 적용하였습니다.
