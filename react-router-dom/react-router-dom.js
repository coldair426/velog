// 항상 외부 컴포넌트 등을 쓰려면 import
// 라이브러리에서 BrowserRouter 컴포넌트 가저오고,
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    // App 컴포넌트 감싸기
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
